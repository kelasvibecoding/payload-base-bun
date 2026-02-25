# Settings Profile 7

## Metadata
- **Category**: Settings Profile
- **Objective**: Provide a minimalist, frictionless "edit-in-place" profile management system.
- **Use Case**: Quick profile summaries, mobile administration interfaces, and lightweight user dashboards.
- **Visual Style**: Compact card layout centered on a vertical list of fields that transition seamlessly between static display and active editing states.
- **Interactivity**: Inline editing triggered by contextual action buttons (pencil icons), keyboard-driven saving (Enter) and cancelling (Esc), and state-aware buttons that provide instant feedback (green checkmark for save, red X for cancel).

## Description
Settings Profile 7 is optimized for speed and space efficiency. Instead of a large, static form, it presents information as a series of editable line items. This approach allows users to update specific data points (Name, Role, Email, Location) without leaving their current context or navigating complex form structures. It includes an integrated avatar uploader that follows the same space-saving philosophy.

## Source Code

```tsx
"use client";

import { useState } from "react";
import { Camera, Check, Pencil, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileUpload,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ProfileData {
  name: string;
  email: string;
  avatar?: string;
  role?: string;
  location?: string;
}

interface SettingsProfile7Props {
  defaultValues?: Partial<ProfileData>;
  className?: string;
}

const SettingsProfile7 = ({
  defaultValues = {
    name: "Alex Morgan",
    email: "alex.morgan@email.com",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    role: "Product Designer",
    location: "San Francisco, CA",
  },
  className,
}: SettingsProfile7Props) => {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [formData, setFormData] = useState(defaultValues);
  const [tempValue, setTempValue] = useState("");
  const [avatarFiles, setAvatarFiles] = useState<File[]>([]);

  const avatarPreview =
    avatarFiles.length > 0
      ? URL.createObjectURL(avatarFiles[0])
      : formData.avatar;

  const startEdit = (field: string, currentValue: string) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const saveEdit = (field: keyof ProfileData) => {
    setFormData((prev) => ({ ...prev, [field]: tempValue }));
    setEditingField(null);
  };

  const cancelEdit = () => {
    setEditingField(null);
    setTempValue("");
  };

  const initials = formData.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const EditableField = ({
    field,
    label,
    value,
  }: {
    field: keyof ProfileData;
    label: string;
    value?: string;
  }) => {
    const isEditing = editingField === field;

    return (
      <div className="group flex items-center justify-between py-2">
        <div className="min-w-0 flex-1">
          <p className="text-xs text-muted-foreground">{label}</p>
          {isEditing ? (
            <div className="mt-1 flex items-center gap-2">
              <Input
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="h-8"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveEdit(field);
                  if (e.key === "Escape") cancelEdit();
                }}
              />
              <Button
                size="icon"
                variant="ghost"
                className="size-8 shrink-0"
                onClick={() => saveEdit(field)}
              >
                <Check className="size-4 text-green-600" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="size-8 shrink-0"
                onClick={cancelEdit}
              >
                <X className="size-4 text-muted-foreground" />
              </Button>
            </div>
          ) : (
            <p className="truncate text-sm font-medium">
              {value || <span className="text-muted-foreground">Not set</span>}
            </p>
          )}
        </div>
        {!isEditing && (
          <Button
            size="icon"
            variant="ghost"
            className="size-8 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={() => startEdit(field, value || "")}
          >
            <Pencil className="size-3.5" />
          </Button>
        )}
      </div>
    );
  };

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Avatar */}
          <FileUpload
            value={avatarFiles}
            onValueChange={setAvatarFiles}
            accept="image/*"
            maxFiles={1}
            maxSize={2 * 1024 * 1024}
          >
            <div className="relative shrink-0">
              <Avatar className="size-16">
                <AvatarImage
                  src={avatarPreview}
                  alt={formData.name}
                  className="object-cover"
                />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <FileUploadTrigger asChild>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute -bottom-1 -right-1 size-6 rounded-full shadow-sm"
                >
                  <Camera className="size-3" />
                </Button>
              </FileUploadTrigger>
            </div>
          </FileUpload>

          {/* Editable Fields */}
          <div className="min-w-0 flex-1 divide-y">
            <EditableField field="name" label="Name" value={formData.name} />
            <EditableField field="role" label="Role" value={formData.role} />
            <EditableField field="email" label="Email" value={formData.email} />
            <EditableField
              field="location"
              label="Location"
              value={formData.location}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { SettingsProfile7 };
```
