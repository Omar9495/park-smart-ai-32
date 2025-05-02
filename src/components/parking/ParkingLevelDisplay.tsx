
import { ParkingSpot } from "@/types/parking";
import ParkingSpotComponent from "./ParkingSpot";
import { useEffect } from "react";
import { Info } from "lucide-react";

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
  
  const levelName = level === 1 ? 'A' : level === 2 ? 'B' : level === 3 ? 'C' : 'D';
  
  // Count available spots
  const availableSpots = spots.filter(spot => spot.status === 'available').length;
  const accessibleSpots = spots.filter(spot => spot.accessible && spot.status === 'available').length;
  
  return (
    <div className="p-1">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-ipark-gold/20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-center text-ipark-navy">
            Level {level} - {levelName} Floor
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm mt-2 sm:mt-0">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>{availableSpots} available</span>
            </div>
            {accessibleSpots > 0 && (
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>{accessibleSpots} accessible</span>
              </div>
            )}
          </div>
        </div>
        
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
        
        {/* Level features */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Info className="h-4 w-4 text-ipark-gold" />
            <span>
              Level {level} features: 
              {level === 1 && " EV charging, Premium spaces, Elevator access"}
              {level === 2 && " Family spaces, Wide spaces, Stair access"}
              {level === 3 && " Compact spaces, Elevator access, 24/7 security"}
              {level === 4 && " Roof access, Covered area, Panoramic views"}
            </span>
          </div>
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
