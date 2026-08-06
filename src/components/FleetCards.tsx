import { useEffect, useState } from "react";
import type { carInfo } from "../types/types";
import RentalCard from "./RentalCard";

const FleetCards = () => {
  const dataPath = "https://fleet-0737f1.tiiny.site/fleet.json";
  const [data, setData] = useState<carInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataPath);
        if (!response.ok) {
          throw new Error("Error fetching fleet data!");
        }
        const json = await response.json();
        json.forEach((datum: carInfo) => {
          const car: carInfo = {
            id: datum.id,
            brand: datum.brand,
            model: datum.model,
            year: datum.year,
            category: datum.category,
            transmission: datum.transmission,
            fuelType: datum.fuelType,
            doors: datum.doors,
            seats: datum.seats,
            largeBags: datum.largeBags,
            smallBags: datum.smallBags,
            airConditioning: datum.airConditioning,
            location: {
              city: datum.location.city,
              airportCode: datum.location.airportCode,
              country: datum.location.country,
            },
            rentalCompany: {
              name: datum.rentalCompany.name,
              logoUrl: datum.rentalCompany.logoUrl,
            },
            imageUrl: datum.imageUrl,
            pricing: {
              dailyRate: datum.pricing.dailyRate,
              currency: datum.pricing.currency,
            },
            rating: datum.rating,
            policies: {
              freeCancellation: datum.policies.freeCancellation,
              unlimitedMileage: datum.policies.unlimitedMileage,
              fuelPolicy: datum.policies.fuelPolicy,
              securityDeposit: datum.policies.securityDeposit,
            },
          };
          setData((prev: carInfo[]) => [...prev, car]);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      {data.slice(0, 5).map((datum, index) => (
        <RentalCard key={index + datum.id} car={datum} />
      ))}
    </>
  );
};
export default FleetCards;
