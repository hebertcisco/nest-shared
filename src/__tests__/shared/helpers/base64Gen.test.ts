import { base64Gen } from '../../../';

describe('base64Gen', () => {
  it('should return a base64 string', () => {
    const typeOfBase64Gen = typeof base64Gen;
    expect(typeOfBase64Gen).toBe('string');
  });
});
