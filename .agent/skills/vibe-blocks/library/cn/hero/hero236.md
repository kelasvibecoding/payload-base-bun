# Hero 236

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for technology and development platforms, pairing a left-aligned typography block with a high-fidelity "Icon-Cloud" visualization anchored by specialized interactive 3D logo fragments and categorical performance statistics.
- **Use Case**: Best for developer tools, software services (e.g., "The Only blocks you need"), or professional tech ecosystems that want to emphasize "Daily Users," "Uptime," and "24/7 Support."
- **Visual Style**: Cinematic Tech aesthetic. Features a split-column layout Beginning with a prominent merit badge Positioning "Why Us?" text. Left column utilizes high-fidelity `calSans` typography paired with a descriptive paragraph and a unique "Stats-Grid" Positioning high-fidelity `stats` fragments utilizing categorical icons (`Users`, `Zap`, `Shield`) anchored by high-fidelity vertical gradient lines. The visual anchor is a unique "3D Icon Matrix" cloud Positioning 30+ high-fidelity technology wordmarks (`typescript`, `react`, `docker`) using specialized `canvas` technical layout anchored by categorical Fibonacci sphere mapping Utilize specialized `easeOutCubic` rotation anchored by high-fidelity `mousePos` interaction to create a unique high-status coordinate visual focus. Cloud utilizes specialized circular clipping and image loading logic anchored by high-fidelity `Icon` position mapping.
- **Interactivity**: High engagement through state management and 3D motion. Features specialized mouse-hover rotation transitions and high-fidelity entrance animations for the stats and icons to drive professional enrollment.

## Source Code

