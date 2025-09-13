// Local replacement for the global `WithImplicitCoercion<T>` helper type
// to support environments where it is not available in lib typings.
type ImplicitCoercion<T> =
  | T
  | { valueOf(): T }
  | { [Symbol.toPrimitive](hint: 'string'): T };

export type EncodeDataType = ImplicitCoercion<string | Uint8Array | readonly number[]>;

export type DecodeStrType = ImplicitCoercion<string>;

export type DecodeEncodingType = BufferEncoding | undefined;
