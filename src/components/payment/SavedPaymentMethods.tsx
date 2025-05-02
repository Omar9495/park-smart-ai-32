
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PaymentMethod } from "@/types/payment";
import { CreditCard, Trash2, Check } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

interface SavedPaymentMethodsProps {
  methods: PaymentMethod[];
  onRemove: (id: string) => void;
  onSetDefault: (id: string) => void;
}

const SavedPaymentMethods = ({ methods, onRemove, onSetDefault }: SavedPaymentMethodsProps) => {
  const [methodToDelete, setMethodToDelete] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const confirmDelete = (id: string) => {
    setMethodToDelete(id);
    setDialogOpen(true);
  };

  const handleDelete = () => {
    if (methodToDelete) {
      onRemove(methodToDelete);
      setDialogOpen(false);
      setMethodToDelete(null);
    }
  };

  const getCardIcon = (type: string) => {
    switch (type) {
      case 'visa':
        return '💳 Visa';
      case 'mastercard':
        return '💳 Mastercard';
      case 'amex':
        return '💳 AmEx';
      case 'discover':
        return '💳 Discover';
      default:
        return '💳 Card';
    }
  };

  return (
    <Card className="shadow-md border-ipark-gold/30">
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <CreditCard className="mr-2 text-ipark-gold" />
          Saved Payment Methods
        </h3>
        
        {methods.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No payment methods added yet</p>
            <p className="text-sm mt-2">Add a credit or debit card to get started</p>
          </div>
        ) : (
          <div className="space-y-4">
            {methods.map((method) => (
              <div 
                key={method.id} 
                className={`p-4 rounded-lg border ${
                  method.isDefault 
                    ? 'border-ipark-gold bg-ipark-gold/5' 
                    : 'border-gray-200'
                } transition-all`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 text-lg">
                      {getCardIcon(method.type)}
                    </div>
                    <div>
                      <p className="font-medium">{method.cardName}</p>
                      <p className="text-sm text-gray-500">
                        •••• •••• •••• {method.lastFourDigits} | Exp: {method.expiryMonth}/{method.expiryYear}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!method.isDefault && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-ipark-gold text-ipark-gold hover:bg-ipark-gold/10"
                        onClick={() => onSetDefault(method.id)}
                      >
                        Set Default
                      </Button>
                    )}
                    {method.isDefault && (
                      <span className="bg-ipark-gold/20 text-ipark-navy text-xs px-2 py-1 rounded flex items-center">
                        <Check className="h-3 w-3 mr-1" /> Default
                      </span>
                    )}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => confirmDelete(method.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Remove Payment Method</DialogTitle>
              <DialogDescription>
                Are you sure you want to remove this payment method? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDelete}>Remove</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default SavedPaymentMethods;
