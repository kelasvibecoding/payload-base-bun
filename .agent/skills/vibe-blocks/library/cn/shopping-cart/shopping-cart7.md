# Shopping Cart 7

## Metadata
- **Category**: Shopping Cart
- **Objective**: Dialog-based shopping cart with grid layout and product details
- **Use Case**: E-commerce websites, modal shopping cart, quick view cart
- **Visual Style**: Modal dialog with grid layout of product cards
- **Interactivity**: Quantity controls, item removal, dialog open/close, form validation

## Description
A sophisticated dialog-based shopping cart component featuring a modal overlay with a grid layout of product cards. Uses React Hook Form with Zod validation for form management. Each product card displays detailed information including product variants (size, color, etc.), quantity controls, and remove functionality. Features a responsive grid layout that adapts to different screen sizes. The dialog includes a header with cart count, scrollable content area for products, and a footer with order total and action buttons. Perfect for e-commerce sites that need a modal shopping cart experience with advanced form handling and validation.

## Source Code
```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, PackageOpen, X } from "lucide-react";
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

import { Price, PriceValue } from "@/components/price";
import QuantityInput from "@/components/quantity-input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Empty,
  EmptyContent,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Field } from "@/components/ui/field";

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
  details?: {
    label: string;
    value: string;
  }[];
};

interface ShoppingCart7Props {
  cartItems: CartItem[];
}

interface FullCartProps {
  cartItems: CartItem[];
  formItems: CartFormType["products"];
  form: UseFormReturn<CartFormType>;
}

interface CartItemProps extends CartItem {
  index: number;
  quantity: number;
  onRemoveClick: () => void;
  onQuantityChange: (newQty: number) => void;
}

const CART_ITEMS: CartItem[] = [
  {
    product_id: "product-1",
    link: "#",
    name: "LumaGlow Hydrating Cream",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/point-normal-Xp0bTCLD07k-unsplash-3.jpg",
    price: {
      regular: 49.0,
      currency: "USD",
    },
    details: [
      {
        label: "Size",
        value: "100ml",
      },
    ],
  },
  {
    product_id: "product-2",
    link: "#",
    name: "Radiance Ritual Set",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/pexels-amelie-chen-243775000-12352170-3.jpg",
    price: {
      regular: 140.0,
      currency: "USD",
    },
  },
  {
    product_id: "product-3",
    link: "#",
    name: "Timeless Renewal Cream",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/pexels-carlos-diaz-216017-18350286-3.jpg",
    price: {
      regular: 84.0,
      currency: "USD",
    },
    details: [
      {
        label: "Size",
        value: "240ml",
      },
    ],
  },
  {
    product_id: "product-4",
    link: "#",
    name: "Radiant Lock Mist",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/pexels-rdne-8903695-3.jpg",
    price: {
      regular: 245.0,
      currency: "USD",
    },
    details: [
      {
        label: "Size",
        value: "250ml",
      },
    ],
  },
  {
    product_id: "product-5",
    link: "#",
    name: "HydraBloom Night Cream",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/pexels-volkerthimm-19049367-3.jpg",
    price: {
      regular: 499.0,
      currency: "USD",
    },
    details: [
      {
        label: "Size",
        value: "200ml",
      },
    ],
  },
];

const cartFormSchema = z.object({
  products: z
    .object({
      product_id: z.string(),
      quantity: z.number(),
      price: z.number(),
    })
    .array(),
});

type CartFormType = z.infer<typeof cartFormSchema>;

const ShoppingCart7 = ({ cartItems = CART_ITEMS }: ShoppingCart7Props) => {
  const defaultProducts = cartItems.map((item) => ({
    product_id: item.product_id,
    quantity: 1,
    price: item.price.sale ?? item.price.regular,
  }));

  const form = useForm<CartFormType>({
    resolver: zodResolver(cartFormSchema),
    defaultValues: {
      products: defaultProducts,
    },
  });

  const formItems = form.watch("products");

  const isEmpty = formItems.length === 0;

  return (
    <Dialog defaultOpen>
      <DialogContent
        aria-describedby={undefined}
        style={
          {
            "--dialog-space-y": "1.25rem",
          } as React.CSSProperties
        }
        className="max-h-[calc(100dvh-calc(2*var(--dialog-space-y)))] gap-0 p-0 sm:max-w-240"
      >
        <div className=""></div>
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <FullCart form={form} formItems={formItems} cartItems={cartItems} />
        )}
      </DialogContent>
    </Dialog>
  );
};

const EmptyCart = () => {
  return (
    <Empty>
      <EmptyContent className="gap-3.5">
        <EmptyMedia>
          <PackageOpen className="size-25 stroke-muted-foreground stroke-[0.03rem]" />
        </EmptyMedia>

        <EmptyTitle className="text-center text-sm text-muted-foreground">
          No products in the cart
        </EmptyTitle>
      </EmptyContent>
    </Empty>
  );
};

const FullCart = ({ cartItems, form, formItems }: FullCartProps) => {
  const itemsCount = formItems && formItems.length ? formItems.length : 0;
  const totalPrice = formItems?.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0,
  );

  const onSubmit = (data: CartFormType) => {
    console.log(data);
  };

  const { fields, remove, update } = useFieldArray({
    control: form.control,
    name: "products",
  });

  const handleQuantityChange = useCallback(
    (index: number) => (newQty: number) =>
      update(index, { ...fields[index], quantity: newQty }),
    [update, fields],
  );

  const handleRemove = useCallback(
    (index: number) => () => {
      remove(index);
    },
    [remove],
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div
          style={
            {
              "--header-height": "4.1875rem",
              "--footer-height": "6.125rem",
            } as React.CSSProperties
          }
          className="flex max-h-full flex-col"
        >
          <DialogHeader className="h-[var(--header-height)] border-b p-3.5">
            <DialogTitle className="text-4xl uppercase">
              Cart
              <sup className="ml-3.5 align-[0.5rem] text-lg">
                ({itemsCount})
              </sup>
            </DialogTitle>
          </DialogHeader>
          <div className="hide-scrollbar max-h-[calc(100dvh-calc(2*var(--dialog-space-y))-calc(var(--header-height)+var(--footer-height)))] overflow-auto">
            <div className="hide-scrollbar max-h-full overflow-auto py-3.5">
              <div className="grid grid-cols-1 gap-1.5 px-3.5 sm:grid-cols-2 md:grid-cols-3">
                {fields.map((field, index) => (
                  <CartItem
                    key={field.id}
                    index={index}
                    onRemoveClick={() => handleRemove(index)()}
                    quantity={field.quantity}
                    onQuantityChange={(newQty: number) =>
                      handleQuantityChange(index)(newQty)
                    }
                    {...(cartItems.find(
                      (p) => p.product_id === field.product_id,
                    ) as CartItem)}
                  />
                ))}
              </div>
            </div>
          </div>
          <DialogFooter className="h-[var(--footer-height)] flex-col gap-3.5 border-t p-3.5 sm:flex-col">
            <div className="flex w-full items-center justify-between gap-3.5">
              <p className="text-sm uppercase">Total</p>
              <Price className="text-sm">
                <PriceValue
                  price={totalPrice}
                  currency={cartItems[0].price.currency}
                  variant="regular"
                />
              </Price>
            </div>
            <div className="flex gap-2">
              <Button asChild className="flex-1" variant="outline">
                <a href="#">
                  View Cart
                  <ArrowUpRight />
                </a>
              </Button>
              <Button className="flex-1">
                Checkout
                <ArrowUpRight />
              </Button>
            </div>
          </DialogFooter>
        </div>
      </form>
    </FormProvider>
  );
};

const CartItem = ({
  image,
  name,
  details,
  index,
  onQuantityChange,
  onRemoveClick,
  price,
  quantity,
}: CartItemProps) => {
  const { regular, currency } = price;

  return (
    <Card className="relative border-none bg-transparent p-0 shadow-none">
      <div className="absolute top-2.5 right-2.5 z-10">
        <Button
          type="button"
          size="icon-sm"
          variant="ghost"
          className="size-5"
          onClick={onRemoveClick}
        >
          <X />
        </Button>
      </div>
      <CardContent className="flex h-full flex-col p-0">
        <AspectRatio ratio={1.2} className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={name}
            className="block size-full object-cover object-center"
          />
        </AspectRatio>
        <div className="flex h-full flex-col justify-between gap-5 p-2.5">
          <div>
            <CardTitle className="text-sm leading-snug font-normal">
              {name}
            </CardTitle>
            {details && (
              <ul>
                {details?.map((item, index) => {
                  const isLast = index === details.length - 1;
                  return (
                    <li className="inline" key={`product-details-${index}`}>
                      <dl className="inline text-sm font-medium">
                        <dt className="sr-only inline">{item.label}: </dt>
                        <dd className="inline text-muted-foreground">
                          {item.value}
                        </dd>
                        {!isLast && (
                          <span className="mx-1 text-muted-foreground">/</span>
                        )}
                      </dl>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-5">
            <QuantityField index={index} onQuantityChange={onQuantityChange} />
            <div className="inline-flex items-baseline gap-1">
              <span className="text-sm text-muted-foreground">{quantity}</span>
              <span className="text-sm text-muted-foreground">x</span>
              <Price className="gap-x-1 text-sm font-normal">
                <PriceValue
                  price={regular}
                  currency={currency}
                  variant="regular"
                  className="text-muted-foreground"
                />
              </Price>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
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
      render={({ field }) => {
        return (
          <Field className="w-full max-w-28">
            <QuantityInput
              inputProps={field}
              onValueChange={(newQty) => {
                field.onChange(newQty);
                onQuantityChange(newQty);
              }}
              className="rounded-none border-none !shadow-none"
            />
          </Field>
        );
      }}
    />
  );
};

export { ShoppingCart7 };
```
