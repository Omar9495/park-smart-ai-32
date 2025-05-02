
import { ParkingSpot } from "@/types/parking";
import ParkingSpotComponent from "./ParkingSpot";

interface ParkingLevelDisplayProps {
  level: number;
  spots: ParkingSpot[];
  selectedSpot: ParkingSpot | null;
  onSpotClick: (spot: ParkingSpot) => void;
}

const ParkingLevelDisplay = ({ 
  level, 
  spots, 
  selectedSpot, 
  onSpotClick 
}: ParkingLevelDisplayProps) => {
  
  return (
    <div className="p-1">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-ipark-gold/20">
        <h3 className="text-xl font-bold mb-6 text-center text-ipark-navy">
          Level {level} - {String.fromCharCode(64 + level)} Floor
        </h3>
        
        <div className="grid grid-cols-4 gap-4">
          {spots.map(spot => (
            <ParkingSpotComponent 
              key={spot.id} 
              spot={spot} 
              selectedSpot={selectedSpot} 
              onSpotClick={onSpotClick} 
            />
          ))}
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Occupied</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-amber-400 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Reserved</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Accessible</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingLevelDisplay;
