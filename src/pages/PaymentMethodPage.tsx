
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentMethodForm from "@/components/payment/PaymentMethodForm";
import SavedPaymentMethods from "@/components/payment/SavedPaymentMethods";
import { useState, useEffect } from "react";
import { PaymentMethod } from "@/types/payment";

const PaymentMethodPage = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  // Load saved payment methods from localStorage on component mount
  useEffect(() => {
    const savedMethods = localStorage.getItem('paymentMethods');
    if (savedMethods) {
      try {
        setPaymentMethods(JSON.parse(savedMethods));
      } catch (error) {
        console.error('Failed to parse payment methods from localStorage', error);
      }
    }
  }, []);

  const addPaymentMethod = (newMethod: PaymentMethod) => {
    const updatedMethods = [...paymentMethods, newMethod];
    setPaymentMethods(updatedMethods);
    localStorage.setItem('paymentMethods', JSON.stringify(updatedMethods));
  };

  const removePaymentMethod = (id: string) => {
    const updatedMethods = paymentMethods.filter(method => method.id !== id);
    setPaymentMethods(updatedMethods);
    localStorage.setItem('paymentMethods', JSON.stringify(updatedMethods));
  };

  const setDefaultMethod = (id: string) => {
    const updatedMethods = paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    }));
    setPaymentMethods(updatedMethods);
    localStorage.setItem('paymentMethods', JSON.stringify(updatedMethods));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ipark-gold to-ipark-maroon">
                Payment Methods
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage your payment methods for a seamless parking experience
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <PaymentMethodForm onAddMethod={addPaymentMethod} />
            </div>
            <div className="lg:col-span-3">
              <SavedPaymentMethods 
                methods={paymentMethods}
                onRemove={removePaymentMethod}
                onSetDefault={setDefaultMethod}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentMethodPage;
