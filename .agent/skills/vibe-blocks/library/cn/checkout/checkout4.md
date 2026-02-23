# Checkout 4

## Metadata
- **Category**: Checkout
- **Objective**: Split-screen checkout with order summary sidebar and card payment focus.
- **Use Case**: E-commerce checkout, payment processing, order completion, mobile-responsive checkout.
- **Visual Style**: Split-screen layout with order summary on one side and payment form on the other.
- **Interactivity**: Form validation, cart management, quantity updates, product removal, payment method selection.

## Description
A modern split-screen checkout component featuring a full-height layout with order summary on the left side and payment form on the right. The component includes a comprehensive shopping cart with product images, quantity controls, and real-time price calculations, along with a streamlined payment form supporting credit card, PayPal, and bank transfer methods.

## Key Features
- **Split-Screen Layout**: Full-height design with order summary and payment sections
- **Order Summary Sidebar**: Sticky cart display with product management
- **Multiple Payment Methods**: Credit card, PayPal, and bank transfer support
- **Real-Time Calculations**: Dynamic subtotal, tax, and total calculations
- **Form Validation**: React Hook Form with Zod schema validation
- **Responsive Design**: Adapts from stacked mobile to split desktop layout

## Source Code
```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Trash } from "lucide-react";
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

import { Price, PriceValue } from "@/components/price";
import QuantityInput from "@/components/quantity-input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
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

interface Checkout4Props {
  cartItems: CartItem[];
  className?: string;
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
  email: z.string().email(),
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

const Checkout4 = ({ cartItems = CART_ITEMS, className }: Checkout4Props) => {
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
    <section className={cn("min-h-screen", className)}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid min-h-screen lg:grid-cols-2">
            <div className="order-2 flex items-center bg-muted/30 lg:order-1">
              <div className="mx-auto w-full max-w-xl p-8 lg:p-12 xl:p-16">
                <h2 className="mb-8 text-xl font-semibold">Order Summary</h2>
                <Cart form={form} cartItems={cartItems} />
              </div>
            </div>

            <div className="order-1 flex items-center lg:order-2">
              <div className="mx-auto w-full max-w-xl p-8 lg:p-12 xl:p-16">
                <div className="mb-10">
                  <h1 className="text-3xl font-bold tracking-tight">
                    Pay with card
                  </h1>
                </div>

                <div className="space-y-6">
                  <section>
                    <ContactFields />
                  </section>

                  <section>
                    <PaymentFields />
                  </section>

                  <Button type="submit" size="lg" className="w-full text-base">
                    Pay
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

const Cart = ({ cartItems, form }: CartProps) => {
  const { fields, remove, update } = useFieldArray({
    control: form.control,
    name: "products",
  });

  const formItems = form.watch("products");
  const totalPrice = formItems?.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0,
  );

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
    <div className="space-y-8">
      <ul className="space-y-6">
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

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <Price className="font-normal">
            <PriceValue
              price={totalPrice}
              currency={cartItems[0]?.price.currency}
              variant="regular"
            />
          </Price>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Estimated Tax</span>
          <span>$35.80</span>
        </div>
      </div>

      <Separator />

      <div className="flex justify-between">
        <span className="text-xl font-semibold">Total</span>
        <Price className="text-xl font-semibold">
          <PriceValue
            price={totalPrice}
            currency={cartItems[0]?.price.currency}
            variant="regular"
          />
        </Price>
      </div>
    </div>
  );
};

const CartItemComponent = ({
  image,
  name,
  link,
  details,
  price,
  index,
  onRemoveClick,
  onQuantityChange,
}: CartItemProps) => {
  const { regular, currency } = price;

  return (
    <div className="flex gap-5">
      <div className="w-24 shrink-0">
        <AspectRatio
          ratio={1}
          className="overflow-hidden rounded-xl bg-background"
        >
          <img src={image} alt={name} className="size-full object-cover" />
        </AspectRatio>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex justify-between gap-3">
          <div>
            <a href={link} className="line-clamp-2 font-medium hover:underline">
              {name}
            </a>
            <ProductDetails details={details} />
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="size-8 shrink-0"
            onClick={onRemoveClick}
          >
            <Trash className="size-4" />
          </Button>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <QuantityField index={index} onQuantityChange={onQuantityChange} />
          <Price className="text-lg font-semibold">
            <PriceValue price={regular} currency={currency} variant="regular" />
          </Price>
        </div>
      </div>
    </div>
  );
};

const ProductDetails = ({
  details,
}: {
  details?: { label: string; value: string }[];
}) => {
  if (!details) return null;
  return (
    <p className="mt-1 text-sm text-muted-foreground">
      {details.map((item, index) => (
        <span key={index}>
          {item.label}: {item.value}
          {index < details.length - 1 && " · "}
        </span>
      ))}
    </p>
  );
};

const QuantityField = ({
  index,
  onQuantityChange,
}: {
  index: number;
  onQuantityChange: (n: number) => void;
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={`products.${index}.quantity`}
      control={control}
      render={({ field }) => (
        <Field className="w-28">
          <QuantityInput
            inputProps={field}
            onValueChange={(newQty) => {
              field.onChange(newQty);
              onQuantityChange(newQty);
            }}
            className="rounded-none"
          />
        </Field>
      )}
    />
  );
};

const ContactFields = () => {
  const form = useFormContext();

  return (
    <Field>
      <FieldLabel className="text-sm font-medium" htmlFor="checkout-email">
        Email
      </FieldLabel>
      <Input
        {...form.register("email")}
        id="checkout-email"
        type="email"
        placeholder="email@example.com"
      />
      {form.formState.errors.email && (
        <FieldError errors={[form.formState.errors.email]} />
      )}
    </Field>
  );
};

const PaymentFields = () => {
  const form = useFormContext();
  const paymentMethod = form.watch("payment.method") as PaymentMethod;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-sm font-medium">Payment method</h2>
        <PaymentFieldsByMethod method={paymentMethod} />
      </div>
    </div>
  );
};

const PaymentFieldsByMethod = ({ method }: { method: PaymentMethod }) => {
  const form = useFormContext();

  // Default to credit card if no method selected
  const paymentMethod = method || PAYMENT_METHODS.creditCard;

  switch (paymentMethod) {
    case PAYMENT_METHODS.creditCard:
      return (
        <div className="space-y-5">
          <Controller
            name="payment.cardNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <FieldLabel
                    className="text-sm font-medium text-muted-foreground"
                    htmlFor="checkout-payment-cardNumber"
                  >
                    Card information
                  </FieldLabel>
                  <div className="pointer-events-none flex items-center gap-1.5">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/visa-icon.svg"
                      alt="Visa"
                      className="size-5 shrink-0"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/mastercard-logo.svg"
                      alt="Mastercard"
                      className="size-5 shrink-0"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/american-express-icon.svg"
                      alt="American Express"
                      className="size-5 shrink-0"
                    />
                  </div>
                </div>
                <Field
                  data-invalid={fieldState.invalid}
                  className="relative w-full"
                >
                  <Input
                    {...field}
                    id="checkout-payment-cardNumber"
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
          <div className="grid gap-5 sm:grid-cols-2">
            <DateInput />
            <Controller
              name="payment.cvc"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    id="checkout-payment-cvc"
                    placeholder="CVC"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          <Controller
            name="payment.cardholderName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="text-sm font-medium"
                  htmlFor="checkout-payment-cardholderName"
                >
                  Cardholder name
                </FieldLabel>
                <Input
                  {...field}
                  id="checkout-payment-cardholderName"
                  placeholder="Full name on card"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      );
    case PAYMENT_METHODS.paypal:
      return (
        <div>
          <Controller
            name="payment.payPalEmail"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="text-sm font-medium"
                  htmlFor="checkout-payment-payPalEmail"
                >
                  PayPal Email
                </FieldLabel>
                <Input
                  {...field}
                  type="email"
                  placeholder="your-paypal@email.com"
                  id="checkout-payment-payPalEmail"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      );
    default:
      return null;
  }
};

const DateInput = () => {
  const form = useFormContext();

  return (
    <Controller
      name="payment.expiryDate"
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
                  val = val + " / ";
                }
              }
              if (val.length > 7) {
                val = val.slice(0, 7);
              }
              field.onChange(val);
            }}
            pattern="^(0[1-9]|1[0-2]) / [0-9]{2}$"
            placeholder="MM / YY"
            id="checkout-payment-expiryDate"
            aria-invalid={fieldState.invalid}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export { Checkout4 };
```

## Usage Notes
- The split-screen layout uses CSS Grid for responsive behavior
- Order summary sidebar has a muted background for visual separation
- Payment form includes credit card brand icons for user recognition
- Form validation includes expiry date format checking and expiration detection
- Cart items can be removed and quantities updated in real-time
- Tax calculation is hardcoded but can be made dynamic
- The layout adapts from single column on mobile to split screen on desktop
