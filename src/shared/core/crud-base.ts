type TypeID = string | number;
type TypeArgs = object | Array<any> | any | unknown;
type PromiseResponse = Promise<TypeArgs>;

export default interface CrudBase {
  create?(args?: TypeArgs): PromiseResponse;
  findAll?(args?: TypeArgs): PromiseResponse;
  findOne?(id: TypeID, args?: TypeArgs): PromiseResponse;
  update?(id: TypeID, args?: TypeArgs): PromiseResponse;
  remove?(id: TypeID): PromiseResponse;
}
