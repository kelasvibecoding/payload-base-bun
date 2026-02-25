# Pricing 32

## Metadata
- **Category**: Pricing
- **Objective**: Display an expanded five-tier pricing configuration that elegantly uses CSS grid layout spans to present an unusual number of plans.
- **Use Case**: Best for sprawling enterprise software that has numerous distinct segments (e.g., Starter, Pro, Team, Business, Enterprise) that cannot be constrained to a typical 3-tier layout without causing intense cognitive load.
- **Visual Style**: Features the same serif typography headline as `Pricing31`. The layout is the standout feature: it maps 5 cards onto a 6-column grid structure (`lg:grid-cols-6`). The top 3 cards each span 2 columns (`lg:col-span-2`), while the bottom 2 cards each span 3 columns (`lg:col-span-3`). This creates a visually balanced, staggered mosaic structure rather than a painfully wide scrolling row.
- **Interactivity**: Includes a billing toggle (`Switch`). Specifically, the price number animation is highly unique: it wraps the numbers in an `overflow-hidden` container and uses a CSS transform (`translate-y-0` vs `translate-y-[-3rem]`) to smoothly slide the yearly price up into view when toggled, creating a slot-machine-like effect.

## Source Code

```tsx
"use client";
import {
  ArrowRight,
  Bell,
  Book,
  Brush,
  CalendarCheck2,
  CheckSquare,
  ClipboardList,
  Code,
  Database,
  FileText,
  GitBranch,
  GitPullRequest,
  LayoutGrid,
  LifeBuoy,
  LucideIcon,
  MonitorSmartphone,
  PhoneCall,
  Server,
  Settings2,
  Slack,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface FeatureItem {
  icon: LucideIcon;
  text: string;
}

interface PricingPlan {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  bestFor: string;
  features?: FeatureItem[];
  mostPopular?: boolean;
  cta: {
    text: string;
    href: string;
  };
}

const PLANS: PricingPlan[] = [
  {
    name: "Starter",
    priceMonthly: "$9",
    priceYearly: "$90",
    description: "Great for solo developers",
    bestFor: "Freelancers just starting out",
    features: [
      { icon: Code, text: "Access to core components" },
      { icon: LayoutGrid, text: "Basic layout blocks" },
      { icon: MonitorSmartphone, text: "Responsive design templates" },
      { icon: FileText, text: "Starter documentation" },
      { icon: GitBranch, text: "Version history" },
      { icon: LifeBuoy, text: "Community support" },
      { icon: Book, text: "UI guidebook PDF" },
    ],
    cta: {
      text: "Get started",
      href: "#",
    },
  },
  {
    name: "Pro",
    mostPopular: true,
    priceMonthly: "$29",
    priceYearly: "$290",
    description: "Best for growing teams",
    bestFor: "Small dev teams and startups",
    features: [
      { icon: Code, text: "Advanced UI block library" },
      { icon: Brush, text: "Custom themes support" },
      { icon: Settings2, text: "Design system tools" },
      { icon: CheckSquare, text: "Component tests included" },
      { icon: Zap, text: "Performance enhancements" },
      { icon: Server, text: "Shared components hosting" },
      { icon: PhoneCall, text: "Email + chat support" },
    ],
    cta: {
      text: "Get started",
      href: "#",
    },
  },
  {
    name: "Team",
    priceMonthly: "$59",
    priceYearly: "$590",
    description: "Collaborate and scale fast",
    bestFor: "Product teams with multiple projects",
    features: [
      { icon: Users, text: "Team access control" },
      { icon: GitPullRequest, text: "Merge & review UI blocks" },
      { icon: CalendarCheck2, text: "Priority feature roadmap" },
      { icon: Bell, text: "Update notifications" },
      { icon: Database, text: "Component usage analytics" },
      { icon: Slack, text: "Slack integration" },
      { icon: ClipboardList, text: "Project templates library" },
    ],
    cta: {
      text: "Get started",
      href: "#",
    },
  },
  {
    name: "Business",
    priceMonthly: "$99",
    priceYearly: "$990",
    description: "Full control and support",
    bestFor: "Agencies and large-scale teams",
    cta: {
      text: "Get started",
      href: "#",
    },
  },
  {
    name: "Enterprise",
    priceMonthly: "$199",
    priceYearly: "$1,990",
    description: "Custom solutions at scale",
    bestFor: "Large enterprises and SaaS platforms",
    cta: {
      text: "Get started",
      href: "#",
    },
  },
];

interface Pricing32Props {
  className?: string;
}

const Pricing32 = ({ className }: Pricing32Props) => {
  const [checked, setChecked] = useState(true);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-9.5">
          <h1 className="text-center font-serif text-5xl leading-none text-foreground md:text-6xl lg:text-7xl">
            A plan for any project you undertake
          </h1>
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center justify-center gap-4">
              <Label
                htmlFor="plan-duration"
                className={`${!checked ? "text-foreground" : "text-muted-foreground"} text-sm`}
              >
                Annual
              </Label>
              <Switch
                id="plan-duration"
                checked={checked}
                onCheckedChange={setChecked}
              />
              <Label
                htmlFor="plan-duration"
                className={`${checked ? "text-foreground" : "text-muted-foreground"} text-sm`}
              >
                Monthly
              </Label>
            </div>
            <div className="text-center text-green-600">
              Save as much as 40% with annual billing
            </div>
          </div>
          <div className="mt-3 grid w-full grid-cols-1 gap-5 lg:grid-cols-6">
            {PLANS.map((plan, index) => (
               <PlanCard
                key={index}
                plan={plan}
                monthly={checked}
                className={
                  index > PLANS.length - 3 ? "lg:col-span-3" : "lg:col-span-2"
                }
              />
            ))}
          </div>
        </div>
        <div className="m-9.5 flex items-center justify-center">
          <Button size="lg">Compare all plans</Button>
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({
  plan,
  monthly,
  className,
}: {
  plan: PricingPlan;
  monthly: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`relative h-full w-full rounded-lg border px-6 py-5 ${className} ${plan?.mostPopular ? "border-primary" : "border-border"} bg-background`}
    >
      <div className="text-2xl">{plan.name}</div>
      <div className="h-[2.875rem] overflow-hidden">
        <div
          className={`text-[2.875rem] leading-none font-semibold transition-transform duration-500 ${monthly ? "translate-y-0" : "translate-y-[-3rem]"}`}
        >
          <div>{plan.priceMonthly}</div>
          <div>{plan.priceYearly}</div>
        </div>
      </div>
      <div className="text-xs text-foreground/60">
        <div>per person / {monthly ? "month" : "year"}</div>
        <div>{plan.bestFor}</div>
      </div>
      <div className="mt-4 mb-6 text-lg font-medium text-foreground">
        {plan.description}
      </div>
      <Button
        asChild
        className="w-full"
         variant={plan.mostPopular ? "default" : "outline"}
        size="lg"
      >
        <a href={plan.cta.href}>
          {plan.cta.text}
          <ArrowRight />
        </a>
      </Button>
      <div className="mt-6 flex flex-col gap-4">
        {plan.features?.map((feature, index) => (
           <div key={index} className="flex items-center gap-3 text-foreground">
            <feature.icon className="size-5 stroke-1" />
            {feature.text}
          </div>
        ))}
      </div>
      {plan.mostPopular && (
        <div className="absolute top-0 left-1/2 w-fit -translate-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
          Most popular
        </div>
      )}
    </div>
  );
};

export { Pricing32 };
```
