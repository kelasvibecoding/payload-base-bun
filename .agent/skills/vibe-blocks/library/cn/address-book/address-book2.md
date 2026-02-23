# Address Book 2

## Metadata
- **Category**: Address Book
- **Objective**: Grid-based address selection and management with visual type indicators
- **Use Case**: Delivery address selection, address book management, checkout flow
- **Visual Style**: Grid-based card layout with icon indicators and selection checkmarks
- **Interactivity**: Card selection, inline editing, add/remove addresses, type-based icons

## Description
A modern grid-based address management component featuring card-based layout with visual type indicators (home/work icons), selection checkmarks, and address labels. Users can select addresses with visual feedback, edit inline, add new addresses via a dashed placeholder card, and remove non-default addresses. The component uses a 2-column grid on larger screens with distinctive visual styling for selected states.

## Source Code
```tsx
"use client";

import { Building, Check, Home, Plus, Save, Star, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Address {
  id: string;
  label: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault: boolean;
  type: "home" | "work";
}

const DEFAULT_ADDRESSES: Address[] = [
  {
    id: "1",
    label: "Home",
    name: "John Doe",
    street: "123 Main Street, Apt 4B",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
    isDefault: true,
    type: "home",
  },
  {
    id: "2",
    label: "Office",
    name: "John Doe",
    street: "456 Business Ave, Suite 100",
    city: "New York",
    state: "NY",
    zip: "10018",
    country: "United States",
    isDefault: false,
    type: "work",
  },
];

interface AddressBook2Props {
  addresses?: Address[];
  title?: string;
  className?: string;
}

const AddressBook2 = ({
  addresses: initialAddresses = DEFAULT_ADDRESSES,
  title = "Delivery Address",
  className,
}: AddressBook2Props) => {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [selectedId, setSelectedId] = useState(
    addresses.find((a) => a.isDefault)?.id || addresses[0]?.id,
  );
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editForm, setEditForm] = useState<Partial<Address>>({});

  const typeIcons = {
    home: <Home className="size-4" />,
    work: <Building className="size-4" />,
  };

  const startEditing = (address: Address) => {
    setEditingId(address.id);
    setEditForm({ ...address });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEdit = () => {
    if (
      editingId &&
      editForm.name &&
      editForm.street &&
      editForm.city &&
      editForm.state &&
      editForm.zip &&
      editForm.country &&
      editForm.type &&
      editForm.label
    ) {
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingId
            ? ({
                ...addr,
                ...editForm,
              } as Address)
            : addr,
        ),
      );
      setEditingId(null);
      setEditForm({});
    }
  };

  const startAddingNew = () => {
    setIsAddingNew(true);
    setEditForm({
      label: "",
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      type: "home",
      isDefault: addresses.length === 0,
    });
  };

  const cancelAddingNew = () => {
    setIsAddingNew(false);
    setEditForm({});
  };

  const saveNewAddress = () => {
    if (
      editForm.name &&
      editForm.street &&
      editForm.city &&
      editForm.state &&
      editForm.zip &&
      editForm.country &&
      editForm.type &&
      editForm.label
    ) {
      const newAddress: Address = {
        id: Date.now().toString(),
        label: editForm.label,
        name: editForm.name,
        street: editForm.street,
        city: editForm.city,
        state: editForm.state,
        zip: editForm.zip,
        country: editForm.country,
        type: editForm.type as "home" | "work",
        isDefault: addresses.length === 0,
      };
      setAddresses((prev) => [...prev, newAddress]);
      setIsAddingNew(false);
      setEditForm({});
      if (addresses.length === 0) {
        setSelectedId(newAddress.id);
      }
    }
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        {/* Address Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {addresses.map((address) => (
            <Card
              key={address.id}
              className={cn(
                "relative cursor-pointer gap-0 p-0 transition-all hover:shadow-md border",
                selectedId === address.id && editingId !== address.id
                  ? "border-primary ring-2 ring-primary shadow-md"
                  : "",
                editingId === address.id && "border-muted",
              )}
              onClick={() =>
                editingId !== address.id && setSelectedId(address.id)
              }
            >
              <CardContent className="p-4">
                {editingId === address.id ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Edit Address</h3>
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
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`label-${address.id}`}>Label</Label>
                        <Input
                          id={`label-${address.id}`}
                          value={editForm.label || ""}
                          onChange={(e) =>
                            setEditForm({ ...editForm, label: e.target.value })
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`name-${address.id}`}>Full Name</Label>
                        <Input
                          id={`name-${address.id}`}
                          value={editForm.name || ""}
                          onChange={(e) =>
                            setEditForm({ ...editForm, name: e.target.value })
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`street-${address.id}`}>
                          Street Address
                        </Label>
                        <Input
                          id={`street-${address.id}`}
                          value={editForm.street || ""}
                          onChange={(e) =>
                            setEditForm({ ...editForm, street: e.target.value })
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-2">
                          <Label htmlFor={`city-${address.id}`}>City</Label>
                          <Input
                            id={`city-${address.id}`}
                            value={editForm.city || ""}
                            onChange={(e) =>
                              setEditForm({ ...editForm, city: e.target.value })
                            }
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`state-${address.id}`}>State</Label>
                          <Input
                            id={`state-${address.id}`}
                            value={editForm.state || ""}
                            onChange={(e) =>
                              setEditForm({ ...editForm, state: e.target.value })
                            }
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-2">
                          <Label htmlFor={`zip-${address.id}`}>ZIP Code</Label>
                          <Input
                            id={`zip-${address.id}`}
                            value={editForm.zip || ""}
                            onChange={(e) =>
                              setEditForm({ ...editForm, zip: e.target.value })
                            }
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`country-${address.id}`}>
                            Country
                          </Label>
                          <Input
                            id={`country-${address.id}`}
                            value={editForm.country || ""}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                country: e.target.value,
                              })
                            }
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`type-${address.id}`}>Type</Label>
                        <Select
                          value={editForm.type || "home"}
                          onValueChange={(value: "home" | "work") =>
                            setEditForm({ ...editForm, type: value })
                          }
                        >
                          <SelectTrigger
                            id={`type-${address.id}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="home">Home</SelectItem>
                            <SelectItem value="work">Work</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Selected Indicator */}
                    {selectedId === address.id && (
                      <div className="absolute right-3 top-3 flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-4" />
                      </div>
                    )}

                    {/* Type Icon & Label */}
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex size-8 items-center justify-center rounded-full bg-muted">
                        {typeIcons[address.type]}
                      </div>
                      <span className="font-medium">{address.label}</span>
                      {address.isDefault && (
                        <Badge variant="secondary" className="gap-1 text-xs">
                          <Star className="size-3 fill-current" />
                          Default
                        </Badge>
                      )}
                    </div>

                    {/* Address Details */}
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">
                        {address.name}
                      </p>
                      <p>{address.street}</p>
                      <p>
                        {address.city}, {address.state} {address.zip}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          startEditing(address);
                        }}
                      >
                        Edit
                      </Button>
                      {!address.isDefault && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-xs text-destructive hover:text-destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            setAddresses((prev) =>
                              prev.filter((a) => a.id !== address.id),
                            );
                            if (
                              selectedId === address.id &&
                              addresses.length > 1
                            ) {
                              setSelectedId(
                                addresses.find((a) => a.id !== address.id)
                                  ?.id || "",
                              );
                            }
                            if (editingId === address.id) {
                              setEditingId(null);
                              setEditForm({});
                            }
                          }}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}

          {/* Add New Card */}
          {isAddingNew ? (
            <Card className="border-muted gap-0 p-0 border">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Add New Address</h3>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={cancelAddingNew}
                      >
                        <X className="size-4" />
                      </Button>
                      <Button size="sm" onClick={saveNewAddress}>
                        <Save className="mr-2 size-4" />
                        Save
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-label">Label</Label>
                      <Input
                        id="new-label"
                        value={editForm.label || ""}
                        onChange={(e) =>
                          setEditForm({ ...editForm, label: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-name">Full Name</Label>
                      <Input
                        id="new-name"
                        value={editForm.name || ""}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-street">Street Address</Label>
                      <Input
                        id="new-street"
                        value={editForm.street || ""}
                        onChange={(e) =>
                          setEditForm({ ...editForm, street: e.target.value })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-2">
                        <Label htmlFor="new-city">City</Label>
                        <Input
                          id="new-city"
                          value={editForm.city || ""}
                          onChange={(e) =>
                            setEditForm({ ...editForm, city: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-state">State</Label>
                        <Input
                          id="new-state"
                          value={editForm.state || ""}
                          onChange={(e) =>
                            setEditForm({ ...editForm, state: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-2">
                        <Label htmlFor="new-zip">ZIP Code</Label>
                        <Input
                          id="new-zip"
                          value={editForm.zip || ""}
                          onChange={(e) =>
                            setEditForm({ ...editForm, zip: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-country">Country</Label>
                        <Input
                          id="new-country"
                          value={editForm.country || ""}
                          onChange={(e) =>
                            setEditForm({ ...editForm, country: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-type">Type</Label>
                      <Select
                        value={editForm.type || "home"}
                        onValueChange={(value: "home" | "work") =>
                          setEditForm({ ...editForm, type: value })
                        }
                      >
                        <SelectTrigger id="new-type">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home</SelectItem>
                          <SelectItem value="work">Work</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card
              className="cursor-pointer gap-0 border-dashed p-0 transition-colors hover:border-primary hover:bg-muted/50"
              onClick={startAddingNew}
            >
              <CardContent className="flex h-full min-h-[180px] flex-col items-center justify-center p-4 text-center">
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-muted">
                  <Plus className="size-5 text-muted-foreground" />
                </div>
                <p className="font-medium">Add New Address</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Save a new delivery location
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export { AddressBook2 };
```
