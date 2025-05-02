
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InfoPage from "./pages/InfoPage";
import ParkingPage from "./pages/ParkingPage";
import FindVehiclePage from "./pages/FindVehiclePage";
import ReviewsPage from "./pages/ReviewsPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/parking" element={<ParkingPage />} />
            <Route path="/find-vehicle" element={<FindVehiclePage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/payment-methods" element={<PaymentMethodPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
