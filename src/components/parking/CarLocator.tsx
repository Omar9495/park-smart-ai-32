
import { Button } from "@/components/ui/button";
import { CarLocation } from "@/types/parking";
import { Car, Route, MapPin } from 'lucide-react';

interface CarLocatorProps {
  carLocation: CarLocation;
  showCarLocator: boolean;
  toggleCarLocator: () => void;
  setShowCarLocator: (show: boolean) => void;
}

const CarLocator = ({ 
  carLocation, 
  showCarLocator, 
  toggleCarLocator, 
  setShowCarLocator 
}: CarLocatorProps) => {
  
  const navigateToCar = () => {
    // In a real app, this would access the device's GPS and start navigation
    alert("Starting navigation to your car's location: Level " + carLocation?.level + ", Space " + carLocation?.spotId);
  };
  
  if (!carLocation) return null;
  
  return (
    <>
      <div className="flex justify-center mb-6">
        <Button 
          onClick={toggleCarLocator}
          className="bg-ipark-gold hover:bg-ipark-gold/90 text-ipark-navy font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 border border-ipark-gold/30"
        >
          <Car className="h-5 w-5" />
          {showCarLocator ? "Hide Car Locator" : "Find My Car"}
        </Button>
      </div>
      
      {showCarLocator && (
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
    </>
  );
};

export default CarLocator;
