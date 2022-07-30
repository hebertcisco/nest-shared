import { FileService } from '../../../shared/services/file.service';

describe('FileService', () => {
  let service: FileService;
  let AWS_ACCESS_KEY_ID: string;
  let AWS_SECRET_ACCESS_KEY: string;

  beforeEach(() => {
    AWS_ACCESS_KEY_ID = 'AWS_ACCESS_KEY_ID';
    AWS_SECRET_ACCESS_KEY = 'AWS_SECRET_ACCESS_KEY';

    service = new FileService({
      AWS_ACCESS_KEY_ID: AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY: AWS_SECRET_ACCESS_KEY,
    });
  });
  it('should service be defined', () => {
    expect(service).toBeDefined();
  });

  it('should filesInterceptor be called', () => {
    const FilesInterceptor = service.filesInterceptor({
      field_name: 'test',
    });
    expect(FilesInterceptor).toBeInstanceOf(Function);
  });
});
