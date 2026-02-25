# Shopping Cart 17

## Metadata
- **Category**: Shopping Cart
- **Objective**: Advanced shopping cart with wishlist and save-for-later functionality
- **Use Case**: Premium e-commerce websites, complex checkout flows, customer retention
- **Visual Style**: Modern layout with tabbed sections for cart and saved items
- **Interactivity**: Save/remove from wishlist, move between cart and saved items, advanced recommendations, gift options

## Description
A sophisticated shopping cart component featuring integrated wishlist and save-for-later functionality. Allows customers to move items between their active cart and a saved items list for future purchase. Includes advanced product recommendations based on cart contents, gift options with messaging, and enhanced mobile responsiveness. The component uses a tabbed interface to switch between active cart and saved items, with smooth transitions and animations. Features comprehensive product information, variant selection, and the ability to move items seamlessly between cart and wishlist. Perfect for premium e-commerce sites focused on customer retention and providing a flexible, user-friendly shopping experience.

## Source Code
```tsx
"use client";

import { Heart, HeartCrack, Minus, Plus, ShoppingBag, Tag, Truck, X } from "lucide-react";
import { useState, useEffect } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  variant?: string;
  inStock: boolean;
  discount?: number;
}

interface SavedItem extends CartItem {
  dateAdded: string;
  notes?: string;
}

const DEFAULT_CART_ITEMS: CartItem[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-White-Headphones-1.png",
    price: 249.99,
    quantity: 1,
    variant: "Midnight Black",
    inStock: true,
    discount: 0.1,
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/minimalist-tank-top-flatlay.png",
    price: 49.0,
    quantity: 2,
    variant: "Navy Blue / M",
    inStock: true,
  },
];

const DEFAULT_SAVED_ITEMS: SavedItem[] = [
  {
    id: "saved-1",
    name: "Leather Crossbody Bag",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/maroon-leather-handbag.png",
    price: 189.0,
    quantity: 1,
    variant: "Burgundy",
    inStock: false,
    dateAdded: "2024-01-15",
    notes: "Wait for restock",
  },
];

interface ShoppingCart17Props {
  cartItems?: CartItem[];
  savedItems?: SavedItem[];
  enableGift?: boolean;
}

const ShoppingCart17 = ({
  cartItems: initialCart = DEFAULT_CART_ITEMS,
  savedItems: initialSaved = DEFAULT_SAVED_ITEMS,
  enableGift = true,
}: ShoppingCart17Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [savedItems, setSavedItems] = useState<SavedItem[]>(initialSaved);
  const [activeTab, setActiveTab] = useState<"cart" | "saved">("cart");
  const [giftMessage, setGiftMessage] = useState("");
  const [isGift, setIsGift] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
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
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const saveForLater = (id: string) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      setSavedItems((items) => [
        ...items,
        { ...item, dateAdded: new Date().toISOString().split("T")[0] },
      ]);
      removeItem(id);
    }
  };

  const moveToCart = (id: string) => {
    const item = savedItems.find((i) => i.id === id);
    if (item) {
      setCartItems((items) => [...items, { ...item, quantity: 1 }]);
      setSavedItems((items) => items.filter((i) => i.id !== id));
    }
  };

  const removeFromSaved = (id: string) => {
    setSavedItems((items) => items.filter((i) => i.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity * (1 - (item.discount || 0)),
    0
  );
  const shipping = 9.99;
  const giftWrap = isGift ? 5.0 : 0;
  const total = subtotal + shipping + giftWrap;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  if (cartItems.length === 0 && savedItems.length === 0) {
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
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in cart, {" "}
              {savedItems.length} saved
            </span>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "cart" | "saved")} className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2">
            <TabsTrigger value="cart" className="text-lg">
              Cart ({cartItems.length})
            </TabsTrigger>
            <TabsTrigger value="saved" className="text-lg">
              Saved ({savedItems.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cart" className="mt-0">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="rounded-xl border bg-card p-5">
                      <div className="flex gap-6">
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
                                <h3 className="text-lg font-medium">{item.name}</h3>
                                {item.variant && (
                                  <p className="text-sm text-muted-foreground">
                                    {item.variant}
                                  </p>
                                )}
                                {!item.inStock && (
                                  <Badge variant="secondary" className="mt-2 bg-yellow-100 text-yellow-700">
                                    Out of Stock
                                  </Badge>
                                )}
                                {item.discount > 0 && (
                                  <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">
                                    {Math.round(item.discount * 100)}% off
                                  </Badge>
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
                              <span className="w-10 text-center font-medium">{item.quantity}</span>
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
                                  price={item.price * (1 - (item.discount || 0))}
                                  currency="USD"
                                  variant={item.discount ? "sale" : "regular"}
                                />
                              </Price>
                              {item.discount > 0 && (
                                <Price className="text-sm text-muted-foreground line-through">
                                  <PriceValue
                                    price={item.price}
                                    currency="USD"
                                    variant="regular"
                                  />
                                </Price>
                              )}
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => saveForLater(item.id)}
                              disabled={!item.inStock}
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

                {enableGift && (
                  <div className="mt-6 rounded-lg border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="gift" className="flex items-center gap-2 text-base">
                        <Gift className="size-5" />
                        Add gift message
                      </Label>
                      <input
                        id="gift"
                        type="checkbox"
                        checked={isGift}
                        onChange={(e) => setIsGift(e.target.checked)}
                        className="size-5 rounded border-gray-300"
                      />
                    </div>
                    {isGift && (
                      <div className="mt-3">
                        <Textarea
                          placeholder="Enter your gift message..."
                          value={giftMessage}
                          onChange={(e) => setGiftMessage(e.target.value)}
                          className="min-h-[100px]"
                        />
                        <p className="mt-2 text-xs text-muted-foreground">
                          Gift wrap: {formatPrice(5.0)} will be added
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-6 rounded-lg border bg-card p-6">
                  <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{formatPrice(shipping)}</span>
                    </div>
                    {isGift && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Gift Wrap</span>
                        <span>{formatPrice(giftWrap)}</span>
                      </div>
                    )}
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
          </TabsContent>

          <TabsContent value="saved" className="mt-0">
            <div className="space-y-6">
              {savedItems.length === 0 ? (
                <div className="rounded-lg border bg-card p-8 text-center">
                  <Heart className="mx-auto mb-4 size-12 text-muted-foreground" />
                  <h3 className="mb-2 text-lg font-semibold">No saved items</h3>
                  <p className="text-muted-foreground">Items you save for later will appear here.</p>
                </div>
              ) : (
                savedItems.map((item) => (
                  <div key={item.id} className="rounded-lg border bg-card p-5">
                    <div className="flex gap-6">
                      <div className="w-24 shrink-0">
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
                              {!item.inStock && (
                                <Badge variant="secondary" className="mt-2 bg-yellow-100 text-yellow-700">
                                  Out of Stock
                                </Badge>
                              )}
                              {item.notes && (
                                <p className="mt-2 text-xs text-muted-foreground">
                                  Note: {item.notes}
                                </p>
                              )}
                              <p className="mt-2 text-xs text-muted-foreground">
                                Saved on {item.dateAdded}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground hover:text-destructive"
                              onClick={() => removeFromSaved(item.id)}
                            >
                              <HeartCrack className="mr-1.5 size-4" />
                              Remove
                            </Button>
                          </div>

                          <Price className="text-lg font-semibold">
                            <PriceValue
                              price={item.price}
                              currency="USD"
                              variant="regular"
                            />
                          </Price>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => moveToCart(item.id)}
                            disabled={!item.inStock}
                          >
                            <ShoppingBag className="mr-1.5 size-4" />
                            Move to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export { ShoppingCart17 };
```
