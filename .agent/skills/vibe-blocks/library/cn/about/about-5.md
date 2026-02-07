# About 5

## Metadata
- **Category**: About
- **Objective**: Developer-focused company intro with funding and tech stack proof.
- **Use Case**: Recruiting or investor-facing company section for tech startups, highlighting tech stacks and fundraising milestones.
- **Visual Style**: Grid-based modular layout.
- **Interactivity**: Static display.

## Description
A professional and clean about section designed for modern web applications.

## Source Code
```tsx
import { cn } from "@/lib/utils";

interface About5Props {
  className?: string;
}

const About5 = ({ className }: About5Props) => {
  return (
    <section className={cn("bg-muted py-32 dark:bg-background", className)}>
      <div className="container">
        <div className="grid gap-14 pb-32 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium">ABOUT US</p>
            <h1 className="mt-4 text-3xl font-medium md:text-4xl">
              Simplifying Complex Workflows with Developer-Focused Solutions
            </h1>
          </div>
          <p className="md:text-lg">
            Our platform provides intuitive solutions for managing and scaling
            projects. We offer seamless integrations, clear abstractions, and
            powerful tools to enhance developer productivity and collaboration
            across teams of all sizes and experience levels.
          </p>
        </div>
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
          alt="placeholder"
          className="ml-auto aspect-video max-h-[550px] rounded-xl object-cover"
        />
        <p className="mt-6 text-center text-xl lg:text-right">
          Committed to removing complexity from development processes
        </p>
        <div className="flex flex-col justify-between gap-14 py-40 lg:flex-row">
          <p className="mx-auto max-w-xl text-center text-2xl lg:mx-0 lg:text-left">
            We are a team of passionate developers, designers, and
            entrepreneurs.
          </p>
          <div className="grid shrink-0 grid-cols-2 items-center gap-6 md:grid-cols-4">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg"
              alt="logo"
              className="mx-auto max-h-6 md:mx-0 dark:invert"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg"
              alt="logo"
              className="mx-auto max-h-9 md:mx-0 dark:invert"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-light.svg"
              alt="logo"
              className="mx-auto max-h-7 md:mx-0 md:max-h-9 dark:hidden"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-dark.svg"
              alt="logo"
              className="mx-auto hidden max-h-7 md:mx-0 md:max-h-9 dark:block"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg"
              alt="logo"
              className="mx-auto max-h-9 md:mx-0 dark:hidden"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark-dark.svg"
              alt="logo"
              className="mx-auto hidden max-h-9 md:mx-0 dark:block"
            />
          </div>
        </div>
        <div className="grid gap-14 lg:grid-cols-4 xl:grid-cols-5">
          <div className="md:col-span-2 xl:col-span-3">
            <h2 className="mb-10 text-4xl font-medium">Why We Began</h2>
            <p className="text-lg">
              We&apos;ve seen firsthand the challenges developers face with
              complex infrastructures. Instead of redoing the same work, we
              wanted to create a system that simplifies the entire workflow from
              start to finish and allows developers to focus on what they do
              best. Our platform is designed to help teams collaborate and scale
              projects efficiently.
              <br />
              <br />
              Our mission is to provide developers with the tools they need to
              build and scale projects efficiently. We believe that by removing
              the barriers to entry.
              <br />
              <br />
              collaboration and productivity, we can help teams focus on what
              they do best: creating amazing products.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 text-center">
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-background bg-card p-6">
                <span className="text-2xl md:text-4xl">2024</span>
                <span className="text-sm text-muted-foreground md:text-lg">
                  Launched
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-background bg-card p-6">
                <span className="text-2xl md:text-4xl">$2.2M</span>
                <span className="text-sm text-muted-foreground md:text-lg">
                  Pre-Seed Round
                </span>
              </div>
            </div>
          </div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
            alt="placeholder"
            className="rounded-xl md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export { About5 };

```
