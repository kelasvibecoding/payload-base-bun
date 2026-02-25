# Shopping Cart 18

## Metadata
- **Category**: Shopping Cart
- **Objective**: Popover-based mini shopping cart with compact layout
- **Use Case**: E-commerce websites, header cart icon, quick cart preview
- **Visual Style**: Compact popover with condensed product information
- **Interactivity**: Popover open/close, item removal, quantity display

## Description
A compact popover-based mini shopping cart component designed for header integration. Features a popover that opens when clicking a cart icon, displaying cart items in a condensed layout. Shows product thumbnails, names, quantities, and prices in a space-efficient format. Includes remove functionality for each item and displays a subtotal. The popover automatically closes when clicking outside or on close. Perfect for e-commerce sites that need a space-efficient cart preview in the header without navigating to a full cart page.

## Source Code
```tsx
"use client";

import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
    name: "Classic Cotton T-Shirt",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/minimalist-tank-top-flatlay.png",
    price: 35.0,
    quantity: 2,
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

interface ShoppingCart18Props {
  items?: CartItem[];
  className?: string;
}

const ShoppingCart18 = ({
  items: initialItems = DEFAULT_ITEMS,
  className,
}: ShoppingCart18Props) => {
  const [items, setItems] = useState(initialItems);
  const [open, setOpen] = useState(false);

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

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={cn("relative", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="size-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {itemCount}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-80 p-0"
          align="end"
          sideOffset={8}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h3 className="font-semibold">Shopping Cart</h3>
            <Button
              variant="ghost"
              size="icon"
              className="size-6"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" />
            </Button>
          </div>
          <div className="max-h-96 overflow-auto py-2">
            {items.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-3 px-3 pb-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 rounded-lg border p-3"
                  >
                    <div className="w-16 shrink-0">
                      <AspectRatio
                        ratio={1}
                        className="overflow-hidden rounded-md"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="size-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-medium">{item.name}</h4>
                        {item.variant && (
                          <p className="text-xs text-muted-foreground">
                            {item.variant}
                          </p>
                        )}
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-6"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="size-3" />
                          </Button>
                          <span className="text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-6"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="size-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-6 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="size-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {items.length > 0 && (
            <>
              <Separator />
              <div className="space-y-2 px-4 py-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">{formatPrice(total)}</span>
                </div>
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Checkout
                </Button>
              </div>
            </>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export { ShoppingCart18 };
```
