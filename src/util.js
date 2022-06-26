import dayjs from 'dayjs';
import { func } from 'prop-types';

export function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
  const monthFirstDay = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - monthFirstDay;

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  return daysMatrix;
}

export function getWeek() {
  let weekFirstDay = -1;
  return Array(7)
    .fill(null)
    .map(() => {
      weekFirstDay++;
      return dayjs().day(weekFirstDay);
    });
}

export function getDay() {
  let dayFirstHour = -1;
  return Array(24)
    .fill(null)
    .map(() => {
      dayFirstHour++;
      return dayjs().hour(dayFirstHour);
    });
}
