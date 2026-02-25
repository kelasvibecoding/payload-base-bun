# Order Summary 4

## Metadata
- **Category**: Order Summary
- **Objective**: Display a comprehensive order summary integrated with a live, interactive status timeline tracking the delivery's progress.
- **Use Case**: E-commerce stores that want to merge the "Order Status / Tracking" page with the complete "Order Summary" page into a single location.
- **Visual Style**: Features a robust horizontal timeline (collapsing to vertical on mobile) showing the step-by-step progress (Order Placed -> Delivered). The selected timeline step renders a detailed, visually separated panel with specific metrics (e.g., Carrier, Quality Check). The rest of the page lists items and logistics in clearly separated blocks.
- **Interactivity**: Clickable timeline nodes updates the central information panel below it to show details specific to that stage of the fulfillment process.

## Source Code

```tsx
"use client";

import {
  Box,
  Check,
  CheckCircle,
  CreditCard,
  Download,
  Home,
  MapPin,
  Package,
  Printer,
  Receipt,
  Truck,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

interface StepContent {
  title: string;
  description: string;
  details: { label: string; value: string }[];
  icon: "receipt" | "box" | "truck" | "home";
}

interface TimelineStep {
  id: string;
  label: string;
  description: string;
  date: string;
  completed: boolean;
  current: boolean;
  content: StepContent;
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
  timeline: TimelineStep[];
}

const DEFAULT_ORDER: OrderSummaryData = {
  orderNumber: "ORD-2024-78432",
  orderDate: "December 14, 2024",
  status: "delivered",
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
  timeline: [
    {
      id: "1",
      label: "Order Placed",
      description: "Your order has been received",
      date: "Dec 14, 2024 at 2:30 PM",
      completed: true,
      current: false,
      content: {
        title: "Order Confirmed",
        description:
          "We've received your order and sent a confirmation to your email. Your payment has been successfully processed.",
        icon: "receipt",
        details: [
          { label: "Order Number", value: "ORD-2024-78432" },
          { label: "Payment Method", value: "Visa •••• 4242" },
          {
            label: "Billing Address",
            value: "1234 Maple Street, San Francisco, CA",
          },
          { label: "Order Total", value: "$484.72" },
        ],
      },
    },
    {
      id: "2",
      label: "Processing",
      description: "Preparing your items",
      date: "Dec 14, 2024 at 4:15 PM",
      completed: true,
      current: false,
      content: {
        title: "Preparing Your Order",
        description:
          "Our warehouse team is carefully picking and packing your items. Quality checks are being performed before shipment.",
        icon: "box",
        details: [
          { label: "Warehouse", value: "San Francisco Distribution Center" },
          { label: "Items Packed", value: "3 of 3 items" },
          { label: "Quality Check", value: "Passed" },
          { label: "Packaging", value: "Eco-friendly materials" },
        ],
      },
    },
    {
      id: "3",
      label: "Shipped",
      description: "On the way to you",
      date: "Dec 15, 2024 at 9:00 AM",
      completed: true,
      current: false,
      content: {
        title: "Out for Delivery",
        description:
          "Your package is on its way! Track your shipment in real-time using the tracking number below.",
        icon: "truck",
        details: [
          { label: "Carrier", value: "UPS Express" },
          { label: "Tracking Number", value: "1Z999AA10123456784" },
          { label: "Estimated Delivery", value: "Dec 17, 2024" },
          { label: "Current Location", value: "Oakland, CA - In Transit" },
        ],
      },
    },
    {
      id: "4",
      label: "Delivered",
      description: "Package delivered",
      date: "Dec 17, 2024 at 11:45 AM",
      completed: true,
      current: true,
      content: {
        title: "Successfully Delivered",
        description:
          "Your package has been delivered! We hope you love your purchase. Don't forget to leave a review.",
        icon: "home",
        details: [
          { label: "Delivered To", value: "Front Door" },
          { label: "Signed By", value: "A. Johnson" },
          { label: "Delivery Time", value: "Dec 17, 2024 at 11:45 AM" },
          { label: "Delivery Photo", value: "Available in tracking" },
        ],
      },
    },
  ],
};

interface OrderSummary4Props {
  order?: OrderSummaryData;
  className?: string;
}

const OrderSummary4 = ({
  order = DEFAULT_ORDER,
  className,
}: OrderSummary4Props) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(
    order.timeline.findIndex((step) => step.current),
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const selectStep = (index: number) => {
    setSelectedStepIndex(index);
  };

  const selectedStep = order.timeline[selectedStepIndex];
  const completedSteps = order.timeline.filter((step) => step.completed).length;
  const progressPercentage = (completedSteps / order.timeline.length) * 100;

  const getStepIcon = (iconType: StepContent["icon"]) => {
    switch (iconType) {
      case "receipt":
        return <Receipt className="size-5" />;
      case "box":
        return <Box className="size-5" />;
      case "truck":
        return <Truck className="size-5" />;
      case "home":
        return <Home className="size-5" />;
    }
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container max-w-3xl">
        {/* Success Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-500/10">
            <CheckCircle className="size-7 text-emerald-600" />
          </div>
          <h1 className="mb-1 text-2xl font-bold tracking-tight md:text-3xl">
            Thank you for your order!
          </h1>
          <p className="text-sm text-muted-foreground">
            Order <span className="font-medium">{order.orderNumber}</span> •{" "}
            {order.orderDate}
          </p>
        </div>

        {/* Timeline Progress */}
        <Card className="mb-6 shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Order Status</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {completedSteps === order.timeline.length
                  ? "Order delivered!"
                  : `Step ${completedSteps} of ${order.timeline.length}`}
              </p>
            </div>

            {/* Timeline Steps - Horizontal on desktop */}
            <div className="hidden md:block">
              <div className="relative flex justify-between">
                {order.timeline.map((step, index) => (
                  <div
                    key={step.id}
                    className={cn(
                      "flex flex-col items-center text-center",
                      index === 0 && "items-start text-left",
                      index === order.timeline.length - 1 &&
                        "items-end text-right",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => selectStep(index)}
                      className={cn(
                        "mb-2 flex size-10 items-center justify-center rounded-full border-2 transition-all hover:scale-110",
                        step.completed
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : "border-muted bg-muted hover:border-emerald-300",
                        selectedStepIndex === index &&
                          "ring-2 ring-emerald-500 ring-offset-2 ring-offset-background",
                      )}
                    >
                      {step.completed ? (
                        <Check className="size-5" />
                      ) : (
                        <span className="text-sm font-medium text-muted-foreground">
                          {index + 1}
                        </span>
                      )}
                    </button>
                    <p
                      className={cn(
                        "text-sm font-medium",
                        selectedStepIndex === index
                          ? "text-emerald-600"
                          : step.completed
                            ? "text-foreground"
                            : "text-muted-foreground",
                      )}
                    >
                      {step.label}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {step.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Steps - Vertical on mobile */}
            <div className="md:hidden">
              <div className="space-y-3">
                {order.timeline.map((step, index) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => selectStep(index)}
                    className={cn(
                      "flex w-full gap-3 rounded-lg p-2 text-left transition-colors",
                      selectedStepIndex === index
                        ? "bg-emerald-500/10"
                        : "hover:bg-muted",
                    )}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full border-2",
                          step.completed
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : "border-muted bg-muted",
                          selectedStepIndex === index &&
                            "ring-2 ring-emerald-500 ring-offset-1",
                        )}
                      >
                        {step.completed ? (
                          <Check className="size-4" />
                        ) : (
                          <span className="text-xs font-medium text-muted-foreground">
                            {index + 1}
                          </span>
                        )}
                      </div>
                      {index < order.timeline.length - 1 && (
                        <div
                          className={cn(
                            "mt-1 h-6 w-0.5",
                            step.completed ? "bg-emerald-500" : "bg-muted",
                          )}
                        />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 pb-2">
                      <p
                        className={cn(
                          "font-medium",
                          selectedStepIndex === index
                            ? "text-emerald-600"
                            : step.completed
                              ? "text-foreground"
                              : "text-muted-foreground",
                        )}
                      >
                        {step.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {step.date}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step Content Panel */}
            <div className="mt-6 rounded-lg border bg-muted/30 p-4">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  {getStepIcon(selectedStep.content.icon)}
                </div>
                <div>
                  <h3 className="font-semibold">
                    {selectedStep.content.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {selectedStep.date}
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                {selectedStep.content.description}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {selectedStep.content.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-md bg-background p-3"
                  >
                    <p className="text-xs text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="text-sm font-medium">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Items */}
        <Card className="mb-6 shadow-none">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base">
              <Package className="size-4" />
              {order.items.length} {order.items.length === 1 ? "Item" : "Items"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {order.items.map((item, index) => (
              <div key={item.id}>
                <div className="flex gap-4">
                  <div className="w-16 shrink-0">
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
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        {item.details && (
                          <p className="text-xs text-muted-foreground">
                            {item.details.map((d, i) => (
                              <span key={d.label}>
                                {d.value}
                                {i < item.details!.length - 1 && " · "}
                              </span>
                            ))}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
                {index < order.items.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Summary Grid */}
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          {/* Shipping */}
          <Card className="shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <MapPin className="size-4" />
                Delivery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-medium">
                  {order.shippingAddress.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {order.shippingAddress.street}
                </p>
                <p className="text-sm text-muted-foreground">
                  {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                  {order.shippingAddress.zipCode}
                </p>
              </div>
              <Separator />
              <div className="flex items-center gap-2 text-sm">
                <Truck className="size-4 text-muted-foreground" />
                <span>{order.shippingMethod}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                Est. {order.estimatedDelivery}
              </Badge>
            </CardContent>
          </Card>

          {/* Payment & Summary */}
          <Card className="shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <CreditCard className="size-4" />
                Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {order.paymentMethod.type === "card" && (
                <div className="flex items-center gap-2">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/visa-icon.svg"
                    alt="Visa"
                    className="size-6"
                  />
                  <span className="text-sm">
                    •••• {order.paymentMethod.lastFour}
                  </span>
                </div>
              )}
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(order.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {order.shipping === 0
                      ? "Free"
                      : formatPrice(order.shipping)}
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
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatPrice(order.total)}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button>
            <Package className="mr-2 size-4" />
            Track Order
          </Button>
          <Button variant="outline">
            <Download className="mr-2 size-4" />
            Download Receipt
          </Button>
          <Button variant="ghost">
            <Printer className="mr-2 size-4" />
            Print
          </Button>
        </div>

        {/* Email Confirmation */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          A confirmation email has been sent to{" "}
          <span className="font-medium text-foreground">{order.email}</span>
        </p>
      </div>
    </section>
  );
};

export { OrderSummary4 };
```
