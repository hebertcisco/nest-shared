import type { PromiseResponse, TypeArgs, TypeID } from '../types/crud-base.type';

export class CrudBase {
  public create?(args?: TypeArgs): PromiseResponse;
  public findAll?(args?: TypeArgs): PromiseResponse;
  public findOne?(id: TypeID, args?: TypeArgs): PromiseResponse;
  public update?(id: TypeID, args?: TypeArgs): PromiseResponse;
  public remove?(id: TypeID): PromiseResponse;
}
export default CrudBase;
