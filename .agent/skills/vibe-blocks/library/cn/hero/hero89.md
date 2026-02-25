# Hero 89

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a human-centric recruiting introduction using a split-column layout with a prominent "Pathfinding" arrow SVG visual.
- **Use Case**: Best for job boards, enterprise recruiting platforms (e.g., "TalentLink"), or company culture pages that want to emphasize the "Journey" and "Connection" between employers and applicants.
- **Visual Style**: Relationship-driven modern aesthetic. Features a split-column layout starting with a high-impact left-aligned typography block. The visual anchor is a containerized wide-format product preview (`AspectRatio ratio={1.646... / 1}`) that remains border-less on the right edge (`md:rounded-r-none`) to create a continuous bleed effect. A specialized "Pathfinding" complex `svg` arrow is absolute-positioned to overlap the preview, visually connecting the user to the content.
- **Interactivity**: Static layout. Primary CTA is a large `rounded-full` button to drive immediate job-posting or application flow.

## Source Code

### `hero89.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero89Props {
  className?: string;
}

const Hero89 = ({ className }: Hero89Props) => {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-between gap-16 bg-background py-20 lg:py-40 md:flex-row md:pr-0 md:pl-12 font-sans overflow-hidden",
        className,
      )}
    >
      {/* Recruiting side */}
      <div className="md:w-1/2 relative z-20">
        <div className="mx-auto flex max-w-xl flex-col items-start px-6 lg:px-0">
          <h1 className="mb-6 text-5xl font-black text-pretty lg:text-9xl tracking-tighter leading-[0.85] text-foreground">
            Centered approach to recruiting
          </h1>
          <p className="mb-12 text-xl lg:text-3xl font-medium text-muted-foreground leading-relaxed max-w-lg">
            Share your company&apos;s culture and build genuine applicant connections
            with TalentLink in a digital-first world.
          </p>
          <Button size="lg" className="h-fit rounded-full px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300">
            Begin your first position
          </Button>
        </div>
      </div>
      
      {/* Visual Path Anchor side */}
      <div className="relative w-full md:w-[48%] group">
        <div className="w-full overflow-hidden rounded-l-[3rem] border-y border-l bg-muted shadow-[-50px_50px_100px_-20px_rgba(0,0,0,0.3)] transition-transform duration-1000 group-hover:-translate-x-4">
          <AspectRatio ratio={1920 / 1080}>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="TalentLink platform dashboard"
              className="size-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </AspectRatio>
        </div>
        
        {/* Editorial "Path" SVG visual connector */}
        <svg
          width="176"
          height="101"
          viewBox="0 0 176 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-[-5%] hidden w-[35%] -translate-x-1/2 -translate-y-1/2 stroke-primary lg:inline-block z-30 drop-shadow-2xl"
        >
          <path
            d="M1.99999 50.8332C1.99999 50.8332 8.48154 49.5711 9.14573 49.4947C14.2898 49.213 19.4694 49.4695 24.6043 50.0152C37.6066 51.4638 48.999 56.0419 58.643 65.0309C64.3875 70.4653 67.8497 76.0847 63.3772 83.1592C58.6951 90.4386 47.0166 89.2509 42.7034 81.844C38.6754 74.895 40.4347 61.96 43.414 54.954C47.2004 46.1763 57.4275 39.8604 64.9887 34.6776C87.3379 19.3741 124.604 16.1723 149.791 25.5171C156.851 28.1916 165.814 31.2154 171.185 36.7703"
            strokeWidth="4"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
          />
          <path
            d="M145.52 9.53769C145.644 9.4975 145.849 9.70635 145.89 9.83088C148.559 12.1323 150.894 14.6789 153.354 17.1852C157.864 21.7802 162 26.4957 166.175 31.3357C167.855 33.1311 169.535 34.9266 171.256 36.8465C171.718 37.3175 171.294 37.8589 170.582 37.7504C167.73 37.0196 164.837 36.1643 161.984 35.4336C154.376 33.6227 144.231 32.4911 137.824 38.2643"
            strokeWidth="4"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export { Hero89 };
```
