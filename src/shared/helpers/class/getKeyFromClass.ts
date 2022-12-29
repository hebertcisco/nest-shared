import type { ClassType } from '../../contract/types';

export function getKeyFromClass(clazz: ClassType): string {
  return clazz.name.toLocaleUpperCase();
}
export default getKeyFromClass;
