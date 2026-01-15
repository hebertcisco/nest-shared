import { ConfigService } from '../';
import processMock from '../../shared/testing/mocks/javascript/process.mock';

describe('ConfigService', () => {
  let configService: ConfigService;
  let getValue: string;
  let getBoolean: boolean;
  let isProduction: boolean;

  beforeAll(() => {
    configService = new ConfigService(processMock.env);
  });
  beforeEach(() => {
    getValue = configService.getValue('NODE_ENV');
    getBoolean = configService.getBoolean('NODE_ENV');
    isProduction = configService.isProduction();
  });
  describe('getValue', () => {
    it('should return the NODE_ENV value', () => {
      expect(getValue).toEqual('testing');
      expect(getValue).toBe('testing');
    });
    it('should type be a string', () => {
      expect(typeof getValue === 'string').toBeTruthy();
    });
    it("should the type don't be a number", () => {
      expect(typeof getValue === 'number').toBeFalsy();
    });
  });
  describe('getBoolean', () => {
    it('should be NODE_ENV value exists', () => {
      expect(getBoolean).toBeDefined();
    });
    it('should type be a boolean', () => {
      expect(typeof getBoolean === 'boolean').toBeTruthy();
    });
  });
  describe('isProduction', () => {
    it('should be isProduction value exists', () => {
      expect(isProduction).toBeDefined();
    });
    it('should type be a boolean', () => {
      expect(typeof isProduction === 'boolean').toBeTruthy();
    });
    it('should return the default port when PORT is not set', () => {
      const customConfig = new ConfigService({ NODE_ENV: 'testing' });
      const port = customConfig.getPort();
      expect(port).toBe(4000);
    });

    it('should return the custom port when PORT is set', () => {
      const customConfig = new ConfigService({ ...processMock.env, PORT: '5000' });
      const port = customConfig.getPort();
      expect(port).toBe(5000);
    });
  });

  describe('isDevelopment', () => {
    it('should return false when NODE_ENV is testing', () => {
      expect(configService.isDevelopment()).toBe(false);
    });

    it('should return true when NODE_ENV is development', () => {
      const customConfig = new ConfigService({ ...processMock.env, NODE_ENV: 'development' });
      expect(customConfig.isDevelopment()).toBe(true);
    });
  });

  describe('isTest', () => {
    it('should return true when NODE_ENV is testing', () => {
      expect(configService.isTest()).toBe(true);
    });

    it('should return false when NODE_ENV is production', () => {
      const customConfig = new ConfigService({ ...processMock.env, NODE_ENV: 'production' });
      expect(customConfig.isTest()).toBe(false);
    });
  });

  describe('ensureValues', () => {
    it('should not throw an error if all keys exist', () => {
      expect(() => configService.ensureValues(['NODE_ENV'])).not.toThrow();
    });

    it('should throw an error if a key is missing', () => {
      expect(() => configService.ensureValues(['MISSING_KEY'])).toThrow('ConfigService error - Missing env.MISSING_KEY');
    });
  });
});
