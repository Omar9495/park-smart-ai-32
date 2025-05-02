
export type PaymentMethod = {
  id: string;
  cardName: string;
  lastFourDigits: string;
  expiryMonth: string;
  expiryYear: string;
  isDefault: boolean;
  type: "visa" | "mastercard" | "amex" | "discover" | "other";
};
