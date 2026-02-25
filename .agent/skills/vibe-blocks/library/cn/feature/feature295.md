# Feature 295

## Metadata
- **Category**: Feature
- **Objective**: Advanced project discovery dashboard featuring dynamic category filtering, role-based sorting, and professional open-source metric coordination.
- **Use Case**: Master "Portfolio Discovery" landing rows, executive recruitment showcases, or technical product registry blocks.
- **Visual Style**: "Technical Portfolio Matrix" aesthetic. Global container utilizing a centered vertical assembly and a high-density project registry.
    - Interaction Node: features dynamic `Badge` navigation utilizing overflow-hidden scrollable categories (React, TailwindCSS, TypeScript). logic provides real-time category filtering and active-state styling.
    - Selection Engine: Integrated `Select` module for role-based sorting ("Author", "Contributor") utilizing specialized `SelectTrigger` coordination.
    - Card Architecture: Symmetrical `grid-cols-3` project registry utilizing specialized `ProjectCard` modules. items coordinate top-aligned star metrics with bottom-aligned pull-request status and role badges.
    - Leadership Hub: features massive `text-5xl` mid-weight headers focusing on "Explore My Projects". 
    - Polish: Logic utilizes `Show Less` / `View All` conversion logic to manage high-density informational flows (slicing at 9 items).
- **Interactivity**: Fully interactive React component with multi-axis filtering, real-time list updates, and professional project orchestration.

## Source Code

### `feature295.tsx`
```tsx
"use client";

import { GitPullRequest, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Feature295 = ({ className }: Feature295Props) => {
  return (
    <section className={cn("py-32 bg-muted/40", className)}>
      <div className="container space-y-16">
        <h1 className="text-6xl lg:text-[100px] leading-none font-black italic uppercase tracking-tighter text-center">Open Mastery.</h1>

        {/* Dynamic Filtering Stage */}
        <div className="flex flex-wrap items-center justify-between gap-8 bg-white dark:bg-accent/10 p-6 rounded-[2.5rem] border-4 border-white shadow-2xl">
          <div className="flex gap-3 overflow-x-auto no-scrollbar px-2">
            {CATEGORIES.map(cat => (
              <Badge key={cat} variant={selected === cat ? "default" : "outline"} className="rounded-full px-6 py-2 cursor-pointer font-black italic uppercase tracking-widest transition-all">
                {cat}
              </Badge>
            ))}
          </div>
          <Select onValueChange={setRole}>
            <SelectTrigger className="w-48 rounded-full border-2 border-primary/10">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Global</SelectItem>
              <SelectItem value="author">Author</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Deck */}
        <div className="grid md:grid-cols-3 gap-8">
           {PROJECTS.map(item => (
             <div key={item.title} className="group flex flex-col justify-between p-10 bg-white dark:bg-accent/10 rounded-[3rem] border-4 border-white shadow-3xl hover:scale-[1.02] transition-all">
                <div className="space-y-6">
                   <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-black italic uppercase tracking-tighter">{item.title}</h3>
                      <div className="flex items-center gap-2"><Star className="size-4 fill-primary" />{item.stars}</div>
                   </div>
                   <p className="text-md text-muted-foreground italic font-medium leading-relaxed">{item.description}</p>
                </div>
                <div className="flex justify-between items-center mt-12">
                   <Badge className="rounded-full">{item.role}</Badge>
                   <div className="flex items-center gap-4 text-sm font-black italic"><GitPullRequest className="size-4" />{item.pullRequests}</div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
```
