
import { cn } from "@/lib/utils";
import { ParkingSpot } from "@/types/parking";
import { getStatusColor } from "@/utils/parkingUtils";

interface ParkingSpotProps {
  spot: ParkingSpot;
  selectedSpot: ParkingSpot | null;
  onSpotClick: (spot: ParkingSpot) => void;
}

const ParkingSpotComponent = ({ spot, selectedSpot, onSpotClick }: ParkingSpotProps) => {
  return (
    <div
      key={spot.id}
      className={cn(
        "aspect-[3/2] rounded-md shadow-md flex items-center justify-center relative cursor-pointer transition-all duration-300",
        getStatusColor(spot.status),
        spot.id === selectedSpot?.id ? "ring-4 ring-ipark-gold transform scale-105" : "",
        spot.status === 'occupied' ? "cursor-not-allowed opacity-80" : "hover:shadow-xl hover:scale-[1.02]"
      )}
      onClick={() => onSpotClick(spot)}
    >
      <span className="text-white font-bold text-xl drop-shadow-md">{spot.number}</span>
      
      {spot.status === 'accessible' && (
        <div className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <span className="text-blue-500 text-sm font-bold">♿</span>
        </div>
      )}
    </div>
  );
};

export default ParkingSpotComponent;
