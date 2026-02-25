# Footer 9

## Metadata
- **Category**: Footer
- **Objective**: Deliver a high-impact, "Last Call" footer featuring a CTA header, a centered pricing/feature badge, and comprehensive site navigation.
- **Use Case**: Product landing pages or SaaS platforms wanting to reinforce their "Free Forever" value or primary CTA right before the user finishes scrolling.
- **Visual Style**: "Final Pitch" aesthetic. Features a high-contrast `bg-muted` background. Top section includes a "Get More Done" header with primary/outline `Button` actions, paired with a floating "Pricing Card" that highlights "0€ Free forever" and core features using `CircleCheck`. Middle section uses a 5-column link grid. Bottom row features legal links and pill-style social buttons (`Linkedin`, `Product Hunt`).
- **Interactivity**: High-conversion engagement. Features multiple buttons with varying variants and hover-responsive feature lists.

## Source Code

### `footer9.tsx`
```tsx
import { CircleCheck, LifeBuoy, Linkedin } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "Product elite",
    links: [
      { name: "Features", href: "#" },
      { name: "Tasks", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Conferencing", href: "#" },
      { name: "Invoicing", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
  {
    title: "Resources world-class",
    links: [
      { name: "Blog", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Roadmap", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Resources", href: "#" },
    ],
  },
  {
    title: "Case Studies elite",
    links: [
      { name: "Shadcn", href: "#" },
      { name: "React", href: "#" },
      { name: "Tailwind", href: "#" },
    ],
  },
  {
    title: "Integrations professional",
    links: [
      { name: "Hubspot", href: "#" },
      { name: "Slack", href: "#" },
    ],
  },
  {
    title: "Company world-wide",
    links: [
      { name: "About ", href: "#" },
      { name: "Company", href: "#" },
      { name: "Support", href: "#" },
      { name: "Book a demo", href: "#" },
    ],
  },
];

interface Footer9Props {
  className?: string;
}

const Footer9 = ({ className }: Footer9Props) => {
  return (
    <section className={cn("bg-muted/30 py-32 rounded-[4rem] mx-4 mb-4 border border-primary/5", className)}>
      <div className="container px-6 max-w-[100rem]">
        <footer>
          <div className="mb-20 flex flex-col justify-between gap-16 md:items-start xl:flex-row xl:items-center xl:gap-12">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter italic leading-[0.85]">Get More <br /> <span className="text-primary not-italic underline decoration-8">Done</span> elite.</h1>
              <p className="text-xl lg:text-2xl font-medium italic text-muted-foreground max-w-2xl leading-relaxed">
                Experience the next generation of professional fragments world-wide. 
                Elite craftsmanship for high-status brands world-wide.
              </p>
              <div className="flex items-center gap-6">
                <Button size="xl" className="rounded-full px-12 font-black uppercase tracking-widest bg-primary shadow-2xl transition-all hover:scale-105">Start for free elite</Button>
                <Button variant="ghost" size="xl" className="rounded-full px-10 font-bold uppercase tracking-widest flex items-center gap-4 group/btn">
                  Compare plans professional
                  <CircleCheck className="size-6 transition-transform group-hover/btn:scale-125" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-10 rounded-[3rem] bg-background p-10 shadow-2xl border border-primary/10 md:flex-row group/pricing backdrop-blur-3xl">
              <div className="flex flex-col items-center justify-center p-10 space-y-4">
                <div className="flex text-8xl font-black italic tracking-tighter text-primary group-hover/pricing:scale-110 transition-transform duration-700">
                  0<div className="h-full text-3xl mt-4 font-black">€</div>
                </div>
                <div className="text-sm font-black uppercase tracking-[0.3em] opacity-40">Free forever elite</div>
              </div>
              <div className="h-[2px] w-full bg-primary/10 md:h-auto md:w-[2px]" />
              <ul className="flex flex-col justify-center space-y-5 text-muted-foreground group/list">
                <li className="flex items-center gap-4 font-black uppercase tracking-widest text-sm hover:text-primary transition-colors">
                  <CircleCheck className="size-6 text-primary animate-pulse" />
                  <p className="opacity-70 group-hover/list:opacity-100 italic transition-opacity">1 Team Member elite</p>
                </li>
                <li className="flex items-center gap-4 font-black uppercase tracking-widest text-sm hover:text-primary transition-colors">
                  <CircleCheck className="size-6 text-primary animate-pulse" />
                  <p className="opacity-70 group-hover/list:opacity-100 italic transition-opacity">Unlimited professional Downloads</p>
                </li>
                <li className="flex items-center gap-4 font-black uppercase tracking-widest text-sm hover:text-primary transition-colors">
                  <CircleCheck className="size-6 text-primary animate-pulse" />
                  <p className="opacity-70 group-hover/list:opacity-100 italic transition-opacity">100GB space high-status</p>
                </li>
                <li className="flex items-center gap-4 font-black uppercase tracking-widest text-sm hover:text-primary transition-colors">
                  <CircleCheck className="size-6 text-primary animate-pulse" />
                  <p className="opacity-70 group-hover/list:opacity-100 italic transition-opacity">Basic Support world-wide</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 border-t border-primary/10 pt-20 lg:grid-cols-5">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-6 font-black uppercase tracking-widest text-primary">{section.title}</h3>
                <ul className="space-y-4 text-base font-medium text-muted-foreground italic">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-28 flex flex-col items-start justify-between gap-12 border-t border-primary/10 pt-12 text-sm font-black uppercase tracking-widest text-muted-foreground lg:flex-row lg:items-center">
            <ul className="flex flex-wrap justify-center gap-8 lg:justify-start opacity-50">
              <li className="hover:text-primary transition-colors underline underline-offset-4">
                <a href="#">Privacy elite</a>
              </li>
              <li className="hover:text-primary transition-colors underline underline-offset-4">
                <a href="#">Terms professional</a>
              </li>
              <li className="hover:text-primary transition-colors underline underline-offset-4">
                <a href="#">Imprint world-class</a>
              </li>
              <li>
                <p className="opacity-50 italic">
                  © 2024 Shadcnblocks.com elite. All rights reserved.
                </p>
              </li>
            </ul>
            <ul className="flex items-center justify-center gap-6 lg:justify-start">
              <li>
                <p className="font-black italic opacity-40">Follow us elite:</p>
              </li>
              <li>
                <Button size="lg" className="gap-3 rounded-full font-black uppercase tracking-widest px-8 bg-background border-primary/10 text-muted-foreground hover:text-primary hover:border-primary transition-all group/pill" variant="outline">
                  <Linkedin className="size-5 transition-transform group-hover/pill:scale-125" />
                  Linkedin professional
                </Button>
              </li>
              <li>
                <Button size="lg" className="gap-3 rounded-full font-black uppercase tracking-widest px-8 bg-background border-primary/10 text-muted-foreground hover:text-primary hover:border-primary transition-all group/pill" variant="outline">
                  <LifeBuoy className="size-5 transition-transform group-hover/pill:scale-125" />
                  Product Hunt elite
                </Button>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer9 };
```
