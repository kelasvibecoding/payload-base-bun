# Hero 195

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a centered introduction for admin and dashboard component libraries, pairing a centered headline with high-fidelity "Tabbed-Interaction" dashboard previews and a unique "Border-Beam" effect.
- **Use Case**: Best for dashboard boilerplate tools, admin panel builders (e.g., "Beautiful blocks for Shadcn UI"), or professional toolsets that want to emphasize "Insights" and "Trends."
- **Visual Style**: Cinematic Dashboard-Tool aesthetic. Features a centered layout beginning with a prominent headline Utilizing specialized `tracking-tighter` typography. Layout uses a unique "Structural Grid" context Pairing specialized absolute-positioned linear-gradient lines with specialized `Tabs` navigation Featuring high-fidelity dashboard icons (`BarChart`, `PieChart`). Visual anchor is a unique "Insight Core" positioned at the bottom Featuring high-fidelity project content Utilizing a specialized `BorderBeam` animated fragment and world-class `box-shadow` to create high-status visual focus.
- **Interactivity**: High interactive storytelling. Features specialized `Tabs` state management paired with high-fidelity project preview transitions driven by animated `BorderBeam` effects.

## Source Code

### `hero195.tsx`
```tsx
"use client";

import {
  BarChart,
  Database,
  Layers,
  PieChart,
  SquareKanban,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface Tab {
  title: string;
  icon: React.ReactNode;
  image: string;
}

export interface Hero195Props {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonUrl?: string;
  tabs?: Tab[];
  className?: string;
}

const defaultTabs: Tab[] = [
  {
    title: "World-class Insights",
    icon: <SquareKanban className="size-4" />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-1.png",
  },
  {
    title: "High-status Metrics",
    icon: <BarChart className="size-4" />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-2.png",
  },
  {
    title: "Global Trends",
    icon: <PieChart className="size-4" />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-3.png",
  },
  {
    title: "Actionable Sources",
    icon: <Database className="size-4" />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-users.png",
  },
  {
    title: "Professional Models",
    icon: <Layers className="size-4" />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-developer.png",
  },
];

const Hero195 = ({
  title = "Beautiful world-class blocks for Shadcn UI.",
  description = "Shadcnblocks.com offers the best collection of high-status components and blocks for professional shadcn/ui builders.",
  primaryButtonText = "Download Now",
  primaryButtonUrl = "https://shadcnblocks.com",
  secondaryButtonUrl = "#",
  secondaryButtonText = "Live Preview",
  tabs = defaultTabs,
  className,
}: Hero195Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.title || "");

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="border-x border-border/40 py-20 lg:py-32 relative group/container">
          
          {/* Dashboard Narrative side */}
          <div className="relative z-20 mx-auto max-w-[70rem] flex flex-col items-center gap-12 text-center text-pretty">
            <h1 className="text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Beautiful world-class <span className="text-primary italic">blocks</span> for Shadcn UI.
            </h1>
            <p className="mx-auto max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Shadcnblocks offers the best collection of world-class high-status 
                components for professional builders world-wide.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
              <Button asChild size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                <a href={primaryButtonUrl}>{primaryButtonText}</a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="h-fit rounded-full bg-background border-2 border-border/40 px-12 py-7 font-black text-xl shadow-xl transition-all hover:bg-muted duration-500 uppercase tracking-widest leading-none">
                <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
              </Button>
            </div>
          </div>

          {/* Unique "Interaction Matrix Anchor" Visual side */}
          <div className="mt-24 lg:mt-32">
            <Tabs defaultValue={tabs[0]?.title} onValueChange={setActiveTab} className="relative z-20 group/tabs">
              <div className="px-2">
                <TabsList className="mx-auto mb-16 flex h-auto w-fit max-w-xs flex-wrap justify-center gap-4 rounded-full bg-muted/40 p-2 backdrop-blur-xl border border-border/40 md:max-w-none">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.title}
                      value={tab.title}
                      className="rounded-full px-8 py-3 font-black uppercase tracking-widest text-xs transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl"
                    >
                        <span className="flex items-center gap-4">
                            {tab.icon}
                            {tab.title}
                        </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <div className="relative isolate mx-auto max-w-[95rem]">
                {/* Atmos Depth layer side */}
                <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full z-[-10] animate-pulse"></div>

                <div className="relative z-10 overflow-hidden rounded-[4rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                  {tabs.map((tab) => (
                    <TabsContent
                      key={tab.title}
                      value={tab.title}
                      className={cn(
                        "mt-0! bg-background p-0 transition-all duration-1000",
                        {
                          "animate-in opacity-100 fade-in zoom-in-95 scale-100":
                            activeTab === tab.title,
                          "opacity-0 scale-95": activeTab !== tab.title,
                        },
                      )}
                    >
                        <div className="relative group/display grayscale hover:grayscale-0 transition-grayscale duration-700">
                            <img
                                src={tab.image}
                                alt={`dashboard performance preview ${tab.title}`}
                                className="aspect-[16/10] w-full object-cover object-top scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent pointer-events-none"></div>
                        </div>
                        <BorderBeam duration={10} size={400} />
                    </TabsContent>
                  ))}
                </div>

                {/* Blueprint Blueprint Fragments side */}
                <span className="absolute -inset-x-20 top-0 -z-10 h-px bg-primary/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
                <span className="absolute -inset-x-20 bottom-0 -z-10 h-px bg-primary/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

                <span className="absolute -inset-x-20 top-20 h-px border-t border-dashed border-primary/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
                <span className="absolute -inset-x-20 bottom-20 h-px border-t border-dashed border-primary/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

                <span className="absolute -inset-y-20 left-[15%] w-px border-r border-dashed border-primary/20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
                <span className="absolute -inset-y-20 right-[15%] w-px border-r border-dashed border-primary/20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
              </div>
            </Tabs>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero195 };
```
