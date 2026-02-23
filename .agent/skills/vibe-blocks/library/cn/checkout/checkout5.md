# Checkout 5

## Metadata
- **Category**: Checkout
- **Objective**: Professional split-screen checkout with Apple Pay integration and comprehensive payment form.
- **Use Case**: Enterprise checkout, subscription payments, professional payment processing, secure checkout experience.
- **Visual Style**: Split-screen layout with order summary sidebar, Apple Pay integration, and professional form design.
- **Interactivity**: Apple Pay integration, form validation, promo code functionality, country selection, secure payment processing.

## Description
A professional split-screen checkout component featuring a comprehensive order summary sidebar with company branding and a sophisticated payment form with Apple Pay integration. The component includes support for multiple countries, promo code functionality, real-time price calculations, and a clean, enterprise-focused design suitable for B2B applications and subscription services.

## Key Features
- **Apple Pay Integration**: Native Apple Pay button with proper styling and branding
- **Split-Screen Layout**: Professional two-column design with order summary sidebar
- **Country Selection**: Dropdown with 9 major countries for billing address
- **Promo Code Functionality**: Expandable coupon code input with apply button
- **Enterprise Branding**: Company logo integration and professional typography
- **Security Indicators**: Lock icon and secure checkout messaging
- **Comprehensive Validation**: React Hook Form with Zod schema validation

