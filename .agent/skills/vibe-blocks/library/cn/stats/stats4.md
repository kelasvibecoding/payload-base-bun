# Stats 4

## Metadata
- **Category**: Stats
- **Objective**: Platform performance ratings and reviews showcase
- **Use Case**: App store ratings and review platform statistics display
- **Visual Style**: Two-column layout with platform ratings and store icons
- **Interactivity**: Static display with platform-specific icons and ratings

## Description
A clean stats section featuring platform performance ratings from major app stores and review platforms. Displays ratings from Apple Store, Play Store, and Trustpilot with star icons and platform-specific branding. Perfect for showcasing app performance, customer satisfaction, and platform credibility across multiple distribution channels.

## Source Code
```tsx
import { Star } from "lucide-react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

import { cn } from "@/lib/utils";

interface Stats4Props {
  className?: string;
}

const Stats4 = ({ className }: Stats4Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col-reverse items-center justify-between gap-4 lg:flex-row">
          <p className="text-center text-lg font-medium lg:text-left lg:text-2xl">
            Platform Performance Insights
          </p>
          <div className="flex items-center gap-6 lg:gap-12">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-2xl font-medium">
                <span>4.8</span>
                <Star />
              </div>
              <div className="flex items-center gap-2">
                <FaApple className="lg:mr-1" />
                <span className="text-xs whitespace-nowrap lg:text-sm">
                  Apple Store
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-2xl font-medium">
                <span>4.8</span>
                <Star />
              </div>
              <div className="flex items-center gap-2">
                <BiLogoPlayStore className="lg:mr-1" />
                <span className="text-xs whitespace-nowrap lg:text-sm">
                  Play Store
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-2xl font-medium">
                <span>4.9</span>
                <Star />
              </div>
              <div className="flex items-center gap-2">
                <SiTrustpilot className="lg:mr-1" />
                <span className="text-xs whitespace-nowrap lg:text-sm">
                  Trustpilot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats4 };
```
