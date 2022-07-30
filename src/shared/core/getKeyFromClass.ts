import { ClassType } from '../types/class.type';

export function getKeyFromClass(clazz: ClassType): string {
  return clazz.name.toLocaleUpperCase();
}
export default getKeyFromClass;
