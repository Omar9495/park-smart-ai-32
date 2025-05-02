
export type ParkingSpot = {
  id: string;
  status: 'available' | 'occupied' | 'reserved' | 'accessible';
  level: number;
  number: string;
};

export type CarLocation = {
  spotId: string;
  level: number;
} | null;
