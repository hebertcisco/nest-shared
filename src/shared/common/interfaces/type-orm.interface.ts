export interface TypeOrmModuleOptionsExtension {
  type: string | any;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize?: boolean;
  logging?: boolean;
  entities?: string[];
  migrations: string[];
  migrationsTableName?: string;
  subscribers?: string[];
  seeds?: string[];
  factories?: string[];
  cli: object;
  ssl?: boolean;
  sslKey?: string;
  schema?: string;
  migrationsRun?: boolean;
}
export default TypeOrmModuleOptionsExtension;
