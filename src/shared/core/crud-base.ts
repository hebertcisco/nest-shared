export type TypeID = string | number | symbol;
export type TypeArgs = object | Array<any> | any | unknown | null | undefined;
export type PromiseResponse = Promise<TypeArgs>;

export abstract class CrudBase {
  public abstract create?(args?: TypeArgs): PromiseResponse;
  public abstract findAll?(args?: TypeArgs): PromiseResponse;
  public abstract findOne?(id: TypeID, args?: TypeArgs): PromiseResponse;
  public abstract update?(id: TypeID, args?: TypeArgs): PromiseResponse;
  public abstract remove?(id: TypeID): PromiseResponse;
}
export default CrudBase;
