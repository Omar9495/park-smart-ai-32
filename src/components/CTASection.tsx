
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CreditCard } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-ipark-navy to-ipark-navy/90 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ipark-gold opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ipark-coral opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-ipark-gold">Transform</span> Your Parking Experience?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied drivers who have revolutionized their urban parking experience with IPark's premium smart parking management system.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-ipark-gold hover:bg-ipark-gold/90 text-ipark-navy py-6 px-8 text-lg"
              asChild
            >
              <Link to="/parking">
                Find Parking Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg"
              asChild
            >
              <Link to="/payment-methods">
                <CreditCard className="mr-2 h-5 w-5" /> Manage Payment Methods
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
