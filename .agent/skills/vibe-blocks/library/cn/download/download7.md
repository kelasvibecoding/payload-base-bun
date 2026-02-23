# Download Component 7

## Metadata
- **Category**: Download Buttons/Cards
- **Objective**: Mobile app download section with iPhone previews
- **Use Case**: Mobile app landing page with App Store and Google Play download buttons
- **Visual Style**: Clean layout with centered header, store badges, and stacked iPhone previews
- **Interactivity**: Clickable download links for App Store and Google Play

## Description
A polished mobile app download section designed for mobile app landing pages. It features a centered header with a "Get Started" badge, prominent App Store and Google Play download buttons, and side-by-side iPhone previews to showcase your app's interface. The layout responsively adapts to different screen sizes for a consistent experience across devices.

## Features
- Responsive layout that adapts seamlessly between mobile and desktop
- Centered header with customizable outline badge
- Official App Store and Google Play download badges
- Stacked iPhone previews to showcase multiple app screens
- Type-safe TypeScript interfaces
- Clean, accessible styling following the shadcn/ui design system
- Easy to customize header text and badge content

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { Iphone } from "@/components/magicui/iphone";
import { Badge } from "@/components/ui/badge";

interface Download7Props {
  className?: string;
}

const Download7 = ({ className }: Download7Props) => {
  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container border-b border-border">
        <div className="flex flex-col items-center gap-10">
          <Badge variant="outline">Get Started</Badge>
          <h1 className="text-center text-5xl font-bold text-balance md:text-6xl">
            Download our app and transform your workflow today
          </h1>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a href="#">
            <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/appstore.svg" alt="app store" />
          </a>
          <a href="#">
            <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/googleplay.svg" alt="google play" />
          </a>
        </div>
        <div className="mt-28 flex items-end justify-center gap-4">
          <div className="order-2 h-[600px] w-full max-w-sm overflow-hidden md:h-[350px] lg:h-[450px] xl:h-[600px]">
            <div className="relative">
              <Iphone
                className="dark"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-phone-1.svg"
              />
            </div>
          </div>
          <div className="order-1 hidden h-[250px] w-full max-w-sm overflow-hidden md:block lg:h-[350px] xl:h-[450px]">
            <div className="relative">
              <Iphone
                className="dark size-full"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-phone-2.svg"
              />
            </div>
          </div>
          <div className="order-3 hidden h-[250px] w-full max-w-sm overflow-hidden md:block lg:h-[350px] xl:h-[450px]">
            <div className="relative">
              <Iphone
                className="dark size-full"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-phone-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Download7 };
```
