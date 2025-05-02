
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from 'react';
import { CarLocation, ParkingSpot } from '@/types/parking';
import BookingSuccessToast from '@/components/BookingSuccessToast';
import { generateParkingSpots } from '@/utils/parkingUtils';
import ParkingCarousel from '@/components/parking/ParkingCarousel';
import SpotDetails from '@/components/parking/SpotDetails';

const ParkingPage = () => {
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>(generateParkingSpots());
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [reservedSpotInfo, setReservedSpotInfo] = useState({ spotId: '', level: 0 });
  
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
