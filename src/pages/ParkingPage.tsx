
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { ParkingSpot, CarLocation } from "@/types/parking";
import { generateParkingSpots } from "@/utils/parkingUtils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParkingCarousel from "@/components/parking/ParkingCarousel";
import SpotDetails from "@/components/parking/SpotDetails";
import CarLocator from "@/components/parking/CarLocator";
import BookingSuccessToast from "@/components/BookingSuccessToast";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

const ParkingPage = () => {
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>(generateParkingSpots());
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [reservedSpotInfo, setReservedSpotInfo] = useState({ spotId: '', level: 0 });
  const [showCarLocator, setShowCarLocator] = useState(false);
  const [carLocation, setCarLocation] = useState<CarLocation>(null);
  const navigate = useNavigate();
  
  // Load car location from localStorage on component mount
  useEffect(() => {
    const savedLocation = localStorage.getItem('carLocation');
    if (savedLocation) {
      try {
        const location = JSON.parse(savedLocation) as CarLocation;
        setCarLocation(location);
        setReservedSpotInfo({
          spotId: location?.spotId || '',
          level: location?.level || 0
        });
      } catch (error) {
        console.error('Failed to parse car location from localStorage', error);
      }
    }
  }, []);
  
  const handleSpotClick = (spot: ParkingSpot) => {
    if (spot.status === 'occupied') return;
    setSelectedSpot(spot);
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
    
    const newCarLocation: CarLocation = {
      spotId: selectedSpot.number,
      level: selectedSpot.level
    };
    
    localStorage.setItem('carLocation', JSON.stringify(newCarLocation));
    
    setReservedSpotInfo({
      spotId: selectedSpot.number,
      level: selectedSpot.level
    });
    setShowSuccessToast(true);
    setCarLocation(newCarLocation);
    setSelectedSpot(null);
    
    toast.success("Spot reserved successfully!");
  };
  
  const closeSuccessToast = () => {
    setShowSuccessToast(false);
  };

  const toggleCarLocator = () => {
    setShowCarLocator(!showCarLocator);
  };

  const handleLevelSelect = (level: number) => {
    setActiveLevel(level);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <section className="py-12 bg-gradient-to-b from-ipark-cream to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-ipark-gold to-ipark-maroon">
                  Find and Reserve Parking
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Browse available parking spots and make a reservation with our premium smart parking system.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="bg-ipark-gold hover:bg-ipark-maroon text-ipark-navy hover:text-white"
                  asChild
                >
                  <Link to="/find-vehicle">
                    Find My Vehicle
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-ipark-gold text-ipark-gold hover:bg-ipark-gold/10 flex items-center gap-2"
                  asChild
                >
                  <Link to="/payment-methods">
                    <CreditCard className="h-5 w-5" /> Manage Payment Methods
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Car Locator Component */}
              <CarLocator 
                carLocation={carLocation} 
                showCarLocator={showCarLocator} 
                toggleCarLocator={toggleCarLocator}
                setShowCarLocator={setShowCarLocator}
              />
              
              {!showCarLocator && (
                <>
                  {/* Parking Carousel Component */}
                  <ParkingCarousel 
                    parkingSpots={parkingSpots} 
                    activeLevel={activeLevel} 
                    selectedSpot={selectedSpot}
                    onSpotClick={handleSpotClick}
                    onLevelSelect={handleLevelSelect}
                  />
                  
                  {/* Spot Details Component */}
                  {selectedSpot && (
                    <SpotDetails 
                      selectedSpot={selectedSpot}
                      onReserve={handleReserveSpot}
                      onCancel={() => setSelectedSpot(null)}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <BookingSuccessToast 
        show={showSuccessToast} 
        spotId={reservedSpotInfo.spotId} 
        level={reservedSpotInfo.level}
        onClose={closeSuccessToast}
      />
    </div>
  );
};

export default ParkingPage;
