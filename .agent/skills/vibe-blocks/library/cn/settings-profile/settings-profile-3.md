# Settings Profile 3

## Metadata
- **Category**: Settings Profile
- **Objective**: Provide a visually rich profile customization interface with branding elements and regional preferences.
- **Use Case**: Creator ecosystems, social networking profiles, and blog contributor settings.
- **Visual Style**: Multi-card architecture featuring a wide cover image banner, an overlapping avatar, and dedicated sections for regional settings.
- **Interactivity**: Dual file upload (Cover Image + Avatar) with previews, selective clearing for cover photo, and localized dropdowns for language and timezone selection.

## Description
Settings Profile 3 focuses on visual expression and personalization. It stands out with a cover image feature that supports large-format branding. The layout is divided into high-level visual identity (banner/avatar), basic information (name/bio), and technical preferences (language/timezone). This design is ideal for platforms where users want to showcase their creative personality.

## Source Code

```tsx
"use client";

import { useState } from "react";
import { Camera, Upload, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileUpload,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ProfileFormData {
  name: string;
  email: string;
  avatar?: string;
  coverImage?: string;
  bio?: string;
  timezone?: string;
  language?: string;
}

interface SettingsProfile3Props {
  defaultValues?: Partial<ProfileFormData>;
  onSave?: (data: ProfileFormData) => void;
  className?: string;
}

const SettingsProfile3 = ({
  defaultValues = {
    name: "Sam Rivera",
    email: "sam.rivera@email.com",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar5.jpg",
    coverImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg",
    bio: "Creative director and brand strategist helping startups tell their stories. Coffee enthusiast and amateur photographer.",
    timezone: "America/Los_Angeles",
    language: "en",
  },
  className,
}: SettingsProfile3Props) => {
  const [avatarFiles, setAvatarFiles] = useState<File[]>([]);
  const [coverFiles, setCoverFiles] = useState<File[]>([]);

  const initials = defaultValues.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const avatarPreview =
    avatarFiles.length > 0
      ? URL.createObjectURL(avatarFiles[0])
      : defaultValues.avatar;

  const coverPreview =
    coverFiles.length > 0
      ? URL.createObjectURL(coverFiles[0])
      : defaultValues.coverImage;

  return (
    <div className={cn("w-full max-w-2xl space-y-6", className)}>
      {/* Cover Image Card */}
      <Card className="overflow-hidden pt-0">
        <FileUpload
          value={coverFiles}
          onValueChange={setCoverFiles}
          accept="image/*"
          maxFiles={1}
          maxSize={5 * 1024 * 1024}
        >
          <div
            className="relative h-32 bg-muted bg-cover bg-center sm:h-40"
            style={{
              backgroundImage: coverPreview
                ? `url(${coverPreview})`
                : undefined,
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-3 right-3 flex gap-2">
              <FileUploadTrigger asChild>
                <Button size="sm" variant="secondary" className="shadow-md">
                  <Upload className="mr-2 size-4" />
                  Change Cover
                </Button>
              </FileUploadTrigger>
              {coverFiles.length > 0 && (
                <Button
                  size="icon"
                  variant="secondary"
                  className="size-8 shadow-md"
                  onClick={() => setCoverFiles([])}
                >
                  <X className="size-4" />
                </Button>
              )}
            </div>
          </div>
        </FileUpload>

        <CardContent className="-mt-12 pb-6 sm:-mt-14">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
            <FileUpload
              value={avatarFiles}
              onValueChange={setAvatarFiles}
              accept="image/*"
              maxFiles={1}
              maxSize={2 * 1024 * 1024}
            >
              <div className="relative">
                <Avatar className="size-24 border-4 border-card shadow-lg sm:size-28">
                  <AvatarImage
                    src={avatarPreview}
                    alt={defaultValues.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <FileUploadTrigger asChild>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute -bottom-1 -right-1 size-8 rounded-full shadow-md"
                  >
                    <Upload className="size-4" />
                  </Button>
                </FileUploadTrigger>
              </div>
            </FileUpload>
            <div className="space-y-1 text-center sm:pb-1 sm:text-left">
              <h3 className="text-lg font-semibold">{defaultValues.name}</h3>
              <p className="text-sm text-muted-foreground">
                {defaultValues.email}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>
            This information will be displayed on your public profile
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Display Name</Label>
            <Input id="name" defaultValue={defaultValues.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">About</Label>
            <Textarea
              id="bio"
              rows={4}
              defaultValue={defaultValues.bio}
              placeholder="Tell others about yourself"
            />
            <p className="text-xs text-muted-foreground">
              You can use markdown for formatting
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Preferences Card */}
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>
            Customize your experience with regional settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue={defaultValues.language}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                  <SelectItem value="zh">中文</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select defaultValue={defaultValues.timezone}>
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="America/New_York">
                    Eastern Time (ET)
                  </SelectItem>
                  <SelectItem value="America/Chicago">
                    Central Time (CT)
                  </SelectItem>
                  <SelectItem value="America/Denver">
                    Mountain Time (MT)
                  </SelectItem>
                  <SelectItem value="America/Los_Angeles">
                    Pacific Time (PT)
                  </SelectItem>
                  <SelectItem value="Europe/London">
                    Greenwich Mean Time (GMT)
                  </SelectItem>
                  <SelectItem value="Europe/Paris">
                    Central European Time (CET)
                  </SelectItem>
                  <SelectItem value="Asia/Tokyo">
                    Japan Standard Time (JST)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export { SettingsProfile3 };
```
