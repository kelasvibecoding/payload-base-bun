# Skills 1

## Metadata
- **Category**: Skills
- **Objective**: Showcase technical skills and tools with experience levels.
- **Use Case**: Personal portfolio or team page displaying tech stack with years of experience.
- **Visual Style**: List-based layout with icons and experience badges.
- **Interactivity**: Static display with GitHub and contact buttons.

## Description
A clean skills section displaying technical tools and frameworks with experience levels in years.

## Source Code
```tsx
import { CornerDownRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Skills1Props {
  className?: string;
}

const Skills1 = ({ className }: Skills1Props) => {
  const stack = [
    {
      name: "Figma",
      category: "design tool",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
      experience: "2 yoe",
      className: "h-9",
    },
    {
      name: "React",
      category: "javascript library",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg",
      experience: "4 yoe",
    },
    {
      name: "Next.js",
      category: "full stack framework",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg",
      experience: "3 yoe",
      className: "dark:invert",
    },
    {
      name: "Tailwind CSS",
      category: "css framework",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg",
      experience: "3 yoe",
    },
    {
      name: "v0",
      category: "ai tool",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/v0-icon.svg",
      experience: "3 yoe",
      className: "dark:invert",
    },
    {
      name: "Vite",
      category: "build tool",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg",
      experience: "3 yoe",
    },
  ];

  return (
    <section className={cn("py-32", className)}}>
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <h1 className="text-5xl font-semibold tracking-tight lg:text-7xl">
              Tools & Stack
            </h1>
            <p className="text-base text-foreground/50">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              amet dolorem eum est voluptatem id repellendus ut laborum
              laboriosam debitis.
            </p>

            <div className="mt-20 flex w-full justify-between border-t py-2 lg:mt-34">
              <Button variant="ghost" className="tracking-tight lg:text-lg">
                {" "}
                <CornerDownRight className="size-5 text-orange-500" /> Open
                Github
              </Button>
              <Button variant="ghost" className="tracking-tight lg:text-lg">
                {" "}
                <CornerDownRight className="size-5 text-orange-500" />
                Get in touch
              </Button>
            </div>
          </div>
          <ul className="relative col-span-4 w-full space-y-4">
            {stack.map((item, index) => (
              <li
                key={index}
                className="flex flex-row items-center justify-between gap-10 rounded-2xl bg-muted p-2"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-20 items-center justify-center rounded-2xl bg-background p-2">
                    <img
                      src={item.icon}
                      alt=""
                      className={cn("h-8 w-8 object-contain", item.className)}
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {item.name}
                    </h2>
                    <p className="text-sm text-foreground/50 uppercase">
                      {item.category}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="mr-3 rounded-full bg-foreground/5 uppercase hover:bg-foreground/10"
                >
                  {item.experience}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Skills1 };
```