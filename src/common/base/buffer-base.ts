import type { EncodeDataType } from '../../shared/types/buffer.type';
import type { DecodeStrType } from '../../shared/types/buffer.type';
import type { DecodeEncodingType } from '../../shared/types/buffer.type';

export abstract class BufferBase {
  public abstract encode(data: EncodeDataType): string;
  public abstract decode(str: DecodeStrType, encoding?: DecodeEncodingType): string;
}
