# Animated Tooltip

## Metadata
- **Category**: UI Elements / Interaction
- **Objective**: Create an engaging, physics-based tooltip that tracks cursor movement to display rich metadata.
- **Use Case**: Often applied to a dense row of user avatars (like "Used by", team members, or contributors) where showing details statically would take too much space.
- **Visual Style**: The tooltip itself is a dark, rounded container (`bg-black z-50 shadow-xl px-4 py-2 border border-white/[0.1]`) featuring a stylized bottom glowing gradient line. It renders a title and a subtitle. The target image (e.g., avatar) has a subtle scale and border effect on hover.
- **Interactivity**: Deeply interactive. Uses `framer-motion` (`useMotionValue`, `useSpring`, `useTransform`) to continuously map the mouse's exact horizontal (`x`) position across the target image into corresponding `rotate` and `translateX` physics-spring values for the floating tooltip, making it sway and follow the cursor fluidly.

## Source Code

```tsx
"use client";

import React, { useState } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";

import { cn } from "@/lib/utils";

export interface AnimatedTooltipItem {
    id: number;
    name: string;
    designation: string;
    image: string;
}

export const AnimatedTooltip = ({
    items,
    className,
}: {
    items: AnimatedTooltipItem[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);

    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );

    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );

    const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
        const halfWidth = event.currentTarget.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth);
    };

    return (
        <div className={cn("flex flex-row items-center", className)}>
            {items.map((item) => (
                <div
                    className="-mr-4 relative group"
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="popLayout">
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 border border-white/[0.1]"
                            >
                                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                                <div className="font-bold text-white relative z-30 text-base">
                                    {item.name}
                                </div>
                                <div className="text-white text-xs">{item.designation}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <motion.img
                        onMouseMove={handleMouseMove}
                        height={100}
                        width={100}
                        src={item.image}
                        alt={item.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="group-hover:scale-105 group-hover:z-30 border-2 border-background object-cover !m-0 !p-0 object-top rounded-full h-10 w-10 relative transition duration-500"
                    />
                </div>
            ))}
        </div>
    );
};
```
