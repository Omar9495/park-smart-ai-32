
import { useState, useEffect } from 'react';
import { CarLocation, ParkingSpot } from '@/types/parking';
import BookingSuccessToast from './BookingSuccessToast';
import { generateParkingSpots } from '@/utils/parkingUtils';
import CarLocator from './parking/CarLocator';
import ParkingCarousel from './parking/ParkingCarousel';
import SpotDetails from './parking/SpotDetails';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const ParkingDemo = () => {
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>(generateParkingSpots());
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [reservedSpotInfo, setReservedSpotInfo] = useState({ spotId: '', level: 0 });
  const [showCarLocator, setShowCarLocator] = useState(false);
  const [carLocation, setCarLocation] = useState<CarLocation>(null);
  
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
    
    // Save to localStorage
    localStorage.setItem('carLocation', JSON.stringify(newCarLocation));
    
    // Update state
    setReservedSpotInfo({
      spotId: selectedSpot.number,
      level: selectedSpot.level
    });
    setShowSuccessToast(true);
    setCarLocation(newCarLocation);
    setSelectedSpot(null);
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-ipark-cream" id="demo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ipark-gold to-ipark-maroon">Interactive Demo</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience our premium parking management system in action. Select available spots to make a reservation.
          </p>
          
          <div className="mt-6">
            <Button className="bg-ipark-coral hover:bg-ipark-maroon text-white" asChild>
              <Link to="/parking">
                Go to Full Parking Page
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
