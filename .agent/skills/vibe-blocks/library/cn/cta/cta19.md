# CTA 19

## Metadata
- **Category**: CTA
- **Objective**: Testimonial-focused call to action with customer quotes and company logos.
- **Use Case**: Social proof section with customer testimonials and trust-building elements.
- **Visual Style**: Centered layout with testimonial cards and company logo grid.
- **Interactivity**: Testimonial card interactions and responsive layout design.

## Description
A testimonial-driven call to action component featuring customer quotes with star ratings, company logos for social proof, and compelling headline copy. Designed to build trust and credibility through customer success stories and recognizable brand associations.

## Features
- Customer testimonial cards with star ratings
- Company logo grid for brand recognition
- Professional testimonial styling with proper spacing
- Responsive card layout with hover effects
- Clean typography with proper hierarchy
- Social proof through customer quotes
- Professional card containers with borders
- Mobile-friendly responsive design
- Trust-building through recognizable brands

## Source Code
```tsx
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Cta19Props {
  className?: string;
}

const Cta19 = ({ className }: Cta19Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            Trusted by thousands of businesses
          </h2>
          <p className="mb-12 text-muted-foreground">
            See what our customers have to say about their experience with us.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center gap-1 mb-4">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="mb-4 text-muted-foreground">
                "Amazing service and support. The team went above and beyond to help us achieve our goals."
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">John Doe</p>
                  <p className="text-xs text-muted-foreground">CEO, TechCorp</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-1 mb-4">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="mb-4 text-muted-foreground">
                "The results exceeded our expectations. Highly recommend to anyone looking for quality solutions."
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">Sarah Miller</p>
                  <p className="text-xs text-muted-foreground">Founder, StartupXYZ</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-1 mb-4">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="mb-4 text-muted-foreground">
                "Professional, reliable, and innovative. They've become an essential part of our business."
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" />
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">Mike Brown</p>
                  <p className="text-xs text-muted-foreground">Director, GrowthCo</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-12">
            <Button size="lg">
+              Get Started Today
+            </Button>
+          </div>
+        </div>
+      </div>
+    </section>
+  );
+};
+
+export { Cta19 };
+```
