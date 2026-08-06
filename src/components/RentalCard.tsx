import type { carInfo } from "../types/types";

const RentalCard = ({ car }: { car: carInfo }) => {
  return (
    <div className="m-auto my-2 flex w-fit max-w-[90%] flex-col rounded-md border-3 bg-neutral-100 text-[#212121] sm:grid sm:auto-cols-max">
      <img
        src={`${car.imageUrl}?width=286&height=180`}
        className="size-64 h-full w-full bg-radial from-green-500/60 from-25% to-neutral-100 to-70% p-4 sm:col-1 sm:row-span-2 sm:place-self-end"
        alt="Photo of (vehicle class)"
        loading="lazy"
      />

      <div className="sm:col-span-2 sm:grid sm:h-full">
        <div className="p-2">
          <strong>
            {car.brand} {car.model}
          </strong>
          <p className="text-xs">Or similar {car.category}</p>
        </div>
        <div className="flex flex-wrap p-2">
          <div className="flex items-center">
            <img
              src="src/assets/car_seats.svg"
              className="size-5"
              alt="Seats"
            />
            <p className="pr-1">{car.seats}</p>
          </div>
          <div className="flex items-center">
            <img
              src="src/assets/car_doors.svg"
              className="mr-1 size-5"
              alt="Location"
            />
            <p className="pr-1">{car.doors}</p>
          </div>
          {car.largeBags > 0 ? (
            <div className="flex items-center">
              <img
                src="src/assets/car_bags_large.svg"
                className="size-5"
                alt="Large bags"
              />
              <p className="pr-1">{car.largeBags}</p>
            </div>
          ) : (
            ""
          )}
          {car.smallBags > 0 ? (
            <div className="flex items-center">
              <img
                src="src/assets/car_bags_small.svg"
                className="size-5"
                alt="Small bags"
              />
              <p className="pr-1">{car.smallBags}</p>
            </div>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <img
              src="src/assets/car_transmission.svg"
              className="size-5"
              alt="Transmission"
            />
            <p className="pr-1">{car.transmission}</p>
          </div>
          <div className="flex items-center">
            <img src="src/assets/car_fuel.svg" className="size-5" alt="Fuel" />
            <p className="pr-1">{car.fuelType}</p>
          </div>
          {car.airConditioning ? (
            <div className="flex items-center">
              <img
                src="src/assets/car_aircon.svg"
                className="size-5"
                alt="Air conditioning"
              />
              <p className="pr-1">A/C</p>
            </div>
          ) : (
            ""
          )}
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
