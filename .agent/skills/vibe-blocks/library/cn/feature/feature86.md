# Feature 86

## Metadata
- **Category**: Feature
- **Objective**: Professional narrative section with a side-intro and a large centered visual.
- **Use Case**: Core value proposition explainers, "How we work" sections, or product transition areas.
- **Visual Style**: "Pro-Narrative Spotlight" aesthetic. `lg:grid-cols-3` split. Left (`col-span-1`): bold `text-5xl` heading with a gray-text suffix ("Better Team. less meetings."), badge, and primary description. Includes a distinctive footer with a `Separator` and "Watch demo" play link. Right (`col-span-2`): `aspect-square` container (`bg-muted`) anchoring a centered `aspect-video` image. Includes a decorative `shadow-overlay.png` background.
- **Interactivity**: Play icon link features hover underline.

## Source Code

### `feature86.tsx`
```tsx
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Feature86Props {
  className?: string;
}

const Feature86 = ({ className }: Feature86Props) => {
  return (
    <section className={cn("relative py-32", className)}>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[50%_0] bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/shadow-overlay.png')] bg-no-repeat"></div>
      <div className="container p-6 md:p-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <Badge variant="outline">For Professionals</Badge>
              <h2 className="my-9 text-3xl font-medium md:text-5xl">
                Better Team.
                <br />
                <span className="text-muted-foreground">less meetings.</span>
              </h2>
              <p className="text-muted-foreground">
                Shared platforms empower teams and partners to track progress,
                provide feedback, and approve tasks, reducing meetings and
                updates, allowing you to focus on the bigger picture.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Separator />
              <p className="text-muted-foreground">
                Discover how we operate a remote-first, efficient service team
                with Flow.
              </p>
              <a href="#" className="flex items-center gap-1 hover:underline">
                <Play className="h-auto w-4" />
                Watch demo
              </a>
            </div>
          </div>
          <div className="flex aspect-square w-full items-center justify-center bg-muted px-6 md:px-8 lg:col-span-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-aspect-video-1.svg"
              alt="placeholder"
              className="aspect-video max-h-[464px] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature86 };
```
