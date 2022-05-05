type TypeID = string | number | symbol;
type TypeArgs = object | Array<any> | any | unknown | null | undefined;
type PromiseResponse = Promise<TypeArgs>;

export class CrudBase {
  create?(args?: TypeArgs): PromiseResponse;
  findAll?(args?: TypeArgs): PromiseResponse;
  findOne?(id: TypeID, args?: TypeArgs): PromiseResponse;
  update?(id: TypeID, args?: TypeArgs): PromiseResponse;
  remove?(id: TypeID): PromiseResponse;
}
export default CrudBase;
