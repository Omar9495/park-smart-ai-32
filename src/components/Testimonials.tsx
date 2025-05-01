
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Daily Commuter",
    content: "IPark has completely transformed my daily commute. I used to waste at least 15 minutes every morning searching for parking, but now I reserve my spot in advance and drive straight to it. The LED indicators make it so easy to find exactly where I need to go!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content: "As a business owner with multiple downtown meetings, finding parking was always stressful. IPark's reservation system and navigation have saved me countless hours and reduced my stress levels significantly.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Urban Planner",
    content: "From a professional perspective, IPark is exactly the kind of smart city solution we need. The real-time data and efficient use of parking resources help reduce traffic congestion and emissions from cars circling for parking.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-ipark-light" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">What Our Users Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how IPark is transforming parking experiences across cities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      size={20}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ipark-blue to-ipark-accent text-white flex items-center justify-center font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
