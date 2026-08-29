import type { carInfo } from "../types/types";

const RentalCard = ({ car }: { car: carInfo }) => {
  const RATING_SCALE_MIN = 1; //mock database ratings did not go below 7
  const RATING_SCALE_MAX = 10;
  const HUE_ANGLE_RANGE = 120; // red -> green on colour wheel is 0 -> 120
  const normalisedRating =
    (car.rating - RATING_SCALE_MIN) / (RATING_SCALE_MAX - RATING_SCALE_MIN);
  let ratingHue = normalisedRating * HUE_ANGLE_RANGE;
  if (car.rating < RATING_SCALE_MIN)
    ratingHue = RATING_SCALE_MIN * HUE_ANGLE_RANGE;
  const ratingHueBg = "hsl(" + ratingHue + ", 100%, 38%)";
  const ratingHueContent = "contrast-color(" + ratingHueBg + ")";

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
        <div className="flex items-center p-2">
          <img
            src="src/assets/car_location.svg"
            className="size-5"
            alt="Location"
          />
          <p>
            {car.location.city}, {car.location.country}
          </p>
        </div>
        <div className="relative p-2 sm:before:absolute sm:before:top-0 sm:before:left-[50%] sm:before:h-1 sm:before:w-[75%] sm:before:translate-x-[-50%] sm:before:border-t-2 sm:before:border-green-600/40 sm:before:content-['']">
          <div
            className="rounded-m flex w-fit items-center rounded-md p-1"
            style={{
              background: ratingHueBg,
              color: ratingHueContent,
            }}
          >
            <p>Offer rating: </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-5"
              style={{ fill: ratingHueContent }}
            >
              <title>star</title>
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            <p>{car.rating}</p>
          </div>
          <div className="mt-2 flex">
            <div
              className={`flex items-center rounded-md p-1 pr-2 ${car.policies.freeCancellation ? "bg-green-500 fill-black text-black" : "border border-stone-400 bg-gray-200 fill-current/80 text-current/80"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5"
              >
                {car.policies.freeCancellation ? (
                  <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
                ) : (
                  <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
                )}
              </svg>

              <p>Free cancellation</p>
            </div>
            <div
              className={`mx-2 flex items-center rounded-md p-1 pr-2 ${car.policies.unlimitedMileage ? "bg-green-500 fill-black text-black" : "border border-stone-400 bg-stone-300/30 fill-current/90 text-current/90"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5"
              >
                {car.policies.unlimitedMileage ? (
                  <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
                ) : (
                  <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
                )}
              </svg>
              <p>Unlimited Mileage</p>
            </div>
          </div>
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
