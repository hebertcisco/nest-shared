export type TypeBase64Gen = string | Buffer;
export type TypeRandomUUID = () => TypeBase64Gen;
export type TypeValidateUUID = (uuid: string) => boolean;
