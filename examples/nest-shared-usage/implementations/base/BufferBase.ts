import { BufferBase } from 'nest-shared'
import { Buffer } from 'buffer'
import type { EncodeDataType, DecodeStrType } from 'nest-shared/lib/shared/types/buffer.type'

console.log(BufferBase.name) // BufferBase

class BufferBaseImpl implements BufferBase {
    encode(data: EncodeDataType): string {
        return Buffer.from(data).toString('base64')
    }
    decode(str: DecodeStrType): string {
        return Buffer.from(str, 'utf-8').toString("utf-8")
    }
}

const bufferBaseImpl = new BufferBaseImpl()

const content = "Hello World!"

const encoded = bufferBaseImpl.encode(content)
const decoded = bufferBaseImpl.decode(content)

console.log('encoded', encoded) // SGVsbG8gV29ybGQh
console.log('decoded', decoded) // Hello World!
