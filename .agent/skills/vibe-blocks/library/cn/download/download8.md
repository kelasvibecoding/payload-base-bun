# Download Component 8

## Metadata
- **Category**: Download Buttons/Cards
- **Objective**: Auto-detect multi-platform download section with categorized download links
- **Use Case**: Comprehensive download page with platform-specific download options organized by operating system
- **Visual Style**: Clean grid layout with categorized download links, glare card header, and auto-detect primary button
- **Interactivity**: Clickable platform-specific download buttons, auto-detect download trigger

## Description
A comprehensive multi-platform download component that includes a prominent auto-detect download button for simplified user onboarding, plus categorized download links for every major operating system (iOS, Android, Windows, macOS, Linux). It features a stylish glare card header with your project logo, and a responsive grid layout that organizes download options clearly for users to find exactly what they need.

## Features
- Auto-detect download button for a simplified one-click download experience
- Categorized download links grouped by operating system and file variant
- Glare card header with logo display for brand visibility
- Platform-specific icons for each download option to improve scannability
- Responsive grid layout that adapts seamlessly between mobile and desktop
- Customizable download data, last updated text, and header logo
- Type-safe TypeScript interfaces for full type support
- Clean, accessible styling matching the shadcn/ui design system

## Source Code
```tsx
"use client";

import { Download } from "lucide-react";
import { FaApple, FaGooglePlay, FaLinux, FaWindows } from "react-icons/fa";
import { SiDebian } from "react-icons/si";

import { cn } from "@/lib/utils";

import { GlareCard } from "@/components/aceternity/glare-card";
import { Button } from "@/components/ui/button";

const downloadData = {
  ios: [{ icon: FaApple, label: "App Store" }],
  android: [
    { icon: FaGooglePlay, label: "Google Play" },
    { icon: Download, label: "APK (Direct)" },
  ],
  windows: [
    { icon: FaWindows, label: "Installer (.exe)" },
    { icon: Download, label: "Portable (.zip)" },
  ],
  mac: [
    { icon: FaApple, label: "DMG" },
    { icon: Download, label: "Universal (.zip)" },
  ],
  linux: [
    { icon: FaLinux, label: "AppImage" },
    { icon: SiDebian, label: "Debian (.deb)" },
    { icon: Download, label: "Tarball (.tar.gz)" },
  ],
};

interface Download8Props {
  className?: string;
}

const Download8 = ({ className }: Download8Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-11">
          <div className="[&>div]:aspect-square [&>div]:size-56 sm:[&>div]:size-64 [&>div>div]:border-border">
            <GlareCard className="flex flex-col items-center justify-center bg-primary dark:bg-background">
              <div className="absolute inset-0 flex h-full w-full items-center justify-center p-8">
                <img
                  className="object-cover opacity-85 invert"
                  alt=""
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                />
              </div>
            </GlareCard>
          </div>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Shadcnblocks.com
          </h1>
        </div>
        <div className="mt-11 flex flex-col items-center justify-center gap-4">
          <Button size="lg">
            Download (Auto Detect)
            <Download />
          </Button>
          <p className="text-sm text-muted-foreground">
            Last updated September 23, 2025
          </p>
        </div>
        <div className="mt-8">
          <div className="mx-auto max-w-2xl">
            <div className="divide-y divide-border rounded-lg border border-border">
              {Object.entries(downloadData).map(([platform, variants], idx) => (
                <div key={idx} className="grid grid-cols-2 gap-4 px-4 py-3">
                  <span className="text-sm font-medium capitalize">
                    {platform}
                  </span>
                  <div className="flex flex-col gap-2">
                    {variants.map((variant, idx) => {
                      const IconComponent = variant.icon;
                      return (
                        <Button
                          key={idx}
                          size="sm"
                          variant="outline"
                          className="flex cursor-pointer items-center"
                        >
                          <IconComponent className="size-4" />
                          {variant.label}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Download8 };
```
