import { FileServiceArgs, FileType } from '../../../shared';

describe('File', () => {
  let fileTypeTest: FileType;
  let fileServiceArgs: FileServiceArgs;
  beforeEach(() => {
    fileTypeTest = Object.create(null);
    fileServiceArgs = Object.create(null);
  });
  test('FileTypeTest', () => {
    expect(fileTypeTest).toBe(fileTypeTest);
  });
  test('FileServiceArgs', () => {
    expect(fileServiceArgs).toBe(fileServiceArgs);
  });
});
