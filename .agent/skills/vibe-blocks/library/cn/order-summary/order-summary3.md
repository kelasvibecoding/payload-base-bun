# Order Summary 3

## Metadata
- **Category**: Order Summary
- **Objective**: Deliver a bold, highly visible confirmation screen highlighting key information immediately with large typography and distinct grid blocks.
- **Use Case**: Post-purchase confirmation for high-value items or robust eCommerce sites wanting a strong confirmation presence.
- **Visual Style**: Large success icon and text. A prominent 4-column meta-data strip (Order ID, Date, Delivery, Payment) acting as a quick dashboard. Large 1:1 image blocks for items displayed in a grid, rather than a vertical list. Heavy use of primary color accents (e.g., emerald backgrounds for icons).
- **Interactivity**: Clean, static presentation with large, centered primary/secondary buttons at the bottom.

## Source Code

```tsx
import { CheckCircle, MapPin, Package, Receipt, Truck } from "lucide-react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  details?: { label: string; value: string }[];
}

interface ShippingAddress {
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface PaymentMethod {
  type: "card" | "paypal" | "bank";
  lastFour?: string;
  cardBrand?: string;
  email?: string;
}

interface OrderSummaryData {
  orderNumber: string;
  orderDate: string;
  status: "confirmed" | "processing" | "shipped" | "delivered";
  email: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  discount?: number;
  total: number;
  shippingAddress: ShippingAddress;
  shippingMethod: string;
  estimatedDelivery: string;
  paymentMethod: PaymentMethod;
}

const DEFAULT_ORDER: OrderSummaryData = {
  orderNumber: "ORD-2024-78432",
  orderDate: "December 14, 2024",
  status: "confirmed",
  email: "customer@example.com",
  items: [
    {
      id: "1",
      name: "Minimalist Beige Sneakers",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Minimalist-Beige-Sneakers-2.png",
      price: 120.0,
      quantity: 1,
      details: [
        { label: "Size", value: "42" },
        { label: "Color", value: "Beige" },
      ],
    },
    {
      id: "2",
      name: "Embroidered Blue Top",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-in-Embroidered-Blue-Top-2.png",
      price: 140.0,
      quantity: 2,
      details: [
        { label: "Size", value: "M" },
        { label: "Color", value: "Blue" },
      ],
    },
    {
      id: "3",
      name: "Classic Fedora Hat",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Classic-Fedora-Hat-2.png",
      price: 84.0,
      quantity: 1,
      details: [{ label: "Size", value: "One Size" }],
    },
  ],
  subtotal: 484.0,
  shipping: 12.0,
  tax: 38.72,
  discount: 50.0,
  total: 484.72,
  shippingAddress: {
    name: "Alex Johnson",
    street: "1234 Maple Street, Apt 5B",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
    country: "United States",
  },
  shippingMethod: "Express Shipping",
  estimatedDelivery: "December 18-20, 2024",
  paymentMethod: {
    type: "card",
    lastFour: "4242",
    cardBrand: "Visa",
  },
};

interface OrderSummary3Props {
  order?: OrderSummaryData;
  className?: string;
}

const OrderSummary3 = ({
  order = DEFAULT_ORDER,
  className,
}: OrderSummary3Props) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        {/* Bold Header */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-emerald-500">
            <CheckCircle className="size-10 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
            Order Confirmed
          </h1>
          <p className="text-lg text-muted-foreground">
            We&apos;ve sent confirmation to{" "}
            <span className="font-semibold text-foreground">{order.email}</span>
          </p>
        </div>

        {/* Order Details Bar - Grouped */}
        <Card className="mb-10 border-2 shadow-none">
          <CardContent className="grid grid-cols-2 divide-x divide-y p-0 md:grid-cols-4 md:divide-y-0">
            <div className="p-5">
              <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Order ID
              </p>
              <p className="mt-1 text-lg font-bold">{order.orderNumber}</p>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Order Date
              </p>
              <p className="mt-1 text-lg font-bold">{order.orderDate}</p>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Delivery
              </p>
              <p className="mt-1 text-lg font-bold">
                {order.estimatedDelivery}
              </p>
            </div>

            <div className="p-5">
              <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Payment
              </p>
              <p className="mt-1 text-lg font-bold">
                {order.paymentMethod.cardBrand} ****
                {order.paymentMethod.lastFour}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Items Grid - Large Images */}
        <div className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">Your Items</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {order.items.map((item) => (
               <Card
                key={item.id}
                className="overflow-hidden border-2 p-0 shadow-none"
              >
                <AspectRatio ratio={1} className="bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-full object-cover"
                  />
                </AspectRatio>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  {item.details && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.details.map((d, i) => (
                        <span key={d.label}>
                          {d.label}: {d.value}
                          {i < item.details!.length - 1 && " · "}
                        </span>
                      ))}
                    </p>
                  )}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </span>
                    <span className="text-xl font-bold">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Section - Shipping, Payment Summary */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Shipping Address */}
          <Card className="border-2 shadow-none">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Shipping Address</h3>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p className="font-semibold text-foreground">
                  {order.shippingAddress.name}
                </p>
                <p>{order.shippingAddress.street}</p>
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                  {order.shippingAddress.zipCode}
                </p>
                <p>{order.shippingAddress.country}</p>
              </div>
              <Separator className="my-4" />
              <div className="flex items-center gap-2 text-sm">
                <Package className="size-4 text-muted-foreground" />
                <span className="font-medium">{order.shippingMethod}</span>
              </div>
            </CardContent>
          </Card>

          {/* Order Total */}
          <Card className="border-2 shadow-none">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <Receipt className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Order Summary</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">
                    {formatPrice(order.subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {order.shipping === 0
                      ? "Free"
                      : formatPrice(order.shipping)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">{formatPrice(order.tax)}</span>
                </div>
                {order.discount && order.discount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount</span>
                    <span className="font-medium">
                      -{formatPrice(order.discount)}
                    </span>
                  </div>
                )}
                <Separator />
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold">Total Paid</span>
                  <span className="text-2xl font-bold">
                    {formatPrice(order.total)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="w-full px-8 sm:w-auto">
            <Truck className="mr-2 size-5" />
            Track Order
          </Button>
          <Button size="lg" variant="outline" className="w-full px-8 sm:w-auto">
            Continue Shopping
          </Button>
        </div>
      </div>
    </section>
  );
};

export { OrderSummary3 };
```
