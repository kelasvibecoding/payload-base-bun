# Testimonial 27

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a comprehensive "Success Hub" combining both qualitative quotes (testimonials) and highly visual, quantitative results (case studies) in a single unified block.
- **Use Case**: Master product pages, "Customers" pages, or high-intent B2B sections where users need to see both "what people think" and "what we achieved."
- **Visual Style**: Complex "Split-Metric" architecture. 
  - **Upper Grid**: A 2-column layout for standard testimonials (`Card` style) featuring the quote, author identity, and a right-aligned company logo (`opacity-80`).
  - **Lower Grid**: A 3-column layout for "Case Studies", rendered as large aspect-square cards (`aspect-square`). These cards feature a high-fidelity background image (with an `opacity-20` overlay mask) and massive typographic data points (e.g., "10x", "80%").
- **Interactivity**: Dynamic hover states on Case Study cards where the background image scales up (`group-hover:scale-105`) and the text dynamically inversions color (`group-hover:text-background`) to maintain contrast as the mask lightens.

## Description
Testimonial 27 is the "Comprehensive Proof" component. It prioritizes the "Full Spectrum Validation" brand archetype by addressing both types of buyers: emotional buyers (who want to read quotes) and logical buyers (who need to see hard numbers). The transition from the subdued gray testimonial cards to the highly photographic, metric-driven case study cards creates incredible visual pacing. It is the ultimate choice for converting enterprise leads who require extensive justification before engaging.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    quote: "The modularity is what sold us. Having all the FBA primitives in one place simplifies our state routing and is 10x more intuitive than custom building.",
    link: "#",
    author: {
      name: "Sarah Williams",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      role: "CTO, Next Architecture",
    },
    company: {
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
      name: "Next.js",
    },
  },
  {
    quote: "This system seamlessly integrates into our Payload backend, eliminating the need for complex type synchronization between the frontend and CMS.",
    link: "#",
    author: {
      name: "John Doe",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      role: "Lead Systems Engineer",
    },
    company: {
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      name: "Supabase",
    },
  },
];

const CASE_STUDIES = [
  {
    title: "How we Achieved 10x Build Efficiency",
    link: "#",
    stats: [
      {
        number: "10x",
        text: "Velocity increase",
      },
    ],
    author: {
      name: "John Doe",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      role: "Head of Infrastructure",
    },
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
  },
  {
    title: "Reducing Initial Load by 80%",
    link: "#",
    stats: [
      {
        number: "80%",
        text: "Less hydration data",
      },
    ],
    author: {
      name: "Jane Smith",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      role: "Performance Director",
    },
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
  },
  {
    title: "From Prototype to Production ready",
    link: "#",
    stats: [
      {
        number: "14",
        text: "Days to launch",
      },
    ],
    author: {
      name: "John Doe",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      role: "Founding Engineer",
    },
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/kevin-charit-1fL2Q1JcbNc-unsplash.jpg",
  },
];

interface AuthorProps {
  image: string;
  name: string;
  role: string;
}

const Author = ({ image, name, role }: AuthorProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-11 rounded-full border-2 border-background shadow-md">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="font-bold">{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-0.5">
        <div className="text-sm font-bold text-foreground leading-none">{name}</div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-primary/70 italic mt-1">{role}</div>
      </div>
    </div>
  );
};

interface Testimonial27Props {
  className?: string;
}

const Testimonial27 = ({ className }: Testimonial27Props) => {
  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container px-4 md:px-6 flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl uppercase leading-none text-foreground">
              Validated Execution
            </h2>
            <div className="max-w-[40rem]">
              <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                Transform system stability with smarter FBA routing, zero hydration errors,
                and incredibly rapid scaling architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Standard Testimonials */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between gap-10 rounded-[2rem] bg-card/40 border border-border/50 p-10 shadow-xl shadow-black/5 hover:bg-card/80 transition-colors group"
            >
              <div className="flex flex-col gap-6">
                <p className="text-2xl leading-snug font-bold text-foreground/90 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-dashed border-border/50">
                <Author
                  image={testimonial.author.image}
                  role={testimonial.author.role}
                  name={testimonial.author.name}
                />
                <div className="w-24 shrink-0 transition-opacity opacity-40 group-hover:opacity-100 dark:invert">
                  <img
                    className="w-full object-contain object-center"
                    src={testimonial.company.logo}
                    alt={testimonial.company.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Case Studies */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((caseStudy, index) => (
            <a
              key={index}
              href={caseStudy.link}
              className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-[2rem] bg-card shadow-2xl shadow-black/10 transition-all duration-500 hover:scale-[1.02] border border-border/50"
            >
                {/* Background Layer */}
                <div className="absolute inset-0 bg-black/80 z-0 transition-opacity group-hover:bg-black/40" />
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay transition-all duration-700 group-hover:scale-110 group-hover:opacity-60 z-0"
                    style={{ backgroundImage: `url(${caseStudy.background})` }}
                />
              
              {/* Content Layer */}
              <div className="relative flex flex-col gap-3 z-10 p-10 mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="text-6xl font-bold tracking-tighter text-white transition-transform duration-500 group-hover:-translate-y-2">
                  {caseStudy.stats[0].number}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 transition-transform duration-500 group-hover:-translate-y-2">
                  {caseStudy.stats[0].text}
                </p>
              </div>
              
              <div className="relative flex flex-col gap-6 z-10 p-10 pt-0">
                <p className="text-2xl leading-none font-bold text-white transition-colors duration-300">
                  {caseStudy.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial27 };
```
