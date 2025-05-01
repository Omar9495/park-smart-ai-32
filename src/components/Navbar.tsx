
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
    <nav className="w-full py-4 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg 
              className="h-8 w-8 mr-2 text-ipark-blue" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 3v2h-2V3h2zm-2 6h2V7h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2zm-4-14v2h-2V3h2zm-2 6h2V7h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2zM6 3v2H4V3h2zM4 9h2V7H4v2zm0 4h2v-2H4v2zm0 4h2v-2H4v2zm14 2v2H2v-2h16z"/>
            </svg>
            <span className="text-ipark-dark text-xl font-bold">
              <span className="text-ipark-blue">I</span>Park
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-ipark-blue transition-colors font-medium">
            Home
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-ipark-blue transition-colors font-medium">
            Features
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-ipark-blue transition-colors font-medium">
            How It Works
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-ipark-blue transition-colors font-medium">
            Contact
          </Link>
          <Button className="bg-ipark-blue hover:bg-blue-700 text-white">
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
              className="text-gray-700 hover:text-ipark-blue transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-gray-700 hover:text-ipark-blue transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-700 hover:text-ipark-blue transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-ipark-blue transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-ipark-blue hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
