
import { ParkingSpot } from "@/types/parking";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import ParkingLevelDisplay from "./ParkingLevelDisplay";
import { cn } from "@/lib/utils";

interface ParkingCarouselProps {
  parkingSpots: ParkingSpot[];
  activeLevel: number;
  selectedSpot: ParkingSpot | null;
  onSpotClick: (spot: ParkingSpot) => void;
  onLevelSelect: (level: number) => void;
}

const ParkingCarousel = ({ 
  parkingSpots, 
  activeLevel, 
  selectedSpot, 
  onSpotClick, 
  onLevelSelect 
}: ParkingCarouselProps) => {
  
  // Get spots for the active level in carousel view
  const getLevelSpots = (level: number) => {
    return parkingSpots.filter(spot => spot.level === level);
  };
  
  return (
    <>
      <div className="mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {[1, 2, 3, 4].map((level) => (
              <CarouselItem key={level}>
                <ParkingLevelDisplay 
                  level={level} 
                  spots={getLevelSpots(level)} 
                  selectedSpot={selectedSpot} 
                  onSpotClick={onSpotClick} 
                />
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
            onClick={() => onLevelSelect(level)}
            aria-label={`View Level ${level}`}
          />
        ))}
      </div>
    </>
  );
};

export default ParkingCarousel;
