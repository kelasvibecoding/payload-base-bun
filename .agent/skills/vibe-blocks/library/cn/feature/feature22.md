# Feature 22

## Metadata
- **Category**: Feature
- **Objective**: Three-column card grid with dashed-separator checklist items and overlaid badge labels.
- **Use Case**: UI component library showcases, block marketplace sections, or developer-product feature comparisons.
- **Visual Style**: "Checklist Card Grid" aesthetic. Top section: full-width 3-column grid heading + two checklist columns. Below: 3 equal bordered cards. Each card: image with absolute overlaid `Badge` ("Example"), title + description, dashed `border-t` separator rows, 3 checklist items, and a "Read more" link footer.
- **Interactivity**: Static layout. Hover effects on "Read more" links only.

## Source Code

### `feature22.tsx`
```tsx
import { Check, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

interface Feature22Props {
  className?: string;
}

const Feature22 = ({ className }: Feature22Props) => {
  return (
    <section className={cn("py-16 sm:py-24 md:py-32", className)}>
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16">
          <h2 className="mb-4 text-3xl font-medium sm:col-span-2 sm:text-4xl md:mb-0 lg:col-span-1">
            Build any kind of Website with our Blocks
          </h2>
          <ul className="flex flex-col gap-3 text-muted-foreground sm:gap-4">
            <li className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> Responsive Design and Layout
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> Clean and Modern Design
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> Easy to Customize
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> Cross Browser Compatible
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> SEO Friendly
            </li>
          </ul>
          <ul className="flex flex-col gap-4 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> High Performance and Speed
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> Clean Code and Well Documented
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> Fast Loading and Free Updates
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> 24/7 Support
            </li>
            <li className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> Lifetime Access and Updates
            </li>
          </ul>
        </div>
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:mt-20 md:gap-8 lg:grid-cols-3">
          {[
            {
              img: "placeholder-1.svg",
              title: "Copy and paste Blocks",
              desc: "Easly copy and paste any block you like and use it in your project.",
              items: [
                "Responsive design and layout with clean and modern design",
                "Easy to customize with cross browser compatibility",
                "SEO friendly with high performance and speed for improved laod times",
              ],
            },
            {
              img: "placeholder-2.svg",
              title: "Easy to Customize Blocks",
              desc: "Easly customize any block you like and use it in your project.",
              items: [
                "The blocks are clean and modern with easy to customize features",
                "All blocks are SEO friendly with cross browser compatibility",
                "Each block is responsive with high performance and speed",
              ],
            },
            {
              img: "placeholder-3.svg",
              title: "Readymade Blocks for you to use",
              desc: "Easly use any block you like and use it in your project.",
              items: [
                "Prebuilt blocks built with shadcn/ui & TailwindCSS",
                "Synced with your project theme and design with easy to customize features",
                "Various blocks to choose from with high performance and speed",
              ],
            },
          ].map((card, i) => (
            <div key={i} className="rounded-lg border">
              <div className="relative p-1">
                <img
                  src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/${card.img}`}
                  alt="placeholder"
                  className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
                />
                <Badge variant="outline" className="absolute top-5 left-5 bg-primary-foreground">
                  Example
                </Badge>
              </div>
              <div>
                <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                  <h3 className="font-medium">{card.title}</h3>
                  <p className="text-muted-foreground">{card.desc}</p>
                </div>
                <div className="h-px border-t border-dashed"></div>
                <ul className="text-muted-foreground">
                  {card.items.map((item, j) => (
                    <>
                      <li key={j} className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                        <Check className="mt-1 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                      {j < card.items.length - 1 && <div className="h-px border-t border-dashed"></div>}
                    </>
                  ))}
                </ul>
                <div className="h-px border-t border-dashed"></div>
                <a href="#" className="my-3 flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6">
                  Read more
                  <ChevronRight className="mt-0.5 size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature22 };
```
