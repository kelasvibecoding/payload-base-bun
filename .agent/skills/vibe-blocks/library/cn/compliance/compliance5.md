# Compliance 5

## Metadata
- **Category**: Compliance
- **Objective**: Enterprise compliance showcase with industry-leading certifications and standards.
- **Use Case**: Enterprise compliance demonstration, security assurance, regulatory adherence, trust building for large organizations.
- **Visual Style**: Clean, professional layout with certification logo grid and call-to-action button.
- **Interactivity**: Static display with "Learn more" button for additional compliance information.

## Description
A streamlined enterprise compliance component featuring a centered headline section with industry-leading compliance messaging, followed by a grid of major compliance certifications (AICPA SOC 2, ISO 27001, CCPA, GDPR). The component includes a call-to-action button for users to learn more about compliance capabilities, making it ideal for enterprise landing pages and security sections.

## Key Features
- **Enterprise Headlines**: Professional messaging focused on industry-leading compliance
- **Certification Grid**: Four major compliance standards in a responsive grid
- **Certification Logos**: High-quality SVG logos with dark mode support
- **Call-to-Action**: "Learn more" button with arrow icon for additional information
- **Responsive Grid**: Adapts from 2 columns on mobile to 4 columns on desktop
- **Dark Mode Support**: Includes dark mode variants for certification logos

## Source Code
```tsx
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Compliance5Props {
  className?: string;
}

const Compliance5 = ({ className }: Compliance5Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Industry-Leading Enterprise Compliance
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Meeting the highest compliance requirements for your business
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-3xl grid-cols-2 place-items-center gap-16 md:grid-cols-4">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/AICPA-SOC.svg"
              alt="AICPA SOC 2"
              className="max-h-32 dark:invert"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg"
              alt="ISO 27001"
              className="max-h-32 dark:invert"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg"
              alt="CCPA"
              className="max-h-32 dark:invert"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg"
              alt="GDPR"
              className="max-h-32 dark:invert"
            />
          </div>
          <div className="flex justify-center">
            <Button size="lg">
              Learn more <ArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compliance5 };
```
```

## Usage Notes
- Certification logos are displayed with max-h-32 for consistent sizing
- The grid uses place-items-center for proper logo alignment
- All certification images include dark:invert for dark mode compatibility
- The call-to-action button uses size="lg" for prominent display
- Container max-width is limited to max-w-3xl for optimal logo presentation
- Gap spacing uses responsive values (gap-16) for proper visual separation