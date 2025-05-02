
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookingSuccessToastProps {
  show: boolean;
  spotId: string;
  level: number;
  onClose: () => void;
}

const BookingSuccessToast = ({ show, spotId, level, onClose }: BookingSuccessToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for fade animation
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div 
      className={cn(
        "fixed bottom-4 right-4 z-50 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-ipark-gold/20 text-ipark-gold">
        <Check className="w-5 h-5" />
      </div>
      <div className="ml-3 text-sm font-normal">
        <div className="text-sm font-bold text-ipark-navy">Booking Confirmed!</div>
        <div className="text-xs text-gray-600">Your spot {spotId} on Level {level} has been reserved.</div>
      </div>
      <button 
        type="button" 
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
      >
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default BookingSuccessToast;
