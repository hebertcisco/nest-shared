import { Injectable } from '@nestjs/common';
import { UPLOAD_PATH_URL } from '../common/constants/global.constants';
import { randomUUID } from '../helpers/base64Gen';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FileService {
  constructor(private configService: ConfigService) {}

  public genFileName = (
    req: Request,
    { originalname }: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void,
  ) => {
    const [, extension] = originalname.split('.');

    callback(null, `${randomUUID()}.${extension}`);
  };
  public fileURL(files: Array<Express.Multer.File>): string {
    const baseURL = this.configService.get<string>('APP_BASE_URL');
    return `${baseURL}/${UPLOAD_PATH_URL}/${files[0].filename}`;
  }
}
