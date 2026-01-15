
import { generateAPIKey } from '../generateAPIKey';

describe('generateAPIKey', () => {
  it('should generate an API key with default options', () => {
    const apiKey = generateAPIKey();
    expect(apiKey).toBeDefined();
    expect(typeof apiKey).toBe('string');
    expect(apiKey.startsWith('apk_')).toBe(true);
  });

  it('should generate an API key with a custom prefix', () => {
    const prefix = 'my-prefix';
    const apiKey = generateAPIKey({ prefix });
    expect(apiKey.startsWith(`${prefix}_`)).toBe(true);
  });

  it('should generate an API key with a custom size', () => {
    const size = 64;
    const apiKey = generateAPIKey({ size });
    const key = apiKey.split('_')[1];
    expect(key.length).toBe(size);
  });

  it('should generate an API key with a custom string', () => {
    const str = 'my-custom-string';
    const apiKey = generateAPIKey({ str });
    expect(apiKey).toBeDefined();
  });

  it('should generate an API key with a custom digest', () => {
    const digest = 'base64';
    const apiKey = generateAPIKey({ digest });
    expect(apiKey).toBeDefined();
  });

  it('should generate an API key with a custom algorithm', () => {
    const algorithm = 'sha512';
    const apiKey = generateAPIKey({ algorithm });
    expect(apiKey).toBeDefined();
  });

  it('should handle all custom arguments together', () => {
    const args = {
      str: 'my-app',
      prefix: 'app',
      size: 48,
      digest: 'base64url',
      algorithm: 'sha512',
    };
    const apiKey = generateAPIKey(args);
    expect(apiKey.startsWith('app_')).toBe(true);
    const key = apiKey.split('_')[1];
    expect(key.length).toBe(48);
  });

  it('should handle different digest types', () => {
    const digests = ['hex', 'base64', 'base64url', 'binary'];
    digests.forEach(digest => {
      const apiKey = generateAPIKey({ digest });
      expect(apiKey).toBeDefined();
    });
  });
});
