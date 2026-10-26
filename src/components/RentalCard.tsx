import type { carInfo } from "../types/types";

const RentalCard = ({ car }: { car: carInfo }) => {
  const RATING_SCALE_MIN = 4.5; //mock database ratings did not go below 7
  const RATING_SCALE_MAX = 10;
  const HUE_ANGLE_RANGE = 120; // red -> green on colour wheel is 0 -> 120
  const normalisedRating =
    (car.rating - RATING_SCALE_MIN) / (RATING_SCALE_MAX - RATING_SCALE_MIN);
  let ratingHue = normalisedRating * HUE_ANGLE_RANGE;
  if (car.rating < RATING_SCALE_MIN)
    ratingHue = RATING_SCALE_MIN * HUE_ANGLE_RANGE;
  const ratingHueBg = "hsl(" + ratingHue + ", 100%, 38%)";
  const ratingHueContent = "contrast-color(" + ratingHueBg + ")";
  const premiumInvertIcons = car.category !== "Premium" ? "" : "invert";
  // Styling for cancellation and mileage indicators based on whether car is premium or not
  const policyFalse = ` border
    ${
      car.category !== "Premium"
        ? "border-stone-400 bg-stone-300/30 fill-current/90 text-current/90"
        : "border-green-600/40 bg-green-300/30 fill-green-300/80 text-green-300/80"
    }`;

  return (
    <div
      className={`m-auto my-2 flex w-full max-w-[90%] flex-col rounded-md border-3 border-[#212121] ${car.category !== "Premium" ? "bg-neutral-100 text-[#212121]" : "bg-green-800 text-[#F0F5F1]"} xl:grid xl:max-w-full xl:auto-cols-fr`}
    >
      <img
        src={`${car.imageUrl}?width=286&height=180`}
        className="size-64 h-fit w-fit self-center bg-radial from-green-500/60 from-25% to-inherit to-70% p-4 xl:col-1 xl:row-span-2 xl:place-self-end"
        alt="Photo of (vehicle class)"
        loading="lazy"
      />

      <div className="xl:col-span-2 xl:grid xl:h-full">
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
              className={`${premiumInvertIcons} size-5`}
              alt="Seats"
            />
            <p className="pr-1">{car.seats}</p>
          </div>
          <div className="flex items-center">
            <img
              src="src/assets/car_doors.svg"
              className={`mr-1 size-5 ${premiumInvertIcons}`}
              alt="Location"
            />
            <p className="pr-1">{car.doors}</p>
          </div>
          {car.largeBags > 0 ? (
            <div className="flex items-center">
              <img
                src="src/assets/car_bags_large.svg"
                className={`${premiumInvertIcons} size-5`}
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
                className={`${premiumInvertIcons} size-5`}
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
              className={`${premiumInvertIcons} size-5`}
              alt="Transmission"
            />
            <p className="pr-1">{car.transmission}</p>
          </div>
          <div className="flex items-center">
            <img
              src="src/assets/car_fuel.svg"
              className={`${premiumInvertIcons} size-5`}
              alt="Fuel"
            />
            <p className="pr-1">{car.fuelType}</p>
          </div>
          {car.airConditioning ? (
            <div className="flex items-center">
              <img
                src="src/assets/car_aircon.svg"
                className={`${premiumInvertIcons} size-5`}
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
            className={`${premiumInvertIcons} size-5`}
            alt="Location"
          />
          <p>
            {car.location.city}, {car.location.country}
          </p>
        </div>
        <div className="relative p-2 xl:before:absolute xl:before:top-0 xl:before:left-[50%] xl:before:h-1 xl:before:w-[75%] xl:before:translate-x-[-50%] xl:before:border-t-2 xl:before:border-green-600/40 xl:before:content-['']">
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
              className={`size-5`}
              style={{ fill: ratingHueContent }}
            >
              <title>star</title>
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            <p>{car.rating}</p>
          </div>
          <div className="mt-2 flex">
            <div
              className={`flex items-center rounded-md p-1 pr-2 ${car.policies.freeCancellation ? "bg-green-500 fill-black text-black" : `${policyFalse}`}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`size-5`}
              >
                {car.policies.freeCancellation ? (
                  <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
                ) : (
                  <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
                )}
              </svg>

              <p>Free cancellation</p>
            </div>
            {/* Nested ternary first checks if the car has unlimited mileage, and if not applies styling based off whether the car is premium or not */}
            <div
              className={`mx-2 flex items-center rounded-md p-1 pr-2 ${car.policies.unlimitedMileage ? "bg-green-500 fill-black text-black" : `${policyFalse}`}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`size-5`}
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
      <div className="relative flex justify-around p-4 xl:col-span-3 xl:col-start-2 xl:before:absolute xl:before:top-0 xl:before:h-1 xl:before:w-full xl:before:border-t-2 xl:before:border-green-600/40 xl:before:content-['']">
        <p>Damage Insurance (Price + 5%)</p>
        <p>Monthly repayments - (Price + 2% interest) </p>
        <p>RentaMember - (Price - 10%, subscriber to the business)</p>
      </div>
      <div className="relative p-2 xl:col-4 xl:row-1 xl:before:absolute xl:before:top-0 xl:before:left-0 xl:before:h-full xl:before:border-l-2 xl:before:border-green-600/40 xl:before:content-['']">
        <div className="flex h-full flex-col items-start justify-between">
          <img
            src={`${car.rentalCompany.logoUrl}`}
            alt={`${car.rentalCompany.name} logo`}
            className="m-0 mb-4 w-fit max-w-32"
          />
          <div>
            <p className="text-xs">Total for (amount) days</p>
            <p className="text-2xl font-bold">
              &#8364;{car.pricing.dailyRate} * amount of days
            </p>
            <p className="text-xs italic">
              at &#8364;{car.pricing.dailyRate} a day
            </p>
          </div>
          <button className="self-center rounded-md bg-green-600 p-2 text-[#F1FAF4] transition-all hover:-translate-y-0.5 hover:bg-green-700 active:translate-y-0 xl:self-end">
            View offer (opens further info about car)
          </button>
        </div>
      </div>
    </div>
  );
};
export default RentalCard;
