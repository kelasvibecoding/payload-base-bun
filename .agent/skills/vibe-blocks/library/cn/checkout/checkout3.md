```
# Checkout 3

## Metadata
- **Category**: Checkout
- **Objective**: Collapsible cart checkout with accordion shipping and streamlined single-column layout.
- **Use Case**: Mobile-first checkout, simplified purchasing, collapsible cart management, responsive checkout experience.
- **Visual Style**: Single-column layout with collapsible cart button, accordion sections, and clean minimalist design.
- **Interactivity**: Collapsible cart with item management, accordion shipping section, quantity updates, product removal, responsive form validation.

## Description
A streamlined checkout component optimized for mobile devices featuring a collapsible shopping cart that can be expanded/collapsed as needed, an accordion-based shipping and delivery section, and a clean single-column layout. The component includes comprehensive form validation, dynamic cart management with real-time price calculations, and a focus on mobile-first responsive design.

## Key Features
- **Collapsible Cart**: Toggle shopping cart visibility with item count and total price display
- **Accordion Shipping**: Expandable shipping and delivery section for space efficiency
- **Single-Column Layout**: Optimized for mobile and narrow screen devices
- **Real-Time Calculations**: Dynamic subtotal and total price updates
- **Streamlined Design**: Clean, minimalist approach with proper spacing
- **Form Validation**: React Hook Form with Zod schema validation

## Source Code
```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Minus, Plus, ShoppingBag, Trash } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
import { Separator } from "@/components/ui/separator";

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

interface Checkout3Props {
  cartItems?: CartItem[];
  className?: string;
}

const Checkout3 = ({ cartItems = CART_ITEMS, className }: Checkout3Props) => {
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
    <section className={cn("py-16 md:py-32", className)}>
      <div className="container max-w-lg">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Checkout
          </h1>
        </div>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CollapsibleCart form={form} cartItems={cartItems} />

            <div className="space-y-6">
              <section>
                <h2 className="mb-4 text-lg font-semibold">Contact</h2>
                <ContactFields />
              </section>

              <Separator />

              <ShippingDeliveryAccordion />

              <Separator />

              <section>
                <h2 className="mb-4 text-lg font-semibold">Payment</h2>
                <PaymentFields />
              </section>
            </div>

            <Button type="submit" size="lg" className="w-full text-base">
              Complete Order
            </Button>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

const ShippingDeliveryAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={isOpen ? "shipping-delivery" : undefined}
        onValueChange={(value) => setIsOpen(value === "shipping-delivery")}
      >
        <AccordionItem value="shipping-delivery">
          <AccordionTrigger className="py-0 text-lg font-semibold hover:no-underline [&>svg:last-child]:hidden [&[data-state=closed]>svg:nth-of-type(2)]:hidden [&[data-state=open]>svg:nth-of-type(1)]:hidden [&[data-state=open]>svg:nth-of-type(2)]:block">
            Shipping & Delivery
            <Plus className="pointer-events-none size-4 shrink-0 self-center text-muted-foreground" />
            <Minus className="pointer-events-none hidden size-4 shrink-0 self-center text-muted-foreground" />
          </AccordionTrigger>
          <AccordionContent className="px-1 pb-4">
            <div className="space-y-6">
              <AddressFields />
              <ShippingMethodFields />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

const CollapsibleCart = ({ cartItems, form }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { fields, remove, update } = useFieldArray({
    control: form.control,
    name: "products",
  });

  const formItems = form.watch("products");
  const totalPrice = formItems?.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0,
  );
  const itemCount = formItems?.reduce((sum, p) => sum + p.quantity, 0) || 0;

  const handleRemove = useCallback(
    (index: number) => () => {
      remove(index);
    },
    [remove],
  );

  const handleQuantityChange = useCallback(
    (index: number) => (newQty: number) =>
      update(index, { ...fields[index], quantity: newQty }),
    [update, fields],
  );

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="outline"
          className="h-auto w-full justify-between py-4"
        >
          <div className="flex items-center gap-3">
            <ShoppingBag className="size-5" />
            <span className="font-medium">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Price className="font-semibold">
              <PriceValue
                price={totalPrice}
                currency={cartItems[0]?.price.currency}
                variant="regular"
              />
            </Price>
            <ChevronDown
              className={cn(
                "size-4 transition-transform",
                isOpen && "rotate-180",
              )}
            />
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-4 space-y-4 rounded-lg border p-4">
          <ul className="space-y-4">
            {fields.map((field, index) => {
              const cartItem = cartItems.find(
                (p) => p.product_id === field.product_id,
              );
              if (!cartItem) return null;
              return (
                <li key={field.id}>
                  <CartItemComponent
                    {...cartItem}
                    onRemoveClick={() => handleRemove(index)()}
                    onQuantityChange={(newQty: number) =>
                      handleQuantityChange(index)(newQty)
                    }
                    index={index}
                  />
                </li>
              );
            })}
          </ul>

          <Separator />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <Price className="font-normal">
                <PriceValue
                  price={totalPrice}
                  currency={cartItems[0]?.price.currency}
                  variant="regular"
                />
              </Price>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>

          <Separator />

          <div className="flex justify-between font-medium">
            <span>Total</span>
            <Price>
              <PriceValue
                price={totalPrice}
                currency={cartItems[0]?.price.currency}
                variant="regular"
              />
            </Price>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export { Checkout3 };
```

## Usage Notes
- The collapsible cart provides a space-efficient solution for mobile checkout
- Accordion shipping section keeps the interface clean and organized
- Real-time price calculations update as items are added/removed or quantities change
- The single-column layout is optimized for mobile devices with max-w-lg container
- Form validation includes credit card expiry checking and format validation
- All cart management functions are memoized for performance optimization
