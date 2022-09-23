import processMock from '../../../shared/mocks/javascript/process.mock';
import ConfigService from '../../../shared/config/application.config';

describe('ConfigService', () => {
  let configService: ConfigService;
  let getValue: string;
  let getBoolean: boolean;
  let getPort: number;
  let isProduction: boolean;

  beforeAll(() => {
    configService = new ConfigService(processMock.env);
  });
  beforeEach(() => {
    getValue = configService.getValue('NODE_ENV');
    getBoolean = configService.getBoolean('NODE_ENV');
    getPort = configService.getPort();
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
  describe('getPort', () => {
    it('should be PORT value exists', () => {
      expect(getPort).toBeDefined();
    });
    it('should type be a number', () => {
      expect(typeof getPort === 'number').toBeTruthy();
    });
  });
  describe('isProduction', () => {
    it('should be isProduction value exists', () => {
      expect(isProduction).toBeDefined();
    });
    it('should type be a boolean', () => {
      expect(typeof isProduction === 'boolean').toBeTruthy();
    });
    it('should are in testing stage', () => {
      expect(isProduction).toBeFalsy();
      expect(isProduction).toBe(false);
      expect(isProduction).toEqual(false);
    });
  });
});
