# Compliance 6

## Metadata
- **Category**: Compliance
- **Objective**: Enterprise compliance showcase with certification badges and security feature highlights.
- **Use Case**: Enterprise compliance demonstration, security assurance, regulatory adherence, trust building for large organizations.
- **Visual Style**: Professional two-column layout with certification grid and feature highlight sections.
- **Interactivity**: Static display with visual certification badges and security feature descriptions.

## Description
A sophisticated enterprise compliance component featuring a two-column layout with certification badges (ISO 27001, GDPR, CCPA, AICPA SOC) displayed in a responsive grid, followed by a three-column section highlighting key security features: Certified Security Standards, Data Privacy & Control, and Flexible Access Management. The component uses professional typography and clean design suitable for enterprise audiences.

## Key Features
- **Certification Grid**: Four major compliance standards with SVG logos and labels
- **Security Feature Highlights**: Three-column layout with icon-based feature descriptions
- **Professional Typography**: Clean, business-appropriate styling with proper hierarchy
- **Responsive Grid Design**: Adapts from single column to multi-column layout
- **Visual Indicators**: LockKeyhole, ShieldCheck, and Users icons for feature categories
- **Dark Mode Support**: Includes dark mode variants for certification logos

## Source Code
```tsx
import { LockKeyhole, ShieldCheck, Users } from "lucide-react";

import { cn } from "@/lib/utils";

interface Compliance6Props {
  className?: string;
}

const Compliance6 = ({ className }: Compliance6Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 xl:flex-row">
          <div className="flex flex-col gap-6 lg:max-w-xl">
            <div className="flex items-center gap-1">
              <span className="h-2 w-4 bg-primary" />
              <span className="text-xs uppercase">Compliance</span>
            </div>
            <h2 className="text-4xl font-medium md:text-6xl lg:text-7xl">
              Powerful automation, built for trust
            </h2>
            <p className="md:text-xl">
              Run secure, reliable, and scalable workflows every day. Here's why
              organizations and teams rely on our platform for their data needs.
            </p>
          </div>
          <div className="grid w-full shrink-0 grid-cols-2 gap-px border border-border bg-border md:w-auto md:grid-cols-4">
            <div className="flex flex-col items-center gap-2 bg-background px-6 py-4 md:px-8 md:py-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg"
                alt="ISO 27001"
                className="w-full max-w-16 md:max-w-24 dark:invert"
              />
              <p className="text-center text-sm font-semibold uppercase">
                ISO 27001
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 bg-background px-6 py-4 md:px-8 md:py-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg"
                alt="GDPR"
                className="w-full max-w-16 md:max-w-24 dark:invert"
              />
              <p className="text-center text-sm font-semibold uppercase">
                GDPR
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 bg-background px-6 py-4 md:px-8 md:py-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg"
                alt="CCPA"
                className="w-full max-w-16 md:max-w-24 dark:invert"
              />
              <p className="text-center text-sm font-semibold uppercase">
                CCPA
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 bg-background px-6 py-4 md:px-8 md:py-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/AICPA-SOC.svg"
                alt="AICPA SOC"
                className="w-full max-w-16 md:max-w-24 dark:invert"
              />
              <p className="text-center text-sm font-semibold uppercase">
                AICPA SOC
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 w-full border border-border">
          <div className="relative hidden h-16 border-b border-border md:block">
            <div className="absolute inset-0 h-full w-full bg-[repeating-linear-gradient(-45deg,theme(colors.border)_0_1px,transparent_1px_16px)]"></div>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border lg:grid-cols-3">
            <div className="flex flex-col justify-between gap-8 bg-background px-6 py-10 md:gap-16">
              <LockKeyhole className="size-8" />
              <div className="flex flex-col gap-6 md:gap-10">
                <h3 className="text-xl font-medium md:text-3xl">
                  Certified Security Standards
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  Workflows are protected by industry-leading security and
                  compliance practices.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 bg-background px-6 py-10 md:gap-16">
              <ShieldCheck className="size-8" />
              <div className="flex flex-col gap-6 md:gap-10">
                <h3 className="text-xl font-medium md:text-3xl">
                  Data Privacy & Control
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  Your information remains private and fully under your control
                  at all times.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 bg-background px-6 py-10 md:gap-16">
              <Users className="size-8" />
              <div className="flex flex-col gap-6 md:gap-10">
                <h3 className="text-xl font-medium md:text-3xl">
                  Flexible Access Management
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  Control permissions for teams, applications, and actions with
                  ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compliance6 };
```

## Usage Notes
- Certification logos should be replaced with actual compliance badges relevant to your industry
- The component uses a responsive grid that adapts from 2 columns on mobile to 4 columns on desktop
- Feature icons (LockKeyhole, ShieldCheck, Users) provide visual context for security categories
- The decorative diagonal stripe pattern is hidden on mobile for better mobile experience
- All text content can be customized for specific compliance messaging
- Dark mode support is included with invert filters for proper logo visibility