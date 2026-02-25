# Feature 14

## Metadata
- **Category**: Feature
- **Objective**: Numbered step-by-step feature stack with image + checklist pairs, presented inside a bordered container.
- **Use Case**: Fintech product pages, payment platform features, SaaS onboarding step breakdowns.
- **Visual Style**: "Numbered Step Cards" aesthetic. Outer `border py-10` container holds 2 bordered grid cards. Each card: left column (heading, description, checklist) + right image column with a monospace step badge (`01`, `02`) overlaid on the image. Image appears first on mobile (`order-first`), right on desktop (`md:order-last`).
- **Interactivity**: Static layout. No animations; simple hover states on links.

## Source Code

### `feature14.tsx`
```tsx
import { CheckCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface Feature14Props {
  className?: string;
}

const Feature14 = ({ className }: Feature14Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="space-y-10 rounded-lg border py-10 md:px-4">
          <div className="grid rounded-lg border md:grid-cols-2">
            <div className="flex flex-col px-6 py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-20">
              <h3 className="mb-3 text-2xl font-medium sm:mb-5 md:text-3xl lg:text-4xl">
                Secure Payments
              </h3>
              <div className="mb-8 text-sm text-muted-foreground sm:mb-10 md:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur modi et recusandae ducimus eligendi eveniet soluta
                reprehenderit nostrum expedita omnis.
              </div>
              <ul className="mt-auto space-y-2 sm:space-y-3">
                <li className="flex gap-x-3">
                  <CheckCircle className="mt-0.5 size-4 shrink-0 sm:mt-1" />
                  <p className="text-sm md:text-base">
                    Secure payment gateway integration with Stripe
                  </p>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="mt-0.5 size-4 shrink-0 sm:mt-1" />
                  <p className="text-sm md:text-base">
                    SSL encryption for secure transactions
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative order-first max-h-80 md:order-last md:max-h-[500px]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder"
                className="h-full w-full object-cover"
              />
              <span className="absolute top-5 left-5 flex size-6 items-center justify-center rounded-sm bg-primary font-mono text-xs text-primary-foreground md:top-10 md:left-10">
                01
              </span>
            </div>
          </div>
          <div className="grid rounded-lg border md:grid-cols-2">
            <div className="flex flex-col px-6 py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-20">
              <h3 className="mb-3 text-2xl font-medium sm:mb-5 md:text-3xl lg:text-4xl">
                Automated Invoicing
              </h3>
              <div className="mb-8 text-sm text-muted-foreground sm:mb-10 md:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur modi et recusandae ducimus eligendi eveniet soluta
                reprehenderit nostrum expedita omnis.
              </div>
              <ul className="mt-auto space-y-2 sm:space-y-3">
                <li className="flex gap-x-3">
                  <CheckCircle className="mt-0.5 size-4 shrink-0 sm:mt-1" />
                  <p className="text-sm md:text-base">
                    Automated invoicing for easy billing
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative order-first max-h-80 md:order-last md:max-h-[500px]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="placeholder"
                className="h-full w-full object-cover"
              />
              <span className="absolute top-5 left-5 flex size-6 items-center justify-center rounded-sm bg-primary font-mono text-xs text-primary-foreground md:top-10 md:left-10">
                02
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature14 };
```
