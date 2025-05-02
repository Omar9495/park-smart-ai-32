import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from 'react';
import { CarLocation, ParkingSpot } from '@/types/parking';
import BookingSuccessToast from '@/components/BookingSuccessToast';
import { generateParkingSpots } from '@/utils/parkingUtils';
import ParkingCarousel from '@/components/parking/ParkingCarousel';
import SpotDetails from '@/components/parking/SpotDetails';
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { toast } from "sonner";

const ParkingPage = () => {
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>(generateParkingSpots());
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [reservedSpotInfo, setReservedSpotInfo] = useState({ spotId: '', level: 0 });
  const [hasReservation, setHasReservation] = useState(false);
  
  // Load reservation data from localStorage on component mount
  useEffect(() => {
    const savedLocation = localStorage.getItem('carLocation');
    if (savedLocation) {
      try {
        const location = JSON.parse(savedLocation);
        setReservedSpotInfo({
          spotId: location.spotId,
          level: location.level
        });
        setHasReservation(true);
        
        // Update corresponding spot status to reserved
        setParkingSpots(prevSpots =>
          prevSpots.map(spot =>
            (spot.number === location.spotId && spot.level === location.level)
              ? { ...spot, status: 'reserved' }
              : spot
          )
        );
        
        console.log('Loaded reservation from localStorage:', location);
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
    
    // Show success toast
    setReservedSpotInfo({
      spotId: selectedSpot.number,
      level: selectedSpot.level
    });
    setShowSuccessToast(true);
    setSelectedSpot(null);
    setHasReservation(true);
    
    // Store the reservation in local storage
    localStorage.setItem('carLocation', JSON.stringify({
      spotId: selectedSpot.number,
      level: selectedSpot.level
    }));
    
    console.log('Saved car location to localStorage:', {
      spotId: selectedSpot.number,
      level: selectedSpot.level
    });
  };
  
  const handleCancelParking = () => {
    // Find the reserved spot and make it available again
    setParkingSpots(prevSpots =>
      prevSpots.map(spot =>
        spot.number === reservedSpotInfo.spotId && spot.level === reservedSpotInfo.level
          ? { ...spot, status: 'available' }
          : spot
      )
    );
    
    setHasReservation(false);
    setReservedSpotInfo({ spotId: '', level: 0 });
    
    // Remove the car location from local storage
    localStorage.removeItem('carLocation');
    
    // Show a toast notification
    toast.success("Parking reservation canceled", {
      description: "Your parking spot has been released",
    });
    
    console.log('Removed car location from localStorage');
  };
  
  const closeSuccessToast = () => {
    setShowSuccessToast(false);
  };

  const handleLevelSelect = (level: number) => {
    setActiveLevel(level);
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ipark-gold to-ipark-maroon">
                Find and Reserve Parking
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse available spaces across all levels and secure your spot in advance
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {hasReservation && (
              <div className="mb-8 p-4 bg-white rounded-lg border border-ipark-gold/30 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-medium text-ipark-navy">
                      Current Reservation: <span className="font-bold">Level {reservedSpotInfo.level}, Spot {reservedSpotInfo.spotId}</span>
                    </p>
                    <p className="text-sm text-gray-500">Your vehicle's location has been saved</p>
                  </div>
                  <Button 
                    variant="destructive" 
                    onClick={handleCancelParking}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    <XCircle className="mr-2 h-4 w-4" />
                    Cancel Parking
                  </Button>
                </div>
              </div>
            )}
            
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
          </div>
        </div>
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
