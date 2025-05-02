
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Car, Info, Star, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Here you would implement actual search functionality
    }
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

        {/* Search Bar - Desktop */}
        <div className="hidden md:block md:w-1/3">
          <form onSubmit={handleSearch} className="flex items-center">
            <Input 
              type="text" 
              placeholder="Search parking spots..." 
              className="rounded-l-md border-r-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              className="bg-ipark-gold hover:bg-ipark-maroon text-ipark-navy hover:text-white rounded-l-none"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium">
            Home
          </Link>
          <Link to="/info" className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium flex items-center gap-1">
            <Info className="h-4 w-4" />
            Information
          </Link>
          <Link to="/parking" className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Parking
          </Link>
          <Link to="/find-vehicle" className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium flex items-center gap-1">
            <Car className="h-4 w-4" />
            Find Vehicle
          </Link>
          <Link to="/reviews" className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium flex items-center gap-1">
            <Star className="h-4 w-4" />
            Reviews
          </Link>
          <Link to="/contact" className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium">
            Contact
          </Link>
          <Button className="bg-ipark-gold hover:bg-ipark-maroon text-ipark-navy hover:text-white border border-ipark-gold/50" asChild>
            <Link to="/parking">
              Find Parking
            </Link>
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
          <div className="p-4">
            <form onSubmit={handleSearch} className="flex items-center mb-4">
              <Input 
                type="text" 
                placeholder="Search parking spots..." 
                className="rounded-l-md border-r-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-ipark-gold hover:bg-ipark-maroon text-ipark-navy hover:text-white rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/info" 
                className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium py-2 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Info className="h-4 w-4" />
                Information
              </Link>
              <Link 
                to="/parking" 
                className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium py-2 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MapPin className="h-4 w-4" />
                Parking
              </Link>
              <Link 
                to="/find-vehicle" 
                className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium py-2 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Car className="h-4 w-4" />
                Find Vehicle
              </Link>
              <Link 
                to="/reviews" 
                className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium py-2 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Star className="h-4 w-4" />
                Reviews
              </Link>
              <Link 
                to="/contact" 
                className="text-ipark-navy hover:text-ipark-gold transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                className="bg-ipark-gold hover:bg-ipark-maroon text-ipark-navy hover:text-white border border-ipark-gold/50"
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <Link to="/parking">
                  Find Parking
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
