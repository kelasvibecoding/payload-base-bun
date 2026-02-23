# Compare 1

## Metadata
- **Category**: Compare
- **Objective**: Side-by-side comparison table highlighting service differences with visual indicators.
- **Use Case**: Service comparison, competitor analysis, feature comparison, value proposition display.
- **Visual Style**: Clean table layout with color-coded columns (green for positive, red for negative) and icon indicators.
- **Interactivity**: Responsive horizontal scrolling for mobile devices, visual icon indicators for key differentiators.

## Description
A comprehensive comparison table component that presents a side-by-side analysis between two services/companies. The component features a grid-based layout with color-coded columns (green for the recommended service, red for the alternative), visual icon indicators for key differentiators, and responsive horizontal scrolling for optimal mobile viewing.

## Key Features
- **Side-by-Side Comparison**: Clear visual comparison between two services
- **Color-Coded Columns**: Green for positive aspects, red for negative aspects
- **Visual Icon Indicators**: Checkmarks and X marks for key differentiators
- **Responsive Design**: Horizontal scrolling on mobile for optimal viewing
- **Comprehensive Metrics**: Covers onboarding, pricing, quality, verification, adaptability, and support
- **Professional Layout**: Clean table design with proper spacing and typography

## Source Code
```tsx
"use client";

import { CheckCircle2, OctagonX } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

const rows = [
  {
    label: "Onboarding",
    lightbox: "1-2 days",
    freelance: "30 days",
  },
  {
    label: "Price Range",
    lightbox: "10%",
    freelance: "50-60%",
  },
  {
    label: "Quality Score",
    lightbox: "Top 3%",
    freelance: "Varies",
  },
  {
    label: "Verification",
    lightbox: "Multi-step verification process",
    freelance: "Basic check",
    hasIcon: true,
  },
  {
    label: "Adaptability",
    lightbox: "Fully flexible",
    freelance: "Limited",
    hasIcon: true,
  },
  {
    label: "Support",
    lightbox: "24/7 dedicated team",
    freelance: "Limited hours",
    hasIcon: true,
  },
];

interface Compare1Props {
  className?: string;
}

const Compare1 = ({ className }: Compare1Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
          Compare us with others.
        </h1>
        <div className="-mr-4 overflow-x-auto">
          <div className="min-w-[672px] overflow-hidden">
            <div className="grid grid-cols-3 [&>:last-child_div]:rounded-b-md [&>div:nth-last-child(-n+3)]:rounded-b-md [&>div:nth-last-child(-n+3)]:border-b-0">
              <div className="p-4"></div>
              <div className="flex items-center rounded-t-md bg-green-100 p-3 md:p-4">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg"
                  alt="logo"
                  className="h-7 md:h-8"
                />
              </div>
              <div className="flex items-center rounded-t-md bg-red-100 p-3 md:p-4">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                  alt="logo"
                  className="h-7 md:h-8"
                />
              </div>
              {rows.map((row, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center border-b p-3 text-base font-medium md:p-4 md:text-lg">
                    {row.label}
                  </div>
                  <div className="border-b bg-green-50 p-3 md:p-6">
                    <div className="flex items-center gap-2">
                      {row.hasIcon && (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                      <span className="text-base md:text-lg">
                        {row.lightbox}
                      </span>
                    </div>
                  </div>
                  <div className="border-b bg-red-50 p-3 md:p-6">
                    <div className="flex items-center gap-2">
                      {row.hasIcon && (
                        <OctagonX className="h-5 w-5 text-red-600" />
                      )}
                      <span className="text-base md:text-lg">
                        {row.freelance}
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compare1 };
```

## Usage Notes
- The comparison data is static but can be made dynamic through props
- Logo images should be replaced with actual company/service logos
- The component uses a minimum width of 672px for optimal table viewing
- Color schemes (green/red) can be customized to match brand colors
- The hasIcon property controls when to show visual indicators
- All links are currently placeholder "#" and should be updated with actual URLs