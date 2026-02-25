# Settings Profile 2

## Metadata
- **Category**: Settings Profile
- **Objective**: Provide a comprehensive professional profile configuration with social media integration.
- **Use Case**: Professional networking platforms, SaaS user profiles, and developer portfolios.
- **Visual Style**: Wide-format card layout with distinct sections separated by visible dividers. Integrates iconic representations for various social platforms.
- **Interactivity**: Avatar upload with a floating action button (FAB), username prefix formatting, and multiple logical groups (Personal, Work, Social) for organized data entry.

## Description
Settings Profile 2 offers an expanded set of fields for users to build a complete online identity. Beyond basic bio and name, it includes work-related fields (Job Title, Company, Location) and a dedicated social links section with branded input fields for Twitter/X, LinkedIn, and GitHub. This layout is designed for professional context where social presence is key.

## Source Code

```tsx
"use client";

import { useState } from "react";
import { Camera, Globe, Linkedin, Github, Twitter } from "lucide-react";

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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ProfileFormData {
  name: string;
  email: string;
  username: string;
  avatar?: string;
  bio?: string;
  jobTitle?: string;
  company?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface SettingsProfile2Props {
  defaultValues?: Partial<ProfileFormData>;
  onSave?: (data: ProfileFormData) => void;
  className?: string;
}

const SettingsProfile2 = ({
  defaultValues = {
    name: "Jordan Chen",
    email: "jordan.chen@email.com",
    username: "jordanchen",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar3.jpg",
    bio: "Full-stack developer passionate about building products that make a difference. Open source contributor and occasional tech blogger.",
    jobTitle: "Senior Software Engineer",
    company: "Acme Inc",
    location: "Seattle, WA",
    website: "https://jordanchen.dev",
    socialLinks: {
      twitter: "jordanchen",
      linkedin: "jordanchen",
      github: "jordanchen",
    },
  },
  className,
}: SettingsProfile2Props) => {
  const [avatarFiles, setAvatarFiles] = useState<File[]>([]);

  const initials = defaultValues.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const avatarPreview =
    avatarFiles.length > 0
      ? URL.createObjectURL(avatarFiles[0])
      : defaultValues.avatar;

  return (
    <Card className={cn("w-full max-w-2xl", className)}>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>
          Manage your public profile information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Avatar Section */}
        <FileUpload
          value={avatarFiles}
          onValueChange={setAvatarFiles}
          accept="image/*"
          maxFiles={1}
          maxSize={2 * 1024 * 1024}
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="relative">
              <Avatar className="size-24">
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
                  <Camera className="size-4" />
                </Button>
              </FileUploadTrigger>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-sm font-medium">Profile Photo</p>
              <p className="text-xs text-muted-foreground">
                Click the camera icon to upload a new photo.
                <br />
                Recommended: Square image, at least 400x400px.
              </p>
            </div>
          </div>
        </FileUpload>

        <Separator />

        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Personal Information</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={defaultValues.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="flex">
                <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
                  @
                </span>
                <Input
                  id="username"
                  className="rounded-l-none"
                  defaultValue={defaultValues.username}
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              rows={3}
              defaultValue={defaultValues.bio}
              placeholder="Write a short bio about yourself"
            />
          </div>
        </div>

        <Separator />

        {/* Work Information */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Work</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input id="jobTitle" defaultValue={defaultValues.jobTitle} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" defaultValue={defaultValues.company} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              defaultValue={defaultValues.location}
              placeholder="City, Country"
            />
          </div>
        </div>

        <Separator />

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Social Links</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Globe className="size-5 shrink-0 text-muted-foreground" />
              <Input
                placeholder="https://yourwebsite.com"
                defaultValue={defaultValues.website}
              />
            </div>
            <div className="flex items-center gap-3">
              <Twitter className="size-5 shrink-0 text-muted-foreground" />
              <div className="flex flex-1">
                <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
                  x.com/
                </span>
                <Input
                  className="rounded-l-none"
                  placeholder="username"
                  defaultValue={defaultValues.socialLinks?.twitter}
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="size-5 shrink-0 text-muted-foreground" />
              <div className="flex flex-1">
                <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
                  linkedin.com/in/
                </span>
                <Input
                  className="rounded-l-none"
                  placeholder="username"
                  defaultValue={defaultValues.socialLinks?.linkedin}
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Github className="size-5 shrink-0 text-muted-foreground" />
              <div className="flex flex-1">
                <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
                  github.com/
                </span>
                <Input
                  className="rounded-l-none"
                  placeholder="username"
                  defaultValue={defaultValues.socialLinks?.github}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { SettingsProfile2 };
```
