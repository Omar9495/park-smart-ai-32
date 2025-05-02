
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InfoPage from "./pages/InfoPage";
import ParkingPage from "./pages/ParkingPage";
import FindVehiclePage from "./pages/FindVehiclePage";
import ReviewsPage from "./pages/ReviewsPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
