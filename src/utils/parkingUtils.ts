
import { ParkingSpot } from "@/types/parking";

export const generateParkingSpots = (): ParkingSpot[] => {
  const statuses: ('available' | 'occupied' | 'reserved' | 'accessible')[] = ['available', 'occupied', 'reserved', 'accessible'];
  const spots: ParkingSpot[] = [];
  
  // Generate spots for all 4 levels
  for (let level = 1; level <= 4; level++) {
    const levelPrefix = String.fromCharCode(64 + level); // A, B, C, D
    
    for (let i = 1; i <= 12; i++) {
      // Different distribution of spot types for different levels
      let status: 'available' | 'occupied' | 'reserved' | 'accessible';
      
      if (i === 3 || i === 10) {
        // Create some accessible spots
        status = 'accessible';
      } else if (level === 3 && i % 3 === 0) {
        // More reserved spots on level 3
        status = 'reserved';
      } else if (level === 4 && i % 4 === 0) {
        // More open spots on level 4 (executive level)
        status = 'available';
      } else {
        // Random status for other spots
        status = statuses[Math.floor(Math.random() * 3)];
      }
      
      spots.push({
        id: `${level}-${i}`,
        status,
        level,
        number: `${levelPrefix}${i}`
      });
    }
  }
  
  return spots;
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'available':
      return 'bg-green-500';
    case 'occupied':
      return 'bg-red-500';
    case 'reserved':
      return 'bg-amber-400';
    case 'accessible':
      return 'bg-blue-500';
    default:
      return 'bg-gray-300';
  }
};

export const getStatusText = (status: string) => {
  switch (status) {
    case 'available':
      return 'Available';
    case 'occupied':
      return 'Occupied';
    case 'reserved':
      return 'Reserved';
    case 'accessible':
      return 'Accessible';
    default:
      return 'Unknown';
  }
};
