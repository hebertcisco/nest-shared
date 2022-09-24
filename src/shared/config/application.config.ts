import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { NODE_PORT } from '../common/constants/global.constants';

@Injectable()
export class ConfigService {
  public constructor(private env: { [k: string]: string | undefined }) {}

  public getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }
    return String(value);
  }

  public getBoolean(key: string): boolean {
    const value = this.getValue(key);
    return value === 'true';
  }

  public ensureValues(keys: string[]): this {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort(): number {
    const value = this.getValue('PORT', false);
    return parseInt(value, 10) || NODE_PORT;
  }

  public isProduction(): boolean {
    const mode = this.getValue('NODE_ENV', true);
    return mode === 'production';
  }
  public isDevelopment(): boolean {
    const mode = this.getValue('NODE_ENV', true);
    return mode === 'development';
  }
  public isTest(): boolean {
    const mode = this.getValue('NODE_ENV', true);
    return mode === 'testing';
  }
  public getEnvironment(): string {
    const value = this.getValue('NODE_ENV', true);
    return String(value);
  }
}
export const configService: ConfigService = new ConfigService(process.env);
export const { getValue, getBoolean, ensureValues, getPort, isProduction, isDevelopment, isTest, getEnvironment } =
  configService;
export default ConfigService;
