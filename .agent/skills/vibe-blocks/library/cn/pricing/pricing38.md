# Pricing 38

## Metadata
- **Category**: Pricing
- **Objective**: Display an interactive, selection-based pricing UI integrated directly alongside detailed marketing copy.
- **Use Case**: Best for complex service agencies or B2B SaaS where users need to read detailed explanations (e.g., Support SLAs, Custom Solutions) *while* making their pricing selection, rather than just choosing from a grid.
- **Visual Style**: Completely unique layout. Uses a split `lg:grid-cols-2` structure. The left column contains detailed text blocks separated by `Separator` lines. The right column consists of a vertically stacked, clickable `RadioGroup`. Each "card" in the right column is actually a `label` linked to a hidden `RadioGroupItem`.
- **Interactivity**: Extremely dynamic. Clicking a pricing tier on the right physically expands the card (`max-h-0` to `max-h-20` on the button) to reveal the CTA, applies a bright border (`has-[[data-state=checked]]:border-ring`), and toggles a small checkmark badge on the corner (`opacity-0` to `opacity-100`).

## Source Code

```tsx
import { Check, Info, TrendingUp, Users } from "lucide-react";

import { cn } from "@/lib/utils";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const starterFeatures = [
  "Social Media Management",
  "Content Creation",
  "Basic Analytics",
  "Monthly Reports",
];

const professionalFeatures = [
  "Advanced SEO Optimization",
  "Google Ads Management",
  "Facebook & Instagram Ads",
  "Email Marketing Campaigns",
  "Content Strategy",
  "Competitor Analysis",
  "Conversion Optimization",
  "Landing Page Design",
  "Video Content Creation",
  "Influencer Partnerships",
  "500+ Marketing Templates",
  "All Starter features included",
];

const enterpriseFeatures = [
  "Unlimited Campaign Management",
  "Dedicated Account Manager",
  "Priority Support 24/7",
  "All Professional features included",
];

interface Pricing38Props {
  className?: string;
}

const Pricing38 = ({ className }: Pricing38Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container px-4">
        <div className="rounded-lg border border-border bg-muted/40 p-1">
          <div className="grid gap-12 rounded-sm border border-border p-4 md:p-6 lg:grid-cols-2">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  SERVICE PACKAGES
                </p>
                <h2 className="text-2xl font-medium tracking-tight">
                  Grow your business with proven strategies.
                </h2>
                <p className="text-muted-foreground">
                  Choose from our comprehensive marketing packages designed to
                  scale your business from startup to enterprise level success.
                </p>
                <Alert className="w-fit items-center bg-muted/50 has-[>svg]:gap-x-2 [&>svg]:translate-y-0">
                  <Info />
                  <AlertTitle className="line-clamp-none text-xs">
                    All packages include a free consultation and strategy
                    session.
                  </AlertTitle>
                </Alert>
              </div>
              <Separator className="data-[orientation=horizontal]:w-12" />
              <div className="flex flex-col gap-4">
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  CUSTOM SOLUTIONS
                </p>
                <h2 className="text-2xl font-medium tracking-tight">
                  Need a tailored approach?
                </h2>
                <p className="text-muted-foreground">
                  <a href="#" className="transition-colors hover:text-primary">
                    Contact us
                  </a>{" "}
                  for custom marketing solutions or to discuss specific campaign
                  requirements that align with your business goals.
                </p>
              </div>
              <Separator className="data-[orientation=horizontal]:w-12" />
              <div className="flex flex-col gap-4">
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  SUPPORT
                </p>
                <h2 className="text-2xl font-medium tracking-tight">
                  Ongoing optimization
                </h2>
                <p className="text-muted-foreground">
                  We continuously monitor and optimize your campaigns for
                  maximum ROI. Need adjustments? We're here to help.{" "}
                  <a href="#" className="transition-colors hover:text-primary">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <RadioGroup defaultValue="starter">
                <label
                  htmlFor="starter"
                  className="group relative flex cursor-pointer flex-col gap-4 rounded-lg border border-border p-8 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-background"
                >
                  <RadioGroupItem
                    value="starter"
                    id="starter"
                    className="hidden"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">Starter</h3>
                      <p className="text-sm text-muted-foreground">
                        Perfect for small businesses
                      </p>
                    </div>
                    <span className="text-2xl font-bold">
                      $0
                      <span className="text-base font-normal text-muted-foreground">
                        /month
                      </span>
                    </span>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <Users className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <p className="text-sm text-primary/80">
                        3 social media platforms
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <p className="text-sm text-primary/80">
                        Basic performance tracking
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {starterFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        <p className="text-sm text-primary/80">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <span className="absolute -top-2 -right-2 z-10 flex size-5 items-center justify-center rounded-full bg-primary opacity-0 group-has-[[data-state=checked]]:opacity-100">
                    <Check className="size-3 text-background" />
                  </span>
                  <div className="max-h-0 overflow-hidden transition-all duration-300 ease-out group-has-[[data-state=checked]]:max-h-20">
                    <Button className="mt-4 w-full opacity-0 transition-opacity duration-300 group-has-[[data-state=checked]]:opacity-100">
                      Get Started
                    </Button>
                  </div>
                </label>
                <label
                  htmlFor="pro"
                  className="group relative flex cursor-pointer flex-col gap-4 rounded-lg border border-border p-8 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-background"
                >
                  <RadioGroupItem value="pro" id="pro" className="hidden" />
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">Pro</h3>
                      <p className="text-sm text-muted-foreground">
                        Complete marketing solution
                      </p>
                    </div>
                    <span className="text-2xl font-bold">
                      $20
                      <span className="text-base font-normal text-muted-foreground">
                        /month
                      </span>
                    </span>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <Users className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <p className="text-sm text-primary/80">
                        All major platforms included
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <p className="text-sm text-primary/80">
                        Advanced analytics & reporting
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {professionalFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        <p className="text-sm text-primary/80">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <span className="absolute -top-2 -right-2 z-10 flex size-5 items-center justify-center rounded-full bg-primary opacity-0 group-has-[[data-state=checked]]:opacity-100">
                    <Check className="size-3 text-background" />
                  </span>
                  <div className="max-h-0 overflow-hidden transition-all duration-300 ease-out group-has-[[data-state=checked]]:max-h-20">
                    <Button className="mt-4 w-full opacity-0 transition-opacity duration-300 group-has-[[data-state=checked]]:opacity-100">
                      Get Started
                    </Button>
                  </div>
                </label>
                <label
                  htmlFor="enterprise"
                  className="group relative flex cursor-pointer flex-col gap-4 rounded-lg border border-border p-8 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-background"
                >
                  <RadioGroupItem
                    value="enterprise"
                    id="enterprise"
                    className="hidden"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">Enterprise</h3>
                      <p className="text-sm text-muted-foreground">
                        Unlimited growth potential
                      </p>
                    </div>
                    <span className="text-2xl font-bold">
                      $99
                      <span className="text-base font-normal text-muted-foreground">
                        /month
                      </span>
                    </span>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <Users className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <p className="text-sm text-primary/80">
                        Unlimited platform management
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <p className="text-sm text-primary/80">
                        Real-time performance monitoring
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {enterpriseFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        <p className="text-sm text-primary/80">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <span className="absolute -top-2 -right-2 z-10 flex size-5 items-center justify-center rounded-full bg-primary opacity-0 group-has-[[data-state=checked]]:opacity-100">
                    <Check className="size-3 text-background" />
                  </span>
                  <div className="max-h-0 overflow-hidden transition-all duration-300 ease-out group-has-[[data-state=checked]]:max-h-20">
                    <Button className="mt-4 w-full opacity-0 transition-opacity duration-300 group-has-[[data-state=checked]]:opacity-100">
                      Get Started
                    </Button>
                  </div>
                </label>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing38 };
```
