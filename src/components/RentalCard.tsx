const RentalCard = () => {
  return (
    <div className="m-auto my-2 flex w-fit max-w-[90%] flex-col rounded-md border-2 sm:grid sm:auto-cols-max">
      <img
        src="src/assets/placeholder_icon.svg"
        className="row-span-full size-64 place-self-end bg-red-50 p-4 sm:col-1"
        alt="Vehicle image"
      />
      <div className="grid sm:col-span-2 sm:h-full">
        <div className="bg-red-100 p-2">
          <p>Vehicle name</p>
          <p>Or similar (class)</p>
        </div>
        <p className="bg-rose-300 p-2">
          Seats, luggage, doors, transmission, extra features like AC
        </p>
        <div className="flex bg-red-200 p-2">
          <img
            src="src/assets/placeholder_icon.svg"
            className="size-5"
            alt="Location"
          />
          <p>Location</p>
        </div>
        <div className="bg-red-300 p-2">
          <p>Rating 1 - 10</p>
          <p>Offer type (good, excellent, etc.)</p>
          <p>Free cancellation (if applicable)</p>
        </div>
      </div>
      <div className="bg-red-400 p-2 sm:col-4">
        <p>Rental Company</p>
        <p>Total price</p>
        <button>View offer (opens further info about car)</button>
      </div>
    </div>
  );
};
export default RentalCard;
