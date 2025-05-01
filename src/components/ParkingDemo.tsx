
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

type ParkingSpot = {
  id: string;
  status: 'available' | 'occupied' | 'reserved' | 'accessible';
  level: number;
  number: string;
};

const generateParkingSpots = (): ParkingSpot[] => {
  const statuses: ('available' | 'occupied' | 'reserved' | 'accessible')[] = ['available', 'occupied', 'reserved', 'accessible'];
  const spots: ParkingSpot[] = [];
  
  // Generate spots for level 1
  for (let i = 1; i <= 12; i++) {
    const randomStatus = statuses[Math.floor(Math.random() * (i === 3 || i === 10 ? 3 : 4))]; // Ensure some accessible spots
    spots.push({
      id: `1-${i}`,
      status: i === 3 || i === 10 ? 'accessible' : randomStatus,
      level: 1,
      number: `A${i}`
    });
  }
  
  // Generate spots for level 2
  for (let i = 1; i <= 12; i++) {
    const randomStatus = statuses[Math.floor(Math.random() * (i === 5 ? 3 : 4))]; // Ensure some accessible spots
    spots.push({
      id: `2-${i}`,
      status: i === 5 ? 'accessible' : randomStatus,
      level: 2,
      number: `B${i}`
    });
  }
  
  return spots;
};

const ParkingDemo = () => {
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>(generateParkingSpots());
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);
  
  const filteredSpots = parkingSpots.filter(spot => spot.level === activeLevel);
  
  const handleSpotClick = (spot: ParkingSpot) => {
    if (spot.status === 'occupied') return;
    setSelectedSpot(spot);
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-ipark-green';
      case 'occupied':
        return 'bg-ipark-red';
      case 'reserved':
        return 'bg-ipark-yellow';
      case 'accessible':
        return 'bg-ipark-blue';
      default:
        return 'bg-gray-300';
    }
  };
  
  const getStatusText = (status: string) => {
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
  
  const handleReserveSpot = () => {
    if (!selectedSpot) return;
    
    setParkingSpots(prevSpots =>
      prevSpots.map(spot =>
        spot.id === selectedSpot.id
          ? { ...spot, status: 'reserved' }
          : spot
      )
    );
    
    setSelectedSpot(null);
  };
  
  return (
    <section className="py-16 md:py-24 bg-white" id="demo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Interactive Demo</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience our parking management system in action. Click on available spots to see reservation options.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Level selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden">
              <Button
                variant={activeLevel === 1 ? "default" : "ghost"}
                className={cn(
                  "rounded-none px-8",
                  activeLevel === 1 ? "bg-ipark-blue hover:bg-blue-700" : ""
                )}
                onClick={() => setActiveLevel(1)}
              >
                Level 1
              </Button>
              <Button
                variant={activeLevel === 2 ? "default" : "ghost"}
                className={cn(
                  "rounded-none px-8",
                  activeLevel === 2 ? "bg-ipark-blue hover:bg-blue-700" : ""
                )}
                onClick={() => setActiveLevel(2)}
              >
                Level 2
              </Button>
            </div>
          </div>
          
          {/* Parking grid */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
            <div className="grid grid-cols-4 gap-4">
              {filteredSpots.map(spot => (
                <div
                  key={spot.id}
                  className={cn(
                    "aspect-[3/2] rounded-md shadow flex items-center justify-center relative cursor-pointer transition-transform",
                    getStatusColor(spot.status),
                    spot.id === selectedSpot?.id ? "ring-4 ring-ipark-accent transform scale-105" : "",
                    spot.status === 'occupied' ? "cursor-not-allowed" : "hover:shadow-md"
                  )}
                  onClick={() => handleSpotClick(spot)}
                >
                  <span className="text-white font-bold text-lg">{spot.number}</span>
                  
                  {spot.status === 'accessible' && (
                    <div className="absolute top-1 right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <span className="text-ipark-blue text-xs font-bold">♿</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Legend */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-ipark-green rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-ipark-red rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Occupied</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-ipark-yellow rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Reserved</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-ipark-blue rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Accessible</span>
              </div>
            </div>
          </div>
          
          {/* Spot details */}
          {selectedSpot && (
            <div className="mt-8 p-6 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Selected Spot: {selectedSpot.number}</h3>
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
                  <p className="font-medium">$2.50/hour</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Distance to Exit</p>
                  <p className="font-medium">50 meters</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="flex-1 bg-ipark-blue hover:bg-blue-700"
                  onClick={handleReserveSpot}
                >
                  Reserve Now
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-ipark-blue text-ipark-blue"
                  onClick={() => setSelectedSpot(null)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ParkingDemo;
