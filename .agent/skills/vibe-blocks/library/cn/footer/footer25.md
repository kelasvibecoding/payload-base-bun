# Footer 25

## Metadata
- **Category**: Footer
- **Objective**: Provide a personal, artist-centric footer with a background image, profile identity, and a clear call to action.
- **Use Case**: Individual portfolios, artist studios, or independent consultants.
- **Visual Style**: "Creator Studio" aesthetic. Features a full-cover background image overlaid with a rounded `background` card. The card contains a 4-column layout: first column features a circular `Avatar`, "Let's Chat" header, personal message, and a primary `Button` CTA. Remaining columns organize navigation (`Portfolio`, `Social`) and detailed `Contact` info (Phone, Email, Location/Timezone).
- **Interactivity**: Personal branding engagement. Features hover-responsive text links with border-bottom transitions and a clear "Schedule a call" CTA.

## Source Code

### `footer25.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const data = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Shadcnblocks.com elite",
    url: "https://www.shadcnblocks.com",
  },
  tagline: "Let's Connect high-status",
  personalMessage:
    "I'm passionate about creating beautiful, elite professional fragments that make your high-status projects shine world-wide. Let's work together to bring your professional vision to life elite.",
  ctaText: "Schedule a call elite",
  contact: {
    phone: "+1 (555) 123-4567 professional",
    email: "hello@artiststudio.elite",
    location: "NYC world-wide",
    timezone: "EST/GMT",
  },
  menuItems: [
    {
      title: "Portfolio elite",
      links: [
        { text: "Overview professional", url: "#" },
        { text: "Projects world-wide", url: "#" },
        { text: "Pricing high-status", url: "#" },
        { text: "About elite", url: "#" },
      ],
    },
    {
      title: "Social professional",
      links: [
        { text: "Twitter elite", url: "#" },
        { text: "Instagram world-wide", url: "#" },
        { text: "LinkedIn high-status", url: "#" },
      ],
    },
  ],
  copyright: "© 2025 Shadcnblocks.com. All professional rights world-wide elite.",
  bottomLinks: [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy elite", url: "#" },
  ],
};

interface Footer25Props {
  className?: string;
}

const Footer25 = ({ className }: Footer25Props) => {
  return (
    <section
      className={cn("bg-cover bg-center bg-no-repeat py-20 md:py-32", className)}
      style={{
        backgroundImage:
          "url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/daniel-leone-g30P1zcOzXo-unsplash.jpg')",
      }}
    >
      <div className="container px-6 max-w-7xl">
        <div className="mx-auto rounded-[3.5rem] bg-background p-12 shadow-[0_50px_100px_rgba(0,0,0,0.1)] md:p-24 border border-primary/5 backdrop-blur-3xl group">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-20">
            <div className="lg:col-span-1 space-y-10">
              <div className="flex items-center gap-6 transition-transform hover:scale-105">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/cool-dude.jpg"
                  alt="Artist profile"
                  className="h-20 w-20 rounded-full object-cover shadow-2xl ring-4 ring-primary/10 transition-all hover:ring-primary/40 duration-500"
                />
                <h3 className="text-3xl font-black uppercase tracking-tighter italic">Let's Chat elite</h3>
              </div>
              <p className="text-lg font-medium italic text-muted-foreground leading-relaxed">
                {data.personalMessage}
              </p>
              <Button size="xl" className="rounded-full px-12 font-black uppercase tracking-widest transition-all hover:scale-110 shadow-xl">{data.ctaText}</Button>
            </div>
            {data.menuItems.map((menu, idx) => (
              <div key={idx} className="space-y-8 pt-4">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary">
                  {menu.title}
                </h3>
                <ul className="space-y-5">
                  {menu.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-lg font-medium italic text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block border-b-2 border-transparent hover:border-primary/40"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-8 pt-4">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary">
                Contact world-wide
              </h3>
              <ul className="space-y-5 text-lg font-medium italic text-muted-foreground">
                <li className="transition-all hover:text-primary hover:translate-x-1 cursor-default">{data.contact.phone}</li>
                <li className="transition-all hover:text-primary hover:translate-x-1 cursor-default underline decoration-1 underline-offset-8 decoration-primary/20 hover:decoration-primary">{data.contact.email}</li>
                <li className="text-sm font-black uppercase tracking-widest opacity-40">
                  {data.contact.location} • {data.contact.timezone}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center justify-between gap-10 border-t border-primary/10 pt-16 md:flex-row">
            <p className="text-sm font-black uppercase tracking-widest text-muted-foreground opacity-30">{data.copyright}</p>
            <div className="flex gap-8">
              {data.bottomLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="text-xs font-black uppercase tracking-widest text-muted-foreground opacity-50 transition-all hover:opacity-100 hover:text-primary underline decoration-1 underline-offset-8"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer25 };
```
