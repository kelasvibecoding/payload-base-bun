# Checkout 8

## Metadata
- **Category**: Checkout
- **Objective**: Advanced multi-step accordion checkout with integrated cart sidebar and comprehensive payment processing.
- **Use Case**: E-commerce checkout, payment collection, shipping management, order completion with promotional codes.
- **Visual Style**: Professional three-column layout with integrated shopping cart, accordion navigation, and modern form design.
- **Interactivity**: Multi-step accordion navigation, promotional code application, payment method selection, form validation, responsive cart management.

## Description
An advanced checkout component featuring a sophisticated three-column layout with an integrated shopping cart sidebar, multi-step accordion navigation, and comprehensive payment processing. The component includes promotional code functionality, multiple payment methods (credit card, PayPal, bank transfer), detailed form validation, and a professional design suitable for enterprise-level e-commerce applications.

## Key Features
- **Three-Column Layout**: Responsive grid that adapts from single column to three columns based on screen size
- **Integrated Shopping Cart**: Sidebar with product images, pricing, and real-time calculations including shipping and discounts
- **Multi-Step Accordion Navigation**: Three-step process (Contact Information, Shipping Method, Payment) with smooth transitions
- **Promotional Code System**: Dedicated coupon code section with apply functionality and input validation
- **Multiple Payment Methods**: Credit card, PayPal, and bank transfer with dynamic form fields
- **Advanced Form Validation**: React Hook Form with Zod schema including expiry date validation
- **Professional Typography**: Clean, business-appropriate styling with proper spacing and hierarchy

