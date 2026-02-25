# Order Summary 6

## Metadata
- **Category**: Order Summary
- **Objective**: Display an immediate, focused order confirmation via a centered modal dialog.
- **Use Case**: Perfect for fast, seamless checkouts (e.g., one-click buy) where taking the user to a completely new page might disrupt their browsing flow. Designed to be highly digestible.
- **Visual Style**: Housed within a `Dialog` component. It uses a centered layout for the success icon and title to draw immediate attention. The item list is compact with smaller aspect ratio images (`w-12`), followed by a condensed pricing summary.
- **Interactivity**: Modal interaction: appears over the current content, dimming the background. Stacks action buttons vertically (`DialogFooter`) to encourage the primary action ("Track Order") while providing a secondary exit path ("Continue Shopping").

## Source Code

```tsx
"use client";

import { CheckCircle } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

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
  ],
  subtotal: 400.0,
  shipping: 12.0,
  total: 412.0,
  estimatedDelivery: "Dec 18-20",
};

interface OrderSummary6Props {
  order?: OrderSummaryData;
}

const OrderSummary6 = ({ order = DEFAULT_ORDER }: OrderSummary6Props) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className="flex min-h-[400px] items-center justify-center p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg">View Order Confirmation</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center sm:text-center">
            <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-emerald-500">
              <CheckCircle className="size-6 text-white" />
            </div>
            <DialogTitle className="text-xl">Order Confirmed!</DialogTitle>
            <DialogDescription>
              Order {order.orderNumber} · Arrives {order.estimatedDelivery}
            </DialogDescription>
          </DialogHeader>

          {/* Items */}
          <div className="space-y-3 py-2">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="w-12 shrink-0">
                  <AspectRatio
                    ratio={1}
                    className="overflow-hidden rounded-md bg-muted"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-semibold">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          <Separator />

          {/* Summary */}
          <div className="space-y-1.5 text-sm">
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
            <div className="flex justify-between pt-2 text-base font-bold">
              <span>Total</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </div>

          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <Button className="w-full">Track Order</Button>
            <Button variant="ghost" className="w-full">
              Continue Shopping
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export { OrderSummary6 };
```
