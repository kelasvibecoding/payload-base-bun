# Hero 127

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a modern marketing introduction for specialized degrees, pairing a split-column layout with a prominent "Activity Success" stat block.
- **Use Case**: Best for educational platforms, podcasting degrees, or professional certification hubs that want to emphasize "Grow your audience" and "Market distribution."
- **Visual Style**: Academic modern aesthetic. Features a split-column layout with a high-impact typography block using specialized `primary/50` text opacity to highlight key value propositions ("World's best"). The right column is an editorial stat block featuring "Active Users" and "Episodes" metrics paired with a custom `Avatars` group. Avatars use a unique `border-2 border-black` inner ring effect (`before:` absolute pseudo-element) to create a high-fidelity "Framed" portrait look. Includes a prominent social-proof notification badge (`Badge` inside `Button`).
- **Interactivity**: Static layout with hover-state refinement. Feature badges use `primary/10` background tints. Avatars feature a dedicated "Add" button with a specialized `border-2 border-white` inner ring to match the visual language.

## Source Code

### `hero127.tsx`
```tsx
import { ChevronRight, Mail, MoveRight, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type avatar = {
  avatar: string;
  alt: string;
  avatarFallback: string;
};

interface AvatarsProps {
  avatars?: Array<avatar>;
  className?: string;
}

function Avatars({ avatars, className }: AvatarsProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {avatars &&
        avatars.map(({ avatar, alt, avatarFallback }, i) => (
          <Avatar
            key={`avatar-hero-${i}`}
            className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-4 border-background shadow-xl before:absolute before:inset-1 before:rounded-full before:border-2 before:border-primary/20 before:bg-transparent before:content-['']"
          >
            <AvatarImage
              src={avatar}
              alt={alt}
              className="h-full w-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
            />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
        ))}
      <div className="relative flex h-16 w-16 overflow-hidden rounded-full bg-primary border-4 border-background shadow-xl before:absolute before:inset-1 before:rounded-full before:border-2 before:border-white/20 before:bg-transparent before:content-[''] transition-transform hover:scale-110">
        <Plus className="m-auto h-6 w-6 stroke-white" strokeWidth={3} />
      </div>
    </div>
  );
}

interface Hero127Props {
  className?: string;
}

const Hero127 = ({ className }: Hero127Props) => {
  const avatars: Array<avatar> = [
    {
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "user 1",
      avatarFallback: "U1",
    },
    {
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      alt: "user 2",
      avatarFallback: "U2",
    },
    {
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      alt: "user 3",
      avatarFallback: "U3",
    },
    {
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      alt: "user 4",
      avatarFallback: "U4",
    },
  ];

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b", className)}>
      <div className="container relative z-10 px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-24 lg:gap-32">
          
          {/* Marketplace Narrative side */}
          <div className="flex w-full flex-col gap-12 lg:w-3/5">
            {/* Context Notification Badge */}
            <Button
              asChild
              variant="ghost"
              className="flex w-fit gap-4 rounded-full border border-border/50 bg-muted/30 p-1.5 pr-6 hover:bg-muted/50 transition-all shadow-sm group"
            >
              <a href="#">
                <Badge className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary shadow-inner">
                  <Mail className="size-4 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest">News</span>
                </Badge>
                <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                  Check our new features
                  <MoveRight className="size-4 transition-transform group-hover:translate-x-2" />
                </div>
              </a>
            </Button>
            
            <h1 className="text-6xl font-black lg:text-[8.5rem] tracking-tighter leading-[0.85] text-pretty">
              Introducing the <span className="text-primary/40 block">world&apos;s best</span> <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-8 italic">marketing</span> degree.
            </h1>
            
            <div className="flex flex-col items-center gap-6 md:flex-row mt-6">
              <Button
                asChild
                size="lg"
                className="h-fit w-full sm:w-fit items-center gap-4 rounded-full px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105"
              >
                <a href="#">
                  <span>Get started now</span>
                  <ChevronRight className="size-6! stroke-white" strokeWidth={3} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-fit w-full sm:w-fit items-center gap-4 rounded-full px-12 py-7 font-bold text-xl border-2 shadow-xl hover:bg-muted"
              >
                <a href="#">
                  <Mail className="size-6 transition-transform group-hover:rotate-12" />
                  <span>Request Access</span>
                </a>
              </Button>
            </div>
          </div>
          
          {/* Performance Verification side */}
          <div className="lg:w-2/5 lg:self-end">
            <div className="flex flex-col gap-12 border-t-8 border-primary/20 pt-12">
              <p className="text-2xl lg:text-4xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/10 pl-8">
                &quot;Grow your audience with the top podcasting tool on the
                market—create, distribute, and monetize every show effortlessly.&quot;
              </p>
              
              <div className="flex flex-col gap-12 md:flex-row lg:flex-col p-10 bg-muted/30 rounded-[3rem] border border-border/40 shadow-inner">
                <div className="flex items-center gap-16">
                  <div className="group">
                    <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60 mb-2">Active Users</p>
                    <div className="text-5xl lg:text-7xl font-black text-primary tracking-tighter transition-transform group-hover:scale-105 duration-500">24 K+</div>
                  </div>
                  <div className="group">
                    <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60 mb-2">Episodes</p>
                    <div className="text-5xl lg:text-7xl font-black text-primary tracking-tighter transition-transform group-hover:scale-105 duration-500">43 K+</div>
                  </div>
                </div>
                <Avatars avatars={avatars} />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero127 };
```
