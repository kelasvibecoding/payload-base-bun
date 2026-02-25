# Wishlist 1

## Metadata
- **Category**: Wishlist
- **Objective**: Provide a modern, interactive grid-based gallery for managing saved lifestyle or tech products.
- **Use Case**: Core customer dashboard "Favorites" or "Wishlist" pages for high-growth e-commerce brands in the apparel, accessories, or home goods industries.
- **Visual Style**: Clean, high-density product grid featuring minimalist card architecture, attention-grabbing "Price Drop" status labels (Emerald), stock-scarcity badges, and hover-exposed management actions (Remove/Trash).
- **Interactivity**: Dynamic item removal with state synchronization, responsive aspect-ratio preserved imagery, and logic-aware CTA buttons ("Add to Cart" vs. "Notify Me"). Includes an integrated "Empty State" layout with a centralized shopping CTA.

## Description
Wishlist 1 is the foundational e-commerce "Saved Items" component. It prioritizes visual discovery by using a 3-column grid that treats product images as the primary focal point. Sophisticated secondary indicators, such as the `TrendingDown` price-drop badge, provide the necessary conversion nudges to turn a saved item into a purchase. The hover-based UX for removing items keeps the UI clean during browsing while providing instant utility.

## Source Code

```tsx
"use client";

import { Heart, ShoppingCart, Trash2, TrendingDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  priceDrop?: boolean;
}

const DEFAULT_ITEMS: WishlistItem[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-White-Headphones-1.png",
    price: 249.99,
    originalPrice: 299.99,
    inStock: true,
    priceDrop: true,
  },
  {
    id: "2",
    name: "Premium Leather Crossbody Bag",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/maroon-leather-handbag.png",
    price: 189.0,
    inStock: true,
  },
  {
    id: "3",
    name: "Classic Wool Blend Coat",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Young-Man-in-White-Hoodie-1.png",
    price: 329.0,
    inStock: false,
  },
  {
    id: "4",
    name: "Gold Hoop Earrings",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Gold-Earrings-1.png",
    price: 79.0,
    originalPrice: 99.0,
    inStock: true,
    priceDrop: true,
  },
];

interface Wishlist1Props {
  items?: WishlistItem[];
  className?: string;
}

const Wishlist1 = ({ items = DEFAULT_ITEMS, className }: Wishlist1Props) => {
  const [wishlistItems, setWishlistItems] = useState(items);

  const removeItem = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <section className={cn("py-16 md:py-24 bg-background font-sans", className)}>
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
              Wishlist Catalog
            </h1>
            <p className="text-muted-foreground font-medium">
              You have {wishlistItems.length} curated {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
          {wishlistItems.length > 0 && (
            <Button className="rounded-xl px-10 font-bold shadow-lg hover:shadow-primary/20 transition-all">
              <ShoppingCart className="mr-2 size-4" />
              Add All to Cart
            </Button>
          )}
        </div>

        {/* Grid */}
        {wishlistItems.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group flex flex-col overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={1} className="bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className={cn(
                        "size-full object-cover transition-transform duration-500 group-hover:scale-105",
                        !item.inStock && "grayscale opacity-50",
                      )}
                    />
                  </AspectRatio>

                  {/* Top Overlay Actions */}
                  <div className="absolute left-3 top-3 flex flex-col gap-2">
                    {item.priceDrop && (
                      <Badge className="bg-emerald-600 hover:bg-emerald-700 font-bold border-none text-white shadow-md">
                        <TrendingDown className="mr-1.5 size-3" />
                        Price Drop
                      </Badge>
                    )}
                    {!item.inStock && (
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-md font-bold uppercase tracking-widest text-[10px]">
                        Out of Stock
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-3 top-3 size-9 rounded-full opacity-0 shadow-lg transition-all hover:bg-destructive hover:text-white group-hover:opacity-100"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>

                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-tight text-foreground line-clamp-2 min-h-[3.5rem] group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-2xl font-bold text-foreground">
                      {formatPrice(item.price)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm font-medium text-muted-foreground line-through decoration-destructive/30">
                        {formatPrice(item.originalPrice)}
                      </span>
                    )}
                  </div>

                  <Button
                    className="mt-6 w-full rounded-xl font-bold shadow-md transition-all"
                    disabled={!item.inStock}
                    variant={item.inStock ? "default" : "outline"}
                  >
                    {item.inStock ? "Add to Cart" : "Notify When Restocked"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border py-24 text-center bg-muted/20">
            <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-background shadow-xl">
              <Heart className="size-10 text-muted-foreground/30 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Your wishlist is lonely</h2>
            <p className="mt-2 max-w-sm text-muted-foreground font-medium">
              Start adding your favorite professional tools and accessories to this collection.
            </p>
            <Button className="mt-10 rounded-xl px-10 font-bold shadow-lg hover:shadow-primary/20 transition-all">
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export { Wishlist1 };
```
