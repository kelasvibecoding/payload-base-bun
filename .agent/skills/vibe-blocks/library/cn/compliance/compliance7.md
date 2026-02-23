# Compliance 7

## Metadata
- **Category**: Compliance
- **Objective**: Advanced enterprise compliance platform with dotted glow backgrounds and certification status tracking.
- **Use Case**: Enterprise compliance demonstration, security platform showcase, certification tracking, enterprise trust building.
- **Visual Style**: Advanced layout with DottedGlowBackground components, gradient backgrounds, and certification status badges.
- **Interactivity**: Static display with visual certification status tracking and feature highlight sections.

## Description
An advanced enterprise compliance component featuring a sophisticated two-column layout with DottedGlowBackground effects, certification status tracking, and comprehensive feature highlighting. The component includes customizable headings, descriptions, features, and certifications with professional styling suitable for enterprise-grade compliance platforms.

## Key Features
- **DottedGlowBackground Effects**: Advanced visual effects at top and bottom of layout
- **Certification Status Tracking**: "IN PROGRESS" badges for certification transparency
- **Gradient Background Sections**: Professional gradient styling for visual appeal
- **Customizable Content**: All text content configurable via props
- **Feature Highlight Grid**: Two-column feature section with detailed descriptions
- **Professional Typography**: Clean, enterprise-appropriate styling

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { DottedGlowBackground } from "@/components/aceternity/dotted-glow-background";
import { Badge } from "@/components/ui/badge";

interface Feature {
  title: string;
  description: string;
}

interface Certification {
  src: string;
  alt: string;
  status: string;
}

interface Compliance7Props {
  heading?: string;
  description?: string;
  features?: Feature[];
  certifications?: Certification[];
  complianceHeading?: string;
  complianceDescription?: string;
  className?: string;
}

const defaultFeatures = [
  {
    title: "Advanced API Framework",
    description:
      "Robust APIs designed for effortless integration and accelerated deployment cycles.",
  },
  {
    title: "Always-On Support",
    description:
      "Continuous technical assistance to ensure your systems operate without interruption.",
  },
  {
    title: "Protected Data Storage",
    description:
      "Enterprise-level data storage infrastructure with robust security protocols and streamlined data management.",
  },
  {
    title: "Industry Compliance Ready",
    description:
      "Built to meet international standards ensuring complete regulatory confidence.",
  },
];

const defaultCertifications = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/AICPA-SOC.svg",
    alt: "AICPA SOC 2",
    status: "IN PROGRESS",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg",
    alt: "ISO 27001",
    status: "IN PROGRESS",
  },
];

const FeatureItem = ({ title, description }: Feature) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold">{title}</p>
      <p className="font-medium text-muted-foreground">{description}</p>
    </div>
  );
};

const Compliance7 = ({
  heading = "Enterprise-Grade Cloud Infrastructure Platform",
  description = "A comprehensive cloud infrastructure solution built for modern enterprises, delivering exceptional security and performance at scale.",
  features = defaultFeatures,
  certifications = defaultCertifications,
  complianceHeading = "Security and Scalability",
  complianceDescription = "Platform engineered for maximum security and unlimited growth potential, pursuing SOC2 Type 2 and ISO27001 certifications.",
  className,
}: Compliance7Props = {}) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="relative grid lg:grid-cols-2">
          <div className="absolute top-0 h-5 w-full">
            <DottedGlowBackground
              radius={1.2}
              gap={6}
              speedMin={0.2}
              speedMax={5}
              speedScale={1}
              darkColor="rgba(255, 255, 255, 0.7)"
            />
          </div>
          <div className="absolute bottom-0 h-5 w-full">
            <DottedGlowBackground
              radius={1.2}
              gap={6}
              speedMin={0.2}
              speedMax={5}
              speedScale={1}
              darkColor="rgba(255, 255, 255, 0.7)"
            />
          </div>

          <div className="flex flex-col">
            <div className="border border-dashed bg-gradient-to-b from-foreground/10 to-background p-10 sm:p-20">
              <FeatureItem title={heading} description={description} />
            </div>
            <div className="grid gap-10 border border-t-0 border-dashed p-10 sm:p-20 md:grid-cols-2">
              {features.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-20 border border-l-0 border-dashed bg-gradient-to-tr from-foreground/10 to-background to-30% p-10 sm:p-20 dark:from-foreground/20">
            <div className="flex items-center gap-4 sm:gap-10">
              {certifications.map((certification) => {
                return (
                  <div
                    key={certification.alt}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    <Badge variant="outline">{certification.status}</Badge>
                    <img
                      src={certification.src}
                      alt={certification.alt}
                      className="size-28 sm:size-34 dark:invert"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-4xl font-semibold">{complianceHeading}</p>
              <p className="font-medium text-muted-foreground">
                {complianceDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compliance7 };
```

## Usage Notes
- DottedGlowBackground components require proper configuration for optimal visual effects
- Certification images should be replaced with actual compliance badges relevant to your industry
- Status badges ("IN PROGRESS") can be updated to reflect actual certification status
- All text content is fully customizable through component props
- The gradient backgrounds use from-foreground/10 for subtle visual enhancement
- Dark mode support is included with appropriate color adjustments
