
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Info, Clock, MapPin, CreditCard, HelpCircle } from "lucide-react";

const InfoPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ipark-gold to-ipark-maroon">
                Parking Information
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about using our premium parking facilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Hours section */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-ipark-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-ipark-gold/10 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-ipark-gold" />
                </div>
                <h2 className="text-2xl font-bold text-ipark-navy">Operating Hours</h2>
              </div>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>6:00 AM - 11:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>8:00 AM - 12:00 AM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>8:00 AM - 10:00 PM</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  * Extended hours available during special events
                </p>
              </div>
            </div>
            
            {/* Locations section */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-ipark-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-ipark-gold/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-ipark-gold" />
                </div>
                <h2 className="text-2xl font-bold text-ipark-navy">Locations</h2>
              </div>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Downtown Center</h3>
                  <p className="text-gray-600">123 Main St, Downtown</p>
                  <p className="text-sm text-gray-500">4 levels, 350 spaces</p>
                </li>
                <li>
                  <h3 className="font-semibold">Westside Mall</h3>
                  <p className="text-gray-600">456 West Ave, Westside</p>
                  <p className="text-sm text-gray-500">6 levels, 520 spaces</p>
                </li>
                <li>
                  <h3 className="font-semibold">Airport Terminal</h3>
                  <p className="text-gray-600">789 Airport Blvd, Terminal 3</p>
                  <p className="text-sm text-gray-500">8 levels, 1200 spaces</p>
                </li>
              </ul>
            </div>
            
            {/* Rates section */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-ipark-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-ipark-gold/10 rounded-full flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-ipark-gold" />
                </div>
                <h2 className="text-2xl font-bold text-ipark-navy">Parking Rates</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">First Hour</span>
                  <span className="text-ipark-navy font-semibold">$5.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Additional Hours</span>
                  <span className="text-ipark-navy font-semibold">$3.00/hr</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Daily Maximum</span>
                  <span className="text-ipark-navy font-semibold">$25.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Monthly Pass</span>
                  <span className="text-ipark-navy font-semibold">$300.00</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="font-medium">Premium Reserved</span>
                  <span className="text-ipark-navy font-semibold">$450.00/mo</span>
                </div>
              </div>
            </div>
            
            {/* FAQ section */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-ipark-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-ipark-gold/10 rounded-full flex items-center justify-center">
                  <HelpCircle className="h-5 w-5 text-ipark-gold" />
                </div>
                <h2 className="text-2xl font-bold text-ipark-navy">FAQ</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">How do I pay for parking?</h3>
                  <p className="text-sm text-gray-600">You can pay using our mobile app, credit/debit card at payment kiosks, or set up automatic payments with a monthly subscription.</p>
                </div>
                <div>
                  <h3 className="font-semibold">What if I lost my parking ticket?</h3>
                  <p className="text-sm text-gray-600">Please visit the parking office with your ID and vehicle registration. A lost ticket fee of $20 may apply.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Is EV charging available?</h3>
                  <p className="text-sm text-gray-600">Yes, select locations offer EV charging stations at Levels 1 & 2. Check the mobile app for real-time availability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InfoPage;
