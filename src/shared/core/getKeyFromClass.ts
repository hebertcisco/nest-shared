class ClassBase {}

export type ClassType = typeof ClassBase;

export function getKeyFromClass(clazz: ClassType): string {
  return clazz.name.toLocaleUpperCase();
}
export default getKeyFromClass;
