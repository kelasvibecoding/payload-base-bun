# Order History 5

## Metadata
- **Category**: Order History
- **Objective**: Display a detailed order history geared towards apparel/retail, emphasizing individual item actions (return, review) and clear delivery statuses.
- **Use Case**: Best for fashion e-commerce or mixed-retail where users might need to return specific items from an order or track items individually.
- **Visual Style**: Clean, spacious card layout. The design features a cohesive card per order, with a distinct header indicating order facts (date, number, total) and overall status with a colored dot. Items are listed with sizable images (`size-24` to `size-28`) and detailed attributes (color, size).
- **Interactivity**: Includes a tabbed navigation (All Orders, In Progress, Delivered, Returns) and a search bar. Action buttons are highly specific to the item context (e.g., "Start Return" if `canReturn` is true, "Write Review", "Track Item"). Distinct blocks appear for tracking URLs on shipped orders.

## Source Code

```tsx
"use client";

import {
  ArrowUpRight,
  ChevronRight,
  Package,
  RotateCcw,
  Search,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type OrderStatus = "processing" | "shipped" | "delivered" | "returned";

interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  canReturn?: boolean;
  returnByDate?: string;
}

interface Order {
  id: string;
  orderNumber: string;
  orderDate: string;
  status: OrderStatus;
  total: number;
  items: OrderItem[];
  deliveryDate?: string;
  trackingUrl?: string;
}

const DEFAULT_ORDERS: Order[] = [
  {
    id: "1",
    orderNumber: "WEB-9847562",
    orderDate: "Dec 12, 2024",
    status: "shipped",
    total: 127.97,
    deliveryDate: "Dec 18-20",
    trackingUrl: "#",
    items: [
      {
        id: "1a",
        name: "Oversized Cotton Hoodie",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/black-hoodie-against-light-background.png",
        price: 49.99,
        size: "L",
        color: "Black",
        quantity: 1,
      },
      {
        id: "1b",
        name: "High-Rise Straight Jeans",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-jay-soundo-2148060180-30624171-1.png",
        price: 59.99,
        size: "32",
        color: "Medium Blue",
        quantity: 1,
      },
      {
        id: "1c",
        name: "Basic Crew Neck Tee",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/minimalist-tank-top-flatlay.png",
        price: 17.99,
        size: "M",
        color: "White",
        quantity: 1,
      },
    ],
  },
  {
    id: "2",
    orderNumber: "WEB-9841203",
    orderDate: "Dec 5, 2024",
    status: "delivered",
    total: 89.98,
    deliveryDate: "Dec 10",
    items: [
      {
        id: "2a",
        name: "Leather Crossbody Bag",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/maroon-leather-handbag.png",
        price: 69.99,
        size: "One Size",
        color: "Burgundy",
        quantity: 1,
        canReturn: true,
        returnByDate: "Jan 10, 2025",
      },
      {
        id: "2b",
        name: "Knit Beanie",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Classic-Black-Fedora-Hat-1.png",
        price: 19.99,
        size: "One Size",
        color: "Charcoal",
        quantity: 1,
        canReturn: true,
        returnByDate: "Jan 10, 2025",
      },
    ],
  },
  {
    id: "3",
    orderNumber: "WEB-9835678",
    orderDate: "Nov 28, 2024",
    status: "delivered",
    total: 159.97,
    deliveryDate: "Dec 3",
    items: [
      {
        id: "3a",
        name: "Wool Blend Coat",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Young-Man-in-White-Hoodie-1.png",
        price: 129.99,
        size: "M",
        color: "Camel",
        quantity: 1,
        canReturn: false,
      },
      {
        id: "3b",
        name: "Cashmere Scarf",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/elegant-peach-scarf.png",
        price: 29.98,
        size: "One Size",
        color: "Oatmeal",
        quantity: 2,
        canReturn: false,
      },
    ],
  },
  {
    id: "4",
    orderNumber: "WEB-9828901",
    orderDate: "Nov 15, 2024",
    status: "returned",
    total: 45.99,
    items: [
      {
        id: "4a",
        name: "Slim Fit Chinos",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-jay-soundo-2148060180-30624171-2.png",
        price: 45.99,
        size: "30",
        color: "Khaki",
        quantity: 1,
      },
    ],
  },
];

const statusConfig: Record<
  OrderStatus,
  { label: string; color: string; dotColor: string }
> = {
  processing: {
    label: "Processing",
    color: "text-amber-600",
    dotColor: "bg-amber-500",
  },
  shipped: {
    label: "In Transit",
    color: "text-blue-600",
    dotColor: "bg-blue-500",
  },
  delivered: {
    label: "Delivered",
    color: "text-emerald-600",
    dotColor: "bg-emerald-500",
  },
  returned: {
    label: "Returned",
    color: "text-muted-foreground",
    dotColor: "bg-muted-foreground",
  },
};

interface OrderHistory5Props {
  orders?: Order[];
  className?: string;
}

const OrderHistory5 = ({
  orders = DEFAULT_ORDERS,
  className,
}: OrderHistory5Props) => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "active" &&
        (order.status === "processing" || order.status === "shipped")) ||
      order.status === activeTab;

    const matchesSearch =
      searchQuery === "" ||
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    return matchesTab && matchesSearch;
  });

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Your Orders
          </h1>
          <p className="mt-1 text-muted-foreground">
            Track, return, or buy items again
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="active">In Progress</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
              <TabsTrigger value="returned">Returns</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 sm:w-64"
            />
          </div>
        </div>

        {/* Orders */}
        <div className="space-y-6">
          {filteredOrders.map((order) => {
            const status = statusConfig[order.status];

            return (
              <Card
                key={order.id}
                className="gap-0 overflow-hidden p-0 shadow-none"
              >
                {/* Order Header */}
                <div
                  className={cn(
                    "flex flex-wrap items-center justify-between gap-4 px-5 py-4",
                    !(order.status === "shipped" && order.deliveryDate) &&
                      "border-b",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Order placed
                      </p>
                      <p className="text-sm font-medium">{order.orderDate}</p>
                    </div>
                    <Separator orientation="vertical" className="h-8" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Order number
                      </p>
                      <p className="text-sm font-medium">{order.orderNumber}</p>
                    </div>
                    <Separator orientation="vertical" className="h-8" />
                    <div>
                      <p className="text-xs text-muted-foreground">Total</p>
                      <p className="text-sm font-medium">
                        {formatPrice(order.total)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn("size-2 rounded-full", status.dotColor)}
                    />
                    <span className={cn("text-sm font-medium", status.color)}>
                      {status.label}
                    </span>
                  </div>
                </div>

                {/* Delivery Info */}
                {order.status === "shipped" && order.deliveryDate && (
                  <div className="flex items-center justify-between gap-4 border-b bg-muted/30 px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950">
                        <Truck className="size-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Arriving {order.deliveryDate}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Your package is on its way
                        </p>
                      </div>
                    </div>
                    {order.trackingUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={order.trackingUrl}>
                          Track
                          <ArrowUpRight className="ml-1.5 size-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                )}

                {/* Order Items */}
                <CardContent className="p-0">
                  {order.items.map((item, index) => (
                    <div key={item.id}>
                      {index > 0 && <Separator />}
                      <div className="flex gap-5 p-5">
                        {/* Image */}
                        <div className="size-24 shrink-0 overflow-hidden rounded-lg bg-muted sm:size-28">
                          <AspectRatio ratio={1}>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="size-full object-cover"
                            />
                          </AspectRatio>
                        </div>

                        {/* Item Details */}
                        <div className="flex min-w-0 flex-1 flex-col">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {item.color} · {item.size}
                                {item.quantity > 1 && ` · Qty ${item.quantity}`}
                              </p>
                            </div>
                            <p className="shrink-0 text-sm font-semibold">
                              {formatPrice(item.price)}
                            </p>
                          </div>

                          {/* Item Actions */}
                          <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
                            {order.status === "delivered" && (
                              <>
                                <Button variant="secondary" size="sm">
                                  <RotateCcw className="mr-1.5 size-3.5" />
                                  Buy Again
                                </Button>
                                {item.canReturn && (
                                  <Button variant="outline" size="sm">
                                    Start Return
                                  </Button>
                                )}
                                <Button variant="ghost" size="sm">
                                  <Star className="mr-1.5 size-3.5" />
                                  Write Review
                                </Button>
                              </>
                            )}
                            {order.status === "shipped" && (
                              <Button variant="secondary" size="sm">
                                <Package className="mr-1.5 size-3.5" />
                                Track Item
                              </Button>
                            )}
                          </div>

                          {/* Return Window Notice */}
                          {item.canReturn && item.returnByDate && (
                            <p className="mt-3 text-xs text-muted-foreground">
                              Eligible for return until {item.returnByDate}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>

                {/* Order Footer */}
                <div className="flex items-center justify-between border-t bg-muted/20 px-5 py-3">
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 text-foreground"
                  >
                    View order details
                    <ChevronRight className="ml-1 size-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    Need Help?
                  </Button>
                </div>
              </Card>
            );
          })}

          {/* Empty State */}
          {filteredOrders.length === 0 && (
            <Card className="gap-0 p-0 shadow-none">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-muted">
                  <Package className="size-6 text-muted-foreground" />
                </div>
                <h2 className="text-lg font-semibold">No orders found</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {searchQuery
                    ? `No results for "${searchQuery}"`
                    : "You haven't placed any orders yet"}
                </p>
                <Button className="mt-5">Start Shopping</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export { OrderHistory5 };
```
