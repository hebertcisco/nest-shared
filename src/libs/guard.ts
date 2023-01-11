import { isEnum, isNumber, isDate } from 'class-validator';

export class Guard {
  /**
   * Checks if value is empty. Accepts strings, numbers, booleans, objects and arrays.
   */
  static isEmpty(value: unknown): boolean {
    if (typeof value === 'number' || typeof value === 'boolean') {
      return false;
    }
    if (typeof value === 'undefined' || value === null) {
      return true;
    }
    if (value instanceof Date) {
      return false;
    }
    if (value instanceof Object && !Object.keys(value).length) {
      return true;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return true;
      }
      if (value.every((item) => Guard.isEmpty(item))) {
        return true;
      }
    }
    if (value === '') {
      return true;
    }

    return false;
  }

  /**
   * Checks length range of a provided number/string/array
   */
  static lengthIsBetween(value: number | string | Array<unknown>, min: number, max: number): boolean {
    if (Guard.isEmpty(value)) {
      throw new Error('Cannot check length of a value. Provided value is empty');
    }
    const valueLength = typeof value === 'number' ? Number(value).toString().length : value.length;
    if (valueLength >= min && valueLength <= max) {
      return true;
    }
    return false;
  }

  static isValidEnum(value: unknown, entity: unknown) {
    if (Guard.isEmpty(value)) {
      throw new Error('Cannot check length of a value. Provided value is empty');
    }

    return isEnum(value, entity);
  }
  static isValidDate(value: unknown) {
    if (Guard.isEmpty(value)) {
      throw new Error('Cannot check length of a value. Provided value is empty');
    }

    return isDate(value);
  }
  static isValidNumber(value: unknown) {
    if (Guard.isEmpty(value)) {
      throw new Error('Check the value, it is empty');
    }

    if (isNaN(Number(value))) {
      throw new Error('This value is invalid, it is NaN');
    }
    return isNumber(value);
  }
}
