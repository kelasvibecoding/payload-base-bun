# Settings Profile 5

## Metadata
- **Category**: Settings Profile
- **Objective**: Provide an interactive editing experience with a real-time "public view" preview.
- **Use Case**: Social media profile editors, personal branding tools, and biography-heavy user settings.
- **Visual Style**: Dynamic split-screen layout with an editable form on the left and a sticky, floating preview card on the right that simulates the final rendered profile.
- **Interactivity**: Instant synchronization between form inputs and the preview card, live avatar preview, and stylized social link icons that appear conditionally in the preview.

## Description
Settings Profile 5 is designed for users who prioritize how their profile appears to the community. By providing a live, sticky preview of the public-facing card, users can immediately see the impact of their bio length, role description, and social links. The interface is clean and professional, focusing on the visual relationship between data entry and final output.

## Source Code

```tsx
"use client";

import { useState } from "react";
import { Camera, Github, Globe, Linkedin, MapPin, Twitter } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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

interface ProfileData {
  name: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  role?: string;
  location?: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
}

interface SettingsProfile5Props {
  defaultValues?: Partial<ProfileData>;
  className?: string;
}

const SettingsProfile5 = ({
  defaultValues = {
    name: "Jordan Chen",
    username: "jordanchen",
    email: "jordan.chen@email.com",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar3.jpg",
    bio: "Full-stack developer building tools for the modern web. Open source enthusiast and occasional writer about software architecture.",
    role: "Senior Software Engineer",
    location: "Seattle, WA",
    website: "https://jordanchen.dev",
    twitter: "jordanchen",
    linkedin: "jordanchen",
    github: "jordanchen",
  },
  className,
}: SettingsProfile5Props) => {
  const [formData, setFormData] = useState(defaultValues);
  const [avatarFiles, setAvatarFiles] = useState<File[]>([]);

  const updateField = (field: keyof ProfileData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const avatarPreview =
    avatarFiles.length > 0
      ? URL.createObjectURL(avatarFiles[0])
      : formData.avatar;

  const initials = formData.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Edit Profile</h1>
          <p className="text-muted-foreground">
            Update your profile information. Changes will be reflected in the
            preview.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Edit Form - Takes more space */}
          <div className="space-y-6 lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Your public profile information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FileUpload
                  value={avatarFiles}
                  onValueChange={setAvatarFiles}
                  accept="image/*"
                  maxFiles={1}
                  maxSize={2 * 1024 * 1024}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
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
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Profile Photo</p>
                      <p className="text-xs text-muted-foreground">
                        JPG, PNG or GIF. Max 2MB.
                      </p>
                    </div>
                  </div>
                </FileUpload>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={formData.username}
                      onChange={(e) => updateField("username", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role / Title</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => updateField("role", e.target.value)}
                    placeholder="What do you do?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={3}
                    value={formData.bio}
                    onChange={(e) => updateField("bio", e.target.value)}
                    placeholder="Tell others about yourself"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    placeholder="City, Country"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Links</CardTitle>
                <CardDescription>Your website and social links</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => updateField("website", e.target.value)}
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      value={formData.twitter}
                      onChange={(e) => updateField("twitter", e.target.value)}
                      placeholder="username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={(e) => updateField("linkedin", e.target.value)}
                      placeholder="username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <Input
                      id="github"
                      value={formData.github}
                      onChange={(e) => updateField("github", e.target.value)}
                      placeholder="username"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancel</Button>
              <Button>Save changes</Button>
            </div>
          </div>

          {/* Live Preview */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div className="rounded-xl bg-muted/50 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium">Live Preview</p>
                  <Badge variant="secondary" className="text-xs">
                    Public view
                  </Badge>
                </div>

                <Card className="!shadow-none">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="size-20 ring-2 ring-background">
                        <AvatarImage
                          src={avatarPreview}
                          alt={formData.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-xl">
                          {initials}
                        </AvatarFallback>
                      </Avatar>

                      <h3 className="mt-4 text-lg font-semibold">
                        {formData.name || "Your Name"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        @{formData.username || "username"}
                      </p>

                      {formData.role && (
                        <p className="mt-1 text-sm">{formData.role}</p>
                      )}

                      {formData.location && (
                        <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="size-3.5" />
                          <span>{formData.location}</span>
                        </div>
                      )}

                      {formData.bio && (
                        <>
                          <Separator className="my-4" />
                          <p className="text-sm text-muted-foreground">
                            {formData.bio}
                          </p>
                        </>
                      )}

                      {(formData.website ||
                        formData.twitter ||
                        formData.linkedin ||
                        formData.github) && (
                        <>
                          <Separator className="my-4" />
                          <div className="flex gap-3">
                            {formData.website && (
                              <a
                                href={formData.website}
                                className="text-muted-foreground hover:text-foreground"
                              >
                                <Globe className="size-5" />
                              </a>
                            )}
                            {formData.twitter && (
                              <a
                                href={`https://x.com/${formData.twitter}`}
                                className="text-muted-foreground hover:text-foreground"
                              >
                                <Twitter className="size-5" />
                              </a>
                            )}
                            {formData.linkedin && (
                              <a
                                href={`https://linkedin.com/in/${formData.linkedin}`}
                                className="text-muted-foreground hover:text-foreground"
                              >
                                <Linkedin className="size-5" />
                              </a>
                            )}
                            {formData.github && (
                              <a
                                href={`https://github.com/${formData.github}`}
                                className="text-muted-foreground hover:text-foreground"
                              >
                                <Github className="size-5" />
                              </a>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <p className="mt-3 text-center text-xs text-muted-foreground">
                  This is how your profile appears to others
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SettingsProfile5 };
```
