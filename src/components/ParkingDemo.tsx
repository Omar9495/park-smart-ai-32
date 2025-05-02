
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import BookingSuccessToast from './BookingSuccessToast';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Car, Route, MapPin } from 'lucide-react';

type ParkingSpot = {
  id: string;
  status: 'available' | 'occupied' | 'reserved' | 'accessible';
  level: number;
  number: string;
};

const generateParkingSpots = (): ParkingSpot[] => {
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

const ParkingDemo = () => {
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>(generateParkingSpots());
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [reservedSpotInfo, setReservedSpotInfo] = useState({ spotId: '', level: 0 });
  const [showCarLocator, setShowCarLocator] = useState(false);
  const [carLocation, setCarLocation] = useState<{spotId: string, level: number} | null>(null);
  
  const handleSpotClick = (spot: ParkingSpot) => {
    if (spot.status === 'occupied') return;
    setSelectedSpot(spot);
  };
  
  const getStatusColor = (status: string) => {
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
    
    // Show success toast
    setReservedSpotInfo({
      spotId: selectedSpot.number,
      level: selectedSpot.level
    });
    setShowSuccessToast(true);
    setCarLocation({
      spotId: selectedSpot.number,
      level: selectedSpot.level
    });
    setSelectedSpot(null);
  };
  
  const closeSuccessToast = () => {
    setShowSuccessToast(false);
  };

  const toggleCarLocator = () => {
    setShowCarLocator(!showCarLocator);
  };

  const navigateToCar = () => {
    // In a real app, this would access the device's GPS and start navigation
    alert("Starting navigation to your car's location: Level " + carLocation?.level + ", Space " + carLocation?.spotId);
  };

  // Get spots for the active level in carousel view
  const getLevelSpots = (level: number) => {
    return parkingSpots.filter(spot => spot.level === level);
  };

  const handleLevelSelect = (level: number) => {
    setActiveLevel(level);
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-ipark-cream" id="demo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ipark-gold to-ipark-maroon">Interactive Demo</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience our premium parking management system in action. Select available spots to make a reservation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Car Locator Button */}
          {carLocation && (
            <div className="flex justify-center mb-6">
              <Button 
                onClick={toggleCarLocator}
                className="bg-ipark-gold hover:bg-ipark-gold/90 text-ipark-navy font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 border border-ipark-gold/30"
              >
                <Car className="h-5 w-5" />
                {showCarLocator ? "Hide Car Locator" : "Find My Car"}
              </Button>
            </div>
          )}
          
          {/* Car Locator GPS Panel */}
          {showCarLocator && carLocation && (
            <div className="mb-8 p-6 border border-ipark-gold/30 rounded-lg shadow-lg bg-white/90 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-center text-ipark-navy">
                Car Location
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ipark-navy rounded-full flex items-center justify-center">
                    <Car className="h-6 w-6 text-ipark-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Your car is parked at:</p>
                    <p className="text-lg font-bold text-ipark-navy">
                      Level {carLocation.level}, Space {carLocation.spotId}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={navigateToCar}
                    className="bg-ipark-gold hover:bg-ipark-gold/90 text-ipark-navy flex items-center gap-2 shine-effect"
                  >
                    <Route className="h-5 w-5" />
                    Navigate to Car
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-ipark-gold text-ipark-gold hover:bg-ipark-gold/10 flex items-center gap-2"
                    onClick={() => setShowCarLocator(false)}
                  >
                    <MapPin className="h-5 w-5" />
                    View Parking Map
                  </Button>
                </div>
              </div>
            </div>
          )}

          {!showCarLocator && (
            <>
              {/* Parking Carousel */}
              <div className="mb-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {[1, 2, 3, 4].map((level) => (
                      <CarouselItem key={level}>
                        <div className="p-1">
                          <div className="bg-white p-6 rounded-lg shadow-lg border border-ipark-gold/20">
                            <h3 className="text-xl font-bold mb-6 text-center text-ipark-navy">
                              Level {level} - {String.fromCharCode(64 + level)} Floor
                            </h3>
                            
                            <div className="grid grid-cols-4 gap-4">
                              {getLevelSpots(level).map(spot => (
                                <div
                                  key={spot.id}
                                  className={cn(
                                    "aspect-[3/2] rounded-md shadow-md flex items-center justify-center relative cursor-pointer transition-all duration-300",
                                    getStatusColor(spot.status),
                                    spot.id === selectedSpot?.id ? "ring-4 ring-ipark-gold transform scale-105" : "",
                                    spot.status === 'occupied' ? "cursor-not-allowed opacity-80" : "hover:shadow-xl hover:scale-[1.02]"
                                  )}
                                  onClick={() => handleSpotClick(spot)}
                                >
                                  <span className="text-white font-bold text-xl drop-shadow-md">{spot.number}</span>
                                  
                                  {spot.status === 'accessible' && (
                                    <div className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                      <span className="text-blue-500 text-sm font-bold">♿</span>
                                    </div>
                                  )}
                                </div>
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
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              {/* Level indicator dots */}
              <div className="flex justify-center gap-3 mb-8">
                {[1, 2, 3, 4].map(level => (
                  <button
                    key={level}
                    className={cn(
                      "w-6 h-6 rounded-full transition-all",
                      activeLevel === level
                        ? "bg-ipark-gold scale-110"
                        : "bg-gray-300 hover:bg-ipark-gold/50"
                    )}
                    onClick={() => handleLevelSelect(level)}
                    aria-label={`View Level ${level}`}
                  />
                ))}
              </div>
              
              {/* Spot details */}
              {selectedSpot && (
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
                      onClick={handleReserveSpot}
                    >
                      Reserve Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-ipark-gold text-ipark-gold hover:bg-ipark-gold/10"
                      onClick={() => setSelectedSpot(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      <BookingSuccessToast 
        show={showSuccessToast} 
        spotId={reservedSpotInfo.spotId} 
        level={reservedSpotInfo.level}
        onClose={closeSuccessToast}
      />
    </section>
  );
};

export default ParkingDemo;
