import { base64Gen, encode, decode } from '../../../..';

describe('base64Gen', () => {
  it('should return a base64 string', () => {
    const typeOfBase64Gen = typeof base64Gen;
    expect(typeOfBase64Gen).toBe('string');
  });
  it('should transform a string into a base64', () => {
    const base64 = encode('Hello World');
    expect(base64).toBe('SGVsbG8gV29ybGQ=');
  });
  it('should transform a base64 into a string', () => {
    const string = decode('SGVsbG8gV29ybGQ=');
    expect(string).toBe('Hello World');
  });
});
