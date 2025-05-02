
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-ipark-navy">
              <span className="text-ipark-gold">I</span>Park
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium">
            Home
          </Link>
          <Link to="/features" className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium">
            Features
          </Link>
          <Link to="/how-it-works" className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium">
            How It Works
          </Link>
          <Link to="/contact" className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium">
            Contact
          </Link>
          <Button className="bg-ipark-gold hover:bg-ipark-maroon text-ipark-navy hover:text-white border border-ipark-gold/50">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 border-b border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-4">
            <Link 
              to="/" 
              className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/contact" 
              className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-ipark-gold hover:bg-ipark-maroon text-ipark-navy hover:text-white border border-ipark-gold/50">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
