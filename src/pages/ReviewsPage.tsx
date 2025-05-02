
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, User, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  location: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Michael Chen",
    date: "April 25, 2025",
    rating: 5,
    comment: "The iPark system made finding a space so easy! I love how I can see exactly where available spots are and reserve in advance. The car finding feature saved me so much time.",
    location: "Downtown Center"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    date: "April 22, 2025",
    rating: 4,
    comment: "Great experience overall. The navigation to my spot was precise and helpful. The only thing that could be improved is the payment process - it took a few extra clicks than necessary.",
    location: "Westside Mall"
  },
  {
    id: 3,
    name: "David Rodriguez",
    date: "April 18, 2025",
    rating: 5,
    comment: "I've been using iPark for months now and it's consistently reliable. The app remembers my preferences and makes parking stress-free. Highly recommended!",
    location: "Downtown Center"
  },
  {
    id: 4,
    name: "Emily Taylor",
    date: "April 15, 2025",
    rating: 3,
    comment: "The parking spot reservation works well, but I had some trouble with the car locator feature. It showed my car on the wrong level initially. Customer service was helpful in resolving the issue.",
    location: "Airport Terminal"
  },
  {
    id: 5,
    name: "Robert Kim",
    date: "April 10, 2025",
    rating: 5,
    comment: "Absolutely love the real-time availability updates. It's so convenient to know exactly which spots are open before I even arrive at the garage. The premium reserved spots are worth every penny.",
    location: "Downtown Center"
  },
];

const ReviewsPage = () => {
  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [ratingInput, setRatingInput] = useState(5);
  const [locationInput, setLocationInput] = useState("Downtown Center");
  
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nameInput || !commentInput) {
      toast.error("Please complete all required fields");
      return;
    }
    
    toast.success("Thank you for your review!", {
      description: "Your feedback has been submitted successfully.",
    });
    
    // Reset form
    setNameInput("");
    setCommentInput("");
    setRatingInput(5);
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ipark-gold to-ipark-maroon">
                Customer Reviews
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers are saying about their iPark experience
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-lg border border-ipark-gold/20 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-ipark-navy rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ipark-navy">{review.name}</h3>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="bg-ipark-cream px-3 py-1 rounded-full text-xs font-medium text-ipark-navy">
                      {review.location}
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? "text-ipark-gold fill-ipark-gold" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg border border-ipark-gold/20 p-6">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-5 w-5 text-ipark-gold" />
                <h2 className="text-2xl font-bold text-ipark-navy">Leave a Review</h2>
              </div>
              
              <form onSubmit={handleSubmitReview}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ipark-gold/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <select
                      id="location"
                      value={locationInput}
                      onChange={(e) => setLocationInput(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ipark-gold/50"
                    >
                      <option value="Downtown Center">Downtown Center</option>
                      <option value="Westside Mall">Westside Mall</option>
                      <option value="Airport Terminal">Airport Terminal</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRatingInput(star)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-6 w-6 ${
                            star <= ratingInput
                              ? "text-ipark-gold fill-ipark-gold"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    id="comment"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ipark-gold/50"
                    required
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="bg-ipark-gold hover:bg-ipark-gold/90 text-ipark-navy font-semibold w-full"
                >
                  Submit Review
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
