# Order History 1

## Metadata
- **Category**: Order History
- **Objective**: Display a concise list of past orders with tabbed filtering, search, and a thumbnail stack of products.
- **Use Case**: Best for e-commerce dashboards where users frequently reorder or check statuses of visually distinguishable products.
- **Visual Style**: Clean tabular/card view using Shadcn `Card` and `Tabs`. Features an overlapping thumbnail stack (`AspectRatio`, `img`) to visualize multiple items compactly without taking much screen real estate.
- **Interactivity**: Includes a search bar and tab filters (All, Active, Delivered, Cancelled) that instantly filter the displayed list. "Active" tab logic groups "processing" and "shipped". Thumbnail stack handles overflow by displaying a count (e.g., `+2`).

## Source Code

```tsx
"use client";

import {
  ChevronRight,
  Package,
  RefreshCcw,
  Search,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type OrderStatus =
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned";

interface OrderHistoryItem {
  id: string;
  orderNumber: string;
  orderDate: string;
  status: OrderStatus;
  total: number;
  itemCount: number;
  thumbnails: string[];
  trackingNumber?: string;
}

const DEFAULT_ORDERS: OrderHistoryItem[] = [
  {
    id: "1",
    orderNumber: "ORD-2024-78432",
    orderDate: "December 14, 2024",
    status: "processing",
    total: 289.0,
    itemCount: 2,
    thumbnails: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/stylish-maroon-sneaker.png",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/black-hoodie-against-light-background.png",
    ],
  },
  {
    id: "2",
    orderNumber: "ORD-2024-78401",
    orderDate: "December 10, 2024",
    status: "shipped",
    total: 549.99,
    itemCount: 3,
    thumbnails: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/smart-watch-1.png",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Sleek-Modern-Laptop-1.png",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Sleek-Smartphone-Close-Up-1.png",
    ],
    trackingNumber: "1Z999AA10123456784",
  },
  {
    id: "3",
    orderNumber: "ORD-2024-78355",
    orderDate: "November 28, 2024",
    status: "delivered",
    total: 1249.0,
    itemCount: 2,
    thumbnails: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/Modern-Leather-Sofa-1.png",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/Modern-Artistic-Lamp-1.png",
    ],
  },
  {
    id: "4",
    orderNumber: "ORD-2024-78290",
    orderDate: "November 15, 2024",
    status: "cancelled",
    total: 185.0,
    itemCount: 3,
    thumbnails: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Stylish-Round-Sunglasses-1.png",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Sunflower-Pendant-Necklace-1.png",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Stylish-Pink-Eyeglasses-1.png",
    ],
  },
];

const statusConfig: Record<
  OrderStatus,
  { label: string; className: string; icon: typeof Package }
> = {
  processing: {
    label: "Processing",
    className: "bg-amber-500/10 text-amber-600 hover:bg-amber-500/10",
    icon: Package,
  },
  shipped: {
    label: "Shipped",
    className: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/10",
    icon: Truck,
  },
  delivered: {
    label: "Delivered",
    className: "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10",
    icon: Package,
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-red-500/10 text-red-600 hover:bg-red-500/10",
    icon: Package,
  },
  returned: {
    label: "Returned",
    className: "bg-slate-500/10 text-slate-600 hover:bg-slate-500/10",
    icon: RefreshCcw,
  },
};

interface OrderHistory1Props {
  orders?: OrderHistoryItem[];
  className?: string;
}

const OrderHistory1 = ({
  orders = DEFAULT_ORDERS,
  className,
}: OrderHistory1Props) => {
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
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Order History
          </h1>
          <p className="mt-1 text-muted-foreground">
            View and manage your past orders
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by order #"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 sm:w-64"
            />
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length > 0 ? (
          <div className="space-y-4">
            {filteredOrders.map((order) => {
              const status = statusConfig[order.status];

              return (
                <Card
                  key={order.id}
                  className="shadow-none transition-shadow hover:shadow-md"
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      {/* Left: Order Info */}
                      <div className="flex gap-4">
                        {/* Thumbnails Stack */}
                        <div className="relative flex shrink-0">
                          {order.thumbnails.slice(0, 3).map((thumb, index) => (
                            <div
                              key={index}
                              className={cn(
                                "relative size-14 overflow-hidden rounded-lg border-2 border-background bg-muted",
                                index > 0 && "-ml-4",
                              )}
                              style={{ zIndex: 3 - index }}
                            >
                              <AspectRatio ratio={1}>
                                <img
                                  src={thumb}
                                  alt=""
                                  className="size-full object-cover"
                                />
                              </AspectRatio>
                            </div>
                          ))}
                          {order.itemCount > 3 && (
                            <div
                              className="relative -ml-4 flex size-14 items-center justify-center rounded-lg border-2 border-background bg-muted text-sm font-medium text-muted-foreground"
                              style={{ zIndex: 0 }}
                            >
                              +{order.itemCount - 3}
                            </div>
                          )}
                        </div>

                        {/* Order Details */}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-semibold">{order.orderNumber}</p>
                            <Badge className={status.className}>
                              {status.label}
                            </Badge>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {order.orderDate} · {order.itemCount}{" "}
                            {order.itemCount === 1 ? "item" : "items"}
                          </p>
                          {order.trackingNumber && (
                            <p className="mt-1 text-xs text-muted-foreground">
                              Tracking: {order.trackingNumber}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Right: Price & Actions */}
                      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-center">
                        <p className="text-lg font-bold">
                          {formatPrice(order.total)}
                        </p>
                        <div className="flex gap-2">
                          {order.status === "shipped" && (
                            <Button variant="outline" size="sm">
                              <Truck className="mr-1.5 size-4" />
                              Track
                            </Button>
                          )}
                          {order.status === "delivered" && (
                            <Button variant="outline" size="sm">
                              <RefreshCcw className="mr-1.5 size-4" />
                              Reorder
                            </Button>
                          )}
                          <Button variant="ghost" size="sm">
                            View
                            <ChevronRight className="ml-1 size-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <Card className="shadow-none">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
                <ShoppingBag className="size-8 text-muted-foreground" />
              </div>
              <h2 className="mb-2 text-lg font-semibold">No orders found</h2>
              <p className="mb-6 max-w-sm text-sm text-muted-foreground">
                {searchQuery
                  ? `No orders matching "${searchQuery}"`
                  : "You haven't placed any orders yet. Start shopping to see your order history here."}
              </p>
              <Button>
                <ShoppingBag className="mr-2 size-4" />
                Start Shopping
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Summary Footer */}
        {filteredOrders.length > 0 && (
          <p className="mt-6 border-t pt-6 text-sm text-muted-foreground">
            Showing {filteredOrders.length} of {orders.length} orders
          </p>
        )}
      </div>
    </section>
  );
};

export { OrderHistory1 };
```
