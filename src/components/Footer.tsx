
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ipark-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <svg 
                className="h-8 w-8 mr-2 text-ipark-accent" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 3v2h-2V3h2zm-2 6h2V7h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2zm-4-14v2h-2V3h2zm-2 6h2V7h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2zM6 3v2H4V3h2zM4 9h2V7H4v2zm0 4h2v-2H4v2zm0 4h2v-2H4v2zm14 2v2H2v-2h16z"/>
              </svg>
              <span className="text-white text-xl font-bold">
                <span className="text-ipark-accent">I</span>Park
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Revolutionizing urban parking with AI-powered solutions for a seamless, efficient experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ipark-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ipark-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ipark-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ipark-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors">Support Center</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/developers" className="text-gray-400 hover:text-white transition-colors">Developers</Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-gray-400 hover:text-white transition-colors">Partnerships</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/10 text-white placeholder:text-gray-400"
              />
              <Button className="bg-ipark-accent hover:bg-blue-500">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm order-2 md:order-1">
            &copy; {new Date().getFullYear()} IPark. All rights reserved.
          </p>
          <div className="flex space-x-4 mb-4 md:mb-0 order-1 md:order-2">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
