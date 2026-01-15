import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'node:crypto';
import { URL } from 'node:url';
import { FilesInterceptor } from '@nestjs/platform-express';

import multerS3 from 'multer-s3';
import uniqueSlug from 'unique-slug';

import type { Request } from 'express';
import type { URL as UrlType } from 'url';

import type { FileServiceArgs, FileType } from '../types/file.type';
import type { FilesInterceptorInterfaceArgs } from '../interfaces';

export class FileService {
  private s3: S3Client;
  constructor(private args: FileServiceArgs) {
    this.s3 = new S3Client({
      credentials: {
        accessKeyId: this.args.AWS_ACCESS_KEY_ID,
        secretAccessKey: this.args.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  public genFileName = (
    req: Request,
    { originalname }: FileType,
    callback: (error: Error | null, filename: string) => void,
  ) => {
    void req;
    const [, extension] = originalname.split('.');
    callback(null, `${crypto.randomUUID()}.${extension}`);
  };
  public filesInterceptor(args: FilesInterceptorInterfaceArgs) {
    const bucket = args.bucket;
    const metadata = (req: Request, file: FileType, cb: (arg0: any, arg1: { fieldName: string }) => void) => {
      void req;
      cb(null, { fieldName: file.fieldname });
    };
    const key = (req: Request, file: FileType, cb: (arg0: any, arg1: string) => void) => {
      this.genFileName(req, file, (err, fileName) => {
        void err;
        cb(null, uniqueSlug(fileName));
      });
    };
    const contentType = (req: Request, file: FileType, cb: (arg0: any, arg1: string) => void) => {
      void req;
      cb(null, file.mimetype);
    };

    return FilesInterceptor(args.field_name, Number(args.options?.maxCount), {
      storage: multerS3({
        s3: this.s3,
        bucket: String(bucket),
        acl: args?.acl,
        metadata: metadata,
        key: key,
        contentType: contentType,
      }),
    });
  }
  public getS3FileURL(req: Request | any): UrlType | null {
    const files = req.files as any[];
    if (!files || !files.length) {
      return null;
    }
    return new URL(files[0]?.location);
  }
  public getS3FileKey(req: Request): string | null {
    const fileURL = this.getS3FileURL(req);
    if (!fileURL || !fileURL.pathname) {
      return null;
    }
    const parsedPath = fileURL?.pathname?.replace(/^\/+/, '');
    return String(parsedPath);
  }
  public async getSignedUrl(key: string, expires: number, bucket?: string): Promise<UrlType> {
    const signedURl = await this.handleSignedUrl(String(bucket), key, expires || 60 * 5);
    return signedURl;
  }

  public async handleSignedUrl(bucket: string, key: string, expires: number): Promise<UrlType> {
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });
    const url = await getSignedUrl(this.s3, command, {
      expiresIn: expires,
    });
    return new URL(url);
  }
  public async parseFileURL(avatar: string, bucket: string, expires?: number): Promise<string> {
    const signedUrl = await this.getSignedUrl(avatar, expires || 3600, bucket);
    return String(signedUrl.href);
  }
}
export default FileService;
