# Feature 129

## Metadata
- **Category**: Feature
- **Objective**: Integration showcase with centralized pill-style tab navigation and large content blocks.
- **Use Case**: Primary "App Store" integrations, technical ecosystem directories, or partner tool highlights.
- **Visual Style**: "Integration Tab Hub" aesthetic. Centered header with broad typography. Interactive `Tabs` with a pill-shaped `TabsList`. Key layout: each `TabsContent` features a massive `bg-accent` stage with stylized content. Image/Logo placement: a centered `placeholder.svg` is nested inside a white `bg-background` sub-card with a `rounded-t-2xl` design. Includes a high-contrast "Learn more" link in the summary.
- **Interactivity**: Fully interactive `Radix UI` tabs. State-based navigation and visual updates.

## Source Code

### `feature129.tsx`
```tsx
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature129 = ({ className }: Feature129Props) => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-semibold md:text-5xl italic tracking-tighter">Unify Your flow...</h2>
          <p className="text-lg text-muted-foreground italic font-medium">Streamline your processes...</p>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="1" className="mx-auto flex flex-col items-center gap-8" value={activeTab} onValueChange={setActiveTab}>
             <TabsList className="bg-muted p-1 rounded-full border shadow-inner">
                {tabs.map((tab) => (
                  <TabsTrigger key={tab.id} value={tab.id.toString()} className={cn("rounded-full px-6 py-2 transition-all", activeTab === tab.id.toString() && "bg-background shadow-md border")}>
                    {tab.tabName}
                  </TabsTrigger>
                ))}
             </TabsList>
             {/* Content Area */}
             {tabs.map((tab) => (
               <TabsContent key={tab.id} value={tab.id.toString()} className="mt-0 w-full rounded-3xl bg-accent px-14 pt-6 md:px-20 md:pt-8 shadow-xl">
                 <div className="flex flex-col items-center">
                    <div className="mb-8 flex gap-3 items-center">
                       <p className="text-sm italic font-medium">{tab.tabDescription}</p>
                       <a href="#" className="font-bold border-b-2 hover:text-primary transition-colors">Learn more</a>
                    </div>
                    {/* Visual Card */}
                    <div className="flex w-full justify-center bg-background rounded-t-3xl shadow-2xl p-8 border-x border-t">
                       <img src={tab.image} className="max-w-52 md:max-w-64 object-contain grayscale hover:grayscale-0 transition-all" />
                    </div>
                 </div>
               </TabsContent>
             ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature129 };
```
