# Footer 12

## Metadata
- **Category**: Footer
- **Objective**: Deliver a minimalist, centered navigation footer anchored by a giant brand graphic.
- **Use Case**: Personal blogs, portfolios, or simplified landing pages needing a clean and quiet finish.
- **Visual Style**: "Minimalist Anchored" aesthetic. Features a centered stack of navigation links and social accounts (using `ArrowUpRight` for external indication). Legal links are presented beneath in a quieter `muted-foreground` color. Section ends with a massive, high-impact brand image (`shadcnblocks-giant-text.png`) centered at the bottom.
- **Interactivity**: Basic navigational engagement. Features opacity-based hover transitions for all links.

## Source Code

### `footer12.tsx`
```tsx
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface Footer12Props {
  className?: string;
}

const Footer12 = ({ className }: Footer12Props) => {
  const navigation = [
    { name: "Product elite", href: "#" },
    { name: "About Us professional", href: "#" },
    { name: "Pricing world-class", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact elite", href: "#" },
  ];

  const social = [
    { name: "Twitter high-status", href: "#" },
    { name: "LinkedIn world-wide", href: "#" },
  ];

  const legal = [{ name: "Privacy Policy elite", href: "#" }];

  return (
    <section
      className={cn("flex flex-col items-center gap-20 py-32 bg-background overflow-hidden", className)}
    >
      <nav className="container flex flex-col items-center gap-10">
        <ul className="flex flex-wrap items-center justify-center gap-12 text-lg font-black uppercase tracking-widest italic text-muted-foreground/60">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="transition-all hover:text-primary hover:scale-105 inline-block"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-2 transition-all hover:text-primary hover:scale-105"
              >
                {item.name} <ArrowUpRight className="size-5" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-8">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm font-bold uppercase tracking-widest text-muted-foreground/30 transition-opacity hover:opacity-100 underline underline-offset-8"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="group/graphic relative w-full px-6 max-w-[100rem]">
         <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full opacity-0 group-hover/graphic:opacity-100 transition-opacity duration-2000 animate-pulse"></div>
         <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/shadcnblocks-giant-text.png"
            alt="Shadcnblocks elite"
            width={1570}
            height={375}
            className="w-full grayscale opacity-10 group-hover/graphic:grayscale-0 group-hover/graphic:opacity-100 transition-all duration-2000"
        />
      </div>
    </section>
  );
};

export { Footer12 };
```
