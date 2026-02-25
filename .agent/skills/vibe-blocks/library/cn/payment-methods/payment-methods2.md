# Payment Methods 2

## Metadata
- **Category**: Payment Methods
- **Objective**: Display a responsive grid of saved payment methods with options for editing, removing, and setting defaults.
- **Use Case**: Best for account dashboards or settings pages where the available width allows for a multi-column layout, providing an at-a-glance view of all payment options.
- **Visual Style**: A responsive grid (`sm:grid-cols-2`) of visually enclosed standard cards. Highly visible selection states with active ring borders (`ring-2 ring-primary`). Real-world payment logos and cardholder details are clearly presented.
- **Interactivity**: Managing the list via clicking cards (selecting via RadioGroup), accessing card-specific actions via a Dropdown Menu (Edit, Set Default, Remove). Expanding the edit/add state collapses the selected card into a comprehensive input form.

## Source Code

```tsx
"use client";

import {
  CreditCard,
  MoreVertical,
  Pencil,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaymentMethod {
  id: string;
  type: "visa" | "mastercard" | "amex" | "paypal";
  last4?: string;
  expiryMonth?: number;
  expiryYear?: number;
  email?: string;
  cardholderName?: string;
  isDefault: boolean;
}

const DEFAULT_METHODS: PaymentMethod[] = [
  {
    id: "1",
    type: "visa",
    last4: "4242",
    expiryMonth: 12,
    expiryYear: 2026,
    cardholderName: "John Doe",
    isDefault: true,
  },
  {
    id: "2",
    type: "mastercard",
    last4: "8888",
    expiryMonth: 8,
    expiryYear: 2025,
    cardholderName: "John Doe",
    isDefault: false,
  },
  {
    id: "3",
    type: "paypal",
    email: "john@example.com",
    isDefault: false,
  },
];

const PAYMENT_LOGOS: Record<string, string> = {
  visa: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/payment-methods/visa.svg",
  mastercard: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/payment-methods/mastercard.svg",
  amex: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/payment-methods/amex.svg",
  paypal: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/payment-methods/paypal.svg",
};

interface PaymentMethods2Props {
  methods?: PaymentMethod[];
  className?: string;
}

const PaymentMethods2 = ({
  methods: initialMethods = DEFAULT_METHODS,
  className,
}: PaymentMethods2Props) => {
  const [methods, setMethods] = useState(initialMethods);
  const [selectedId, setSelectedId] = useState(
    methods.find((m) => m.isDefault)?.id || methods[0]?.id,
  );
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editForm, setEditForm] = useState<Partial<PaymentMethod>>({});

  const startEditing = (method: PaymentMethod) => {
    setEditingId(method.id);
    setEditForm({ ...method });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEdit = () => {
    if (
      editingId &&
      editForm.type &&
      (editForm.type === "paypal"
        ? editForm.email
        : editForm.last4 && editForm.expiryMonth && editForm.expiryYear)
    ) {
      setMethods((prev) =>
        prev.map((method) =>
          method.id === editingId
            ? ({
                ...method,
                ...editForm,
              } as PaymentMethod)
            : method,
        ),
      );
      setEditingId(null);
      setEditForm({});
    }
  };

  const startAddingNew = () => {
    setIsAddingNew(true);
    setEditForm({
      type: "visa",
      last4: "",
      expiryMonth: undefined,
      expiryYear: undefined,
      email: undefined,
      cardholderName: "",
      isDefault: methods.length === 0,
    });
  };

  const cancelAddingNew = () => {
    setIsAddingNew(false);
    setEditForm({});
  };

  const saveNewMethod = () => {
    if (
      editForm.type &&
      (editForm.type === "paypal"
        ? editForm.email
        : editForm.last4 && editForm.expiryMonth && editForm.expiryYear)
    ) {
      const newMethod: PaymentMethod = {
        id: Date.now().toString(),
        type: editForm.type as "visa" | "mastercard" | "amex" | "paypal",
        last4: editForm.last4,
        expiryMonth: editForm.expiryMonth,
        expiryYear: editForm.expiryYear,
        email: editForm.email,
        cardholderName: editForm.cardholderName,
        isDefault: methods.length === 0,
      };
      setMethods((prev) => [...prev, newMethod]);
      setIsAddingNew(false);
      setEditForm({});
      if (methods.length === 0) {
        setSelectedId(newMethod.id);
      }
    }
  };

  const deleteMethod = (id: string) => {
    setMethods((prev) => prev.filter((method) => method.id !== id));
    if (selectedId === id && methods.length > 1) {
      setSelectedId(methods.find((m) => m.id !== id)?.id || "");
    }
    if (editingId === id) {
      setEditingId(null);
      setEditForm({});
    }
  };

  const setAsDefault = (id: string) => {
    setMethods((prev) =>
      prev.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    );
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Payment Methods
          </h1>
          <p className="mt-2 text-muted-foreground">
            Manage your saved payment methods
          </p>
        </div>

        {/* Payment Methods Grid */}
        <RadioGroup value={selectedId} onValueChange={setSelectedId}>
          <div className="grid gap-4 sm:grid-cols-2">
          {methods.map((method) => (
              <Card
                key={method.id}
                className={cn(
                  "cursor-pointer transition-all",
                  selectedId === method.id &&
                    editingId !== method.id &&
                    "border-primary ring-2 ring-primary ring-offset-2",
                  editingId === method.id && "border-primary",
                )}
                onClick={() =>
                  editingId !== method.id && setSelectedId(method.id)
                }
              >
                <CardContent className="p-5">
                  {editingId === method.id ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold">
                          Edit Payment Method
                        </h3>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              cancelEditing();
                            }}
                          >
                            <X className="size-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              saveEdit();
                            }}
                          >
                            <Save className="mr-2 size-4" />
                            Save
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label
                            htmlFor={`type-${method.id}`}
                            className="text-xs"
                          >
                            Card Type
                          </Label>
                          <Select
                            value={editForm.type || "visa"}
                            onValueChange={(
                              value: "visa" | "mastercard" | "amex" | "paypal",
                            ) => setEditForm({ ...editForm, type: value })}
                          >
                            <SelectTrigger
                              id={`type-${method.id}`}
                              className="h-9"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="visa">Visa</SelectItem>
                              <SelectItem value="mastercard">
                                Mastercard
                              </SelectItem>
                              <SelectItem value="amex">
                                American Express
                              </SelectItem>
                              <SelectItem value="paypal">PayPal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {editForm.type === "paypal" ? (
                          <div className="space-y-2">
                            <Label
                              htmlFor={`email-${method.id}`}
                              className="text-xs"
                            >
                              PayPal Email
                            </Label>
                            <Input
                              id={`email-${method.id}`}
                              type="email"
                              className="h-9"
                              value={editForm.email || ""}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  email: e.target.value,
                                })
                              }
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                        ) : (
                          <>
                            <div className="space-y-2">
                              <Label
                                htmlFor={`name-${method.id}`}
                                className="text-xs"
                              >
                                Cardholder Name
                              </Label>
                              <Input
                                id={`name-${method.id}`}
                                className="h-9"
                                value={editForm.cardholderName || ""}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    cardholderName: e.target.value,
                                  })
                                }
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor={`last4-${method.id}`}
                                className="text-xs"
                              >
                                Last 4 Digits
                              </Label>
                              <Input
                                id={`last4-${method.id}`}
                                className="h-9"
                                maxLength={4}
                                value={editForm.last4 || ""}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    last4: e.target.value
                                      .replace(/\D/g, "")
                                      .slice(0, 4),
                                  })
                                }
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="space-y-2">
                                <Label
                                  htmlFor={`expiryMonth-${method.id}`}
                                  className="text-xs"
                                >
                                  Month
                                </Label>
                                <Input
                                  id={`expiryMonth-${method.id}`}
                                  type="number"
                                  className="h-9"
                                  min={1}
                                  max={12}
                                  value={editForm.expiryMonth || ""}
                                  onChange={(e) =>
                                    setEditForm({
                                      ...editForm,
                                      expiryMonth:
                                        parseInt(e.target.value) || undefined,
                                    })
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label
                                  htmlFor={`expiryYear-${method.id}`}
                                  className="text-xs"
                                >
                                  Year
                                </Label>
                                <Input
                                  id={`expiryYear-${method.id}`}
                                  type="number"
                                  className="h-9"
                                  min={new Date().getFullYear()}
                                  value={editForm.expiryYear || ""}
                                  onChange={(e) =>
                                    setEditForm({
                                      ...editForm,
                                      expiryYear:
                                        parseInt(e.target.value) || undefined,
                                    })
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <RadioGroupItem
                          value={method.id}
                          id={method.id}
                          className="mt-1"
                        />
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MoreVertical className="size-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                startEditing(method);
                              }}
                            >
                              <Pencil className="mr-2 size-4" />
                              Edit
                            </DropdownMenuItem>
                            {!method.isDefault && (
                              <DropdownMenuItem
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setAsDefault(method.id);
                                }}
                              >
                                Set as Default
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem
                              className="text-destructive"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteMethod(method.id);
                              }}
                            >
                              <Trash2 className="mr-2 size-4" />
                              Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      {/* Payment Logo */}
                      <div className="flex size-16 items-center justify-center">
                        {PAYMENT_LOGOS[method.type] ? (
                          <img
                            src={PAYMENT_LOGOS[method.type]}
                            alt={method.type}
                            className="h-10 w-auto object-contain"
                          />
                        ) : (
                          <CreditCard className="size-8 text-muted-foreground" />
                        )}
                      </div>

                      {/* Details */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">
                            {method.type === "paypal"
                              ? "PayPal"
                              : `${method.type.charAt(0).toUpperCase() + method.type.slice(1)} •••• ${method.last4}`}
                    </span>
                    {method.isDefault && (
                            <Badge variant="secondary" className="text-xs">
                        Default
                      </Badge>
                    )}
                  </div>
                        <p className="text-sm text-muted-foreground">
                          {method.type === "paypal"
                            ? method.email
                            : method.cardholderName
                              ? `${method.cardholderName} • Expires ${method.expiryMonth}/${method.expiryYear}`
                              : `Expires ${method.expiryMonth}/${method.expiryYear}`}
                      </p>
                    </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {isAddingNew && (
              <Card className="border-primary">
                <CardContent className="p-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">
                        Add New Payment Method
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={cancelAddingNew}
                        >
                          <X className="size-4" />
                        </Button>
                        <Button size="sm" onClick={saveNewMethod}>
                          <Save className="mr-2 size-4" />
                          Save
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="new-type" className="text-xs">
                          Card Type
                        </Label>
                        <Select
                          value={editForm.type || "visa"}
                          onValueChange={(
                            value: "visa" | "mastercard" | "amex" | "paypal",
                          ) => setEditForm({ ...editForm, type: value })}
                        >
                          <SelectTrigger id="new-type" className="h-9">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="visa">Visa</SelectItem>
                            <SelectItem value="mastercard">
                              Mastercard
                            </SelectItem>
                            <SelectItem value="amex">
                              American Express
                            </SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {editForm.type === "paypal" ? (
                        <div className="space-y-2">
                          <Label htmlFor="new-email" className="text-xs">
                            PayPal Email
                          </Label>
                          <Input
                            id="new-email"
                            type="email"
                            className="h-9"
                            value={editForm.email || ""}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      ) : (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="new-name" className="text-xs">
                              Cardholder Name
                            </Label>
                            <Input
                              id="new-name"
                              className="h-9"
                              value={editForm.cardholderName || ""}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  cardholderName: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-last4" className="text-xs">
                              Last 4 Digits
                            </Label>
                            <Input
                              id="new-last4"
                              className="h-9"
                              maxLength={4}
                              value={editForm.last4 || ""}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  last4: e.target.value
                                    .replace(/\D/g, "")
                                    .slice(0, 4),
                                })
                              }
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                              <Label
                                htmlFor="new-expiryMonth"
                                className="text-xs"
                              >
                                Month
                              </Label>
                              <Input
                                id="new-expiryMonth"
                                type="number"
                                className="h-9"
                                min={1}
                                max={12}
                                value={editForm.expiryMonth || ""}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    expiryMonth:
                                      parseInt(e.target.value) || undefined,
                                  })
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="new-expiryYear"
                                className="text-xs"
                              >
                                Year
                              </Label>
                              <Input
                                id="new-expiryYear"
                                type="number"
                                className="h-9"
                                min={new Date().getFullYear()}
                                value={editForm.expiryYear || ""}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    expiryYear:
                                      parseInt(e.target.value) || undefined,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
            </div>
                </CardContent>
              </Card>
            )}
        </div>
        </RadioGroup>

        {/* Add New Button */}
        {!isAddingNew && (
          <Button
            variant="outline"
            className="mt-6 w-full sm:w-auto"
            onClick={startAddingNew}
          >
          <Plus className="mr-2 size-4" />
            Add New Payment Method
        </Button>
        )}

        {methods.length === 0 && (
          <Card className="mt-6">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <CreditCard className="mb-4 size-12 text-muted-foreground" />
              <h2 className="text-xl font-semibold">No payment methods</h2>
              <p className="mt-2 text-center text-muted-foreground">
                Add a payment method for faster checkout
              </p>
              <Button className="mt-4" onClick={startAddingNew}>
                <Plus className="mr-2 size-4" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export { PaymentMethods2 };
```
