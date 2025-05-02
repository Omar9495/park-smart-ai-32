
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ParkingSpot } from "@/types/parking";
import { getStatusColor, getStatusText } from "@/utils/parkingUtils";

interface SpotDetailsProps {
  selectedSpot: ParkingSpot;
  onReserve: () => void;
  onCancel: () => void;
}

const SpotDetails = ({ selectedSpot, onReserve, onCancel }: SpotDetailsProps) => {
  return (
    <div className="mt-8 p-6 border border-ipark-gold/30 rounded-lg shadow-lg bg-white">
      <h3 className="text-xl font-bold mb-4 text-ipark-navy">Selected Spot: {selectedSpot.number}</h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-500 text-sm">Status</p>
          <p className="font-medium flex items-center">
            <span
              className={cn(
                "inline-block w-3 h-3 rounded-full mr-2",
                getStatusColor(selectedSpot.status)
              )}
            />
            {getStatusText(selectedSpot.status)}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Level</p>
          <p className="font-medium">Level {selectedSpot.level}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Price</p>
          <p className="font-medium">${selectedSpot.level === 4 ? '5.00' : '2.50'}/hour</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Distance to Exit</p>
          <p className="font-medium">{50 - (selectedSpot.level * 10)} meters</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          className="flex-1 bg-ipark-gold text-ipark-navy hover:bg-ipark-gold/80 shine-effect"
          onClick={onReserve}
        >
          Reserve Now
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 border-ipark-gold text-ipark-gold hover:bg-ipark-gold/10"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default SpotDetails;
