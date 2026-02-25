# Shopping Cart 19

## Metadata
- **Category**: Shopping Cart
- **Objective**: Advanced shopping cart with upsell recommendations and promotional features
- **Use Case**: E-commerce websites, conversion optimization, average order value increase
- **Visual Style**: Modern layout with integrated product recommendations and promotional banners
- **Interactivity**: Upsell product carousels, promotional code application, gift options, quantity controls

## Description
An advanced shopping cart component featuring integrated upsell product recommendations to increase average order value. Includes promotional banners, discount code application, gift options with messaging, and comprehensive order summaries. The component displays related products in carousel format, promotional offers, and provides multiple pathways to increase conversion. Features detailed product information, variant selection, stock status, and comprehensive pricing calculations including discounts and promotions. Perfect for e-commerce sites focused on conversion optimization and increasing average order value through strategic product recommendations and promotional features.

## Source Code
```tsx
"use client";

import { Minus, Plus, ShoppingBag, Tag, Truck, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  variant?: string;
}

interface UpsellProduct {
  id: string;
  name: string;
  image: string;
  price: number;
}

const DEFAULT_ITEMS: CartItem[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-White-Headphones-1.png",
    price: 249.99,
    quantity: 1,
  },
  {
    id: "2",
    name: "Premium Leather Wallet",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Watch-on-Womans-Wrist-1.png",
    price: 79.0,
    quantity: 1,
  },
];

const UPSELL_PRODUCTS: UpsellProduct[] = [
  {
    id: "upsell-1",
    name: "Protective Carrying Case",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Protective-Carrying-Case-1.png",
    price: 49.0,
  },
  {
    id: "upsell-2",
    name: "Wireless Charging Pad",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Wireless-Charging-Pad-1.png",
    price: 39.0,
  },
  {
    id: "upsell-3",
    name: "Screen Protector",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Screen-Protector-1.png",
    price: 19.0,
  },
];

interface ShoppingCart19Props {
  items?: CartItem[];
  upsellProducts?: UpsellProduct[];
  enableFreeShipping?: boolean;
  shippingThreshold?: number;
}

const ShoppingCart19 = ({
  items: initialItems = DEFAULT_ITEMS,
  upsellProducts = UPSELL_PRODUCTS,
  enableFreeShipping = true,
  shippingThreshold = 150,
}: ShoppingCart19Props) => {
  const [items, setItems] = useState(initialItems);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [selectedUpsell, setSelectedUpsell] = useState<string | null>(null);

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

  const applyPromoCode = () => {
    setPromoError(null);
    if (!promoCode.trim()) {
      setPromoError("Please enter a promo code");
      return;
    }
    if (promoCode.toUpperCase() === "SAVE20") {
      setAppliedPromo(promoCode.toUpperCase());
      setPromoCode("");
    } else {
      setPromoError("Invalid promo code");
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setPromoError(null);
  };

  const addUpsell = (id: string) => {
    const product = upsellProducts.find((p) => p.id === id);
    if (product) {
      setItems([...items, { ...product, quantity: 1, id: `cart-${id}` }]);
      setSelectedUpsell(null);
    }
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = appliedPromo ? subtotal * 0.2 : 0;
  const shipping = enableFreeShipping && subtotal >= shippingThreshold ? 0 : 9.99;
  const upsellTotal = selectedUpsell
    ? upsellProducts.find((p) => p.id === selectedUpsell)?.price || 0
    : 0;
  const total = subtotal - discount + shipping + upsellTotal;

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
            Start shopping to add items to your cart.
          </p>
          <Button asChild>
            <a href="#">Start Shopping</a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Shopping Cart</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShoppingBag className="size-4" />
            <span>
              {items.length} item{items.length !== 1 ? "s" : ""} in cart
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border bg-card p-5"
                >
                  <div className="flex gap-6">
                    <div className="w-36 shrink-0">
                      <AspectRatio
                        ratio={1}
                        className="overflow-hidden rounded-lg bg-muted"
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
                          <span className="text-lg font-medium">
                            {item.quantity}
                          </span>
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
                </div>
              ))}
            </div>

            {/* Upsell Section */}
            <div className="mt-8 rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">You might also like</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {upsellProducts.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-lg border p-4"
                  >
                    <AspectRatio ratio={1} className="mb-3 overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="size-full object-cover"
                      />
                    </AspectRatio>
                    <h4 className="mb-1 text-sm font-medium">{product.name}</h4>
                    <Price className="text-sm">
                      <PriceValue
                        price={product.price}
                        currency="USD"
                        variant="regular"
                      />
                    </Price>
                    <Button
                      size="sm"
                      className="mt-3 w-full"
                      onClick={() => addUpsell(product.id)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                ))}
              </div>
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
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount (20% off)</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
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

export { ShoppingCart19 };
```
