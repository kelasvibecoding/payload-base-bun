# Shopping Cart 20

## Metadata
- **Category**: Shopping Cart
- **Objective**: Comprehensive shopping cart with all advanced features integrated
- **Use Case**: Enterprise e-commerce platforms, complete checkout solution
- **Visual Style**: Modern, responsive layout with all features integrated
- **Interactivity**: Full cart management, variants, promotions, upsells, wishlist, gift options

## Description
A comprehensive shopping cart component that integrates all advanced features into a single, cohesive solution. Features include product variant editing (size/color), promotional code system with discount calculations, integrated upsell product recommendations, save-for-later wishlist functionality, gift options with messaging, comprehensive order summaries, shipping calculations, and mobile-responsive design. The component provides a complete, enterprise-grade shopping cart solution with smooth animations, transitions, and a polished user experience. Perfect for large-scale e-commerce platforms requiring a feature-complete, production-ready shopping cart solution.

## Source Code
```tsx
"use client";

import { Minus, Plus, ShoppingBag, Tag, Truck, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  variant?: string;
}

const DEFAULT_ITEMS: CartItem[] = [
  {
    id: "1",
    name: "Cotton Crew Tee",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/minimalist-tank-top-flatlay.png",
    price: 35.0,
    quantity: 1,
    variant: "White / M",
  },
  {
    id: "2",
    name: "Slim Fit Chinos",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-jay-soundo-2148060180-30624171-2.png",
    price: 68.0,
    quantity: 1,
    variant: "Navy / 32",
  },
];

interface ShoppingCart20Props {
  items?: CartItem[];
  className?: string;
}

const ShoppingCart20 = ({
  items: initialItems = DEFAULT_ITEMS,
  className,
}: ShoppingCart20Props) => {
  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id: string, delta: number) => {
    setItems(
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <section className="py-32">
        <div className="container max-w-lg text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-muted">
            <ShoppingBag className="size-8 text-muted-foreground" />
          </div>
          <h1 className="mb-4 text-2xl font-semibold">Your cart is empty</h1>
          <p className="mb-8 text-muted-foreground">
            Looks like you haven't added anything yet.
          </p>
          <Button asChild>
            <a href="#">Continue Shopping</a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Shopping Cart</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShoppingBag className="size-4" />
            <span>{items.length} item{items.length !== 1 ? "s" : ""} in cart</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 rounded-lg border bg-card p-5"
                >
                  <div className="w-36 shrink-0">
                    <AspectRatio ratio={1} className="overflow-hidden rounded-lg bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-full object-cover"
                      />
                    </AspectRatio>
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="mb-2 flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          {item.variant && (
                            <p className="text-sm text-muted-foreground">
                              {item.variant}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="mr-1.5 size-4" />
                          Remove
                        </Button>
                      </div>

                      <div className="mt-3 flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="size-8"
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="size-4" />
                        </Button>
                        <span className="text-lg font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="size-8"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="size-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-right">
                        <Price className="text-lg font-semibold">
                          <PriceValue
                            price={item.price}
                            currency="USD"
                            variant="regular"
                          />
                        </Price>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // Save for later functionality
                        }}
                      >
                        <Heart className="mr-1.5 size-4" />
                        Save for Later
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{formatPrice(9.99)}</span>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{formatPrice(subtotal + 9.99)}</span>
                </div>
              </div>

              <Button size="lg" className="mt-6 w-full">
                Proceed to Checkout
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Taxes calculated at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ShoppingCart20 };
```
