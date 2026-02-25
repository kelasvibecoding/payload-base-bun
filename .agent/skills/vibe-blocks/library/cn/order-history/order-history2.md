# Order History 2

## Metadata
- **Category**: Order History
- **Objective**: Provide a detailed, collapsible view of order history, revealing line items, shipping address, and tracking info upon expansion.
- **Use Case**: Ideal for complex orders (furniture, electronics) where users need to verify exact configuration details (variants, sizes) and shipping logistics for each order without navigating to a separate detail page.
- **Visual Style**: Sleek, modern cards that act as accordions, utilizing `Collapsible` from Shadcn. Displays a primary product image and high-level order stats when collapsed. Expansion reveals a two-column layout (`grid-cols-2`) for line items and address/tracking details.
- **Interactivity**: The `Collapsible` component manages the open/close state of order details. Dropdown filtering for status (`Select`) and text search (`Input`) on the order level. Responsive design adjustments collapse stats into a wrap layout on mobile.

## Source Code

```tsx
"use client";

import {
  Check,
  ChevronDown,
  Clock,
  MapPin,
  Package,
  RotateCcw,
  Search,
  Truck,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

interface OrderItem {
  name: string;
  variant: string;
  image: string;
  price: number;
  quantity: number;
}

interface ShippingAddress {
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface OrderHistoryItem {
  id: string;
  orderNumber: string;
  orderDate: string;
  status: OrderStatus;
  total: number;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

const DEFAULT_ORDERS: OrderHistoryItem[] = [
  {
    id: "1",
    orderNumber: "72831",
    orderDate: "15 Feb, 2025",
    status: "pending",
    total: 109.08,
    items: [
      {
        name: "Modern Brass Pendant Light",
        variant: "Matte Gold Finish",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/Modern-Artistic-Lamp-1.png",
        price: 109.08,
        quantity: 1,
      },
    ],
    shippingAddress: {
      name: "Alex Johnson",
      street: "1234 Maple Street, Apt 5B",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
    },
  },
  {
    id: "2",
    orderNumber: "71293",
    orderDate: "8 Feb, 2025",
    status: "shipped",
    total: 159.08,
    items: [
      {
        name: "Scandinavian Dining Chair",
        variant: "Natural Oak",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/Modern-Wooden-Cabinet-1.png",
        price: 159.08,
        quantity: 1,
      },
    ],
    shippingAddress: {
      name: "Alex Johnson",
      street: "1234 Maple Street, Apt 5B",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
    },
    trackingNumber: "1Z999AA10123456784",
    estimatedDelivery: "12 Feb, 2025",
  },
  {
    id: "3",
    orderNumber: "69847",
    orderDate: "25 Jan, 2025",
    status: "delivered",
    total: 449.0,
    items: [
      {
        name: "Mid-Century Storage Cabinet",
        variant: "Walnut Wood",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/Minimalist-Wooden-Sideboard-1.png",
        price: 449.0,
        quantity: 1,
      },
    ],
    shippingAddress: {
      name: "Alex Johnson",
      street: "1234 Maple Street, Apt 5B",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
    },
    trackingNumber: "1Z999AA10123456799",
  },
  {
    id: "4",
    orderNumber: "68234",
    orderDate: "10 Jan, 2025",
    status: "delivered",
    total: 289.0,
    items: [
      {
        name: "Minimalist Floor Lamp",
        variant: "Brushed Nickel",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/Modern-Artistic-Lamp-2.png",
        price: 189.0,
        quantity: 1,
      },
      {
        name: "Ceramic Table Vase",
        variant: "Terracotta",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/Minimalist-Loveseat-1.png",
        price: 100.0,
        quantity: 1,
      },
    ],
    shippingAddress: {
      name: "Alex Johnson",
      street: "1234 Maple Street, Apt 5B",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
    },
    trackingNumber: "1Z999AA10123456800",
  },
];

const statusConfig: Record<
  OrderStatus,
  { label: string; className: string; icon: typeof Clock }
> = {
  pending: {
    label: "Pending",
    className:
      "bg-slate-100 text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300",
    icon: Clock,
  },
  shipped: {
    label: "In Delivery",
    className:
      "bg-orange-50 text-orange-600 hover:bg-orange-50 dark:bg-orange-950 dark:text-orange-400",
    icon: Truck,
  },
  delivered: {
    label: "Delivered",
    className:
      "bg-emerald-50 text-emerald-600 hover:bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-400",
    icon: Check,
  },
  cancelled: {
    label: "Cancelled",
    className:
      "bg-red-50 text-red-600 hover:bg-red-50 dark:bg-red-950 dark:text-red-400",
    icon: Package,
  },
};

interface OrderHistory2Props {
  orders?: OrderHistoryItem[];
  className?: string;
}

const OrderHistory2 = ({
  orders = DEFAULT_ORDERS,
  className,
}: OrderHistory2Props) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;
    const matchesSearch =
      searchQuery === "" ||
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesStatus && matchesSearch;
  });

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              My Orders
            </h1>
            <p className="mt-1 text-muted-foreground">
              Manage, Track, and Review Your Purchases
            </p>
          </div>

          <div className="flex gap-3">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 sm:w-48"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="All Orders" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="shipped">In Delivery</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const status = statusConfig[order.status];
            const StatusIcon = status.icon;
            const isExpanded = expandedId === order.id;
            const primaryItem = order.items[0];

            return (
              <Collapsible
                key={order.id}
                open={isExpanded}
                onOpenChange={(open) => setExpandedId(open ? order.id : null)}
              >
                <Card className="shadow-none">
                  <CollapsibleTrigger asChild>
                    <CardContent className="cursor-pointer p-4 md:p-6">
                      <div className="flex items-center gap-4">
                        {/* Product Image */}
                        <div className="size-14 shrink-0 overflow-hidden rounded-lg bg-muted md:size-16">
                          <AspectRatio ratio={1}>
                            <img
                              src={primaryItem.image}
                              alt={primaryItem.name}
                              className="size-full object-cover"
                            />
                          </AspectRatio>
                        </div>

                        {/* Product Info */}
                        <div className="min-w-0 flex-1">
                          <h3 className="font-medium">{primaryItem.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {primaryItem.variant}
                          </p>
                        </div>

                        {/* Order Details - Desktop */}
                        <div className="hidden items-center gap-6 md:flex">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 font-mono text-primary hover:bg-primary/10"
                          >
                            #{order.orderNumber}
                          </Badge>
                          <span className="w-28 text-sm text-muted-foreground">
                            {order.orderDate}
                          </span>
                          <Badge className={cn("gap-1.5", status.className)}>
                            <StatusIcon className="size-3.5" />
                            {status.label}
                          </Badge>
                          <span className="w-24 text-right font-semibold">
                            {formatPrice(order.total)}
                          </span>
                          <ChevronDown
                            className={cn(
                              "size-5 text-muted-foreground transition-transform",
                              isExpanded && "rotate-180",
                            )}
                          />
                        </div>

                        {/* Mobile Chevron */}
                        <ChevronDown
                          className={cn(
                            "size-5 text-muted-foreground transition-transform md:hidden",
                            isExpanded && "rotate-180",
                          )}
                        />
                      </div>

                      {/* Order Details - Mobile */}
                      <div className="mt-3 flex flex-wrap items-center gap-2 md:hidden">
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 font-mono text-primary hover:bg-primary/10"
                        >
                          #{order.orderNumber}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {order.orderDate}
                        </span>
                        <Badge className={cn("gap-1.5", status.className)}>
                          <StatusIcon className="size-3.5" />
                          {status.label}
                        </Badge>
                        <span className="ml-auto font-semibold">
                          {formatPrice(order.total)}
                        </span>
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <Separator />
                    <CardContent className="p-4 md:p-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        {/* Left: Order Items */}
                        <div>
                          <h4 className="mb-3 text-sm font-medium">
                            Order Items
                          </h4>
                          <div className="space-y-3">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex gap-3">
                                <div className="size-12 shrink-0 overflow-hidden rounded-md bg-muted">
                                  <AspectRatio ratio={1}>
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="size-full object-cover"
                                    />
                                  </AspectRatio>
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-medium">
                                    {item.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {item.variant} · Qty: {item.quantity}
                                  </p>
                                </div>
                                <p className="text-sm font-medium">
                                  {formatPrice(item.price)}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right: Shipping & Tracking */}
                        <div className="space-y-4">
                          {/* Shipping Address */}
                          <div>
                            <h4 className="mb-2 flex items-center gap-2 text-sm font-medium">
                              <MapPin className="size-4 text-muted-foreground" />
                              Shipping Address
                            </h4>
                            <div className="rounded-lg bg-muted/50 p-3 text-sm">
                              <p className="font-medium">
                                {order.shippingAddress.name}
                              </p>
                              <p className="text-muted-foreground">
                                {order.shippingAddress.street}
                              </p>
                              <p className="text-muted-foreground">
                                {order.shippingAddress.city},{" "}
                                {order.shippingAddress.state}{" "}
                                {order.shippingAddress.zipCode}
                              </p>
                            </div>
                          </div>

                          {/* Tracking Info */}
                          {order.trackingNumber && (
                            <div>
                              <h4 className="mb-2 flex items-center gap-2 text-sm font-medium">
                                <Truck className="size-4 text-muted-foreground" />
                                Tracking
                              </h4>
                              <div className="rounded-lg bg-muted/50 p-3 text-sm">
                                <p className="font-mono text-xs">
                                  {order.trackingNumber}
                                </p>
                                {order.estimatedDelivery && (
                                  <p className="mt-1 text-muted-foreground">
                                    Est. delivery: {order.estimatedDelivery}
                                  </p>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {order.status === "shipped" && (
                          <Button size="sm">
                            <Truck className="mr-1.5 size-4" />
                            Track Package
                          </Button>
                        )}
                        {order.status === "delivered" && (
                          <>
                            <Button size="sm" variant="outline">
                              <RotateCcw className="mr-1.5 size-4" />
                              Buy Again
                            </Button>
                            <Button size="sm" variant="outline">
                              Return Item
                            </Button>
                          </>
                        )}
                        {order.status === "pending" && (
                          <Button size="sm" variant="outline">
                            Cancel Order
                          </Button>
                        )}
                        <Button size="sm" variant="ghost">
                          View Invoice
                        </Button>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            );
          })}

          {/* Empty State */}
          {filteredOrders.length === 0 && (
            <Card className="shadow-none">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
                  <Package className="size-8 text-muted-foreground" />
                </div>
                <h2 className="mb-2 text-lg font-semibold">No orders found</h2>
                <p className="max-w-sm text-sm text-muted-foreground">
                  {searchQuery
                    ? `No orders matching "${searchQuery}"`
                    : "You haven't placed any orders yet."}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export { OrderHistory2 };
```
