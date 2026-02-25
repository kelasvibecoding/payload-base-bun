# Settings Profile 6

## Metadata
- **Category**: Settings Profile
- **Objective**: Guide users through a multi-step profile completion wizard.
- **Use Case**: Onboarding flows, profile completion gamification, and structured data collection for new accounts.
- **Visual Style**: Centered, focused single-column interface with a prominent progress stepper that uses numbers and checkmarks for stage status.
- **Interactivity**: Linear multi-step navigation (Basic Info -> Contact -> Social -> Review), "Skip to review" logic for advanced users, animated transitions between steps, and a conclusive summary page for final confirmation.

## Description
Settings Profile 6 is an onboarding-focused component that breaks down the profile creation process into digestible stages. It features a responsive stepper that provides clear visual feedback on progress. This pattern is particularly effective for increasing completion rates by reducing the perceived complexity of the task through step-by-step guidance.

## Source Code

```tsx
"use client";

import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Upload } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileUpload,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ProfileData {
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
}

interface SettingsProfile6Props {
  defaultValues?: Partial<ProfileData>;
  className?: string;
}

const steps = [
  { id: 1, title: "Basic Info", description: "Name and photo" },
  { id: 2, title: "Contact", description: "How to reach you" },
  { id: 3, title: "Social", description: "Your online presence" },
  { id: 4, title: "Review", description: "Confirm your details" },
];

const SettingsProfile6 = ({
  defaultValues = {
    name: "",
    username: "",
    avatar: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    twitter: "",
    linkedin: "",
  },
  className,
}: SettingsProfile6Props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [avatarFiles, setAvatarFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState<ProfileData>({
    name: defaultValues.name || "",
    username: defaultValues.username || "",
    avatar: defaultValues.avatar || "",
    bio: defaultValues.bio || "",
    email: defaultValues.email || "",
    phone: defaultValues.phone || "",
    location: defaultValues.location || "",
    website: defaultValues.website || "",
    twitter: defaultValues.twitter || "",
    linkedin: defaultValues.linkedin || "",
  });

  const updateField = (field: keyof ProfileData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

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
      <div className="container max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold">Complete Your Profile</h1>
          <p className="text-muted-foreground">
            Help others get to know you better
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors",
                      currentStep > step.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : currentStep === step.id
                          ? "border-primary text-primary"
                          : "border-muted text-muted-foreground"
                    )}
                  >
                    {currentStep > step.id ? (
                      <Check className="size-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        currentStep >= step.id
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {step.title}
                    </p>
                    <p className="hidden text-xs text-muted-foreground sm:block">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "mx-2 h-0.5 w-12 sm:w-20",
                      currentStep > step.id ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card>
          <CardContent className="p-6">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <FileUpload
                  value={avatarFiles}
                  onValueChange={setAvatarFiles}
                  accept="image/*"
                  maxFiles={1}
                  maxSize={2 * 1024 * 1024}
                >
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="size-24">
                      <AvatarImage
                        src={avatarPreview}
                        alt={formData.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-2xl">
                        {initials || "?"}
                      </AvatarFallback>
                    </Avatar>
                    <FileUploadTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 size-4" />
                        Upload photo
                      </Button>
                    </FileUploadTrigger>
                  </div>
                </FileUpload>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">Username *</Label>
                    <div className="flex">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
                        @
                      </span>
                      <Input
                        id="username"
                        className="rounded-l-none"
                        value={formData.username}
                        onChange={(e) => updateField("username", e.target.value)}
                        placeholder="Choose a username"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      rows={3}
                      value={formData.bio}
                      onChange={(e) => updateField("bio", e.target.value)}
                      placeholder="Tell us a bit about yourself"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Contact */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
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
              </div>
            )}

            {/* Step 3: Social */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Personal website</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => updateField("website", e.target.value)}
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter / X</Label>
                  <div className="flex">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
                      x.com/
                    </span>
                    <Input
                      id="twitter"
                      className="rounded-l-none"
                      value={formData.twitter}
                      onChange={(e) => updateField("twitter", e.target.value)}
                      placeholder="username"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <div className="flex">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
                      linkedin.com/in/
                    </span>
                    <Input
                      id="linkedin"
                      className="rounded-l-none"
                      value={formData.linkedin}
                      onChange={(e) => updateField("linkedin", e.target.value)}
                      placeholder="username"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="size-16">
                    <AvatarImage
                      src={avatarPreview}
                      alt={formData.name}
                      className="object-cover"
                    />
                    <AvatarFallback>{initials || "?"}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">
                      {formData.name || "No name set"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      @{formData.username || "username"}
                    </p>
                  </div>
                </div>

                {formData.bio && (
                  <p className="text-sm text-muted-foreground">{formData.bio}</p>
                )}

                <div className="grid gap-4 rounded-lg border p-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Email
                    </p>
                    <p className="text-sm">{formData.email || "Not set"}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Phone
                    </p>
                    <p className="text-sm">{formData.phone || "Not set"}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Location
                    </p>
                    <p className="text-sm">{formData.location || "Not set"}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Website
                    </p>
                    <p className="text-sm">{formData.website || "Not set"}</p>
                  </div>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    Please review your information above. Click &quot;Complete
                    Setup&quot; to save your profile, or go back to make
                    changes.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="mr-2 size-4" />
            Back
          </Button>

          {currentStep < 4 ? (
            <Button onClick={nextStep}>
              Continue
              <ChevronRight className="ml-2 size-4" />
            </Button>
          ) : (
            <Button>
              <Check className="mr-2 size-4" />
              Complete Setup
            </Button>
          )}
        </div>

        {/* Skip option */}
        {currentStep < 4 && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            <button
              onClick={() => setCurrentStep(4)}
              className="underline hover:text-foreground"
            >
              Skip to review
            </button>
          </p>
        )}
      </div>
    </section>
  );
};

export { SettingsProfile6 };
```
