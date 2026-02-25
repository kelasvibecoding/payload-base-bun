# Team 7

## Metadata
- **Category**: Team
- **Objective**: Investor showcase with company affiliations
- **Use Case**: Company investor relations page with investor profiles
- **Visual Style**: Grid-based layout with investor photos and company names
- **Interactivity**: Static display with professional investor presentation

## Description
A professional investor showcase section featuring company investors with their affiliations. Displays investor photos, names, and associated companies in a responsive grid layout. Perfect for company investor relations pages and showcasing key investors and their organizational connections.

## Source Code
```tsx
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Dennis Bouvard",
    company: "Blackbird Ventures",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    name: "Renatus Gerard",
    company: "Center Studies",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
  },
  {
    name: "Leslie Alexander",
    company: "TechNexus",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
  },
  {
    name: "Matthew Stephens",
    company: "Etymol Cap",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
  },
  {
    name: "Josephine Newman",
    company: "Vandenberg",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
  },
];

interface Team7Props {
  className?: string;
}

const Team7 = ({ className }: Team7Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h2 className="text-4xl font-medium tracking-wide text-primary">
          Our investors
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {team.map((investor) => (
            <div key={investor.name} className="">
              <img
                src={investor.image}
                alt={investor.name}
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
              <h3 className="mt-3 font-semibold">{investor.name}</h3>
              <p className="text-muted-foreground">{investor.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team7 };
```
