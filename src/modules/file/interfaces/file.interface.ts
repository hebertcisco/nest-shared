import type { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export interface FilesInterceptorInterfaceArgs {
  field_name: string;
  acl?: string;
  bucket?: string;
  options?: {
    maxCount?: number;
    localOptions?: MulterOptions | null;
  };
}
