import { RequestContextService } from '../application/context/AppRequestContext';
import { AggregateRoot, PaginatedQueryParams, Paginated } from '../ddd';
import { Mapper } from '../ddd';
import { RepositoryPort } from '../ddd';
import { ConflictException } from '../exceptions';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { None, Option, Some } from 'oxide.ts';
import {
  DatabasePool,
  DatabaseTransactionConnection,
  IdentifierSqlToken,
  QueryResult,
  sql,
  SqlToken,
  UniqueIntegrityConstraintViolationError,
} from 'slonik';
import { ZodObject } from 'zod';
import { LoggerPort } from '../ports/logger.port';
import { ObjectLiteral } from '../types';

export abstract class SqlRepositoryBase<Aggregate extends AggregateRoot<any>, DbModel extends ObjectLiteral>
  implements RepositoryPort<Aggregate>
{
  protected abstract tableName: string;

  protected abstract schema: ZodObject<any>;

  protected constructor(
    private readonly _pool: DatabasePool,
    protected readonly mapper: Mapper<Aggregate, DbModel>,
    protected readonly eventEmitter: EventEmitter2,
    protected readonly logger: LoggerPort,
  ) {}

  async findOneById(id: string): Promise<Option<Aggregate>> {
    const query = sql.type(this.schema)`SELECT * FROM ${sql.identifier([this.tableName])} WHERE id = ${id}`;

    const result = await this.pool.query(query);
    return result.rows[0] ? Some(this.mapper.toDomain(result.rows[0])) : None;
  }

  async findAll(): Promise<Aggregate[]> {
    const query = sql.type(this.schema)`SELECT * FROM ${sql.identifier([this.tableName])}`;

    const result = await this.pool.query(query);

    return result.rows.map(this.mapper.toDomain);
  }

  async findAllPaginated(params: PaginatedQueryParams): Promise<Paginated<Aggregate>> {
    const query = sql.type(this.schema)`
    SELECT * FROM ${sql.identifier([this.tableName])}
    LIMIT ${params.limit}
    OFFSET ${params.offset}
    `;

    const result = await this.pool.query(query);

    const entities = result.rows.map(this.mapper.toDomain);
    return new Paginated({
      data: entities,
      count: result.rowCount,
      limit: params.limit,
      page: params.page,
    });
  }

  async delete(entity: Aggregate): Promise<boolean> {
    entity.validate();
    const query = sql.unsafe`DELETE FROM ${sql.identifier([this.tableName])} WHERE id = ${entity.id}`;

    this.logger.debug(
      `[${RequestContextService.getRequestId()}] deleting entities ${entity.id} from ${this.tableName}`,
    );

    const result = await this.pool.query(query);

    await entity.publishEvents(this.logger, this.eventEmitter);

    return result.rowCount > 0;
  }

  async insert(entity: Aggregate | Aggregate[]): Promise<void> {
    const entities = Array.isArray(entity) ? entity : [entity];

    const records = entities.map(this.mapper.toPersistence);

    const query = this.generateInsertQuery(records);

    try {
      await this.writeQuery(query, entities);
    } catch (error) {
      if (error instanceof UniqueIntegrityConstraintViolationError) {
        this.logger.debug(`[${RequestContextService.getRequestId()}] ${(error.originalError as any).detail}`);
        throw new ConflictException('Record already exists', error);
      }
      throw error;
    }
  }

  protected async writeQuery<T>(sql: any, entity: Aggregate | Aggregate[]): Promise<QueryResult<T>> {
    const entities = Array.isArray(entity) ? entity : [entity];
    entities.forEach((entity) => entity.validate());
    const entityIds = entities.map((e) => e.id);

    this.logger.debug(
      `[${RequestContextService.getRequestId()}] writing ${entities.length} entities to "${
        this.tableName
      }" table: ${entityIds}`,
    );

    const result = await this.pool.query(sql);

    await Promise.all(entities.map((entity) => entity.publishEvents(this.logger, this.eventEmitter)));
    return result as unknown as QueryResult<T>;
  }

  /**
   * Utility method to generate insert query for any objects.
   * Use carefully and don't accept non-validated objects.
   *
   * Passing object with { name: string, email: string } will generate
   * a query: INSERT INTO "table" (name, email) VALUES ($1, $2)
   */
  protected generateInsertQuery(models: DbModel[]): SqlToken {
    // TODO: generate query from an entire array to insert multiple records at once
    const entries = Object.entries(models[0]);
    const values: any = [];
    const propertyNames: IdentifierSqlToken[] = [];

    entries.forEach((entry) => {
      if (entry[0] && entry[1] !== undefined) {
        propertyNames.push(sql.identifier([entry[0]]));
        if (entry[1] instanceof Date) {
          values.push(sql.unsafe`to_timestamp(${entry[1].getTime() / 1000})`);
        } else {
          values.push(entry[1]);
        }
      }
    });

    const query = sql.unsafe`INSERT INTO ${sql.identifier([this.tableName])} (${sql.join(
      propertyNames,
      sql.unsafe`, `,
    )}) VALUES (${sql.join(values, sql.unsafe`, `)})`;

    const parsedQuery = query;
    return parsedQuery;
  }

  /**
   * start a global transaction to save
   * results of all event handlers in one operation
   */
  public async transaction<T>(handler: () => Promise<T>): Promise<T> {
    return this.pool.transaction(async (connection) => {
      this.logger.debug(`[${RequestContextService.getRequestId()}] transaction started`);
      if (!RequestContextService.getTransactionConnection()) {
        RequestContextService.setTransactionConnection(connection);
      }

      try {
        const result = await handler();
        this.logger.debug(`[${RequestContextService.getRequestId()}] transaction committed`);
        return result;
      } catch (e) {
        this.logger.debug(`[${RequestContextService.getRequestId()}] transaction aborted`);
        throw e;
      } finally {
        RequestContextService.cleanTransactionConnection();
      }
    });
  }

  /**
   * Get database pool.
   * If global request transaction is started,
   * returns a transaction pool.
   */
  protected get pool(): DatabasePool | DatabaseTransactionConnection {
    return RequestContextService.getContext().transactionConnection ?? this._pool;
  }
}
