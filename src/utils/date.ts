import dayjs from 'dayjs';

export const compareDates = (date1: Date, date2: Date) => {
  return dayjs(date1).diff(dayjs(date2), 'day');
};
