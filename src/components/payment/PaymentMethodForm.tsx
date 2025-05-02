
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { PaymentMethod } from "@/types/payment";
import { CreditCard } from "lucide-react";

// Define the form schema with less strict validation
const formSchema = z.object({
  cardName: z.string().min(2, "Name is required"),
  cardNumber: z.string()
    .min(4, "Card number required") // Allow any card number with at least 4 digits
    .regex(/^[0-9\s]*$/, "Card number should only contain digits"),
  expiryMonth: z.string()
    .regex(/^(0[1-9]|1[0-2])$/, "Month must be between 01-12"),
  expiryYear: z.string()
    .regex(/^[0-9]{2}$/, "Year must be 2 digits")
    .refine(value => {
      const currentYear = new Date().getFullYear() % 100;
      return parseInt(value) >= currentYear;
    }, "Year cannot be in the past"),
  cvv: z.string()
    .regex(/^[0-9]{3,4}$/, "CVV must be 3-4 digits"),
});

interface PaymentMethodFormProps {
  onAddMethod: (method: PaymentMethod) => void;
}

const PaymentMethodForm = ({ onAddMethod }: PaymentMethodFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    },
  });

  const formatCardNumber = (value: string) => {
    // Remove any non-digit characters
    const digits = value.replace(/\D/g, "");
    // Format with spaces every 4 digits
    const groups = digits.match(/.{1,4}/g);
    return groups ? groups.join(" ") : digits;
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Clean up card number by removing spaces
    const cleanCardNumber = values.cardNumber.replace(/\s/g, "");
    
    const newMethod: PaymentMethod = {
      id: uuidv4(),
      cardName: values.cardName,
      lastFourDigits: cleanCardNumber.slice(-4),
      expiryMonth: values.expiryMonth,
      expiryYear: values.expiryYear,
      isDefault: false,
      type: getCardType(cleanCardNumber),
    };

    onAddMethod(newMethod);
    toast.success("Payment method added successfully");
    form.reset();
  };

  // Card type detection based on first digits - but accept any card
  const getCardType = (cardNumber: string): "visa" | "mastercard" | "amex" | "discover" | "other" => {
    const firstDigit = cardNumber.charAt(0);
    const firstTwoDigits = cardNumber.substring(0, 2);
    
    if (firstDigit === "4") return "visa";
    if (firstTwoDigits >= "51" && firstTwoDigits <= "55") return "mastercard";
    if (firstTwoDigits === "34" || firstTwoDigits === "37") return "amex";
    if (cardNumber.startsWith("6011") || cardNumber.startsWith("65")) return "discover";
    return "other"; // Accept any other card format
  };

  return (
    <Card className="shadow-md border-ipark-gold/30">
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <CreditCard className="mr-2 text-ipark-gold" />
          Add Payment Method
        </h3>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name on Card</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Any card number" 
                      maxLength={19} 
                      {...field} 
                      onChange={(e) => {
                        // Format as user types
                        const formatted = formatCardNumber(e.target.value);
                        e.target.value = formatted;
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <FormField
                  control={form.control}
                  name="expiryMonth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Month</FormLabel>
                      <FormControl>
                        <Input placeholder="MM" maxLength={2} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="expiryYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <FormControl>
                        <Input placeholder="YY" maxLength={2} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVV</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="123" maxLength={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-ipark-gold hover:bg-ipark-gold/80 text-ipark-navy">
              Add Payment Method
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodForm;
