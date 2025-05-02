
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // Only show banner after a slight delay to improve user experience
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowConsent(false);
  };

  const dismissBanner = () => {
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6 animate-fade-in">
      <Button 
        size="icon" 
        variant="ghost" 
        className="absolute top-2 right-2" 
        onClick={dismissBanner}
      >
        <X className="h-4 w-4" />
      </Button>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <h3 className="font-bold text-lg mb-2">We use cookies</h3>
            <p className="text-sm text-gray-600">
              We use cookies to improve your experience on our site, show you personalized
              content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
              Read our <Link to="/privacy" className="text-ipark-gold hover:underline">Privacy Policy</Link> for more information.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={declineCookies}
            >
              Decline
            </Button>
            <Button 
              className="bg-ipark-gold hover:bg-ipark-maroon text-ipark-navy hover:text-white" 
              size="sm"
              onClick={acceptCookies}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
