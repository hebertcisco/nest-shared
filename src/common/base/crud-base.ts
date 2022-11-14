import type { PromiseResponse, TypeID } from '../../shared/types';

export abstract class CrudBase {
  public abstract create?<TypeArgs>(args?: TypeArgs): PromiseResponse<TypeArgs>;
  public abstract findAll?<TypeArgs>(args?: TypeArgs): PromiseResponse<TypeArgs>;
  public abstract findOne?<TypeArgs>(id: TypeID, args?: TypeArgs): PromiseResponse<TypeArgs>;
  public abstract update?<TypeArgs>(id: TypeID, args?: TypeArgs): PromiseResponse<TypeArgs>;
  public abstract remove?<TypeArgs>(id: TypeID): PromiseResponse<TypeArgs>;
}
export default CrudBase;
