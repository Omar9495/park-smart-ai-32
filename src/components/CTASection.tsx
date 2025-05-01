
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-ipark-blue to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Parking Experience?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of drivers who have simplified their daily commute with IPark's intelligent parking management system.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-ipark-blue hover:bg-ipark-light text-lg px-6 py-6"
          >
            Download the App
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 text-lg px-6 py-6"
          >
            Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
