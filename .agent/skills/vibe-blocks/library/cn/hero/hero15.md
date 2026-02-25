# Hero 15

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a centered, conversion-focused introduction that builds immediate authority through mobile/app store ratings.
- **Use Case**: Best for mobile applications, consumer SaaS, or cross-platform tools where presence on major app stores is a key validator.
- **Visual Style**: Trust-validation aesthetic. Features a centralized layout with a sophisticated dual-part `Badge` ("What's new" | "Read more"). Displays a large headline and a primary CTA. At the bottom, a dedicated row of rating badges for Apple, Google Play, and Trustpilot provides industrial-scale social proof.
- **Interactivity**: Static layout. CTAs include shadow hover states for increased click-through focus.

## Source Code

### `hero15.tsx`
```tsx
import { ArrowUpRight } from "lucide-react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero15Props {
  className?: string;
}

const Hero15 = ({ className }: Hero15Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container text-center flex flex-col items-center">

        <Badge variant="outline" asChild className="mb-4">
          <a
            href="#"
            className="py-1 inline-flex items-center gap-1"
          >
            <span className="font-semibold px-2 border-r">What&apos;s new</span>
            <span className="px-2">Read more</span>
            <ArrowUpRight className="ml-1 size-3" />
          </a>
        </Badge>  

        <h1 className="mx-auto my-4 mb-6 max-w-3xl text-center text-3xl font-bold lg:text-5xl font-sans">
          Efficient tools that simplify your workflow.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor
          assumenda voluptatem nemo magni a maiores aspernatur.
        </p>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="w-full shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 sm:w-auto"
          >
            Get started for free
          </Button>
        </div>
        <div className="mt-8 lg:mt-12">
          <ul className="flex flex-wrap justify-center gap-6 text-sm lg:text-base font-medium opacity-80">
            <li className="flex items-center gap-2 whitespace-nowrap hover:opacity-100 transition-opacity">
              <BiLogoPlayStore className="size-5 text-green-500" />
              4.7 rating on Play Store
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap hover:opacity-100 transition-opacity">
              <FaApple className="size-5" />
              4.8 rating on App Store
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap hover:opacity-100 transition-opacity">
              <SiTrustpilot className="size-5 text-emerald-500" />
              4.9 rating on Trustpilot
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Hero15 };
```
