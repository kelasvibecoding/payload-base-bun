# Integration 10

## Metadata
- **Category**: Action List
- **Objective**: Provide a straightforward, task-oriented list of integrations that can be "Connected" directly from the UI.
- **Use Case**: Ideal for settings panels, onboarding flows, or simple "Connected Apps" sections where functionality is the priority.
- **Visual Style**: Clean utility-focused aesthetic. Uses a single-column layout containing horizontal rows. Each row is a `rounded-xl` border-box with a small `shadow-sm` and a prominent "Connect" button in the `outline` variant.
- **Interactivity**: Primarily focused on the "Connect" action. Responsively transitions from a vertical stack (mobile) to a horizontal row (desktop) using `flex-col md:flex-row`.

## Source Code

### `integration10.tsx`
```tsx
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const DATA = [
  {
    id: 1,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
    title: "Google Sheets",
    description:
      "Easily sync your data with Google Sheets for seamless automation.",
  },
  {
    id: 2,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
    title: "Slack",
    description:
      "Receive updates and notifications directly in your Slack channels.",
  },
  {
    id: 3,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
    title: "Sketch",
    description:
      "Import your designs from Sketch and streamline your design process",
  },
  {
    id: 4,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg",
    title: "Gatsby",
    description: "Build blazing-fast websites with Gatsby integration.",
  },
  {
    id: 5,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
    title: "Shopify",
    description:
      "Sync your Shopify store data and streamline order management.",
  },
  {
    id: 6,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
    title: "Github",
    description:
      "Automate your workflows and track changes with Github integration.",
  },
  {
    id: 7,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
    title: "Figma",
    description: "Sync your Figma designs and streamline your design process.",
  },
  {
    id: 8,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/dropbox-icon.svg",
    title: "Dropbox",
    description: "Sync your Dropbox files and streamline your file management.",
  },
];

interface Integration10Props {
  className?: string;
}

const Integration10 = ({ className }: Integration10Props) => {
  return (
    <section className={cn("py-12", className)}>
      <div className="container mx-auto max-w-2xl">
        <h2 className="mb-2 text-2xl font-semibold">Integrations</h2>
        <p className="mb-6 text-muted-foreground">
          Connect your Workspace with integrations.
        </p>
        <div className="space-y-4">
          {DATA.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="flex flex-col items-start justify-between rounded-xl border bg-background px-6 py-4 shadow-sm md:flex-row md:items-center"
            >
              <div className="mr-0 flex w-full flex-col items-start gap-4 md:mr-4 md:w-auto md:flex-row md:items-center">
                <img
                  src={icon}
                  alt={title}
                  className="h-10 w-10 object-contain md:mb-0"
                />
                <div className="">
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4">
                <Button variant="outline">Connect</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Integration10 };
```
