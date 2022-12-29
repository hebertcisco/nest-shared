import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { NODE_PORT } from '../shared';
import { NodeEnvType } from '../shared/contract/types/nodeEnv.type';

@Injectable()
export class ConfigService {
  public constructor(private env: { [k: string]: string | undefined }) {}

  public getValue<GetValueType>(key: string, throwOnMissing = true): GetValueType {
    const value = this.env[key];

    const nodeEnv = process.env['NODE_ENV'] as unknown as NodeEnvType;
    const safeEnv: boolean = nodeEnv == 'development' || nodeEnv === 'testing';

    const canBeThrown: boolean = safeEnv && !value && throwOnMissing;
    if (canBeThrown) {
      throw new Error(`ConfigService error - Missing env.${key}`);
    }
    return value as unknown as GetValueType;
  }

  public getBoolean(key: string): boolean {
    const value = this.getValue<string>(key);
    return value === 'true';
  }

  public ensureValues(keys: string[]): this {
    keys.forEach((k) => this.getValue<string>(k, true));
    return this;
  }

  public getPort(): number {
    const value = this.getValue<number>('PORT', false);
    return value || NODE_PORT;
  }

  public isProduction(): boolean {
    const mode = this.getEnvironment();
    return mode === 'production';
  }
  public isDevelopment(): boolean {
    const mode = this.getEnvironment();
    return mode === 'development';
  }
  public isTest(): boolean {
    const mode = this.getEnvironment();
    return mode === 'testing';
  }
  public getEnvironment(): string {
    const value = this.getValue<string>('NODE_ENV', true);
    return String(value);
  }
}
export const configService: ConfigService = new ConfigService(process.env);
export default configService;
