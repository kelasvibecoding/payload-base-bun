# Projects 4

## Metadata
- **Category**: Projects
- **Objective**: Create a minimalist, masonry-styled project grid layout specifically suited for vector illustrations or distinct product interfaces.
- **Use Case**: B2B software companies, SaaS portfolios, graphic design galleries, or technical case study aggregations.
- **Visual Style**: Clean, well-spaced `grid-cols-1 sm:grid-cols-2`. Uses subtle CSS hover effects (`group-hover:scale-105`) over complex JavaScript animations. The header section splits wide `lg:flex-row lg:items-center` to pull narrative text across the top of the grid.
- **Interactivity**: Strictly CSS-based. Pure image scaling upon hover keeps the component exceptionally lightweight and performant.

## Description
Projects 4 is a workhorse component. Intended to be simple, bulletproof, and extremely fast, it foregoes complex library dependencies and relies on the strength of its CSS grid and typography. It uses a light `bg-accent` wrapper for images, making it perfect for transparent `.svg` or `.png` assets where the container shape creates the framing.

## Source Code

```tsx
import { cn } from "@/lib/utils";

interface Projects4Props {
  className?: string;
}

const Projects4 = ({ className }: Projects4Props) => {
  const projects = [
    {
      id: 1,
      title: "Design Workflow Optimization",
      category: "UI/UX",
      date: "06/20/25",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-browser-window-with-settings-and-design-panels.svg",
    },
    {
      id: 2,
      title: "Seamless Global Access",
      category: "Cloud Tech",
      date: "06/18/25",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-exchange-between-the-user-and-the-global-network.svg",
    },
    {
      id: 3,
      title: "Next Page Loading UI",
      category: "Frontend Dev",
      date: "06/15/25",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-loading-the-next-page.svg",
    },
    {
      id: 4,
      title: "Web Traffic Analytics",
      category: "Data Visualization",
      date: "06/10/25",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-volumetric-analytics-of-different-types-in-web-browsers.svg",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container space-y-16">
        <div className="flex flex-col justify-start gap-5 md:gap-12 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-4xl font-medium md:text-5xl lg:text-7xl">
            Explore Our Projects
          </h1>

          <div className="flex flex-col items-start gap-6 text-left md:flex-row">
            <p className="max-w-xs text-lg font-medium text-muted-foreground">
              A curated collection of visuals showcasing our approach to clean
              design, thoughtful UX, and modern web experiences.
            </p>

            <div className="max-w-xs">
              <span className="font-medium text-foreground">
                Visual Identity
              </span>
              <p className="text-base text-muted-foreground">
                Each project captures a unique story built with precision,
                performance, and purpose.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <img
                src={project.image}
                alt={project.title}
                className="h-96 w-full rounded-lg bg-accent object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium text-muted-foreground">
                    {project.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects4 };
```
