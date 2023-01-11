import { ApiProperty } from '@nestjs/swagger';
import { IdResponse } from './id.response.dto';

export interface BaseResponseProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ResponseBase extends IdResponse {
  constructor(props: BaseResponseProps) {
    super(props.id);
    this.createdAt = new Date(props.createdAt).toISOString();
    this.updatedAt = new Date(props.updatedAt).toISOString();
  }

  @ApiProperty({ example: '2023-01-10T17:43:15.970Z' })
  readonly createdAt: string;

  @ApiProperty({ example: '2023-01-10T17:43:15.970Z' })
  readonly updatedAt: string;
}
