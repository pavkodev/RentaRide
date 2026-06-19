import Calendar from "react-calendar";
const Header = () => {
  const dateToday = new Date();

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
            <img
              src="/src/assets/location.svg"
              alt=""
              className="mr-2 size-5"
            />
            Location
          </button>
          <div className="relative flex cursor-default gap-2 rounded-lg bg-green-600 text-white shadow-md inset-shadow-sm transition-all hover:shadow-lg hover:inset-shadow-white/50">
            <label htmlFor="chkbx-date-select" className="peer flex p-2">
              <input
                type="checkbox"
                id="chkbx-date-select"
                className="hidden"
              />
              Select Dates...
            </label>
            <Calendar
              defaultValue={
                new Date(new Date().setDate(dateToday.getDate() + 1))
              }
              selectRange={true}
              minDate={dateToday}
              minDetail="year"
              className={
                "motion-safe:peer-has-checked:animate-slide-down motion-safe:animate-slide-up absolute left-[50%] hidden w-fit translate-x-[-50%] peer-has-checked:block motion-reduce:translate-y-12"
              }
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
