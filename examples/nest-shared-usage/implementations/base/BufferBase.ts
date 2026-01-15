import { BufferBase } from 'nest-shared';
import { Buffer } from 'buffer';
import { EncodeDataType, DecodeStrType } from 'nest-shared/lib/shared/contract/types/buffer.type';

console.log(BufferBase.name); // BufferBase

class BufferBaseImpl implements BufferBase {
  encode(data: EncodeDataType): string {
    if (typeof data === 'string') {
      return Buffer.from(data, 'utf-8').toString('base64');
    }
    return Buffer.from(data as Uint8Array | readonly number[]).toString('base64');
  }

  decode(str: DecodeStrType, encoding?: BufferEncoding): string {
    return Buffer.from(str.toString(), 'base64').toString(encoding || 'utf-8');
  }
}

const bufferBaseImpl = new BufferBaseImpl();

const content = 'Hello World!';

const encoded = bufferBaseImpl.encode(content);
const decoded = bufferBaseImpl.decode(encoded);

console.log('encoded', encoded); // SGVsbG8gV29ybGQh
console.log('decoded', decoded); // Hello World!
