
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-ipark-navy to-black text-white relative overflow-hidden">
      {/* Luxury decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ipark-gold/20 via-ipark-gold to-ipark-gold/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ipark-gold/20 via-ipark-gold to-ipark-gold/20"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-24 h-24 border border-ipark-gold/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-ipark-gold/10 rounded-full"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex flex-col items-center justify-center">
          <span className="text-ipark-gold mb-2">Elevate</span>
          <span>Your Parking Experience</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the elite community of drivers who have transformed their daily commute with IPark's premium parking management system.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-ipark-gold text-ipark-navy hover:bg-white text-lg px-6 py-6 border border-ipark-gold shine-effect"
          >
            Download the App
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-ipark-gold text-ipark-gold hover:bg-ipark-gold/10 text-lg px-6 py-6"
          >
            Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Luxury badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
          <div className="flex items-center bg-black/30 px-4 py-2 rounded-full border border-ipark-gold/20">
            <span className="text-ipark-gold font-semibold">Premium Service</span>
          </div>
          <div className="flex items-center bg-black/30 px-4 py-2 rounded-full border border-ipark-gold/20">
            <span className="text-ipark-gold font-semibold">24/7 Support</span>
          </div>
          <div className="flex items-center bg-black/30 px-4 py-2 rounded-full border border-ipark-gold/20">
            <span className="text-ipark-gold font-semibold">Valet Options</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
