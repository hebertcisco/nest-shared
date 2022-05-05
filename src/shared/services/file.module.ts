import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FileService } from './file.service';

@Module({
  imports: [ConfigModule],
  providers: [FileService],
})
export class FileModule {}
