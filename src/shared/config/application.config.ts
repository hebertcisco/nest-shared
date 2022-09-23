import { Injectable } from '@nestjs/common';
import 'dotenv/config';

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
    return Number(this.getValue('PORT', true));
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
}
export const configService: ConfigService = new ConfigService(process.env);
export default ConfigService;