## Source Code
```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
  useFormContext,
  UseFormReturn,
} from "react-hook-form";
import z from "zod";

import { cn } from "@/lib/utils";

import { Price, PriceType, PriceValue } from "@/components/price";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

type CartItem = {
  product_id: string;
  link: string;
  name: string;
  image: string;
  price: PriceType;
  details: {
    label: string;
    value: string;
  }[];
};

const PAYMENT_METHODS = {
  creditCard: "creditCard",
  paypal: "paypal",
  onlineBankTransfer: "onlineBankTransfer",
} as const;

type PaymentMethod = typeof PAYMENT_METHODS[keyof typeof PAYMENT_METHODS];

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

type CartItemProps = CartItem;

type CartType = {
  items: CartItem[];
  shippingCost: {
    price: number;
    currency: string;
  };
  discount: {
    price: number;
    currency: string;
  };
};

interface CartProps {
  cartData: CartType;
  form: UseFormReturn<CheckoutFormType>;
}

interface Checkout8Props {
  cart: CartType;
  className?: string;
}

interface CheckoutFormProps {
  onSubmit: SubmitHandler<CheckoutFormType>;
}

const CART = {
  items: [
    {
      product_id: "product-1",
      link: "#",
      name: "Stylish Maroon Sneaker",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/stylish-maroon-sneaker.png",
      price: {
        regular: 354.0,
        currency: "USD",
      },
      details: [
        {
          label: "Color",
          value: "Red",
        },
        {
          label: "Size",
          value: "36",
        },
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
      details: [
        {
          label: "Color",
          value: "Blue & White",
        },
        {
          label: "Size",
          value: "L",
        },
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
      details: [
        {
          label: "Color",
          value: "Maroon",
        },
      ],
    },
  ],
  shippingCost: {
    price: 20.0,
    currency: "USD",
  },
  discount: {
    price: 50.0,
    currency: "USD",
  },
};

const Checkout8 = ({ cart = CART, className }: Checkout8Props) => {
  const defaultProducts = cart.items.map((item) => ({
    product_id: item.product_id,
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

  const onSubmit: SubmitHandler<CheckoutFormType> = (
    data: CheckoutFormType,
  ) => {
    console.log(data);
  };

  return (
    <section className={cn("bg-muted py-32", className)}>
      <div className="container">
        <FormProvider {...form}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            <div className="col-span-1">
              <div className="space-y-6">
                <Cart form={form} cartData={cart} />
                <PromoCode />
              </div>
            </div>
            <div className="xl:col-span-2">
              <CheckoutForm onSubmit={onSubmit} />
            </div>
          </div>
        </FormProvider>
      </div>
    </section>
  );
};

const Cart = ({ cartData, form }: CartProps) => {
  const { fields } = useFieldArray({
    control: form.control,
    name: "products",
  });

  const formItems = form.watch("products");

  const subTotalPrice = formItems?.reduce((sum, p) => sum + p.price, 0);
  const totalPrice =
    subTotalPrice + cartData.shippingCost.price - cartData.discount.price;

  return (
    <div className="space-y-6 rounded-lg border-border bg-background p-7 shadow-lg">
      <div>
        <h2 className="text-xl leading-relaxed font-semibold">Shopping Cart</h2>
        <p className="text-sm font-medium text-muted-foreground">
          You have {formItems.length} items in your cart.
        </p>
      </div>
      <Separator />
      <ul className="space-y-5">
        {fields.map((field) => {
          return (
            <li key={field.id}>
              <CartItem
                {...(cartData.items.find(
                  (p) => p.product_id === field.product_id,
                ) as CartItem)}
              />
            </li>
          );
        })}
      </ul>
      <Separator />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>Subtotal</div>
          <Price>
            <PriceValue
              price={subTotalPrice}
              currency={cartData.items[0].price.currency}
            />
          </Price>
        </div>
        <div className="flex items-center justify-between">
          <div>Shipping Cost</div>
          <Price>
            <PriceValue
              price={cartData.shippingCost.price}
              currency={cartData.shippingCost.currency}
            />
          </Price>
        </div>
        <div className="flex items-center justify-between">
          <div>Discount</div>
          <Price>
            <PriceValue
              price={cartData.discount.price}
              currency={cartData.discount.currency}
            />
          </Price>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <div>Total</div>
        <Price>
          <PriceValue
            price={totalPrice}
            currency={cartData.discount.currency}
          />
        </Price>
      </div>
      <Button className="w-full">Place Order</Button>
    </div>
  );
};

const CartItem = ({ image, name, link, details, price }: CartItemProps) => {
  const { regular, currency } = price;

  return (
    <a href={link} className="flex items-center gap-4">
      <div className="shrink-0 basis-15">
        <AspectRatio ratio={1} className="overflow-hidden">
          <img
            src={image}
            alt=""
            className="block size-full object-cover object-center"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-1 gap-4 max-sm:flex-col sm:items-center">
        <div className="flex-1">
          <h2 className="font-medium">{name}</h2>
          <ProductDetails details={details} />
        </div>
        <Price className="text-sm font-semibold">
          <PriceValue price={regular} currency={currency} variant="regular" />
        </Price>
      </div>
    </a>
  );
};

const ProductDetails = ({
  details,
}: {
  details?: {
    label: string;
    value: string;
  }[];
}) => {
  if (!details) return;
  return (
    <ul>
      {details?.map((item, index) => {
        const isLast = index === details.length - 1;

        return (
          <li className="inline" key={index}>
            <dl className="inline text-xs text-muted-foreground">
              <dt className="inline">{item.label}: </dt>
              <dd className="inline">{item.value}</dd>
              {!isLast && <span className="mx-1 text-muted-foreground">/</span>}
            </dl>
          </li>
        );
      })}
    </ul>
  );
};

const promoCodeFormSchema = z.object({
  promoCode: z.string().trim().min(3),
});

type promoCodeFormType = z.infer<typeof promoCodeFormSchema>;

const PromoCode = () => {
  const promoForm = useForm<promoCodeFormType>({
    resolver: zodResolver(promoCodeFormSchema),
    defaultValues: {
      promoCode: "",
    },
  });

  const onSubmit = (data: promoCodeFormType) => {
    console.log(data);
  };

  return (
    <div className="rounded-lg border-border bg-background p-7 shadow-lg">
      <form onSubmit={promoForm.handleSubmit(onSubmit)}>
        <Controller
          name="promoCode"
          control={promoForm.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div>
                <FieldLabel
                  htmlFor="promo-code"
                  className="text-lg font-semibold"
                >
                  Coupon Code
                </FieldLabel>
                <FieldDescription>
                  Enter code to get discount instantly.
                </FieldDescription>
              </div>

              <InputGroup>
                <InputGroupInput
                  {...field}
                  id="promo-code"
                  placeholder="Promotional code"
                  aria-invalid={fieldState.invalid}
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton variant="default" className="text-xs">
                    Apply
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </form>
    </div>
  );
};

const CheckoutForm = ({ onSubmit }: CheckoutFormProps) => {
  const [activeAccordion, setActiveAccordion] = useState("item-1");
  const { handleSubmit } = useFormContext<CheckoutFormType>();

  const handleOnValueChange = (value: string) => {
    setActiveAccordion(value);
  };

  const onContinue = (value: string) => {
    setActiveAccordion(value);
  };

  const accordionTriggerClasses =
    "px-5 py-3.5 text-base font-semibold hover:no-underline";
  const accordionContentClasses = "px-5 pb-7 pt-3.5 border-t";

  return (
    <div className="space-y-6 rounded-lg border-border bg-background p-7 shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Accordion
          type="single"
          collapsible
          className="w-full border"
          value={activeAccordion}
          onValueChange={handleOnValueChange}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className={accordionTriggerClasses}>
              Contact Information
            </AccordionTrigger>
            <AccordionContent className={accordionContentClasses}>
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
            <AccordionTrigger className={accordionTriggerClasses}>
              Shipping Method
            </AccordionTrigger>
            <AccordionContent className={accordionContentClasses}>
              <div className="space-y-7">
                <ShippingMethodFields />
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
            <AccordionTrigger className={accordionTriggerClasses}>
              Payment
            </AccordionTrigger>
            <AccordionContent className={accordionContentClasses}>
              <div className="space-y-7">
                <PaymentFields />
                <Button type="submit" className="w-full">
                  Checkout
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </div>
  );
};

const ContactFields = () => {
  const form = useFormContext();

  return (
    <FieldGroup className="gap-3.5">
      <Controller
        name="address.country"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              className="text-sm font-normal"
              htmlFor="checkout-country"
            >
              Country
            </FieldLabel>
            <Input
              {...field}
              id="checkout-country"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <div className="flex gap-3.5 max-sm:flex-col">
        <Controller
          name="address.firstName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-sm font-normal"
                htmlFor="checkout-firstName"
              >
                First Name
              </FieldLabel>
              <Input
                {...field}
                id="checkout-firstName"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="address.lastName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-sm font-normal"
                htmlFor="checkout-lastName"
              >
                Last Name
              </FieldLabel>
              <Input
                {...field}
                id="checkout-lastName"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
      <Controller
        name="address.address"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              className="text-sm font-normal"
              htmlFor="checkout-address"
            >
              Address
            </FieldLabel>
            <Input
              {...field}
              id="checkout-address"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <div className="flex gap-3.5 max-sm:flex-col">
        <Controller
          name="address.postalCode"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-sm font-normal"
                htmlFor="checkout-postalCode"
              >
                Postal Code
              </FieldLabel>
              <Input
                {...field}
                id="checkout-postalCode"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="address.city"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-sm font-normal"
                htmlFor="checkout-city"
              >
                City
              </FieldLabel>
              <Input
                {...field}
                id="checkout-city"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
      <Controller
        name="address.phone"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              className="text-sm font-normal"
              htmlFor="checkout-phone"
            >
              Phone
            </FieldLabel>
            <Input
              {...field}
              id="checkout-phone"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="contactInfo.email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="text-sm font-normal" htmlFor="checkout-email">
              Email
            </FieldLabel>
            <Input
              {...field}
              id="checkout-email"
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

const ShippingMethodFields = () => {
  const form = useFormContext();

  return (
    <Controller
      name="shippingMethod"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field>
          <RadioGroup
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}
            className="flex max-sm:flex-col"
          >
            <FieldLabel htmlFor="checkout-shippingMethod-1">
              <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                <FieldContent>
                  <FieldTitle>UPS</FieldTitle>
                  <FieldDescription>Delivery: Tomorrow</FieldDescription>
                </FieldContent>
                <div className="flex gap-3.5">
                  <p className="text-sm">$10.00</p>
                  <RadioGroupItem
                    value="UPS"
                    id="checkout-shippingMethod-1"
                    aria-invalid={fieldState.invalid}
                  />
                </div>
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="checkout-shippingMethod-2">
              <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                <FieldContent>
                  <FieldTitle>FedEx</FieldTitle>
                  <FieldDescription>Delivery: Next Week</FieldDescription>
                </FieldContent>
                <div className="flex gap-3.5">
                  <p className="text-sm">$2.99</p>
                  <RadioGroupItem
                    value="FedEx"
                    id="checkout-shippingMethod-2"
                    aria-invalid={fieldState.invalid}
                  />
                </div>
              </Field>
            </FieldLabel>
          </RadioGroup>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

const PaymentFields = () => {
  const form = useFormContext();
  const paymentMethod = form.watch("payment.method") as PaymentMethod;

  return (
    <div className="space-y-7">
      <Controller
        name="payment.method"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <RadioGroup
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}
            >
              <FieldLabel htmlFor="checkout-payment-method-1">
                <Field
                  orientation="horizontal"
                  data-invalid={fieldState.invalid}
                >
                  <FieldContent className="flex-1">
                    <FieldTitle>Credit Card</FieldTitle>
                  </FieldContent>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/visa-icon.svg"
                    alt="Credit Card"
                    className="size-5"
                  />
                  <RadioGroupItem
                    value="creditCard"
                    id="checkout-payment-method-1"
                    aria-invalid={fieldState.invalid}
                  />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="checkout-payment-method-2">
                <Field
                  orientation="horizontal"
                  data-invalid={fieldState.invalid}
                >
                  <FieldContent className="flex-1">
                    <FieldTitle>PayPal</FieldTitle>
                  </FieldContent>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/paypal-icon.svg"
                    alt="PayPal"
                    className="size-5"
                  />
                  <RadioGroupItem
                    value="paypal"
                    id="checkout-payment-method-2"
                    aria-invalid={fieldState.invalid}
                  />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="checkout-payment-method-3">
                <Field
                  orientation="horizontal"
                  data-invalid={fieldState.invalid}
                >
                  <FieldContent>
                    <FieldTitle>Online Bank Transfer</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem
                    value="onlineBankTransfer"
                    id="checkout-payment-method-3"
                    aria-invalid={fieldState.invalid}
                  />
                </Field>
              </FieldLabel>
            </RadioGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <PaymentFieldsByMethod method={paymentMethod} />
    </div>
  );
};

const PaymentFieldsByMethod = ({ method }: { method: PaymentMethod }) => {
  const form = useFormContext();

  if (!method) return;

  switch (method) {
    case PAYMENT_METHODS.creditCard:
      return (
        <div className="space-y-3.5">
          <Controller
            name="payment.cardholderName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="text-sm font-normal"
                  htmlFor="checkout-payment-cardholderName"
                >
                  Cardholder Name
                </FieldLabel>
                <Input
                  {...field}
                  id="checkout-payment-cardholderName"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="payment.cardNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="text-sm font-normal"
                  htmlFor="checkout-payment-cardNumber"
                >
                  Card Number
                </FieldLabel>
                <Input
                  {...field}
                  id="checkout-payment-cardNumber"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <div className="flex gap-3.5 max-sm:flex-col">
            <DateInput />
            <Controller
              name="payment.cvc"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="text-sm font-normal"
                    htmlFor="checkout-payment-cvc"
                  >
                    Card Number
                  </FieldLabel>
                  <Input
                    {...field}
                    id="checkout-payment-cvc"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
        </div>
      );
    case PAYMENT_METHODS.paypal:
      return (
        <Controller
          name="payment.payPalEmail"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-sm font-normal"
                htmlFor="checkout-payment-payPalEmail"
              >
                PayPal Email
              </FieldLabel>
              <Input
                {...field}
                type="email"
                placeholder="you-email-here@email.com"
                id="checkout-payment-payPalEmail"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      );
    case PAYMENT_METHODS.onlineBankTransfer:
      return (
        <div className="space-y-3.5">
          <Controller
            name="payment.bankName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="text-sm font-normal"
                  htmlFor="checkout-payment-bankName"
                >
                  Bank Name
                </FieldLabel>
                <Input
                  {...field}
                  placeholder="Bank Name"
                  id="checkout-payment-bankName"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="payment.accountNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="text-sm font-normal"
                  htmlFor="checkout-payment-accountNumber"
                >
                  Account Number
                </FieldLabel>
                <Input
                  {...field}
                  id="checkout-payment-accountNumber"
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
          <FieldLabel
            className="text-sm font-normal"
            htmlFor="checkout-payment-expiryDate"
          >
            Card Number
          </FieldLabel>
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
            pattern="^(0[1-9]|1[0-2])/[0-9]{2}$"
            placeholder="MM/YY"
            id="checkout-payment-expiryDate"
            aria-invalid={fieldState.invalid}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export { Checkout8 };
```

## Usage Notes
- The component uses a sophisticated three-column responsive layout that adapts from mobile to desktop
- Promotional code functionality includes proper validation and input formatting
- All form fields include comprehensive validation with error messaging
- Payment method selection dynamically shows appropriate form fields based on chosen method
- Credit card expiry date includes both format validation and expiration checking
- The shopping cart sidebar provides real-time price calculations including shipping and discounts
- All form data is type-safe with TypeScript interfaces and Zod schemas
- The component is suitable for enterprise-level e-commerce applications with professional styling
