import DateHandle from 'date-handle';

export const dateHandle = new DateHandle();

const { dayOfWeek, isSaturday, isSunday, isMonday } = dateHandle;

export { dayOfWeek, isSaturday, isSunday, isMonday };
export default new DateHandle();
