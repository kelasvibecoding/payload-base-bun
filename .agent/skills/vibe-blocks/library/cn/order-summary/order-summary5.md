# Order Summary 5

## Metadata
- **Category**: Order Summary
- **Objective**: Display the order confirmation details within a slide-out side sheet.
- **Use Case**: Best used in desktop environments or single-page checkout flows where navigating away from the current context is undesirable. Offers a quick but comprehensive view of the order success state without a full page reload.
- **Visual Style**: A minimalist, off-canvas `Sheet` component. It features a clear success header with an icon, a scrollable list of purchased items with thumbnails, and a distinct pricing breakdown section. Uses a subtle background for estimated delivery.
- **Interactivity**: Triggered via a button (or programmatically post-checkout). The content is contained within a `SheetContent` overlay with a built-in `ScrollArea` for the item list to prevent the sheet from overflowing the viewport height. Includes primary and secondary call-to-action buttons pinned to the footer.

## Source Code

```tsx
"use client";

import { CheckCircle, Package } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface OrderSummaryData {
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  discount?: number;
  total: number;
  estimatedDelivery: string;
}

const DEFAULT_ORDER: OrderSummaryData = {
  orderNumber: "ORD-2024-78432",
  items: [
    {
      id: "1",
      name: "Minimalist Beige Sneakers",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Minimalist-Beige-Sneakers-2.png",
      price: 120.0,
      quantity: 1,
    },
    {
      id: "2",
      name: "Embroidered Blue Top",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-in-Embroidered-Blue-Top-2.png",
      price: 140.0,
      quantity: 2,
    },
    {
      id: "3",
      name: "Classic Fedora Hat",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Classic-Fedora-Hat-2.png",
      price: 84.0,
      quantity: 1,
    },
  ],
  subtotal: 484.0,
  shipping: 12.0,
  tax: 38.72,
  discount: 50.0,
  total: 484.72,
  estimatedDelivery: "Dec 18-20",
};

interface OrderSummary5Props {
  order?: OrderSummaryData;
}

const OrderSummary5 = ({ order = DEFAULT_ORDER }: OrderSummary5Props) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className="flex min-h-[400px] items-center justify-center p-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="lg">View Order Summary</Button>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col px-6 sm:max-w-md">
          <SheetHeader className="px-0 text-left">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-emerald-500">
                <CheckCircle className="size-5 text-white" />
              </div>
              <div>
                <SheetTitle>Order Confirmed</SheetTitle>
                <SheetDescription>{order.orderNumber}</SheetDescription>
              </div>
            </div>
          </SheetHeader>

          <ScrollArea className="flex-1 -mx-6 px-6">
            {/* Items */}
            <div className="space-y-3 py-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 shrink-0">
                    <AspectRatio ratio={1} className="overflow-hidden rounded-md bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <Separator />

            {/* Totals */}
            <div className="space-y-2 py-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {order.shipping === 0 ? "Free" : formatPrice(order.shipping)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>{formatPrice(order.tax)}</span>
              </div>
              {order.discount && order.discount > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>Discount</span>
                  <span>-{formatPrice(order.discount)}</span>
                </div>
              )}
            </div>

            <Separator />

            {/* Total */}
            <div className="flex items-center justify-between py-4">
              <span className="text-lg font-bold">Total</span>
              <span className="text-xl font-bold">{formatPrice(order.total)}</span>
            </div>

            {/* Delivery */}
            <div className="flex items-center gap-2 rounded-lg bg-muted p-3 text-sm">
              <Package className="size-4 text-muted-foreground" />
              <span>Estimated delivery: {order.estimatedDelivery}</span>
            </div>
          </ScrollArea>

          <SheetFooter className="flex-col gap-2 px-0 sm:flex-col">
            <Button className="w-full">Track Order</Button>
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { OrderSummary5 };
```
