# Integration 13

## Metadata
- **Category**: Interactive Showcase
- **Objective**: Create a playful, high-engagement showcase of integrations that mimics the flagship "macOS Dock" utility.
- **Use Case**: Best used as the main visual element below a hero headline or as a delightful feature section on creative SaaS landing pages.
- **Visual Style**: Refined innovative aesthetic. Centers on a `rounded-4xl` horizontal bar. Integration logos are rendered inside expanding `rounded-xl` containers. Uses high-quality stylized app imagery to emphasize visual polish.
- **Interactivity**: Advanced gesture and physics model powered by `framer-motion`. Icons react to mouse position (`mouseX`) using `useTransform` and `useSpring` to dynamically adjust `width`, `height`, and `y` displacement. This creates a magnification effect where icons closest to the cursor expand smoothly while neighboring icons subtly scale up, mimicking the "Fisheye" lens behavior. Mobile mode falls back to a simple, non-interactive wrap grid for accessibility.

## Source Code

### `integration13.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import {
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Integration13 = () => {
  const integrations = [
    {
      title: "Framer",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration1.png",
      href: "#framer",
      icon: (
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration1.png"
          alt="Framer"
          className="h-8 w-8 object-cover"
        />
      ),
    },
    {
      title: "MongoDB",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration2.png",
      href: "#mongodb",
      icon: (
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration2.png"
          alt="MongoDB"
          className="h-8 w-8 object-cover"
        />
      ),
    },
    {
      title: "VSCode",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration3.png",
      href: "#vscod3",
      icon: (
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration3.png"
          alt="VSCode"
          className="h-8 w-8 object-cover"
        />
      ),
    },
    {
      title: "Notion",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration4.png",
      href: "#notion",
      icon: (
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration4.png"
          alt="Notion"
          className="h-8 w-8 object-cover"
        />
      ),
    },
    {
      title: "Figma",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration5.png",
      href: "#figma",
      icon: (
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration5.png"
          alt="Figma"
          className="h-8 w-8 object-cover"
        />
      ),
    },
    {
      title: "Discord",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration6.png",
      href: "#discord",
      icon: (
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration6.png"
          alt="Discord"
          className="h-8 w-8 object-cover"
        />
      ),
    },
    {
      title: "GitHub",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration7.png",
      href: "#github",
      icon: (
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration7.png"
          alt="GitHub"
          className="h-8 w-8 object-cover"
        />
      ),
    },
    {
      title: "Chrome",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration8.png",
      href: "#chrome",
      icon: (
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration8.png"
          alt="Chrome"
          className="h-8 w-8 object-cover"
        />
      ),
    },
    {
      title: "Postman",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration9.png",
      href: "#postman",
      icon: (
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/integration9.png"
          alt="Postman"
          className="h-8 w-8 object-cover"
        />
      ),
    },
  ];

  return (
    <section className="overflow-hidden py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <p className="mb-4 rounded-full bg-muted px-2 py-1 text-xs uppercase">
          INTEGRATIONS
        </p>
        <h2 className="relative py-2 text-center font-sans text-5xl font-semibold tracking-tighter lg:text-6xl">
          Integrate with your fav apps
        </h2>
        <p className="text-md mx-auto mt-5 max-w-xl px-5 text-center text-muted-foreground lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>

        <div className="relative container my-20 w-fit rounded-4xl bg-muted">
          <DockIntegrations
            integrations={integrations}
            className="hidden md:flex"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 py-4 md:hidden">
            {integrations.map((integration) => (
              <a
                key={integration.title}
                href={integration.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-transform hover:scale-105"
              >
                <img
                  src={integration.src}
                  alt={integration.title}
                  className="h-16 w-16 rounded-xl object-cover"
                />
              </a>
            ))}
          </div>
        </div>
        <Button className="h-10 rounded-xl">Get Full Access</Button>
      </div>
    </section>
  );
};

const DockIntegrations = ({
  integrations,
  className,
}: {
  integrations: {
    title: string;
    src: string;
    href: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <div
      className={cn("flex items-end gap-2 px-6 py-6", className)}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {integrations.map((integration) => (
        <DockIcon
          key={integration.title}
          integration={integration}
          mouseX={mouseX}
        />
      ))}
    </div>
  );
};

const DockIcon = ({
  integration,
  mouseX,
}: {
  integration: { title: string; src: string; href: string };
  mouseX: MotionValue<number>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const width = useSpring(
    useTransform(distance, [-100, 0, 100], [64, 85, 64]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    },
  );
  const height = useSpring(
    useTransform(distance, [-100, 0, 100], [64, 94, 64]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    },
  );

  const y = useSpring(useTransform(distance, [-150, 0, 150], [0, -12, 0]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <div
      ref={ref}
      className="relative flex h-16 w-16 flex-col items-center justify-end"
    >
      <motion.div
        style={{ width, height, y, transformOrigin: "bottom center" }}
        className="absolute bottom-0 flex items-center justify-center rounded-xl"
      >
        <a
          href={integration.href}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full w-full"
        >
          <img
            src={integration.src}
            alt={integration.title}
            className="h-full w-full rounded-xl object-cover"
          />
        </a>
      </motion.div>
    </div>
  );
};

export { Integration13 };
```
