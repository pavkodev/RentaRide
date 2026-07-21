const RentalCard = () => {
  return (
    <div className="m-auto my-2 flex w-fit max-w-[90%] flex-col rounded-md border-3 bg-neutral-100 text-[#212121] sm:grid sm:auto-cols-max">
      <img
        src="https://content.r9cdn.net/rimg/car-images/generic/01_mini_white.png?width=160&height=180"
        className="size-64 h-full w-full bg-radial from-green-500/60 from-25% to-neutral-100 to-70% p-4 sm:col-1 sm:row-span-2 sm:place-self-end"
        alt="Photo of (vehicle class)"
      />

      <div className="sm:col-span-2 sm:grid sm:h-full">
        <div className="p-2">
          <strong>Vehicle name</strong>
          <p className="text-xs">Or similar (class)</p>
        </div>
        <div className="flex flex-wrap p-2">
          <div className="flex">
            <img
              src="src/assets/placeholder_icon.svg"
              className="size-5"
              alt="Location"
            />
            <p className="pr-1">Seats</p>
          </div>
          <div className="flex">
            <img
              src="src/assets/placeholder_icon.svg"
              className="size-5"
              alt="Location"
            />
            <p className="pr-1">Luggage</p>
          </div>
          <div className="flex">
            <img
              src="src/assets/placeholder_icon.svg"
              className="size-5"
              alt="Location"
            />
            <p className="pr-1">Doors</p>
          </div>
          <div className="flex">
            <img
              src="src/assets/placeholder_icon.svg"
              className="size-5"
              alt="Location"
            />
            <p className="pr-1">Transmission</p>
          </div>
          <div className="flex">
            <img
              src="src/assets/placeholder_icon.svg"
              className="size-5"
              alt="Location"
            />
            <p className="pr-1">Extra</p>
          </div>
        </div>
        <p className="p-2">
          Seats, luggage, doors, transmission, extra features like AC
        </p>
        <div className="flex p-2">
          <img
            src="src/assets/placeholder_icon.svg"
            className="size-5"
            alt="Location"
          />
          <p>Location</p>
        </div>
        <div className="relative p-2 sm:before:absolute sm:before:top-0 sm:before:left-[50%] sm:before:h-1 sm:before:w-[75%] sm:before:translate-x-[-50%] sm:before:border-t-2 sm:before:border-green-600/40 sm:before:content-['']">
          <p>Rating 1 - 10</p>
          <p>Offer type (good, excellent, etc.)</p>
          <p>Free cancellation (if applicable)</p>
        </div>
      </div>
      <div className="relative flex justify-around p-4 sm:col-span-3 sm:col-start-2 sm:before:absolute sm:before:top-0 sm:before:h-1 sm:before:w-full sm:before:border-t-2 sm:before:border-green-600/40 sm:before:content-['']">
        <p>Damage Insurance (Price + 5%)</p>
        <p>Monthly repayments - (Price + 2% interest) </p>
        <p>RentaMember - (Price - 10%, subscriber to the business)</p>
      </div>
      <div className="relative p-2 sm:col-4 sm:row-1 sm:before:absolute sm:before:top-0 sm:before:left-0 sm:before:h-full sm:before:border-l-2 sm:before:border-green-600/40 sm:before:content-['']">
        <p>Rental Company</p>
        <p>Total price</p>
        <button>View offer (opens further info about car)</button>
      </div>
    </div>
  );
};
export default RentalCard;
