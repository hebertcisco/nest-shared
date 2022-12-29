import type { EncodeDataType } from '../types/buffer.type';
import type { DecodeStrType } from '../types/buffer.type';
import type { DecodeEncodingType } from '../types/buffer.type';

export abstract class BufferBase {
  public abstract encode(data: EncodeDataType): string;
  public abstract decode(str: DecodeStrType, encoding?: DecodeEncodingType): string;
}
