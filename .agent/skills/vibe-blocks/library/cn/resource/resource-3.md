# Resource 3

## Metadata
- **Category**: Resource
- **Objective**: Provide a professional document preview or agreement template with integrated context sidebars.
- **Use Case**: Legal templates, service agreements, professional frameworks, or document summaries where a persistent "Key Features" and "Reviewer" context is required to build authority.
- **Visual Style**: Clean, structured layout with integrated Breadcrumb navigation, a detailed primary document column, and a sticky "Document Context" block featuring an excerpt, verified reviewer bio, and bulleted USP checkmarks.
- **Interactivity**: Sticky sidebar functionality for persistent context while reading, alongside clear visual separators for professional demarcations.

## Description
Resource 3 is the "Professional Standards" template. It prioritizes authority and clarity, making it the perfect choice for legal agreements, professional frameworks, or any high-stakes document where the "Reviewer" and "Key Features" are as important as the text itself. The inclusion of a large "Download" CTA in the sticky sidebar ensures that the primary conversion path (obtaining the document) is never lost during navigation.

## Source Code

```tsx
"use client";

import {
  CheckCircle2,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Resource3Props {
  className?: string;
}

const Resource3 = ({ className }: Resource3Props) => {
  return (
    <section className={cn("py-32 bg-background font-sans", className)}>
      <div className="container max-w-6xl">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hover:text-primary">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hover:text-primary font-medium">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold text-foreground">Resources</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="mt-10 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
          Professional Service Agreement
        </h1>

        <div className="relative mt-16 grid gap-16 md:grid-cols-12">
          {/* Article Section */}
          <article className="order-2 md:col-span-12 lg:col-span-8 prose prose-neutral dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-lg">
            <div className="not-prose mb-12">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="Professional Document Illustration"
                className="mt-0 mb-8 aspect-video w-full rounded-2xl object-cover shadow-lg border border-border"
              />
            </div>

            <h1 className="text-foreground">The Joke Tax Chronicles</h1>
            <p className="text-muted-foreground font-medium">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>

            <h2 className="text-foreground">The King&apos;s Plan</h2>
            <p>
              The king thought long and hard, and finally came up with{" "}
              <a href="#" className="text-primary underline underline-offset-4">a brilliant plan</a>: he would tax the jokes in the
              kingdom.
            </p>
            <blockquote className="border-l-4 border-primary pl-8 italic text-muted-foreground my-8">
              &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
              joke, so it&apos;s only fair that they should pay for the
              privilege.&rdquo;
            </blockquote>

            <h3 className="text-foreground">The People&apos;s Rebellion</h3>
            <div className="my-10 overflow-hidden rounded-2xl border border-border shadow-md">
              <table className="w-full text-left">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="px-6 py-4 font-bold text-foreground uppercase tracking-widest text-xs">King&apos;s Treasury</th>
                    <th className="px-6 py-4 font-bold text-foreground uppercase tracking-widest text-xs">People&apos;s happiness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 text-muted-foreground font-medium italic">Empty</td>
                    <td className="px-6 py-4 font-bold text-primary">Overflowing</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-6 py-4 text-muted-foreground font-medium italic">Modest</td>
                    <td className="px-6 py-4 font-bold text-foreground">Satisfied</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-muted-foreground font-medium italic">Full</td>
                    <td className="px-6 py-4 font-bold text-destructive">Ecstatic</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="border-t border-border pt-8 text-muted-foreground">
              The moral of the story is: never underestimate the power of a good
              laugh and always be careful of bad ideas.
            </p>
          </article>

          {/* Sidebar Section */}
          <aside className="order-1 md:col-span-12 lg:col-span-4 lg:order-2">
            <div className="rounded-2xl border border-border bg-muted/30 p-8 lg:sticky lg:top-8">
              <p className="mb-4 text-lg font-bold tracking-tight text-foreground underline decoration-primary/40 underline-offset-8">
                Excerpt from the document
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                A comprehensive service agreement template designed for
                professional service providers and their clients. This document
                outlines the scope of work, deliverables, and terms.
              </p>
              <Button size="lg" className="mt-8 w-full shadow-lg hover:shadow-primary/20 transition-all font-bold">
                Download Template
              </Button>

              <Separator className="my-10 opacity-50" />

              <div className="flex gap-4 items-center">
                <Avatar className="size-12 rounded-xl border-2 border-primary/20 bg-background">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt="John Doe Reviewer"
                  />
                </Avatar>
                <div>
                  <h2 className="text-sm font-bold text-foreground">Reviewed by John Doe</h2>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Legal Consultant
                  </p>
                </div>
              </div>

              <Separator className="my-10 opacity-50" />

              <p className="mb-5 text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Features</p>
              <ul className="flex flex-col gap-4">
                {[
                  "Customizable Terms",
                  "Digital Signatures",
                  "Document Tracking",
                ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-white">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <p className="text-sm font-bold text-foreground/80 group-hover:text-primary transition-colors">{feature}</p>
                    </li>
                ))}
              </ul>

              <Separator className="my-10 opacity-50" />

              <div className="flex flex-col gap-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Share this template</p>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="flex size-10 items-center justify-center rounded-xl border border-border bg-background transition-all hover:bg-primary hover:text-white hover:-translate-y-1 shadow-sm"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export { Resource3 };
```
