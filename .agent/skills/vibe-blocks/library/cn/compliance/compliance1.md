# Compliance 1

## Metadata
- **Category**: Compliance
- **Objective**: Comprehensive compliance and security readiness showcase with regulatory certifications.
- **Use Case**: Compliance demonstration, security assurance, regulatory adherence, enterprise trust building.
- **Visual Style**: Professional two-column layout with compliance badges, feature cards, and certification logos.
- **Interactivity**: Static display with visual certification badges and feature descriptions.

## Description
A professional compliance and security component featuring a two-column layout that showcases regulatory compliance capabilities. The component includes compliance badges (GDPR, CCPA), detailed feature descriptions for automated audit trails, compliance monitoring, and regulatory reporting, along with certification logos (ISO-27001, ISO-27017, ISO-27018) displayed with proper visual hierarchy.

## Key Features
- **Compliance Badges**: Visual indicators for GDPR and CCPA compliance
- **Feature Showcase**: Three detailed compliance features with descriptions
- **Certification Logos**: ISO standards badges with grayscale styling
- **Professional Layout**: Two-column responsive grid system
- **Visual Hierarchy**: Proper spacing and typography for enterprise appeal
- **Dark Mode Support**: Includes dark mode variants for certification logos

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

interface Compliance1Props {
  className?: string;
}

const Compliance1 = ({ className }: Compliance1Props) => {
  return (
    <section className={cn("bg-muted/50 py-32", className)}>
      <div className="container">
        <div className="grid gap-9 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Badge variant="outline" className="gap-1.5 bg-background">
              <span className="size-1.5 rounded-full bg-green-500" />
              Compliance
            </Badge>
            <h1 className="text-4xl font-medium text-balance lg:text-5xl">
              Complete Compliance & Security Readiness
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay compliant with privacy and healthcare regulations. Our
              platform meets GDPR and HIPAA requirements, providing data
              protection and compliance monitoring for regulated industries.
            </p>
            <div className="flex items-center gap-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg"
                alt="GDPR"
                className="h-22 opacity-50 grayscale md:h-28 dark:invert"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg"
                alt="ISO-27001"
                className="h-22 opacity-60 grayscale md:h-28 dark:invert"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background">
            <div className="relative overflow-hidden border-b border-border p-6 lg:px-8 lg:py-11">
              <div>
                <h2 className="text-xl font-medium lg:text-2xl">
                  Automated audit trails
                </h2>
                <p className="mt-2 w-3/4 pr-10 text-sm text-muted-foreground md:text-base">
                  Every action is logged and timestamped with immutable audit
                  trails for complete regulatory compliance.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg"
                alt="ISO-27001"
                className="absolute right-4 -bottom-7 size-24 text-muted-foreground opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
              />
            </div>
            <div className="relative overflow-hidden p-6 lg:px-8 lg:py-11">
              <div>
                <h2 className="text-xl font-medium lg:text-2xl">
                  Compliance monitoring
                </h2>
                <p className="mt-2 w-3/4 pr-10 text-sm text-muted-foreground md:text-base">
                  Real-time monitoring ensures continuous compliance with
                  industry standards and regulations.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27017.svg"
                alt="ISO-27001"
                className="absolute right-4 -bottom-7 size-24 text-muted-foreground opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
              />
            </div>
            <div className="relative overflow-hidden border-t border-border p-6 lg:px-8 lg:py-11">
              <div>
                <h2 className="text-xl font-medium lg:text-2xl">
                  Regulatory reporting
                </h2>
                <p className="mt-2 w-3/4 pr-10 text-sm text-muted-foreground md:text-base">
                  Generate compliance reports automatically to meet regulatory
                  requirements and audit demands.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27018.svg"
                alt="ISO-27001"
                className="absolute right-4 -bottom-7 size-24 text-muted-foreground opacity-80 grayscale lg:right-8 lg:size-32 dark:invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compliance1 };
```

## Usage Notes
- Certification logos are displayed with grayscale and opacity for subtle visual appeal
- The component uses a responsive grid that stacks on mobile and shows side-by-side on desktop
- All certification images should be replaced with actual compliance badges relevant to your industry
- The compliance badge in the header includes a green indicator dot for active status
- Text content is constrained to 75% width to accommodate certification logos
- Dark mode support is included with invert filters for proper logo visibility