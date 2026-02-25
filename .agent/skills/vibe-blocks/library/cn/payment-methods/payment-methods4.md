# Payment Methods 4

## Metadata
- **Category**: Payment Methods
- **Objective**: Display payment methods using a highly visual 3D flipping credit card component within a swipeable carousel.
- **Use Case**: Ideal for checkout flows or mobile-first interfaces where horizontal space is limited or a swipeable "wallet" experience is desired.
- **Visual Style**: Uses a standard shadcn/ui `Carousel` to present one payment method at a time, preventing vertical scroll fatigue. Each carousel item contains the card details, an inline edit form, and the realistic 3D flipping `CreditCard` component on the right.
- **Interactivity**: Swiping/arrow navigation between payment methods via the carousel. Hover overrides flip the 3D card. Clicking "Edit" reveals standard input fields for card details. Selecting a payment method automatically scrolls it to focus and selects it as the active method via `RadioGroup` logic (implemented via state selection indicator).

## Source Code

```tsx
"use client";

import { Pencil, Plus, Save, Shield, Star, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  CreditCard,
  CreditCardBack,
  CreditCardChip,
  CreditCardCvv,
  CreditCardExpiry,
  CreditCardFlipper,
  CreditCardFront,
  CreditCardMagStripe,
  CreditCardName,
  CreditCardNumber,
} from "@/components/kibo-ui/credit-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PaymentMethod {
  id: string;
  bank: "wells-fargo" | "chase";
  type: "visa" | "mastercard";
  last4: string;
  expiryMonth: number;
  expiryYear: number;
  cardholderName: string;
  cvv: string;
  isDefault: boolean;
}

const DEFAULT_METHODS: PaymentMethod[] = [
  {
    id: "1",
    bank: "wells-fargo",
    type: "mastercard",
    last4: "8888",
    expiryMonth: 12,
    expiryYear: 2026,
    cardholderName: "John R. Doe",
    cvv: "123",
    isDefault: true,
  },
  {
    id: "2",
    bank: "chase",
    type: "visa",
    last4: "4242",
    expiryMonth: 8,
    expiryYear: 2025,
    cardholderName: "John R. Doe",
    cvv: "456",
    isDefault: false,
  },
];

interface PaymentMethods4Props {
  methods?: PaymentMethod[];
  title?: string;
  className?: string;
}

const PaymentMethods4 = ({
  methods: initialMethods = DEFAULT_METHODS,
  title = "Select Payment",
  className,
}: PaymentMethods4Props) => {
  const [methods, setMethods] = useState(initialMethods);
  const [selectedId, setSelectedId] = useState(
    methods.find((m) => m.isDefault)?.id || methods[0]?.id,
  );
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<PaymentMethod>>({});
  const [api, setApi] = useState<CarouselApi>();

  const startEditing = (method: PaymentMethod) => {
    setEditingId(method.id);
    setEditForm({ ...method });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEdit = () => {
    if (
      editingId &&
      editForm.cardholderName &&
      editForm.last4 &&
      editForm.expiryMonth &&
      editForm.expiryYear &&
      editForm.cvv
    ) {
      setMethods((prev) =>
        prev.map((method) =>
          method.id === editingId
            ? ({
                ...method,
                ...editForm,
              } as PaymentMethod)
            : method,
        ),
      );
      setEditingId(null);
      setEditForm({});
    }
  };

  const setAsDefault = (id: string) => {
    setMethods((prev) =>
      prev.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    );
  };

  const getCardBackground = (bank: string): string => {
    switch (bank) {
      case "chase":
        return "bg-[#063573]";
      case "wells-fargo":
        return "bg-gradient-to-br from-[#D71E2B] to-[#8B0000]";
      default:
        return "bg-[#063573]";
    }
  };

  const getBankLogo = (bank: string) => {
    switch (bank) {
      case "chase":
        return (
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/payments/chase-white-wordmark.svg"
            alt="Chase"
            className="h-5"
          />
        );
      case "wells-fargo":
        return (
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/payments/wells-fargo-white-wordmark.svg"
            alt="Wells Fargo"
            className="h-4"
          />
        );
      default:
        return null;
    }
  };

  const getPaymentProviderLogo = (type: string) => {
    switch (type) {
      case "visa":
        return (
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/payments/visa-white.svg"
            alt="Visa"
            className="h-4"
          />
        );
      case "mastercard":
        return (
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/payments/mastercard-white.svg"
            alt="Mastercard"
            className="h-6"
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <h2 className="mb-6 text-xl font-semibold">{title}</h2>

          {/* Carousel with Cards */}
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {methods.map((method, index) => (
                <CarouselItem key={method.id}>
                  <div className="group flex items-center gap-6 rounded-lg border p-4 transition-colors">
                    {/* Card Details on Left */}
                    <div className="flex flex-1 flex-col justify-start">
                      {/* Edit Button - Top Aligned */}
                      {editingId !== method.id && (
                        <div className="">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              startEditing(method);
                            }}
                          >
                            <Pencil className="mr-2 size-4" />
                            Edit
                          </Button>
                        </div>
                      )}

                      {/* Card Details Below */}
                      <div className="flex flex-1 flex-col gap-4 pt-4">
                        <div className="flex gap-3">
                          {/* Selection Indicator */}
                          <div className="flex items-center">
                            <div
                              className={cn(
                                "flex size-5 cursor-pointer items-center justify-center rounded-full border-2 transition-colors",
                                selectedId === method.id
                                  ? "border-primary bg-primary"
                                  : "border-muted-foreground/30",
                              )}
                              onClick={() => {
                                setSelectedId(method.id);
                                setAsDefault(method.id);
                                api?.scrollTo(index);
                              }}
                            >
                              {selectedId === method.id && (
                                <div className="size-1.5 rounded-full bg-primary-foreground" />
                              )}
                            </div>
                          </div>

                          <div className="flex-1">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">
                                  {method.bank === "chase"
                                    ? "Chase"
                                    : "Wells Fargo"}{" "}
                                  {method.type === "visa" ? "Visa" : "Mastercard"}
                                </h3>
                                {method.isDefault && (
                                  <Badge variant="secondary" className="text-xs">
                                    <Star className="mr-1 size-3 fill-current" />
                                    Default
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                •••• •••• •••• {method.last4}
                              </p>
                            </div>
                          </div>
                        </div>

                        {editingId === method.id ? (
                          <div className="space-y-4 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">Edit Card Details</h4>
                              <div className="flex gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    cancelEditing();
                                  }}
                                >
                                  <X className="size-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    saveEdit();
                                  }}
                                >
                                  <Save className="mr-2 size-4" />
                                  Save
                                </Button>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor={`cardholder-${method.id}`}>
                                  Cardholder Name
                                </Label>
                                <Input
                                  id={`cardholder-${method.id}`}
                                  value={editForm.cardholderName || ""}
                                  onChange={(e) =>
                                    setEditForm({
                                      ...editForm,
                                      cardholderName: e.target.value,
                                    })
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`last4-${method.id}`}>
                                  Last 4 Digits
                                </Label>
                                <Input
                                  id={`last4-${method.id}`}
                                  maxLength={4}
                                  value={editForm.last4 || ""}
                                  onChange={(e) =>
                                    setEditForm({
                                      ...editForm,
                                      last4: e.target.value
                                        .replace(/\D/g, "")
                                        .slice(0, 4),
                                    })
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`expiryMonth-${method.id}`}>
                                  Expiry Month
                                </Label>
                                <Input
                                  id={`expiryMonth-${method.id}`}
                                  type="number"
                                  min={1}
                                  max={12}
                                  value={editForm.expiryMonth || ""}
                                  onChange={(e) =>
                                    setEditForm({
                                      ...editForm,
                                      expiryMonth:
                                        parseInt(e.target.value) || undefined,
                                    })
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`expiryYear-${method.id}`}>
                                  Expiry Year
                                </Label>
                                <Input
                                  id={`expiryYear-${method.id}`}
                                  type="number"
                                  min={new Date().getFullYear()}
                                  value={editForm.expiryYear || ""}
                                  onChange={(e) =>
                                    setEditForm({
                                      ...editForm,
                                      expiryYear:
                                        parseInt(e.target.value) || undefined,
                                    })
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`cvv-${method.id}`}>CVV</Label>
                                <Input
                                  id={`cvv-${method.id}`}
                                  maxLength={4}
                                  value={editForm.cvv || ""}
                                  onChange={(e) =>
                                    setEditForm({
                                      ...editForm,
                                      cvv: e.target.value
                                        .replace(/\D/g, "")
                                        .slice(0, 4),
                                    })
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Cardholder</p>
                              <p className="font-medium">{method.cardholderName}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Expires</p>
                              <p className="font-medium">
                                {method.expiryMonth.toString().padStart(2, "0")}/
                                {method.expiryYear.toString().slice(-2)}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Flipping Card on Right */}
                    <div className="relative w-80">
                      <CreditCard className="relative w-full max-w-none">
                        <CreditCardFlipper>
                          <CreditCardFront
                            className={getCardBackground(method.bank)}
                          >
                            {/* Bank Logo */}
                            <div className="absolute top-0 left-0">
                              {getBankLogo(method.bank)}
                            </div>

                            <CreditCardChip />

                            {/* Payment Provider Logo */}
                            <div className="absolute right-0 bottom-0">
                              {getPaymentProviderLogo(method.type)}
                            </div>

                            {/* Cardholder Name */}
                            <CreditCardName className="absolute bottom-0 left-0">
                              {method.cardholderName}
                            </CreditCardName>
                          </CreditCardFront>

                          <CreditCardBack
                            className={getCardBackground(method.bank)}
                          >
                            <CreditCardMagStripe />

                            {/* Card Number on Back */}
                            <CreditCardNumber className="absolute bottom-0 left-0">
                              •••• •••• •••• {method.last4}
                            </CreditCardNumber>

                            {/* Expiry and CVV */}
                            <div className="absolute top-1/2 flex -translate-y-1/2 gap-4">
                              <CreditCardExpiry>
                                {method.expiryMonth.toString().padStart(2, "0")}/
                                {method.expiryYear.toString().slice(-2)}
                              </CreditCardExpiry>
                              <CreditCardCvv>{method.cvv}</CreditCardCvv>
                            </div>
                          </CreditCardBack>
                        </CreditCardFlipper>
                      </CreditCard>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Add New Card */}
          <Button variant="outline" className="mt-4 w-full" size="lg">
            <Plus className="mr-2 size-4" />
            Add New Card
          </Button>

          {/* Security Note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="size-4" />
            <span>Your payment info is stored securely</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PaymentMethods4 };
```
