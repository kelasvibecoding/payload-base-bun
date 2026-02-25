# Testimonial 10

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a large-scale, centered "Focal Professional" testimonial block for single high-impact endorsements.
- **Use Case**: Feature highlights, bottom-of-page trust anchors, or "Founder and CTO" spotlights where one voice represents the standard for the community.
- **Visual Style**: Cinematic "Centered Identity" architecture featuring a large-scale font (lg-3xl) for the primary quote. Utilizes a centered identity stack underneath the quote with a large focal avatar (size-16) and left-aligned metadata pairing.
- **Interactivity**: Clean responsive typography scaling and a custom Avatar fallback system for robust identity rendering.

## Description
Testimonial 10 is the "Primary Voice" component. It prioritizes the "Singular Authority" brand archetype by focusing the user's entire ocular attention on one powerful feedback entry. The use of generous padding and large-scale, breathable typography gives the content an authoritative weight, making it feel like a headline rather than secondary feedback. It is the best choice for landing pages that have one specific, well-known user or partner whose endorsement carries significant marketplace weight.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial10Props {
  className?: string;
  quote?: string;
  author?: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
      className?: string;
    };
  };
}

const Testimonial10 = ({
  className,
  quote = "The architectural integrity of these primitives has reduced our system overhead by 70%. It is the most robust full-stack foundation we have ever integrated.",
  author = {
    name: "Sarah Chen",
    role: "Lead Infrastructure Architect, Global Systems",
    avatar: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
      alt: "Author Identity",
    },
  },
}: Testimonial10Props) => {
  return (
    <section className={cn("py-24 md:py-32", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <p className="mb-16 max-w-4xl px-8 text-2xl font-bold italic tracking-tight text-foreground lg:text-4xl leading-snug">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="flex items-center gap-5 md:gap-8">
            <div className="relative group">
                <Avatar className="size-16 md:size-20 border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <AvatarImage src={author.avatar.src} alt={author.avatar.alt} />
                <AvatarFallback className="bg-muted font-bold">{author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 size-5 bg-primary rounded-full border-4 border-background" />
            </div>
            <div className="text-left space-y-1">
              <p className="text-lg font-bold text-foreground leading-none">{author.name}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                {author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial10 };
```
