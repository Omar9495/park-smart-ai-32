
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ipark-light to-white z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Smart Parking</span> for Modern Cities
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              IPark uses AI to revolutionize urban parking. Find, book, and navigate to available spots in real-time with our intelligent parking management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-ipark-blue hover:bg-blue-700 text-white text-lg px-8 py-6"
                asChild
              >
                <Link to="/get-started">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-ipark-blue text-ipark-blue hover:bg-ipark-light text-lg px-8 py-6"
                asChild
              >
                <Link to="/how-it-works">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Circular background for parking illustration */}
              <div className="absolute w-5/6 h-5/6 rounded-full bg-ipark-light top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Animated Parking Structure Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 aspect-square">
                  {/* Main parking structure */}
                  <div className="absolute inset-0 border-4 border-ipark-dark rounded-lg bg-white shadow-xl"></div>
                  
                  {/* Parking spots - Row 1 */}
                  <div className="absolute top-[15%] left-[15%] w-[30%] h-[25%] border-2 border-gray-300 rounded-md bg-ipark-green animate-pulse-slow"></div>
                  <div className="absolute top-[15%] right-[15%] w-[30%] h-[25%] border-2 border-gray-300 rounded-md bg-ipark-red"></div>
                  
                  {/* Parking spots - Row 2 */}
                  <div className="absolute bottom-[15%] left-[15%] w-[30%] h-[25%] border-2 border-gray-300 rounded-md bg-ipark-yellow"></div>
                  <div className="absolute bottom-[15%] right-[15%] w-[30%] h-[25%] border-2 border-gray-300 rounded-md bg-ipark-blue"></div>
                  
                  {/* Central aisle */}
                  <div className="absolute top-[15%] left-[49%] w-[2%] h-[70%] bg-gray-400"></div>
                  
                  {/* Car (animated) */}
                  <div className="absolute top-[50%] left-[40%] transform -translate-y-1/2 animate-float">
                    <div className="w-12 h-8 bg-ipark-accent rounded-md relative">
                      <div className="absolute top-1 left-1 right-1 h-3 bg-sky-200 rounded-sm"></div>
                      <div className="absolute -bottom-2 left-1 w-2 h-3 bg-gray-700 rounded-b-sm"></div>
                      <div className="absolute -bottom-2 right-1 w-2 h-3 bg-gray-700 rounded-b-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key features indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 md:mt-24">
          <div className="flex flex-col items-center p-4 text-center">
            <div className="w-12 h-12 bg-green-100 text-ipark-green rounded-full flex items-center justify-center mb-3">
              <div className="w-6 h-6 bg-ipark-green rounded-full"></div>
            </div>
            <h3 className="font-semibold">Available</h3>
          </div>
          
          <div className="flex flex-col items-center p-4 text-center">
            <div className="w-12 h-12 bg-red-100 text-ipark-red rounded-full flex items-center justify-center mb-3">
              <div className="w-6 h-6 bg-ipark-red rounded-full"></div>
            </div>
            <h3 className="font-semibold">Occupied</h3>
          </div>
          
          <div className="flex flex-col items-center p-4 text-center">
            <div className="w-12 h-12 bg-amber-100 text-ipark-yellow rounded-full flex items-center justify-center mb-3">
              <div className="w-6 h-6 bg-ipark-yellow rounded-full"></div>
            </div>
            <h3 className="font-semibold">Reserved</h3>
          </div>
          
          <div className="flex flex-col items-center p-4 text-center">
            <div className="w-12 h-12 bg-blue-100 text-ipark-blue rounded-full flex items-center justify-center mb-3">
              <div className="w-6 h-6 bg-ipark-blue rounded-full"></div>
            </div>
            <h3 className="font-semibold">Accessibility</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
