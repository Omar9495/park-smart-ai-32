
export type ParkingSpot = {
  id: string;
  status: 'available' | 'occupied' | 'reserved' | 'accessible';
  level: number;
  number: string;
  accessible?: boolean; // Adding the accessible property as optional
};

export type CarLocation = {
  spotId: string;
  level: number;
} | null;
