
import { Button } from "@/components/ui/button";
import { CarLocation } from "@/types/parking";
import { Car, Route, MapPin, Navigation } from 'lucide-react';
import { Link } from "react-router-dom";
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

interface CarLocatorProps {
  carLocation: CarLocation;
  showCarLocator: boolean;
  toggleCarLocator: () => void;
  setShowCarLocator: (show: boolean) => void;
}

const CarLocator = ({ 
  carLocation: propCarLocation, 
  showCarLocator, 
  toggleCarLocator, 
  setShowCarLocator 
}: CarLocatorProps) => {
  // Add local state to ensure we can access car location even if props don't have it
  const [localCarLocation, setLocalCarLocation] = useState<CarLocation>(propCarLocation);
  
  // Try to get car location from localStorage if it's not passed in props
  useEffect(() => {
    if (propCarLocation) {
      setLocalCarLocation(propCarLocation);
    } else {
      const savedLocation = localStorage.getItem('carLocation');
      if (savedLocation) {
        try {
          setLocalCarLocation(JSON.parse(savedLocation));
        } catch (error) {
          console.error('Failed to parse car location', error);
        }
      }
    }
  }, [propCarLocation]);
  
  const navigateToCar = () => {
    // In a real app, this would access the device's GPS and start navigation
    toast.success(`Starting navigation to your car at Level ${localCarLocation?.level}, Space ${localCarLocation?.spotId}`, {
      duration: 3000,
    });
    
    // Simulate navigation experience
    setTimeout(() => {
      toast.info("GPS signal acquired. Follow the highlighted route.", {
        duration: 4000,
      });
    }, 2000);
  };
  
  // If no car location is found in props or localStorage, don't render the button
  if (!localCarLocation) {
    return (
      <div className="flex justify-center mb-6">
        <Button 
          onClick={() => toast.error("No car location found. Please reserve a parking spot first.")}
          className="bg-ipark-gold hover:bg-ipark-gold/90 text-ipark-navy font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 border border-ipark-gold/30"
        >
          <Car className="h-5 w-5" />
          Find My Car
        </Button>
      </div>
    );
  }
  
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
                  Level {localCarLocation.level}, Space {localCarLocation.spotId}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={navigateToCar}
                className="bg-ipark-gold hover:bg-ipark-gold/90 text-ipark-navy flex items-center gap-2 shine-effect"
              >
                <Navigation className="h-5 w-5" />
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
          
          <div className="mt-6 border-t border-gray-200 pt-4">
            <h4 className="font-medium text-ipark-navy mb-2">Navigation Tips</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Follow the blue path on your screen to reach your vehicle</li>
              <li>Use the "Flash Lights" feature to help locate your car in crowded areas</li>
              <li>Save this location to favorites for future reference</li>
            </ul>
          </div>
          
          <div className="mt-4 flex justify-center">
            <Link to="/find-vehicle" className="text-sm text-ipark-gold hover:underline">
              Go to detailed vehicle finder
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CarLocator;
