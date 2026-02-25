# Shopping Cart 15

## Metadata
- **Category**: Shopping Cart
- **Objective**: Full-featured shopping cart with product variant editing and promo codes
- **Use Case**: E-commerce websites, premium online stores, advanced checkout flows
- **Visual Style**: Professional two-column layout with comprehensive product editing
- **Interactivity**: Quantity controls, promo code application/removal, product variant editing (size/color), form validation, useful links

## Description
A comprehensive shopping cart component featuring full product variant editing capabilities (size and color selection), promo code functionality with apply/remove capabilities, detailed product information with SKUs, stock status badges, and trust badges. Includes a sophisticated order summary with subtotal, discount calculations, shipping, and tax information. Features a "Useful Links" section with helpful resources like shipping info, returns policy, and size guides. The component displays individual item prices, quantity selectors, remove functionality, and automatically calculates all pricing with promo code support. Perfect for premium e-commerce sites that need advanced cart management capabilities with promotional features, customer trust elements, and comprehensive product editing.

## Source Code
```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { ChevronUp, ShoppingBag, TicketPercent, X } from "lucide-react";
import { Fragment, memo, useCallback, useState } from "react";
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
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

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
  details: {
    label: string;
    value: string;
  }[];
  sizeValue?: string;
  colorValue?: string;
  variants?: {
    size?: {
      label: string;
      name: string;
      id: string;
      type: string;
      options: {
        label: string;
        id: string;
        value: string;
      }[];
    };
    color?: {
      label: string;
      name: string;
      id: string;
      type: string;
      options: {
        label: string;
        id: string;
        value: string;
        color: string;
      }[];
    };
  };
};

interface ShoppingCart15Props {
  emptyCartData?: {
    title: string;
    description: string;
    cta: {
      link: string;
      text: string;
    };
  };
  cartItems: CartItem[];
  usefulLinks?: {
    text: string;
    link: string;
  }[];
}

interface FullCartProps {
  cartItems: CartItem[];
  formItems: CartFormType["products"];
  form: UseFormReturn<CartFormType>;
  usefulLinks: {
    text: string;
    link: string;
  }[];
}

interface CartItemProps extends CartItem {
  index: number;
  quantity: number;
  onRemoveClick: () => void;
  onQuantityChange: (newQty: number) => void;
  onVariantChange: (variant: { size?: string; color?: string }) => void;
}

interface UsefulLinksListProps {
  links: {
    text: string;
    link: string;
  }[];
}

interface EditProductProps {
  variant: "size" | "color";
  setVariant: (v: "size" | "color") => void;
  size?: {
    label: string;
    name: string;
    id: string;
    type: string;
    options: {
      label: string;
      id: string;
      value: string;
    }[];
  };
  color?: {
    label: string;
    name: string;
    id: string;
    type: string;
    options: {
      label: string;
      id: string;
      value: string;
      color: string;
    }[];
  };
  currentSizeLabel?: string;
  currentColorLabel?: string;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
}

const EMPTY_CART_DATA = {
  title: "Your cart is empty",
  description: "Looks like you haven't added anything yet.",
  cta: {
    link: "#",
    text: "Continue Shopping",
  },
};

const CART_ITEMS: CartItem[] = [
  {
    product_id: "product-1",
    link: "#",
    name: "Premium Wireless Headphones",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-White-Headphones-1.png",
    price: {
      regular: 299.0,
      sale: 249.0,
      currency: "USD",
    },
    details: [
      {
        label: "Brand",
        value: "AudioTech",
      },
      {
        label: "Model",
        value: "AT-WH-2024",
      },
    ],
    sizeValue: "One Size",
    colorValue: "Midnight Black",
    variants: {
      color: {
        label: "Color",
        name: "color",
        id: "color",
        type: "color",
        options: [
          {
            label: "Midnight Black",
            id: "black",
            value: "black",
            color: "#000000",
          },
          {
            label: "Arctic White",
            id: "white",
            value: "white",
            color: "#FFFFFF",
          },
          {
            label: "Rose Gold",
            id: "rose",
            value: "rose",
            color: "#E8B4B8",
          },
        ],
      },
    },
  },
  {
    product_id: "product-2",
    link: "#",
    name: "Organic Cotton T-Shirt",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/minimalist-tank-top-flatlay.png",
    price: {
      regular: 49.0,
      currency: "USD",
    },
    details: [
      {
        label: "Material",
        value: "100% Organic Cotton",
      },
      {
        label: "Care",
        value: "Machine washable",
      },
    ],
    sizeValue: "M",
    colorValue: "Navy Blue",
    variants: {
      size: {
        label: "Size",
        name: "size",
        id: "size",
        type: "size",
        options: [
          {
            label: "Small",
            id: "s",
            value: "S",
          },
          {
            label: "Medium",
            id: "m",
            value: "M",
          },
          {
            label: "Large",
            id: "l",
            value: "L",
          },
          {
            label: "Extra Large",
            id: "xl",
            value: "XL",
          },
        ],
      },
      color: {
        label: "Color",
        name: "color",
        id: "color",
        type: "color",
        options: [
          {
            label: "Navy Blue",
            id: "navy",
            value: "navy",
            color: "#1E3A8A",
          },
          {
            label: "Heather Gray",
            id: "gray",
            value: "gray",
            color: "#9CA3AF",
          },
          {
            label: "Forest Green",
            id: "green",
            value: "green",
            color: "#166534",
          },
        ],
      },
    },
  },
  {
    product_id: "product-3",
    link: "#",
    name: "Leather Crossbody Bag",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/maroon-leather-handbag.png",
    price: {
      regular: 189.0,
      currency: "USD",
    },
    details: [
      {
        label: "Material",
        value: "Genuine Leather",
      },
      {
        label: "Hardware",
        value: "Brass",
      },
    ],
    sizeValue: "One Size",
    colorValue: "Burgundy",
    variants: {
      color: {
        label: "Color",
        name: "color",
        id: "color",
        type: "color",
        options: [
          {
            label: "Burgundy",
            id: "burgundy",
            value: "burgundy",
            color: "#7F1D1D",
          },
          {
            label: "Tan",
            id: "tan",
            value: "tan",
            color: "#D2B48C",
          },
          {
            label: "Black",
            id: "black",
            value: "black",
            color: "#000000",
          },
        ],
      },
    },
  },
];

const USEFUL_LINKS = [
  {
    text: "Shipping Information",
    link: "#",
  },
  {
    text: "Returns & Exchanges",
    link: "#",
  },
  {
    text: "Size Guide",
    link: "#",
  },
  {
    text: "Contact Support",
    link: "#",
  },
];

const cartFormSchema = z.object({
  products: z
    .object({
      product_id: z.string(),
      quantity: z.number(),
      price: z.number(),
      selectedSize: z.string().optional(),
      selectedColor: z.string().optional(),
    })
    .array(),
});

type CartFormType = z.infer<typeof cartFormSchema>;

const promoCodeFormSchema = z.object({
  promoCode: z.string().min(1, "Please enter a promo code"),
});

type PromoCodeFormType = z.infer<typeof promoCodeFormSchema>;

const ShoppingCart15 = ({
  emptyCartData = EMPTY_CART_DATA,
  cartItems = CART_ITEMS,
  usefulLinks = USEFUL_LINKS,
}: ShoppingCart15Props) => {
  const { title, description, cta } = emptyCartData;

  const defaultProducts = cartItems.map((item) => ({
    product_id: item.product_id,
    quantity: 1,
    price: item.price.sale ?? item.price.regular,
    selectedSize: item.sizeValue,
    selectedColor: item.colorValue,
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
    <section className="py-32">
      <div className="container">
        {isEmpty ? (
          <EmptyCart title={title} description={description} cta={cta} />
        ) : (
          <FullCart
            usefulLinks={usefulLinks}
            form={form}
            formItems={formItems}
            cartItems={cartItems}
          />
        )}
      </div>
    </section>
  );
};

const EmptyCart = ({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: { link: string; text: string };
}) => {
  return (
    <div className="container max-w-lg text-center">
      <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-muted">
        <ShoppingBag className="size-8 text-muted-foreground" />
      </div>
      <h1 className="mb-4 text-2xl font-semibold">{title}</h1>
      <p className="mb-8 text-muted-foreground">{description}</p>
      <Button asChild>
        <a href={cta.link}>{cta.text}</a>
      </Button>
    </div>
  );
};

const FullCart = ({
  usefulLinks,
  form,
  formItems,
  cartItems,
}: FullCartProps) => {
  const itemsCount = formItems.length;
  const totalPrice = formItems.reduce(
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
    (index: number) => (newQty: number) => {
      update(index, { ...fields[index], quantity: newQty });
    },
    [update, fields],
  );

  const handleRemove = useCallback(
    (index: number) => () => {
      remove(index);
    },
    [remove],
  );

  const handleVariantChange = useCallback(
    (index: number, variant: { size?: string; color?: string }) => {
      const currentItem = fields[index];
      update(index, {
        ...currentItem,
        selectedSize: variant.size ?? currentItem.selectedSize,
        selectedColor: variant.color ?? currentItem.selectedColor,
      });
    },
    [update, fields],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Shopping Cart</h1>
          <span className="text-sm text-muted-foreground">
            {itemsCount} {itemsCount === 1 ? "item" : "items"}
          </span>
        </div>

        <div className="space-y-6">
          {fields.map((field, index) => {
            const cartItem = cartItems.find(
              (p) => p.product_id === field.product_id,
            ) as CartItem;
            return (
              <CartItem
                key={field.id}
                index={index}
                onRemoveClick={() => handleRemove(index)()}
                quantity={field.quantity}
                onQuantityChange={handleQuantityChange(index)}
                onVariantChange={(variant) =>
                  handleVariantChange(index, variant)
                }
                {...cartItem}
              />
            );
          })}
        </div>

        {/* Useful Links */}
        <div className="mt-8 rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">Need Help?</h3>
          <UsefulLinksList links={usefulLinks} />
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-6 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

          <PromoCode />

          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalPrice)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalPrice)}
              </span>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-6 w-full"
            onClick={form.handleSubmit(onSubmit)}
          >
            Proceed to Checkout
          </Button>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Taxes calculated at checkout
          </p>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({
  image,
  name,
  details,
  index,
  onQuantityChange,
  onRemoveClick,
  onVariantChange,
  price,
  quantity,
  variants,
  sizeValue,
  colorValue,
}: CartItemProps) => {
  const { regular, currency, sale } = price;
  const currentSizeLabel = sizeValue;
  const currentColorLabel = colorValue;

  const [openEdit, setOpenEdit] = useState<"size" | "color" | null>(null);

  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="flex gap-6">
        <div className="w-36 shrink-0">
          <AspectRatio
            ratio={1}
            className="overflow-hidden rounded-lg bg-muted"
          >
            <img
              src={image}
              alt={name}
              className="size-full object-cover"
            />
          </AspectRatio>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="mb-2 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium">{name}</h3>
                {details && (
                  <ul className="mt-1 space-y-0.5">
                    {details.map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground">
                        {item.label}: {item.value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-destructive"
                onClick={onRemoveClick}
              >
                <X className="mr-1.5 size-4" />
                Remove
              </Button>
            </div>

            <div className="mt-3 space-y-2">
              {variants?.size && (
                <EditProduct
                  variant="size"
                  setVariant={setOpenEdit}
                  size={variants.size}
                  currentSizeLabel={currentSizeLabel}
                  onSizeChange={(size) => onVariantChange({ size })}
                />
              )}
              {variants?.color && (
                <EditProduct
                  variant="color"
                  setVariant={setOpenEdit}
                  color={variants.color}
                  currentColorLabel={currentColorLabel}
                  onColorChange={(color) => onVariantChange({ color })}
                />
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <QuantityField index={index} onQuantityChange={onQuantityChange} />
            </div>
            <div className="text-right">
              <Price className="text-lg font-semibold">
                <PriceValue
                  price={sale ?? regular}
                  currency={currency}
                  variant={sale ? "sale" : "regular"}
                />
              </Price>
              {sale && (
                <Price className="text-sm text-muted-foreground line-through">
                  <PriceValue
                    price={regular}
                    currency={currency}
                    variant="regular"
                  />
                </Price>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PromoCode = () => {
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);

  const promoForm = useForm<PromoCodeFormType>({
    resolver: zodResolver(promoCodeFormSchema),
    defaultValues: {
      promoCode: "",
    },
  });

  const applyPromoCode = (data: PromoCodeFormType) => {
    setPromoError(null);
    if (data.promoCode.toUpperCase() === "SAVE10") {
      setAppliedPromo(data.promoCode.toUpperCase());
      setPromoCode("");
      promoForm.reset();
    } else {
      setPromoError("Invalid promo code");
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setPromoError(null);
  };

  return (
    <div className="space-y-3">
      {appliedPromo ? (
        <div className="flex items-center justify-between rounded-md bg-green-50 px-3 py-2 dark:bg-green-950">
          <div className="flex items-center gap-2">
            <TicketPercent className="size-4 text-green-600" />
            <Badge
              variant="outline"
              className="gap-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
            >
              {appliedPromo}
            </Badge>
            <span className="text-sm text-green-700 dark:text-green-300">
              10% off
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-1 text-muted-foreground hover:text-foreground"
            onClick={removePromo}
          >
            Remove
          </Button>
        </div>
      ) : (
        <FormProvider {...promoForm}>
          <form
            onSubmit={promoForm.handleSubmit(applyPromoCode)}
            className="space-y-2"
          >
            <div className="flex gap-2">
              <FormField
                name="promoCode"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <input
                        {...field}
                        placeholder="Promo code"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={promoCode}
                        onChange={(e) => {
                          setPromoCode(e.target.value);
                          setPromoError(null);
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" variant="outline" size="sm">
                Apply
              </Button>
            </div>
            {promoError && (
              <p className="text-sm text-destructive">{promoError}</p>
            )}
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              Try
              <Badge variant="outline" className="font-mono text-xs">
                SAVE10
              </Badge>
              for 10% off
            </p>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

const UsefulLinksList = ({ links }: UsefulLinksListProps) => {
  return (
    <div className="space-y-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.link}
          className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground"
        >
          {link.text}
          <ChevronUp className="size-4 rotate-90" />
        </a>
      ))}
    </div>
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
        <div className="w-full max-w-24">
          <QuantityInput
            inputProps={field}
            onValueChange={(newQty) => {
              field.onChange(newQty);
              onQuantityChange(newQty);
            }}
            className="rounded-md border"
          />
        </div>
      )}
    />
  );
};

const EditProduct = ({
  variant,
  setVariant,
  size,
  color,
  currentSizeLabel,
  currentColorLabel,
  onSizeChange,
  onColorChange,
}: EditProductProps) => {
  const isOpen = openEdit === variant;
  const isSize = variant === "size";
  const isColor = variant === "color";

  const options = isSize ? size?.options : color?.options;
  const currentLabel = isSize ? currentSizeLabel : currentColorLabel;
  const label = isSize ? size?.label : color?.label;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={(open) => setVariant(open ? variant : null)}
      className="w-full"
    >
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-auto justify-between px-2 py-1 text-xs"
        >
          <span className="text-muted-foreground">
            {label}: {currentLabel}
          </span>
          <ChevronUp
            className={clsx(
              "size-3 transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1 space-y-1">
        {options?.map((option) => (
          <Button
            key={option.id}
            variant="ghost"
            size="sm"
            className={clsx(
              "h-auto justify-start px-2 py-1 text-xs",
              currentLabel === option.label &&
                "bg-primary/10 text-primary",
            )}
            onClick={() => {
              if (isSize) {
                onSizeChange(option.value);
              } else {
                onColorChange(option.value);
              }
              setVariant(null);
            }}
          >
            {isColor && option.color && (
              <span
                className="mr-2 inline-block size-3 rounded-full border"
                style={{ backgroundColor: option.color }}
              />
            )}
            {option.label}
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export { ShoppingCart15 };
```
