# Integration 2

## Metadata
- **Category**: Social Proof Section
- **Objective**: Establish brand authority by showcasing a high-velocity marquee of integrated tool partners.
- **Use Case**: Ideal for landing page headers or trust sections where the quantity and quality of integrations are competitive advantages.
- **Visual Style**: Dynamic "Infinite Marquee" effect. Features a horizontally scrolling logo strip shadowed by gradient focal overlays (`from-background to-transparent`) at the edges to create a seamless infinite loop look.
- **Interactivity**: Continuously animated using the `animate-marquee` CSS class. Logos change opacity (`hover:opacity-70`) on interaction to provide visual feedback.

## Source Code

### `integration2.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface DataItem {
  key: number;
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
}

const DATA: DataItem[] = [
  {
    key: 1,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
    alt: "Astro",
    href: "https://astro.build",
    width: 64,
    height: 64,
  },
  {
    key: 2,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
    alt: "GitHub",
    href: "https://github.com",
    width: 64,
    height: 64,
  },
  {
    key: 3,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
    alt: "Google",
    href: "https://google.com",
    width: 64,
    height: 64,
  },
  {
    key: 4,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
    alt: "Notion",
    href: "https://notion.so",
    width: 64,
    height: 64,
  },
  {
    key: 5,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
    alt: "Slack",
    href: "https://slack.com",
    width: 64,
    height: 64,
  },
  {
    key: 6,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg",
    alt: "Tailwind CSS",
    href: "https://tailwindcss.com",
    width: 64,
    height: 64,
  },
  {
    key: 8,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vscode-icon.svg",
    alt: "VS Code",
    href: "https://code.visualstudio.com",
    width: 64,
    height: 64,
  },
  {
    key: 12,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg",
    alt: "React",
    href: "https://reactjs.org",
    width: 64,
    height: 64,
  },
  {
    key: 13,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vue-icon.svg",
    alt: "Vue.js",
    href: "https://vuejs.org",
    width: 64,
    height: 64,
  },
  {
    key: 15,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
    alt: "Spotify",
    href: "https://spotify.com",
    width: 64,
    height: 64,
  },
  {
    key: 16,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/dropbox-icon.svg",
    alt: "Dropbox",
    href: "https://dropbox.com",
    width: 64,
    height: 64,
  },
];

const Integration2 = ({ className }: Integration2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h4 className="text-3xl font-medium lg:text-4xl">
            Powering the world's best product teams
          </h4>
          <p className="text-xl text-muted-foreground lg:-mt-1">
            From next-gen startups to established enterprises
          </p>
        </div>

        {/* Marquee Section */}
        <div className="relative my-20 overflow-hidden">
          <div className="flex w-full">
            {/* First marquee group */}
            <div className="flex shrink-0 animate-marquee items-center gap-4">
              {DATA.map((logo) => (
                <a
                  href={logo.href}
                  target="_blank"
                  key={logo.key}
                  className="p-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain transition-opacity hover:opacity-70"
                  />
                </a>
              ))}
            </div>
            {/* Second marquee group */}
            <div className="flex shrink-0 animate-marquee items-center gap-4">
              {DATA.map((logo) => (
                <a
                  href={logo.href}
                  target="_blank"
                  key={logo.key}
                  className="p-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain transition-opacity hover:opacity-70"
                  />
                </a>
              ))}
            </div>
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent"></div>
        </div>

        {/* Explore Button */}
        <div className="mt-8 flex justify-center">
          <Button className="rounded-full">
            Discover all tools
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Integration2 };
```
