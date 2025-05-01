
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Find a Spot",
      description: "Open the IPark app and view real-time parking availability in your destination area with our color-coded system.",
      imagePosition: "right"
    },
    {
      number: "02",
      title: "Book & Pay",
      description: "Select your preferred parking spot, specify your parking duration, and complete secure payment in just a few taps.",
      imagePosition: "left"
    },
    {
      number: "03",
      title: "Navigate & Park",
      description: "Follow the in-app GPS navigation to your assigned parking spot and look for matching LED indicators.",
      imagePosition: "right"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-ipark-light" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How IPark Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our intelligent parking system simplifies finding and securing parking in three easy steps.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col ${step.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
              {/* Step content */}
              <div className="flex-1">
                <div className="inline-block text-4xl font-bold text-ipark-blue mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="h-5 w-5 text-ipark-green mr-2 mt-0.5" />
                      <span className="text-gray-700">
                        {step.title === "Find a Spot" && item === 1 && "View occupancy rates across multiple parking levels"}
                        {step.title === "Find a Spot" && item === 2 && "Filter by pricing, accessibility, or vehicle size"}
                        {step.title === "Find a Spot" && item === 3 && "Compare options based on proximity to destination"}
                        
                        {step.title === "Book & Pay" && item === 1 && "Reserve spots up to 2 weeks in advance"}
                        {step.title === "Book & Pay" && item === 2 && "Multiple secure payment options available"}
                        {step.title === "Book & Pay" && item === 3 && "Receive instant confirmation with access code"}
                        
                        {step.title === "Navigate & Park" && item === 1 && "Turn-by-turn directions to your exact spot"}
                        {step.title === "Navigate & Park" && item === 2 && "Automated entry gate access with your booking code"}
                        {step.title === "Navigate & Park" && item === 3 && "System records your parking location for easy retrieval"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Step illustration */}
              <div className="flex-1">
                <div className={`bg-white p-6 md:p-8 rounded-xl shadow-lg overflow-hidden`}>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    {step.title === "Find a Spot" && (
                      <div className="w-full h-full p-4 relative">
                        {/* App search interface mockup */}
                        <div className="absolute inset-0 bg-white rounded-lg border border-gray-200 overflow-hidden">
                          {/* App header */}
                          <div className="h-12 bg-ipark-blue flex items-center px-4">
                            <div className="w-24 h-4 bg-white/30 rounded"></div>
                          </div>
                          
                          {/* Search bar */}
                          <div className="p-3">
                            <div className="h-10 bg-gray-100 rounded-full flex items-center px-3">
                              <div className="w-4 h-4 rounded-full bg-gray-400 mr-2"></div>
                              <div className="w-36 h-3 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                          
                          {/* Map view */}
                          <div className="flex-1 bg-blue-50 p-3 relative">
                            {/* Map pins */}
                            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-ipark-green"></div>
                            <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-ipark-yellow"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-ipark-red"></div>
                            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-ipark-blue"></div>
                            
                            <div className="absolute bottom-0 right-0 p-2">
                              <div className="h-8 w-8 bg-white rounded-full shadow flex items-center justify-center">
                                <div className="h-3 w-3 bg-ipark-blue rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {step.title === "Book & Pay" && (
                      <div className="w-full h-full p-4 relative">
                        {/* Payment interface mockup */}
                        <div className="absolute inset-0 bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
                          {/* App header */}
                          <div className="h-12 bg-ipark-blue flex items-center justify-center">
                            <div className="w-32 h-4 bg-white/30 rounded"></div>
                          </div>
                          
                          {/* Spot info */}
                          <div className="p-4 border-b">
                            <div className="flex justify-between items-center mb-2">
                              <div className="w-24 h-4 bg-gray-800 rounded"></div>
                              <div className="w-16 h-6 bg-ipark-green rounded-full"></div>
                            </div>
                            <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
                            <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                          </div>
                          
                          {/* Time selection */}
                          <div className="p-4 border-b">
                            <div className="w-20 h-4 bg-gray-700 rounded mb-3"></div>
                            <div className="flex justify-between">
                              <div className="w-24 h-8 bg-gray-100 rounded border border-gray-300"></div>
                              <div className="w-24 h-8 bg-gray-100 rounded border border-gray-300"></div>
                            </div>
                          </div>
                          
                          {/* Payment method */}
                          <div className="p-4 flex-1">
                            <div className="w-32 h-4 bg-gray-700 rounded mb-3"></div>
                            <div className="h-12 bg-gray-100 rounded mb-3 flex items-center px-3">
                              <div className="w-8 h-6 bg-blue-500 rounded mr-3"></div>
                              <div className="w-20 h-3 bg-gray-400 rounded"></div>
                              <div className="ml-auto w-12 h-6 rounded-full bg-gray-300"></div>
                            </div>
                            
                            <div className="mt-auto">
                              <div className="h-12 bg-ipark-blue rounded flex items-center justify-center">
                                <div className="w-20 h-4 bg-white/30 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {step.title === "Navigate & Park" && (
                      <div className="w-full h-full p-4 relative">
                        {/* Navigation interface mockup */}
                        <div className="absolute inset-0 bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
                          {/* Navigation header */}
                          <div className="h-12 bg-ipark-blue flex items-center justify-between px-4">
                            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                            <div className="w-24 h-4 bg-white/30 rounded"></div>
                            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                          </div>
                          
                          {/* Map view */}
                          <div className="flex-1 bg-blue-50 relative">
                            {/* Route line */}
                            <div className="absolute top-0 left-1/2 w-2 h-full bg-ipark-blue"></div>
                            
                            {/* Destination marker */}
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12">
                              <div className="w-8 h-8 bg-ipark-blue rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-full"></div>
                              </div>
                              <div className="w-6 h-6 bg-white rounded-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 shadow"></div>
                            </div>
                            
                            {/* Car indicator */}
                            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                          </div>
                          
                          {/* Navigation instructions */}
                          <div className="h-24 bg-white p-4 border-t">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-gray-100 rounded-full mr-3 flex items-center justify-center">
                                <div className="w-4 h-4 border-t-2 border-r-2 border-ipark-blue transform rotate-45"></div>
                              </div>
                              <div>
                                <div className="w-32 h-4 bg-gray-800 rounded mb-1"></div>
                                <div className="w-24 h-3 bg-gray-400 rounded"></div>
                              </div>
                            </div>
                            <div className="flex justify-between mt-4">
                              <div className="w-20 h-4 bg-gray-600 rounded"></div>
                              <div className="w-16 h-6 bg-ipark-blue rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Experience Smart Parking?</h3>
          <Button 
            className="bg-ipark-blue hover:bg-blue-700 text-white text-lg px-8 py-6"
          >
            Download the App
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
