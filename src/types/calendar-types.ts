export type CalendarValueInput = Date | null;
export const CalendarMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export type CalendarValues =
  | CalendarValueInput
  | [CalendarValueInput, CalendarValueInput];
