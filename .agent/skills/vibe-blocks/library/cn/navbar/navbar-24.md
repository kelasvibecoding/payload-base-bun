# Navbar 24

## Metadata
- **Category**: Navigation Bar
- **Objective**: Provide a floating, Mac OS-style dock navigation optimized for app-like experiences.
- **Use Case**: Web applications, dashboards, or minimal landing pages where primary navigation acts as a set of quick-action quick-jump tools at the bottom of the screen.
- **Visual Style**: Apple-style "dock", a pill-shaped container sitting dynamically at the bottom of the screen. Icons grow and react fluidly to cursor proximity.
- **Interactivity**: Leverages `motion/react` (Framer Motion) exclusively for complex physics-based spring animations computing distance from pointer `mouseX` to scale icons dynamically (`useTransform`, `useSpring`). Mobile view uses an expanding floating action button with staggered entry animations (`AnimatePresence`).

## Source Code

```tsx
"use client";

import {
  Bell,
  Heart,
  Home,
  LogOut,
  PanelBottomOpen,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Navbar24 = () => {
  const tabs = [
    {
      title: "Home",
      icon: <Home />,
      href: "#home",
    },
    {
      title: "Notifications",
      icon: <Bell />,
      href: "#notifications",
    },
    {
      title: "Profile",
      icon: <User />,
      href: "#profile",
    },
    {
      title: "Settings",
      icon: <Settings />,
      href: "#settings",
    },
    {
      title: "Favorites",
      icon: <Heart />,
      href: "#favorites",
    },
    {
      title: "Cart",
      icon: <ShoppingCart />,
      href: "#cart",
    },
    {
      title: "Logout",
      icon: <LogOut />,
      href: "#logout",
    },
  ];
  return (
    <section className="py-32">
      <div className="container flex justify-center">
        <FloatingDock
          desktopClassName="
        fixed bottom-4 left-1/2 -translate-x-1/2  "
          mobileClassName="fixed right-6 bottom-6"
          items={tabs}
        />
      </div>
    </section>
  );
};
export { Navbar24 };

// Below is the modified component from Aceternity UI
// Original source: npx shadcn@latest add https://ui.aceternity.com/registry/floating-dock.json
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full z-99 mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-muted-foreground"
                >
                  <div>{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-muted-foreground"
      >
        <PanelBottomOpen />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "z-99 mx-auto hidden h-16 items-center items-end justify-center gap-2 rounded-3xl bg-foreground px-5 md:flex",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const rounded = useSpring(
    useTransform(distance, [-150, 0, 150], [50, 10, 50]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    },
  );

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height, borderRadius: rounded }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center bg-background/10"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-full bg-muted px-4 py-0.5 text-xs whitespace-pre"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-muted-foreground"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
```