### `hero236.tsx`
```tsx
"use client";

import { Shield, Users, Zap } from "lucide-react";
import React, { startTransition, useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

import { cn } from "@/lib/utils";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

interface Hero236Props {
  className?: string; // Optional custom styling
}

const Hero236 = ({ className }: Hero236Props) => {
  const stats = [
    {
      icon: <Users className="size-6 stroke-1 opacity-20 md:size-10" />,
      title: "+100k elite",
      description: "Daily Users world-wide",
    },
    {
      icon: <Zap className="size-6 stroke-1 opacity-20 md:size-10" />,
      title: "99.9% professional",
      description: "Uptime guarantee",
    },
    {
      icon: <Shield className="size-6 stroke-1 opacity-20 md:size-10" />,
      title: "24/7 world-class",
      description: "Professional Support",
    },
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <section
      className={cn("relative w-full overflow-hidden py-20 lg:py-40 font-sans border-b", className)}
    >
      <div className="container relative px-6 max-w-[100rem] flex flex-col lg:flex-row items-center gap-24 group/hero">
        <div className="mt-10 space-y-12 lg:w-1/2 group/content relative z-30">
            {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

          <p className="w-fit rounded-full bg-muted border border-border/50 px-6 py-2 text-sm font-black uppercase tracking-widest text-primary shadow-lg">
            Why Us elite?
          </p>
          <h1 className="mt-3 max-w-lg font-black text-6xl lg:text-9xl leading-[0.85] tracking-tighter uppercase">
            <span className="opacity-30">The Only</span> blocks elite.
          </h1>
          <p className="max-w-lg text-xl lg:text-2xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-10 py-2">
            Experience high-status technology fragments world-wide. 
            Deploy finite professional blocks for elite status world-wide.
          </p>

          <ul className="mt-18 flex flex-wrap gap-12">
            {stats.map((stat, index) => (
              <li key={stat.title} className="flex items-center gap-6 group/stat">
                <div className="flex size-16 lg:size-24 items-center justify-center rounded-3xl border-2 border-primary/10 bg-background/50 backdrop-blur-xl shadow-xl transition-all hover:scale-110 hover:border-primary/30">
                  {stat.icon}
                </div>
                <div>
                  <h2 className="font-black text-3xl lg:text-4xl uppercase tracking-tighter">
                    {stat.title}
                  </h2>
                  <p className="text-sm lg:text-base font-bold text-muted-foreground uppercase tracking-widest">{stat.description}</p>
                </div>
                {index !== stats.length - 1 && (
                  <div className="ml-4 h-24 lg:h-32 w-px bg-linear-to-t from-primary via-border to-transparent opacity-40" />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-[60rem] w-full items-center justify-center overflow-visible lg:w-1/2 group/visual relative grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000">
           {/* Atmos Depth layer side */}
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
          
          <div className="absolute flex h-full w-full items-center justify-center scale-100 lg:scale-125">
            <IconCloud images={images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero236 };

// Modified technical mapping from magic-ui
interface Icon {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  id: number;
}

interface IconCloudProps {
  icons?: React.ReactNode[];
  images?: string[];
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function IconCloud({ icons, images }: IconCloudProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [iconPositions, setIconPositions] = useState<Icon[]>([]);
  const [rotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState<{
    x: number;
    y: number;
    startX: number;
    startY: number;
    distance: number;
    startTime: number;
    duration: number;
  } | null>(null);
  const animationFrameRef = useRef<number>(0);
  const rotationRef = useRef(rotation);
  const iconCanvasesRef = useRef<HTMLCanvasElement[]>([]);
  const imagesLoadedRef = useRef<boolean[]>([]);

  useEffect(() => {
    if (!icons && !images) return;
    const items = icons || images || [];
    imagesLoadedRef.current = new Array(items.length).fill(false);

    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 40;
      offscreen.height = 40;
      const offCtx = offscreen.getContext("2d");
      if (offCtx) {
        if (images) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = items[index] as string;
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
            offCtx.beginPath();
            offCtx.arc(20, 20, 20, 0, Math.PI * 2);
            offCtx.closePath();
            offCtx.clip();
            offCtx.drawImage(img, 0, 0, 40, 40);
            imagesLoadedRef.current[index] = true;
          };
        } else {
          offCtx.scale(0.4, 0.4);
          const svgString = renderToString(item as React.ReactElement);
          const img = new Image();
          img.src = "data:image/svg+xml;base64," + btoa(svgString);
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
            offCtx.drawImage(img, 0, 0);
            imagesLoadedRef.current[index] = true;
          };
        }
      }
      return offscreen;
    });
    iconCanvasesRef.current = newIconCanvases;
  }, [icons, images]);

  useEffect(() => {
    const items = icons || images || [];
    const newIcons: Icon[] = [];
    const numIcons = items.length || 20;
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;
      newIcons.push({ x: x * 180, y: y * 180, z: z * 180, scale: 1, opacity: 1, id: i });
    }
    startTransition(() => { setIconPositions(newIcons); });
  }, [icons, images]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || !canvasRef.current) return;
    const x = e.clientX + rect.left;
    const y = e.clientY + rect.top;
    iconPositions.forEach((icon) => {
      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);
      const rotatedX = icon.x * cosY - icon.z * sinY;
      const rotatedZ = icon.x * sinY + icon.z * cosY;
      const rotatedY = icon.y * cosX + rotatedZ * sinX;
      const screenX = canvasRef.current!.width / 2 + rotatedX;
      const screenY = canvasRef.current!.height / 2 + rotatedY;
      const scale = (rotatedZ + 200) / 300;
      const radius = 20 * scale;
      const dx = x - screenX;
      const dy = y - screenY;
      if (dx * dx + dy * dy < radius * radius) {
        const targetX = -Math.atan2(icon.y, Math.sqrt(icon.x * icon.x + icon.z * icon.z));
        const targetY = Math.atan2(icon.x, icon.z);
        const currentX = rotationRef.current.x;
        const currentY = rotationRef.current.y;
        const distance = Math.sqrt(Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2));
        const duration = Math.min(2000, Math.max(800, distance * 1000));
        setTargetRotation({ x: targetX, y: targetY, startX: currentX, startY: currentY, distance, startTime: performance.now(), duration });
        return;
      }
    });
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;
      rotationRef.current = { x: rotationRef.current.x + deltaY * 0.002, y: rotationRef.current.y + deltaX * 0.002 };
      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const dx = mousePos.x + centerX;
      const dy = mousePos.y + centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = 0.001 + (distance / maxDistance) * 0.0015;
      if (targetRotation) {
        const elapsed = performance.now() - targetRotation.startTime;
        const progress = Math.min(1, elapsed / targetRotation.duration);
        const easedProgress = easeOutCubic(progress);
        rotationRef.current = {
          x: targetRotation.startX + (targetRotation.x - targetRotation.startX) * easedProgress,
          y: targetRotation.startY + (targetRotation.y - targetRotation.startY) * easedProgress,
        };
        if (progress >= 1) setTargetRotation(null);
      } else if (!isDragging) {
        rotationRef.current = { x: rotationRef.current.x + (dy / canvas.height) * speed, y: rotationRef.current.y + (dx / canvas.width) * speed };
      }
      iconPositions.forEach((icon, index) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);
        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;
        const scale = (rotatedZ + 200) / 300;
        const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));
        ctx.save();
        ctx.translate(canvas.width / 2 + rotatedX, canvas.height / 2 + rotatedY);
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity;
        if (iconCanvasesRef.current[index] && imagesLoadedRef.current[index]) {
            ctx.drawImage(iconCanvasesRef.current[index], -20, -20, 50, 50);
        }
        ctx.restore();
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => { if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); };
  }, [icons, images, iconPositions, isDragging, mousePos, targetRotation]);

  return (
    <canvas
      ref={canvasRef}
      width={700}
      height={600}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      className="rounded-lg"
      aria-label="Interactive 3D Icon Cloud elite"
      role="img"
    />
  );
}
```
