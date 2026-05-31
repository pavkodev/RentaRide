import Calendar from "react-calendar";
const Header = () => {
  return (
    <>
      <div className="flex flex-col justify-around bg-stone-100 p-4 shadow-lg sm:flex-row">
        <img src="src\assets\RentaRide.svg" alt="" />
        <div className="flex flex-col items-center justify-around gap-2 sm:flex-row">
          <button className="flex cursor-pointer items-center justify-between rounded-lg bg-green-600 p-2 text-white shadow-md inset-shadow-sm transition-all hover:shadow-lg hover:inset-shadow-white/50">
            <img
              src="/src/assets/location.svg"
              alt=""
              className="mr-2 size-5"
            />
            Select location
          </button>
          <div className="flex cursor-default gap-2 rounded-lg bg-green-600 p-2 text-white shadow-md inset-shadow-sm transition-all hover:shadow-lg hover:inset-shadow-white/50">
            <p className="flex items-center">
              <img src="/src/assets/datetime.svg" className="mr-1 size-5" />
              Date
            </p>
            <div className="border opacity-40"></div>
            <p>Time</p>
          </div>
          <div className="flex cursor-default gap-2 rounded-lg bg-green-600 p-2 text-white shadow-md inset-shadow-sm transition-all hover:shadow-lg hover:inset-shadow-white/50">
            <p>Date</p>
            <div className="border opacity-40"></div>
            <p>Time</p>
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
      <Calendar className={"m-2"} minDate={new Date()} />
    </>
  );
};
export default Header;
