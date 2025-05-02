import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CarLocation } from "@/types/parking";
import { Car, Navigation, Compass, MapPin, Send, Route, XCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const FindVehiclePage = () => {
  const [carLocation, setCarLocation] = useState<CarLocation>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [navigationStarted, setNavigationStarted] = useState(false);
  const navigate = useNavigate();
  
  // Retrieve the car location from localStorage on component mount
  useEffect(() => {
    const savedLocation = localStorage.getItem('carLocation');
    if (savedLocation) {
      try {
        const locationData = JSON.parse(savedLocation);
        console.log('Car location found in localStorage:', locationData);
        setCarLocation(locationData);
      } catch (error) {
        console.error('Error parsing car location from localStorage:', error);
        toast.error('Error retrieving your car location');
      }
    } else {
      console.log('No car location found in localStorage');
    }
  }, []);
  
  const handleLocateCar = () => {
    setIsLocating(true);
    
    // Check localStorage again in case it was updated
    const savedLocation = localStorage.getItem('carLocation');
    
    setTimeout(() => {
      if (savedLocation) {
        try {
          const locationData = JSON.parse(savedLocation);
          setCarLocation(locationData);
          toast.success("Vehicle located successfully!", {
            description: `Your car is parked at Level ${locationData.level}, Space ${locationData.spotId}`,
          });
        } catch (error) {
          console.error('Error parsing car location:', error);
          createMockLocation();
        }
      } else {
        // If no saved location, create a mock one
        createMockLocation();
      }
      
      setIsLocating(false);
    }, 2000);
  };
  
  const createMockLocation = () => {
    const mockCarLocation = {
      spotId: "A15",
      level: 1
    };
    
    setCarLocation(mockCarLocation);
    localStorage.setItem('carLocation', JSON.stringify(mockCarLocation));
    
    toast.success("Vehicle located successfully!", {
      description: `Your car is parked at Level ${mockCarLocation.level}, Space ${mockCarLocation.spotId}`,
    });
  };
  
  const navigateToCar = () => {
    setNavigationStarted(true);
    
    toast.success(`Starting navigation to your car`, {
      description: `Level ${carLocation?.level}, Space ${carLocation?.spotId}`,
      duration: 3000,
    });
    
    // Simulate navigation experience
    setTimeout(() => {
      toast.info("GPS signal acquired. Follow the highlighted route.", {
        duration: 4000,
      });
    }, 2000);
  };
  
  const flashLights = () => {
    toast("Sending signal to flash vehicle lights", {
      description: "If your vehicle supports this feature, the lights will flash for 10 seconds",
      duration: 3000,
    });
  };
  
  const soundHorn = () => {
    toast("Sending signal to sound the horn", {
      description: "If your vehicle supports this feature, the horn will sound briefly",
      duration: 3000,
    });
  };
  
  const handleCancelParking = () => {
    // Clear the car location
    localStorage.removeItem('carLocation');
    setCarLocation(null);
    setNavigationStarted(false);
    
    toast.success("Parking reservation canceled", {
      description: "Your parking spot has been released",
    });
    
    // Navigate to the parking page
    navigate('/parking');
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ipark-gold to-ipark-maroon">
                Find Your Vehicle
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quickly locate your car and navigate back to it with ease
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {!carLocation ? (
              <div className="bg-white p-8 rounded-lg shadow-lg border border-ipark-gold/20 text-center">
                <div className="w-20 h-20 bg-ipark-gold/10 rounded-full mx-auto flex items-center justify-center mb-6">
                  <Car className="h-10 w-10 text-ipark-gold" />
                </div>
                <h2 className="text-2xl font-bold text-ipark-navy mb-4">Car Location Not Found</h2>
                <p className="text-gray-600 mb-6">
                  We don't have a record of where your car is parked. 
                  Use the locator button below to find your vehicle.
                </p>
                <Button 
                  onClick={handleLocateCar} 
                  disabled={isLocating}
                  className="bg-ipark-gold hover:bg-ipark-gold/90 text-ipark-navy font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 mx-auto"
                >
                  {isLocating ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-ipark-navy border-t-transparent rounded-full" />
                      Locating...
                    </>
                  ) : (
                    <>
                      <Compass className="h-5 w-5" />
                      Locate My Vehicle
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg border border-ipark-gold/20 overflow-hidden">
                <div className="bg-ipark-navy p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <Car className="h-5 w-5" />
                      Vehicle Location
                    </h2>
                    <span className="bg-ipark-gold text-ipark-navy px-3 py-1 rounded-full text-sm font-medium">
                      Found
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    <div className="w-24 h-24 bg-ipark-gold/10 rounded-full flex items-center justify-center">
                      <Car className="h-12 w-12 text-ipark-gold" />
                    </div>
                    
                    <div>
                      <p className="text-gray-500 mb-1">Your vehicle is parked at:</p>
                      <h3 className="text-3xl font-bold text-ipark-navy mb-1">
                        Level {carLocation.level}, Space {carLocation.spotId}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Located at section A, near the east elevator
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <Button 
                        onClick={navigateToCar}
                        className="bg-ipark-gold hover:bg-ipark-gold/90 text-ipark-navy flex items-center justify-center gap-2 py-6"
                      >
                        <Navigation className="h-6 w-6" />
                        <span className="font-semibold">Navigate to Vehicle</span>
                      </Button>
                      
                      <Button 
                        variant="destructive"
                        onClick={handleCancelParking}
                        className="bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2 py-6"
                      >
                        <XCircle className="h-6 w-6" />
                        <span className="font-semibold">Cancel Parking</span>
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        onClick={flashLights}
                        variant="outline" 
                        className="border-ipark-navy/20 hover:bg-ipark-navy/5 text-ipark-navy flex flex-col items-center justify-center gap-2 py-3"
                      >
                        <Send className="h-5 w-5" />
                        <span className="font-medium">Flash Lights</span>
                      </Button>
                      
                      <Button 
                        onClick={soundHorn}
                        variant="outline" 
                        className="border-ipark-navy/20 hover:bg-ipark-navy/5 text-ipark-navy flex flex-col items-center justify-center gap-2 py-3"
                      >
                        <Route className="h-5 w-5" />
                        <span className="font-medium">Sound Horn</span>
                      </Button>
                    </div>
                  </div>
                  
                  {navigationStarted && (
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h4 className="font-medium text-ipark-navy mb-4 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-ipark-gold" />
                        Navigation Instructions
                      </h4>
                      <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                        <li>Head to the nearest elevator or stairwell</li>
                        <li>Go to Level {carLocation.level}</li>
                        <li>Turn right out of the elevator</li>
                        <li>Follow signs to section A</li>
                        <li>Your vehicle is in spot {carLocation.spotId}</li>
                      </ol>
                      <p className="text-sm text-gray-500 mt-4">
                        Estimated walking time: 3 minutes
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindVehiclePage;
