# Wishlist 2

## Metadata
- **Category**: Wishlist
- **Objective**: Provide a feature-rich, list-based "Saved Items" management interface for E-commerce platforms.
- **Use Case**: Customer dashboard "My Favorites" pages where users manage a growing list of saved products with sorting, sharing, and quick purchase actions.
- **Visual Style**: Sleek architectural list layout featuring responsive product tiles with large situational imagery, dual-pricing disclosure (current vs. original), selective stock status badges, and inline "Add to Cart" or "Sold Out" context-aware buttons.
- **Interactivity**: Sophisticated state management including dynamic sorting (Price, Date, Name), item removal with visual Feedback, and sharing functionality. Includes a robust "Empty State" with a custom icon and directional CTA.

## Description
Wishlist 2 is the professional standard for e-commerce "Saved Items" management. It moves away from generic grids to a highly scannable vertical list that treats each saved item as a unique professional entry. Key features like the "Out of Stock" visual indicator and "Date Added" metadata help users prioritize their lists. The integrated sorting and sharing utilities make it a functional hub for the user's shopping intent, leading directly to higher cart conversion.

## Source Code

```tsx
"use client";

import {
  ArrowUpDown,
  Check,
  Heart,
  Share2,
  ShoppingCart,
  X,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  dateAdded: string;
  category: string;
}

const DEFAULT_ITEMS: WishlistItem[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-White-Headphones-1.png",
    price: 249.99,
    originalPrice: 299.99,
    inStock: true,
    dateAdded: "Dec 10, 2024",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Premium Leather Crossbody Bag",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/maroon-leather-handbag.png",
    price: 189.0,
    inStock: true,
    dateAdded: "Dec 8, 2024",
    category: "Accessories",
  },
  {
    id: "3",
    name: "Classic Wool Blend Coat",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Young-Man-in-White-Hoodie-1.png",
    price: 329.0,
    inStock: false,
    dateAdded: "Dec 5, 2024",
    category: "Clothing",
  },
  {
    id: "4",
    name: "Gold Hoop Earrings",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Gold-Earrings-1.png",
    price: 79.0,
    inStock: true,
    dateAdded: "Dec 2, 2024",
    category: "Jewelry",
  },
];

type SortOption = "date" | "price-low" | "price-high" | "name";

interface Wishlist2Props {
  items?: WishlistItem[];
  className?: string;
}

const Wishlist2 = ({ items = DEFAULT_ITEMS, className }: Wishlist2Props) => {
  const [wishlistItems, setWishlistItems] = useState(items);
  const [sortBy, setSortBy] = useState<SortOption>("date");

  const removeItem = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const sortedItems = [...wishlistItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return (
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
    }
  });

  const sortLabels: Record<SortOption, string> = {
    date: "Date Added",
    "price-low": "Price: Low to High",
    "price-high": "Price: High to Low",
    name: "Name",
  };

  return (
    <section className={cn("py-16 md:py-24 bg-background font-sans", className)}>
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
              Saved Items
            </h1>
            <p className="text-muted-foreground font-medium">
              You have {wishlistItems.length} curated {wishlistItems.length === 1 ? 'item' : 'items'} in your collection
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-xl border-border hover:bg-muted font-bold">
              <Share2 className="mr-2 size-4" />
              Share List
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-xl border-border hover:bg-muted font-bold">
                  <ArrowUpDown className="mr-2 size-4 text-primary" />
                  {sortLabels[sortBy]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-xl border-border shadow-2xl">
                {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setSortBy(option)}
                    className="rounded-lg cursor-pointer"
                  >
                    {sortBy === option && <Check className="mr-2 size-4 text-primary" />}
                    <span className={sortBy !== option ? "pl-6 font-medium" : "font-bold text-primary"}>
                      {sortLabels[option]}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* List */}
        {sortedItems.length > 0 ? (
          <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
            {sortedItems.map((item, index) => (
              <div key={item.id}>
                {index > 0 && <Separator className="opacity-50" />}
                <div className="group relative flex gap-6 p-6 transition-colors hover:bg-muted/30">
                  {/* Image Container */}
                  <div className="size-28 shrink-0 overflow-hidden rounded-xl bg-muted sm:size-36 shadow-sm">
                    <AspectRatio ratio={1}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={cn(
                          "size-full object-cover transition-transform duration-500 group-hover:scale-110",
                          !item.inStock && "grayscale opacity-40",
                        )}
                      />
                    </AspectRatio>
                  </div>

                  {/* Details Container */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            {!item.inStock && (
                              <Badge variant="destructive" className="shrink-0 uppercase tracking-widest text-[10px] font-bold">
                                Out of Stock
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm font-semibold tracking-wide text-primary/80">
                            {item.category}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="shrink-0 rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="size-5" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-foreground">
                          {formatPrice(item.price)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm font-medium text-muted-foreground line-through decoration-destructive/50">
                            {formatPrice(item.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                          Curated on
                        </span>
                        <span className="text-xs font-bold text-muted-foreground">
                          {item.dateAdded}
                        </span>
                      </div>
                      <Button 
                        size="sm" 
                        disabled={!item.inStock}
                        className="rounded-xl px-6 font-bold shadow-lg hover:shadow-primary/20 transition-all"
                      >
                        <ShoppingCart className="mr-2 size-4" />
                        {item.inStock ? "Add to Cart" : "Email Me"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border py-24 text-center bg-muted/20">
            <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-background shadow-xl">
              <Heart className="size-10 text-muted-foreground/30 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Your heart list is empty</h2>
            <p className="mt-2 max-w-sm text-muted-foreground font-medium">
              Browse our premium collection and save the items that speak to you.
            </p>
            <Button className="mt-10 rounded-xl px-10 font-bold shadow-lg hover:shadow-primary/20 transition-all">
              Explore Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export { Wishlist2 };
```
