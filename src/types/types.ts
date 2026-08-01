export type carInfo = {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: string;
  transmission: string;
  fuelType: string;
  doors: number;
  seats: number;
  largeBags: number;
  smallBags: number;
  airConditioning: boolean;
  location: {
    city: string;
    airportCode: string;
    country: string;
  };
  rentalCompany: {
    name: string;
    logoUrl: string | null;
  };
  imageUrl: string;
  pricing: {
    dailyRate: number;
    currency: string;
  };
  rating: number;
  policies: {
    freeCancellation: boolean;
    unlimitedMileage: boolean;
    fuelPolicy: string;
    securityDeposit: number;
  };
};
