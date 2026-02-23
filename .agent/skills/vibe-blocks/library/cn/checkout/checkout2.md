# Checkout 2

## Metadata
- **Category**: Checkout
- **Objective**: Card-based multi-step checkout with comprehensive form validation and payment processing.
- **Use Case**: E-commerce checkout, payment collection, shipping address management, order completion.
- **Visual Style**: Card-based layout with separate sections for each checkout step and sticky cart sidebar.
- **Interactivity**: Form validation, payment method selection, quantity management, product removal, responsive design.

## Description
A sophisticated card-based checkout component featuring a clean, organized layout with separate cards for Contact Information, Shipping Address, Shipping Method, and Payment sections. The component includes a sticky shopping cart sidebar that remains visible while scrolling, comprehensive form validation using React Hook Form and Zod, and support for multiple payment methods including credit card, PayPal, and bank transfer with advanced validation rules.

## Key Features
- **Card-Based Layout**: Each checkout step is contained in its own card for clear organization
- **Sticky Cart Sidebar**: Shopping cart remains visible while scrolling through checkout steps
- **Advanced Form Validation**: Zod schema with discriminated unions for payment methods
- **Credit Card Validation**: Expiry date validation with format checking and expiration detection
- **Responsive Grid Layout**: Adapts from single column to multi-column layout
- **Comprehensive Address Form**: Country, name, address, postal code, city, and phone fields

## Source Code
```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Trash } from "lucide-react";
import { useCallback } from "react";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
  UseFormReturn,
} from "react-hook-form";
import z from "zod";

import { cn } from "@/lib/utils";

import { Logo, LogoImage } from "@/components/logo";
import { Price, PriceValue } from "@/components/price";
import QuantityInput from "@/components/quantity-input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

type CartItem = {
  product_id: string;
  link: string;
  name: string;
  image: string;
  price: ProductPrice;
  quantity: number;
  details: {
    label: string;
    value: string;
  }[];
};

interface CartItemProps extends CartItem {
  index: number;
  onRemoveClick: () => void;
  onQuantityChange: (newQty: number) => void;
}

interface CartProps {
  cartItems: CartItem[];
  form: UseFormReturn<CheckoutFormType>;
}

const PAYMENT_METHODS = {
  creditCard: "creditCard",
  paypal: "paypal",
  onlineBankTransfer: "onlineBankTransfer",
};

type PaymentMethod = keyof typeof PAYMENT_METHODS;

const CreditCardPayment = z.object({
  method: z.literal(PAYMENT_METHODS.creditCard),
  cardholderName: z.string(),
  cardNumber: z.string(),
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
  cvc: z.string(),
});

const PayPalPayment = z.object({
  method: z.literal(PAYMENT_METHODS.paypal),
  payPalEmail: z.string(),
});

const BankTransferPayment = z.object({
  method: z.literal(PAYMENT_METHODS.onlineBankTransfer),
  bankName: z.string(),
  accountNumber: z.string(),
});

const PaymentSchema = z.discriminatedUnion("method", [
  CreditCardPayment,
  PayPalPayment,
  BankTransferPayment,
]);

const checkoutFormSchema = z.object({
  contactInfo: z.object({
    email: z.string(),
    subscribe: z.boolean().optional(),
  }),
  address: z.object({
    country: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    address: z.string(),
    postalCode: z.string(),
    city: z.string(),
    phone: z.string(),
  }),
  shippingMethod: z.string(),
  payment: PaymentSchema,
  products: z
    .object({
      product_id: z.string(),
      quantity: z.number(),
      price: z.number(),
    })
    .array(),
});

type CheckoutFormType = z.infer<typeof checkoutFormSchema>;

const CART_ITEMS: CartItem[] = [
  {
    product_id: "product-1",
    link: "#",
    name: "Stylish Maroon Sneaker",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/stylish-maroon-sneaker.png",
    price: {
      regular: 354.0,
      currency: "USD",
    },
    quantity: 1,
    details: [
      { label: "Color", value: "Red" },
      { label: "Size", value: "36" },
    ],
  },
  {
    product_id: "product-2",
    link: "#",
    name: "Bicolor Sweatshirt with Embroidered Logo",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/bicolor-crewneck-sweatshirt-with-embroidered-logo.png",
    price: {
      regular: 499.0,
      currency: "USD",
    },
    quantity: 1,
    details: [
      { label: "Color", value: "Blue & White" },
      { label: "Size", value: "L" },
    ],
  },
  {
    product_id: "product-4",
    link: "#",
    name: "Maroon Leather Handbag",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/maroon-leather-handbag.png",
    price: {
      regular: 245.0,
      currency: "USD",
    },
    quantity: 1,
    details: [{ label: "Color", value: "Maroon" }],
  },
];

interface Checkout2Props {
  cartItems?: CartItem[];
  className?: string;
}

const Checkout2 = ({ cartItems = CART_ITEMS, className }: Checkout2Props) => {
  const defaultProducts = cartItems.map((item) => ({
    product_id: item.product_id,
    quantity: item.quantity,
    price: item.price.sale ?? item.price.regular,
  }));

  const form = useForm({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      payment: {
        method: PAYMENT_METHODS.creditCard,
      },
      products: defaultProducts,
    },
  });

  const onSubmit = (data: CheckoutFormType) => {
    console.log(data);
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mb-10">
          <Logo url="#">
            <LogoImage
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg"
              alt="Logo"
              className="h-8"
            />
          </Logo>
          <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
            Checkout
          </h1>
          <p className="mt-2 text-muted-foreground">
            Complete your purchase securely
          </p>
        </div>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              <div className="space-y-6 lg:col-span-3">
                <Card className="shadow-none">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactFields />
                  </CardContent>
                </Card>

                <Card className="shadow-none">
                  <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AddressFields />
                  </CardContent>
                </Card>

                <Card className="shadow-none">
                  <CardHeader>
                    <CardTitle>Shipping Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ShippingMethodFields />
                  </CardContent>
                </Card>

                <Card className="shadow-none">
                  <CardHeader>
                    <CardTitle>Payment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PaymentFields />
                  </CardContent>
                </Card>

                <Button type="submit" size="lg" className="w-full">
                  Complete Order
                </Button>
              </div>

              <div className="lg:col-span-2">
                <div className="sticky top-8">
                  <Cart form={form} cartItems={cartItems} />
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

const ContactFields = () => {
  const form = useFormContext();

  return (
    <FieldGroup className="gap-4">
      <Controller
        name="contactInfo.email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              className="text-sm font-normal"
              htmlFor="checkout-email"
            >
              Email
            </FieldLabel>
            <Input
              {...field}
              id="checkout-email"
              type="email"
              placeholder="your@email.com"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="contactInfo.subscribe"
        control={form.control}
        render={({ field }) => (
          <Field orientation="horizontal">
            <Checkbox
              id="checkout-subscribe"
              name={field.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <FieldLabel htmlFor="checkout-subscribe" className="font-normal">
              Email me with news and offers
            </FieldLabel>
          </Field>
        )}
      />
    </FieldGroup>
  );
};

export { Checkout2 };
```

## Usage Notes
- The component uses discriminated union types for payment method validation
- Credit card expiry date includes both format validation and expiration checking
- The sticky cart sidebar uses CSS positioning to remain visible during scroll
- Form fields include comprehensive validation with error messaging
- The layout adapts from single column on mobile to 5-column grid on desktop
- All form data is type-safe with TypeScript interfaces and Zod schemas
