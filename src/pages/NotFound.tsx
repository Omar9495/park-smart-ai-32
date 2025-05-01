
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ipark-light">
      <div className="text-center max-w-md px-4">
        <div className="mb-8">
          <svg 
            className="h-24 w-24 mx-auto text-ipark-blue" 
            viewBox="0 0 24 24" 
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3v2h-2V3h2zm-2 6h2V7h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2zm-4-14v2h-2V3h2zm-2 6h2V7h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2zM6 3v2H4V3h2zM4 9h2V7H4v2zm0 4h2v-2H4v2zm0 4h2v-2H4v2zm14 2v2H2v-2h16z"/>
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-ipark-dark">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! We can't seem to find the parking spot you're looking for.</p>
        <Button 
          className="bg-ipark-blue hover:bg-blue-700 text-white"
          asChild
        >
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
