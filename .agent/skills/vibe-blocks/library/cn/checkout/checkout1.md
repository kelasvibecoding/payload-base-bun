# Checkout 1

## Metadata
- **Category**: Checkout
- **Objective**: Multi-step accordion checkout process with contact information, address, shipping method, and payment sections.
- **Use Case**: E-commerce checkout, payment processing, order completion, customer data collection.
- **Visual Style**: Clean accordion-based layout with step-by-step progression and integrated shopping cart.
- **Interactivity**: Accordion navigation, form validation, quantity updates, product removal, payment method selection.

## Description
A comprehensive multi-step checkout component featuring an accordion-based interface that guides users through four distinct steps: Contact Information, Address, Shipping Method, and Payment. The component includes a fully functional shopping cart sidebar with quantity controls and product management, integrated form validation using React Hook Form and Zod, and support for multiple payment methods including credit card, PayPal, and bank transfer.

## Key Features
- **Multi-Step Accordion**: Four-step checkout process with smooth transitions
- **Integrated Shopping Cart**: Sidebar with product management and quantity controls
- **Form Validation**: React Hook Form with Zod schema validation
- **Multiple Payment Methods**: Credit card, PayPal, and bank transfer support
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Progressive Disclosure**: Step-by-step navigation with continue buttons

## Source Code
```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Minus, Plus, Trash } from "lucide-react";
import { useCallback, useState } from "react";
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

import {
  Logo,
  LogoImageDesktop,
  LogoImageMobile,
} from "@/components/logo";
import { Price, PriceValue } from "@/components/price";
import QuantityInput from "@/components/quantity-input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
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
  details?: { label: string; value: string }[];
};

interface CartItemProps {
  item: CartItem;
  onRemove: (productId: string) => void;
  onQuantityChange: (productId: string, quantity: number) => void;
}

interface CartProps {
  form: UseFormReturn<any>;
  cartItems?: CartItem[];
}

const PAYMENT_METHODS = {
  creditCard: "creditCard",
  paypal: "paypal",
  onlineBankTransfer: "onlineBankTransfer",
} as const;

type PaymentMethod = typeof PAYMENT_METHODS[keyof typeof PAYMENT_METHODS];

const CreditCardPayment = {
  method: PAYMENT_METHODS.creditCard,
  cardholderName: "",
  cardNumber: "",
  expiryDate: "",
  cvc: "",
};

const PayPalPayment = {
  method: PAYMENT_METHODS.paypal,
  payPalEmail: "",
};

const BankTransferPayment = {
  method: PAYMENT_METHODS.onlineBankTransfer,
  bankName: "",
  accountNumber: "",
};

const PaymentSchema = z.object({
  method: z.nativeEnum(PAYMENT_METHODS),
  cardholderName: z.string().optional(),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvc: z.string().optional(),
  payPalEmail: z.string().email().optional(),
  bankName: z.string().optional(),
  accountNumber: z.string().optional(),
});

const checkoutFormSchema = z.object({
  contactInfo: z.object({
    email: z.string().email(),
    subscribe: z.boolean().default(false),
  }),
  address: z.object({
    country: z.string(),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    address: z.string().min(1),
    postalCode: z.string().min(1),
    city: z.string().min(1),
    phone: z.string().min(1),
  }),
  shippingMethod: z.string(),
  payment: PaymentSchema,
  products: z.array(
    z.object({
      product_id: z.string(),
      quantity: z.number().min(1),
      price: z.number(),
    })
  ),
});

type CheckoutFormType = z.infer<typeof checkoutFormSchema>;

const CART_ITEMS: CartItem[] = [
  {
    product_id: "1",
    link: "#",
    name: "Premium Wireless Headphones",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/checkout/product-1.png",
    price: {
      regular: 299.99,
      currency: "USD",
    },
    quantity: 1,
    details: [
      { label: "Color", value: "Black" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    product_id: "2",
    link: "#",
    name: "Smart Watch Pro",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/checkout/product-2.png",
    price: {
      regular: 399.99,
      sale: 349.99,
      currency: "USD",
    },
    quantity: 2,
    details: [
      { label: "Color", value: "Silver" },
      { label: "Size", value: "42mm" },
    ],
  },
  {
    product_id: "3",
    link: "#",
    name: "Bluetooth Speaker",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/checkout/product-3.png",
    price: {
      regular: 89.99,
      currency: "USD",
    },
    quantity: 1,
    details: [
      { label: "Color", value: "Blue" },
    ],
  },
];

interface Checkout1Props {
  cartItems?: CartItem[];
  className?: string;
}

const Checkout1 = ({ cartItems = CART_ITEMS, className }: Checkout1Props) => {
  const [activeAccordion, setActiveAccordion] = useState("item-1");
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

  const onContinue = (value: string) => {
    setActiveAccordion(value);
  };

  const handleOnValueChange = (value: string) => {
    setActiveAccordion(value);
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex flex-col gap-4">
            <Logo url="https://shadcnblocks.com" className="mb-2">
              <LogoImageDesktop
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.png"
                alt="logo"
                title="Shadcnblocks.com"
              />
              <LogoImageMobile
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.png"
                alt="logo"
                title="Shadcnblocks.com"
              />
            </Logo>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Checkout
              </h1>
              <p className="text-sm text-muted-foreground md:text-base">
                Complete your purchase securely
              </p>
            </div>
          </div>
        </div>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-17.5">
              <div>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  value={activeAccordion}
                  onValueChange={handleOnValueChange}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="px-1 py-7 text-lg font-semibold hover:no-underline [&>svg:last-child]:hidden [&[data-state=closed]>svg:nth-of-type(2)]:hidden [&[data-state=open]>svg:nth-of-type(1)]:hidden [&[data-state=open]>svg:nth-of-type(2)]:block">
                      Contact Information
                      <Plus className="pointer-events-none size-4 shrink-0 self-center text-muted-foreground" />
                      <Minus className="pointer-events-none hidden size-4 shrink-0 self-center text-muted-foreground" />
                    </AccordionTrigger>
                    <AccordionContent className="px-1 pb-7">
                      <div className="space-y-7">
                        <ContactFields />
                        <Button
                          type="button"
                          className="w-full"
                          variant="secondary"
                          onClick={() => onContinue("item-2")}
                        >
                          Continue
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="px-1 py-7 text-lg font-semibold hover:no-underline [&>svg:last-child]:hidden [&[data-state=closed]>svg:nth-of-type(2)]:hidden [&[data-state=open]>svg:nth-of-type(1)]:hidden [&[data-state=open]>svg:nth-of-type(2)]:block">
                      Address
                      <Plus className="pointer-events-none size-4 shrink-0 self-center text-muted-foreground" />
                      <Minus className="pointer-events-none hidden size-4 shrink-0 self-center text-muted-foreground" />
                    </AccordionTrigger>
                    <AccordionContent className="px-1 pb-7">
                      <div className="space-y-7">
                        <AddressFields />
                        <Button
                          type="button"
                          className="w-full"
                          variant="secondary"
                          onClick={() => onContinue("item-3")}
                        >
                          Continue
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="px-1 py-7 text-lg font-semibold hover:no-underline [&>svg:last-child]:hidden [&[data-state=closed]>svg:nth-of-type(2)]:hidden [&[data-state=open]>svg:nth-of-type(1)]:hidden [&[data-state=open]>svg:nth-of-type(2)]:block">
                      Shipping Method
                      <Plus className="pointer-events-none size-4 shrink-0 self-center text-muted-foreground" />
                      <Minus className="pointer-events-none hidden size-4 shrink-0 self-center text-muted-foreground" />
                    </AccordionTrigger>
                    <AccordionContent className="px-1 pb-7">
                      <div className="space-y-7">
                        <ShippingMethodFields />
                        <Button
                          type="button"
                          className="w-full"
                          variant="secondary"
                          onClick={() => onContinue("item-4")}
                        >
                          Continue
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="px-1 py-7 text-lg font-semibold hover:no-underline [&>svg:last-child]:hidden [&[data-state=closed]>svg:nth-of-type(2)]:hidden [&[data-state=open]>svg:nth-of-type(1)]:hidden [&[data-state=open]>svg:nth-of-type(2)]:block">
                      Payment
                      <Plus className="pointer-events-none size-4 shrink-0 self-center text-muted-foreground" />
                      <Minus className="pointer-events-none hidden size-4 shrink-0 self-center text-muted-foreground" />
                    </AccordionTrigger>
                    <AccordionContent className="px-1 pb-7">
                      <div className="space-y-7">
                        <PaymentFields />
                        <Button type="submit" className="w-full">
                          Checkout
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <Cart form={form} cartItems={cartItems} />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export { Checkout1 };
```

## Usage Notes
- The component uses React Hook Form with Zod for comprehensive form validation
- Accordion navigation is controlled by state management with continue buttons
- The shopping cart sidebar is fully interactive with quantity controls and product removal
- Payment method selection dynamically shows appropriate form fields
- All form data is validated before submission
- The component is responsive and adapts to mobile and desktop layouts
