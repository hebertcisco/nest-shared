class DateHandle {
  private toDate(input?: Date | number | string): Date {
    if (input instanceof Date) return input;
    if (typeof input === 'number' || typeof input === 'string') return new Date(input);
    return new Date(Date.now());
  }

  dayOfWeek(input?: Date | number | string): number {
    return this.toDate(input).getDay(); // 0=Sun .. 6=Sat
  }

  isSaturday(input?: Date | number | string): boolean {
    return this.dayOfWeek(input) === 6;
  }

  isSunday(input?: Date | number | string): boolean {
    return this.dayOfWeek(input) === 0;
  }

  isMonday(input?: Date | number | string): boolean {
    return this.dayOfWeek(input) === 1;
  }
}

export const dateHandle = new DateHandle();

const { dayOfWeek, isSaturday, isSunday, isMonday } = dateHandle;

export { dayOfWeek, isSaturday, isSunday, isMonday };
export default new DateHandle();