## Source Code
```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Lock } from "lucide-react";
import React from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import z from "zod";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface OrderItem {
  id: string;
  name: string;
  price: number;
}

interface OrderSummary {
  companyName: string;
  items: OrderItem[];
  currency: string;
}

interface Checkout5Props {
  order?: OrderSummary;
  className?: string;
}

const checkoutFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  cardNumber: z.string().min(1, "Card number is required"),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid format (MM/YY)")
    .refine((value) => {
      const [mm, yy] = value.split("/").map(Number);
      const now = new Date();
      const currentMonth = now.getMonth() + 1;
      const currentYear = now.getFullYear() % 100;
      if (yy < currentYear) return false;
      if (yy === currentYear && mm < currentMonth) return false;
      return true;
    }, "Card has expired"),
  cvc: z.string().min(3, "CVC is required"),
  cardholderName: z.string().min(1, "Name on card is required"),
  country: z.string().min(1, "Country is required"),
  promoCode: z.string().optional(),
});

type CheckoutFormType = z.infer<typeof checkoutFormSchema>;

const COUNTRIES = [
  { value: "AU", label: "Australia" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "CA", label: "Canada" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "JP", label: "Japan" },
  { value: "NZ", label: "New Zealand" },
  { value: "SG", label: "Singapore" },
];

const DEFAULT_ORDER: OrderSummary = {
  companyName: "Shadcnblocks.com",
  items: [
    {
      id: "pro-subscription",
      name: "Pro Subscription (Annual)",
      price: 199.0,
    },
  ],
  currency: "USD",
};

const Checkout5 = ({ order = DEFAULT_ORDER, className }: Checkout5Props) => {
  const form = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      cardholderName: "",
      country: "US",
      promoCode: "",
    },
  });

  const onSubmit = (data: CheckoutFormType) => {
    console.log("Form submitted:", data);
  };

  const subtotal = order.items.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal;

  const formatPrice = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      currencyDisplay: "narrowSymbol",
    }).format(amount);
  };

  return (
    <section className={cn("min-h-screen bg-background", className)}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid min-h-screen lg:grid-cols-2">
            {/* Left Side - Order Summary */}
            <div className="border-r border-border bg-muted/20 p-8 pt-32 lg:p-12 lg:pt-40 xl:p-16 xl:pt-48">
              <div className="mx-auto w-full max-w-md">
                {/* Header with back button and logo */}
                <div className="mb-8 flex items-center gap-3">
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Go back"
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                    alt={order.companyName}
                    className="size-8"
                  />
                </div>

                {/* Company and Total */}
                <div className="mb-8">
                  <p className="text-muted-foreground">{order.companyName}</p>
                  <p className="text-4xl font-semibold tracking-tight">
                    {formatPrice(total, order.currency)}
                  </p>
                </div>

                {/* Order Items */}
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-foreground">
                        {item.name}
                      </span>
                      <span className="text-sm text-foreground">
                        {formatPrice(item.price, order.currency)}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Subtotal</span>
                  <span className="text-sm text-foreground">
                    {formatPrice(subtotal, order.currency)}
                  </span>
                </div>

                {/* Promo Code Button */}
                <div className="mt-4">
                  <PromoCodeField />
                </div>

                <Separator className="my-4" />

                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    Total
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {formatPrice(total, order.currency)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Payment Form */}
            <div className="p-8 pt-32 lg:p-12 lg:pt-40 xl:p-16 xl:pt-48">
              <div className="mx-auto w-full max-w-md">
                {/* Apple Pay Button */}
                <Button
                  type="button"
                  className="h-auto w-full bg-foreground py-1 text-background hover:bg-foreground/90"
                >
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/apple-pay-white.svg"
                    alt="Apple Pay"
                    className="h-12"
                  />
                </Button>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                  <Separator className="flex-1" />
                  <span className="text-sm text-muted-foreground">
                    or pay with card
                  </span>
                  <Separator className="flex-1" />
                </div>

                {/* Email Field */}
                <div className="space-y-6">
                  <EmailField />

                  {/* Card Details Section */}
                  <div>
                    <h2 className="mb-4 text-sm font-medium">Card details</h2>
                    <PaymentFields />
                  </div>

                  {/* Country Field */}
                  <CountryField />

                  {/* Pay Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 w-full bg-blue-600 text-base text-white hover:bg-blue-700"
                  >
                    Complete payment
                  </Button>

                  {/* Disclaimer */}
                  <p className="text-center text-xs text-muted-foreground">
                    By completing this purchase you agree to our terms of
                    service. Your payment information is encrypted and secure.
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-center gap-4 pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Lock className="size-3" />
                      Secure checkout
                    </span>
                    <Separator orientation="vertical" className="h-4" />
                    <a
                      href="#"
                      className="hover:text-foreground hover:underline"
                    >
                      Terms
                    </a>
                    <a
                      href="#"
                      className="hover:text-foreground hover:underline"
                    >
                      Privacy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

const PromoCodeField = () => {
  const form = useFormContext<CheckoutFormType>();
  const [showInput, setShowInput] = React.useState(false);

  if (!showInput) {
    return (
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-9 text-sm"
        onClick={() => setShowInput(true)}
      >
        Add coupon code
      </Button>
    );
  }

  return (
    <Controller
      name="promoCode"
      control={form.control}
      render={({ field }) => (
        <div className="flex gap-2">
          <Input
            {...field}
            placeholder="Coupon code"
            className="h-9 flex-1 text-sm"
          />
          <Button type="button" variant="outline" size="sm" className="h-9">
            Apply
          </Button>
        </div>
      )}
    />
  );
};

const EmailField = () => {
  const form = useFormContext<CheckoutFormType>();

  return (
    <Controller
      name="email"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel className="text-sm font-medium" htmlFor="checkout-email">
            Email address
          </FieldLabel>
          <Input
            {...field}
            id="checkout-email"
            type="email"
            placeholder="you@company.com"
            aria-invalid={fieldState.invalid}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

const PaymentFields = () => {
  const form = useFormContext<CheckoutFormType>();

  return (
    <div className="space-y-4">
      {/* Card Number */}
      <Controller
        name="cardNumber"
        control={form.control}
        render={({ field, fieldState }) => (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <FieldLabel
                className="text-sm text-muted-foreground"
                htmlFor="checkout-card-number"
              >
                Card number
              </FieldLabel>
              <div className="flex items-center gap-1">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/visa-icon.svg"
                  alt="Visa"
                  className="h-5 w-auto"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/mastercard-logo.svg"
                  alt="Mastercard"
                  className="h-5 w-auto"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/american-express-icon.svg"
                  alt="American Express"
                  className="h-5 w-auto"
                />
              </div>
            </div>
            <Field
              data-invalid={fieldState.invalid}
              className="relative w-full"
            >
              <Input
                {...field}
                id="checkout-card-number"
                placeholder="1234 1234 1234 1234"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          </div>
        )}
      />
      {/* Expiry and CVC Row */}
      <div className="-mt-4 grid grid-cols-2">
        <Controller
          name="expiryDate"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                onChange={(e) => {
                  let val = e.target.value;
                  val = val.replace(/[^0-9/]/g, "");
                  const prev = field.value ?? "";
                  const isDeleting = val.length < prev.length;
                  if (!isDeleting) {
                    if (val.length === 2 && !val.includes("/")) {
                      val = val + "/";
                    }
                  }
                  if (val.length > 5) {
                    val = val.slice(0, 5);
                  }
                  field.onChange(val);
                }}
                placeholder="MM / YY"
                className="rounded-none rounded-bl-md border-r-0"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="cvc"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                placeholder="CVC"
                className="rounded-none rounded-br-md"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
      {/* Cardholder Name */}
      <Controller
        name="cardholderName"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              className="text-sm font-medium"
              htmlFor="checkout-cardholder-name"
            >
              Name on card
            </FieldLabel>
            <Input
              {...field}
              id="checkout-cardholder-name"
              placeholder="John Smith"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </div>
  );
};

const CountryField = () => {
  const form = useFormContext<CheckoutFormType>();

  return (
    <Controller
      name="country"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel
            className="text-sm font-medium"
            htmlFor="checkout-country"
          >
            Billing country
          </FieldLabel>
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger id="checkout-country" className="w-full">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export { Checkout5 };
```
```

## Usage Notes
- Apple Pay integration requires proper merchant configuration in production
- Country selection includes 9 major markets for international billing
- Promo code functionality is expandable to show/hide input field
- Card brand icons (Visa, Mastercard, Amex) are displayed for user recognition
- Form validation includes expiry date checking and format validation
- The split-screen layout uses CSS Grid for responsive behavior
- Security messaging includes lock icon and encrypted payment assurance
- All form fields include proper error handling and validation messages
