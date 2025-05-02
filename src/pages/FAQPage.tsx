
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// FAQ Data
const faqs = [
  {
    id: "parking-hours",
    question: "What are your parking garage operating hours?",
    answer: "Our parking facilities are open 24/7, providing convenient access whenever you need to park. You can enter and exit at any time with your parking pass or ticket."
  },
  {
    id: "reservation",
    question: "How do I reserve a parking spot in advance?",
    answer: "You can easily reserve a parking spot through our mobile app or website. Simply select your desired location, date, and time, then complete the payment process to secure your spot."
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), Apple Pay, Google Pay, and PayPal. You can add your preferred payment method in the 'Payment Methods' section of your account."
  },
  {
    id: "cancellation",
    question: "What is your cancellation policy?",
    answer: "For reservations, you can cancel up to 24 hours before your scheduled parking time for a full refund. Cancellations within 24 hours of your reservation may be subject to a 50% cancellation fee."
  },
  {
    id: "monthly",
    question: "Do you offer monthly parking passes?",
    answer: "Yes, we offer monthly parking passes at discounted rates. Monthly pass holders get guaranteed parking spots and additional benefits like priority access and exclusive discounts on car wash services."
  },
  {
    id: "security",
    question: "How secure are your parking facilities?",
    answer: "All our parking facilities are equipped with 24/7 surveillance cameras, regular security patrols, and well-lit areas. We also use advanced license plate recognition technology to enhance security."
  },
  {
    id: "lost-ticket",
    question: "What should I do if I lose my parking ticket?",
    answer: "If you lose your parking ticket, visit the parking office or contact customer service through the intercom at the exit. You may need to provide identification and vehicle registration, and a lost ticket fee may apply."
  },
  {
    id: "ev-charging",
    question: "Do your parking garages have EV charging stations?",
    answer: "Yes, most of our parking facilities feature EV charging stations. You can filter locations with EV charging capabilities in our app or website when searching for parking."
  },
  {
    id: "app-usage",
    question: "How do I use the parking app to find my vehicle?",
    answer: "After parking, you can use our 'Find My Vehicle' feature in the app. The app will save your parking location and provide directions to help you locate your vehicle when you return."
  },
  {
    id: "accessibility",
    question: "Are your parking facilities accessible for people with disabilities?",
    answer: "Yes, all our parking facilities comply with ADA standards and include designated accessible parking spaces located near elevators and facility entrances. These spaces are clearly marked and require a valid disability parking permit."
  }
];

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(faqs);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() === "") {
      setFilteredFAQs(faqs);
      return;
    }
    
    const results = faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredFAQs(results);
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ipark-gold to-ipark-maroon">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our parking services
            </p>
            
            <form onSubmit={handleSearch} className="max-w-md mx-auto mb-12">
              <div className="flex items-center">
                <Input 
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rounded-r-none border-r-0"
                />
                <Button 
                  type="submit"
                  className="bg-ipark-gold hover:bg-ipark-maroon text-ipark-navy hover:text-white rounded-l-none"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-4 shadow-sm">
                    <AccordionTrigger className="text-lg font-medium py-4 hover:text-ipark-gold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8">
                <p className="text-lg text-gray-600">No results found for "{searchTerm}"</p>
                <Button 
                  variant="link" 
                  className="mt-4 text-ipark-gold"
                  onClick={() => {
                    setSearchTerm("");
                    setFilteredFAQs(faqs);
                  }}
                >
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
