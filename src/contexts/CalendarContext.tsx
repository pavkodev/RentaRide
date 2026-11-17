import { createContext } from "react";

export type TypeCalendarContext = {
  days: number | undefined;
  setDays: (days: number) => void;
};

export const CalendarContext = createContext<TypeCalendarContext>({
  days: undefined,
  setDays: () => {},
});
