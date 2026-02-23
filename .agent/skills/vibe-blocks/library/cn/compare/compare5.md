# Compare 5

## Metadata
- **Category**: Compare
- **Objective**: Visual comparison between two service options with image backgrounds and overlay text.
- **Use Case**: Service comparison, product alternatives, build vs buy decision making, visual service presentation.
- **Visual Style**: Side-by-side image cards with gradient overlays and call-to-action buttons.
- **Interactivity**: Static display with call-to-action buttons for each service option.

## Description
A visually striking comparison component featuring two service options presented as image cards with gradient overlays. The component displays "Build for Me" vs "Do it Yourself" options with compelling imagery, descriptive text, and prominent call-to-action buttons. A central "OR" indicator creates clear visual separation between the two choices.

## Key Features
- **Visual Image Cards**: High-quality background images with gradient overlays for text readability
- **Gradient Overlays**: Professional gradient effects from black to transparent for text contrast
- **Central OR Indicator**: Prominent circular indicator creating clear visual separation
- **Responsive Image Sizing**: Aspect ratio optimization for different screen sizes
- **Call-to-Action Buttons**: Clear action buttons for each service option
- **Professional Typography**: Clean, readable text overlay on image backgrounds

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Compare5Props {
  className?: string;
}

const Compare5 = ({ className }: Compare5Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl">
            Old vs New
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:mt-6 sm:text-xl">
            Compare the difference between the orignal and the new way of doing
            things.
          </p>
        </div>
        <div className="relative mt-8 grid gap-6 sm:mt-10 md:mt-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Build for Me Card */}
          <div className="relative h-full">
            <div className="relative aspect-4/5 min-h-[400px] overflow-hidden rounded-2xl bg-accent sm:aspect-[0.9] sm:min-h-[480px] sm:rounded-3xl md:min-h-[520px]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9jsQcDsxyqA-unsplash.jpg"
                alt="Build for me"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t from-black via-black/50 to-transparent backdrop-blur-[2px] sm:h-[45%] md:h-[50%]" />
              <div className="absolute bottom-0 w-full space-y-4 p-4 sm:p-6 lg:p-8 xl:p-10">
                <h3 className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                  Option 1
                </h3>
                <p className="mt-2 text-sm text-white/80 sm:text-base">
                  Let our expert team handle everything for you. We'll manage
                  the entire development process from start to finish,
                  delivering a polished solution tailored to your exact
                  specifications.
                </p>
                <Button variant="outline">Get Started</Button>
              </div>
            </div>
          </div>

          {/* Do it Yourself Card */}
          <div className="relative h-full">
            <div className="relative aspect-4/5 min-h-[400px] overflow-hidden rounded-2xl sm:aspect-[0.9] sm:min-h-[480px] sm:rounded-3xl md:min-h-[520px]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-uR__S5GX8Io-unsplash.jpg"
                alt="Do it yourself"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t from-black via-black/50 to-transparent backdrop-blur-[2px] sm:h-[45%] md:h-[50%]" />
              <div className="absolute bottom-0 w-full space-y-4 p-4 sm:p-6 lg:p-8 xl:p-10">
                <h3 className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                  Option 2
                </h3>
                <p className="mt-2 text-sm text-white/80 sm:text-base">
                  Take control of your project with our comprehensive
                  self-service platform. Access powerful tools and resources to
                  build your solution at your own pace with expert guidance when
                  needed.
                </p>
                <Button variant="outline">Get Started</Button>
              </div>
            </div>
          </div>

          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background px-4 py-2 text-sm font-bold shadow-lg sm:px-6 sm:py-4 sm:text-base lg:px-8 lg:py-6">
            OR
          </span>
        </div>
      </div>
    </section>
  );
};

export { Compare5 };
```
+
+## Usage Notes
+- Background images should be replaced with relevant imagery for your specific use case
+- Gradient overlay percentages (40%, 45%, 50%) can be adjusted based on image content and text readability
+- The central OR indicator uses absolute positioning and responsive sizing
+- Text content can be customized for specific service offerings
+- Call-to-action buttons are functional but require implementation of actual service selection logic
+- Image aspect ratios are optimized for consistent card sizing across devices
