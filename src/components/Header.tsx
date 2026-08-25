import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import { type CalendarValues, CalendarMonths } from "../types/calendar-types";
const Header = () => {
  const dateToday = new Date();
  const invalidDate = new Date(
    new Date().setDate(dateToday.getDate() - 999999),
  );

  const [dateSelection, setDateSelection] = useState<CalendarValues>(
    new Date(invalidDate),
  );

  const [selectionString, setSelectionString] = useState("Choose dates...");
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleChange = (input: CalendarValues) => {
    if (input === null) return;
    if (Array.isArray(input)) {
      const startDate = input[0] !== null ? new Date(input[0]) : null;
      const endDate = input[1] !== null ? new Date(input[1]) : null;
      if (startDate !== null && endDate !== null) {
        setSelectionString(
          CalendarMonths[startDate.getMonth()] +
            " " +
            startDate.getDate().toString() +
            " " +
            startDate.getFullYear() +
            " - " +
            CalendarMonths[endDate.getMonth()] +
            " " +
            endDate.getDate().toString() +
            " " +
            endDate.getFullYear(),
        );
      } else if (startDate !== null) {
        setSelectionString(
          CalendarMonths[startDate.getMonth()] +
            " " +
            startDate.getDate().toString() +
            " " +
            startDate.getFullYear(),
        );
      } else {
        setSelectionString("Choose dates...");
      }
    }
    setDateSelection(input);
  };

  useEffect(() => {
    const handleCalendarClose = (e: Event) => {
      if (!showCalendar) return;
      if (calendarRef.current) {
        if (!calendarRef.current.contains(e.target as Node)) {
          setShowCalendar(false);
        }
      }
    };
    document.addEventListener("mousedown", handleCalendarClose);

    return () => {
      document.removeEventListener("mousedown", handleCalendarClose);
    };
  }, [showCalendar]);

  return (
    <>
      <div className="flex flex-col items-center justify-between bg-stone-100 p-4 shadow-lg md:flex-row">
        <img
          src="src\assets\RentaRide_logo_compact.svg"
          alt="RentaRide logo"
          className="my-4 size-full md:my-0 md:size-[30%]"
        />
        <div className="flex flex-col items-center justify-around gap-2 sm:flex-row">
          <button className="flex cursor-pointer items-center justify-between rounded-lg bg-green-600 p-2 text-white shadow-md inset-shadow-sm transition-all hover:shadow-lg hover:inset-shadow-white/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-5 fill-current"
            >
              <title>map-search-outline</title>
              <path d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.2 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M19.5,2A0.5,0.5 0 0,1 20,2.5V11.81C19.42,11.26 18.75,10.81 18,10.5V4.7L15,5.86V10C14.3,10.07 13.62,10.24 13,10.5V5.87L9,4.47V16.13H9V16.5C9,17.14 9.09,17.76 9.26,18.34L8,17.9L2.66,19.97L2.5,20A0.5,0.5 0 0,1 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2.03L19.5,2M4,5.46V17.31L7,16.15V4.45L4,5.46Z" />
            </svg>
            Location
          </button>
          <div
            className="relative flex cursor-default gap-2 rounded-lg bg-green-600 text-white shadow-md inset-shadow-sm transition-all hover:shadow-lg hover:inset-shadow-white/50"
            ref={calendarRef}
          >
            <button
              className="peer flex items-center p-2 select-none"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="stroke-1.5 size-5 fill-transparent stroke-white stroke-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                />
              </svg>
              {selectionString}
            </button>
            <Calendar
              onChange={(value) => handleChange(value)}
              selectRange={true}
              minDate={dateToday}
              minDetail="year"
              allowPartialRange={true}
              className={`${showCalendar ? "motion-safe:animate-slide-down block" : "motion-safe:animate-slide-up hidden"} absolute left-[50%] z-10 w-fit translate-x-[-50%] motion-reduce:translate-y-12`}
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-green-700 p-2 pl-10 text-neutral-100 shadow-md"
          >
            Search
          </button>
        </div>
        <div className="flex items-center justify-end gap-2 pt-2">
          <p>Favourites</p>
          <p>Login/Signup</p>
        </div>
      </div>
    </>
  );
};
export default Header;
