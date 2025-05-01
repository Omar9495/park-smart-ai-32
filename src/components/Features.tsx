
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Shield, Navigation, LineChart, Clock, Search, CreditCard } from "lucide-react";

const features = [
  {
    icon: <Search className="h-8 w-8 text-ipark-blue" />,
    title: "Real-Time Availability",
    description: "View live updates of parking spot availability with our color-coded system for easy identification."
  },
  {
    icon: <Calendar className="h-8 w-8 text-ipark-blue" />,
    title: "Advance Booking",
    description: "Reserve your parking spot ahead of time to ensure availability when you arrive at your destination."
  },
  {
    icon: <Navigation className="h-8 w-8 text-ipark-blue" />,
    title: "GPS Navigation",
    description: "Receive turn-by-turn directions to your assigned parking spot with our integrated navigation system."
  },
  {
    icon: <Shield className="h-8 w-8 text-ipark-blue" />,
    title: "Secure Access",
    description: "Unique access codes verify legitimate bookings and enhance security throughout the parking facility."
  },
  {
    icon: <MapPin className="h-8 w-8 text-ipark-blue" />,
    title: "Vehicle Location",
    description: "Never forget where you parked with our vehicle tracking feature that marks your exact parking location."
  },
  {
    icon: <LineChart className="h-8 w-8 text-ipark-blue" />,
    title: "Usage Analytics",
    description: "Access detailed analytics about your parking history, patterns, and expenses for better planning."
  },
  {
    icon: <Clock className="h-8 w-8 text-ipark-blue" />,
    title: "Time Management",
    description: "Extend your parking duration remotely when meetings run long or plans change unexpectedly."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-ipark-blue" />,
    title: "Seamless Payments",
    description: "Handle all parking payments through our platform with multiple secure payment options."
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Smart Features</span> for Effortless Parking
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            IPark combines cutting-edge technology with user-centered design to deliver a seamless parking experience from start to finish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
