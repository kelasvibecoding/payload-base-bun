# Integration 1

## Metadata
- **Category**: Integration Section
- **Objective**: Show off the breadth of compatible third-party applications in a clean, professional grid.
- **Use Case**: Typically used on a "Product" or "Features" page to communicate ecosystem value and ease of adoption.
- **Visual Style**: Modern software-style aesthetic. Features a subtle, repeating "pie factory" SVG pattern in the background (`absolute inset-0 -z-10`) with a radial mask to keep it concentrated at the top. Integration cards are rounded-xl `Card` elements with horizontal icon/title/description flow.
- **Interactivity**: Primarily static layout with a focused CTA at the bottom for users to "Request an Integration."

## Source Code

### `integration1.tsx`
```tsx
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface DataItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const DATA: DataItem[] = [
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
];

const FeatureCard: React.FC<DataItem> = ({ title, description, icon }) => {
  return (
    <Card className="w-full rounded-xl bg-background py-2">
      <CardHeader className="flex flex-row items-center space-x-4">
        <div className="relative h-12 w-12 shrink-0">
          <img
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

interface Integration1Props {
  className?: string;
}

const Integration1 = ({ className }: Integration1Props) => {
  return (
    <section className={cn("relative py-32", className)}>
      {/* Background pattern container */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)] bg-[length:60px_60px] opacity-[0.03] [-webkit-mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
          style={{
            backgroundImage: "url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/pie-factory.svg')",
          }}
        />
      </div>

      <div className="relative container flex max-w-5xl flex-col items-center text-center">
        <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
          Integrate Your Favourite Apps
        </h1>
        <h2 className="mb-8 max-w-3xl text-muted-foreground lg:text-2xl">
          Enhance your workflow by connecting the tools you use daily. Our
          seamless integrations help you automate tasks and keep everything in
          sync.
        </h2>
      </div>

      {/* Integration Cards */}
      <div className="mx-auto mt-4 grid max-w-4xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:mt-8 lg:mt-12">
        {DATA.map((feature) => (
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            id={feature.id}
            key={feature.id}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-row items-center justify-center gap-x-4">
        <span className="text-muted-foreground">
          Have a tool you'd like to integrate?
        </span>
        <Button asChild>
          <a href="https://shadcnblocks.com">Request an Integration</a>
        </Button>
      </div>
    </section>
  );
};

export { Integration1 };
```
