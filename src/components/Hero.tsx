
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 luxury-bg z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-ipark-gold/20 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-ipark-gold/20 rounded-full"></div>
      <div className="absolute top-40 right-20 w-12 h-12 border-2 border-ipark-gold/30 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-ipark-coral">Premium</span> Parking <br />
              <span className="text-ipark-navy">for the</span> <span className="text-ipark-gold">Discerning</span> Driver
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              IPark uses cutting-edge technology to revolutionize urban parking. Find, book, and navigate to available spots in real-time with our premium parking management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-ipark-coral hover:bg-ipark-maroon text-white text-lg px-8 py-6"
                asChild
              >
                <Link to="/get-started">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-ipark-coral text-ipark-coral hover:bg-ipark-coral/5 text-lg px-8 py-6"
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
              <div className="absolute w-5/6 h-5/6 rounded-full bg-gradient-to-br from-ipark-cream to-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-ipark-gold/30"></div>
              
              {/* Logo in the center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3">
                <img 
                  src="/lovable-uploads/9d144a19-6e3a-46fd-a0b9-8d2b89f2e86c.png"
                  alt="IPark Logo"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Animated elements around the logo */}
              <div className="absolute top-[10%] left-[20%] w-12 h-12 rounded-full bg-ipark-gold/10 animate-pulse-slow"></div>
              <div className="absolute top-[70%] right-[20%] w-16 h-16 rounded-full bg-ipark-coral/10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-[40%] right-[10%] w-8 h-8 rounded-full bg-ipark-navy/10 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Key features indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 md:mt-24">
          <div className="flex flex-col items-center p-4 text-center luxury-card rounded-lg">
            <div className="w-12 h-12 bg-green-100 text-ipark-gold rounded-full flex items-center justify-center mb-3 border border-ipark-gold/20">
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="font-semibold">Available</h3>
          </div>
          
          <div className="flex flex-col items-center p-4 text-center luxury-card rounded-lg">
            <div className="w-12 h-12 bg-red-100 text-ipark-coral rounded-full flex items-center justify-center mb-3 border border-ipark-gold/20">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
            <h3 className="font-semibold">Occupied</h3>
          </div>
          
          <div className="flex flex-col items-center p-4 text-center luxury-card rounded-lg">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-3 border border-ipark-gold/20">
              <div className="w-6 h-6 bg-amber-500 rounded-full"></div>
            </div>
            <h3 className="font-semibold">Reserved</h3>
          </div>
          
          <div className="flex flex-col items-center p-4 text-center luxury-card rounded-lg">
            <div className="w-12 h-12 bg-blue-100 text-ipark-navy rounded-full flex items-center justify-center mb-3 border border-ipark-gold/20">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="font-semibold">Accessibility</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
