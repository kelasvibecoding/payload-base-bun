# CTA 18

## Metadata
- **Category**: CTA
- **Objective**: App download call to action with platform badges and feature highlights.
- **Use Case**: Mobile app promotion with download links and feature showcase.
- **Visual Style**: Two-column layout with app preview and platform download badges.
- **Interactivity**: Platform-specific download buttons with hover effects and responsive layout.

## Description
A mobile app-focused call to action component featuring app preview images, platform-specific download badges, compelling headline, and feature highlights. Designed to drive app downloads with clear platform targeting and feature benefits.

## Features
- App preview images with proper styling
- Platform-specific download badges (iOS/Android)
- Feature highlight list with icons
- Two-column responsive layout
- Professional download button styling
- App store badge integration
- Clean typography with proper hierarchy
- Mobile-friendly responsive design
- Platform targeting with appropriate badges

## Source Code
```tsx
import { ArrowRight, Download, Smartphone } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Cta18Props {
  className?: string;
}

const Cta18 = ({ className }: Cta18Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Download our app
            </h2>
            <p className="mb-8 text-muted-foreground">
              Get the best experience with our native mobile app. Available on iOS and Android.
            </p>
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3">
                <Smartphone className="size-5 text-primary" />
                <span>Native mobile experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Download className="size-5 text-primary" />
                <span>Offline functionality</span>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className="size-5 text-primary" />
                <span>Push notifications</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                <Download className="mr-2 size-4" />
                Download for iOS
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Download className="mr-2 size-4" />
                Download for Android
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="p-4">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="App preview"
                className="aspect-[9/16] w-48 rounded-lg object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta18 };
```
