# Community 2

## Metadata
- **Category**: Community
- **Objective**: Grid-based social media community section with detailed platform descriptions and hover effects.
- **Use Case**: Community engagement, social media presence, platform-specific messaging, developer outreach.
- **Visual Style**: Card-based grid layout with hover animations and detailed platform descriptions.
- **Interactivity**: Hover effects with arrow animations, external social media links, responsive grid layout.

## Description
A sophisticated community engagement component featuring a grid-based layout with four social media platforms (Twitter, LinkedIn, GitHub, Discord). Each platform is presented as an interactive card with hover animations, platform-specific descriptions, and smooth transitions. The component uses a responsive grid that adapts from single column on mobile to four columns on desktop.

## Key Features
- **Card-Based Grid Layout**: Four platform cards in a responsive grid system
- **Hover Animations**: Smooth transitions with arrow movement effects
- **Platform-Specific Descriptions**: Tailored messaging for each social platform
- **Interactive Elements**: Hover states with opacity and transform animations
- **Responsive Design**: Adapts from 1 to 4 columns based on screen size
- **External Link Integration**: All links open in new tabs for better UX

## Source Code
```tsx
import { ArrowUpRight } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { cn } from "@/lib/utils";

interface Community2Props {
  className?: string;
}

const Community2 = ({ className }: Community2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
          Join our community
        </h2>
        <p className="font-medium text-muted-foreground md:text-xl">
          Connect with others, share experiences, and stay in the loop.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <a className="group rounded-md border border-border p-6" href="#">
            <div className="flex items-center justify-between gap-4">
              <FaXTwitter className="size-5" />
              <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
            <div className="mt-4">
              <h3 className="mb-1 font-semibold">Twitter</h3>
              <p className="text-sm text-muted-foreground">
                Follow our latest updates and announcements.
              </p>
            </div>
          </a>
          <a className="group rounded-md border border-border p-6" href="#">
            <div className="flex items-center justify-between gap-4">
              <FaLinkedin className="size-5" />
              <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
            <div className="mt-4">
              <h3 className="mb-1 font-semibold">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">
                Connect with us and explore career opportunities.
              </p>
            </div>
          </a>
          <a className="group rounded-md border border-border p-6" href="#">
            <div className="flex items-center justify-between gap-4">
              <FaGithub className="size-5" />
              <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
            <div className="mt-4">
              <h3 className="mb-1 font-semibold">Github</h3>
              <p className="text-sm text-muted-foreground">
                Contribute to our open-source projects.
              </p>
            </div>
          </a>
          <a className="group rounded-md border border-border p-6" href="#">
            <div className="flex items-center justify-between gap-4">
              <FaDiscord className="size-5" />
              <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
            <div className="mt-4">
              <h3 className="mb-1 font-semibold">Discord</h3>
              <p className="text-sm text-muted-foreground">
                Join our Discord server and connect with other developers.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Community2 };
```

## Usage Notes
- Links are currently placeholder "#" and should be updated with actual social media URLs
- The grid uses Tailwind's responsive classes: 1 column mobile, 2 columns tablet, 4 columns desktop
- Hover animations use CSS transforms and opacity transitions for smooth effects
- Each card includes platform-specific messaging tailored to the audience
- The component is fully responsive and adapts to different screen sizes
- External links should include target="_blank" and rel="noopener noreferrer" for security
