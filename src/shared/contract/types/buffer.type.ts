export type EncodeDataType = WithImplicitCoercion<string | Uint8Array | readonly number[]>;

export type DecodeStrType = WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: 'string'): string };

export type DecodeEncodingType = BufferEncoding | undefined;
