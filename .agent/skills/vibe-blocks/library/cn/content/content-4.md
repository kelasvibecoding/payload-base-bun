# Content 4

## Metadata
- **Category**: Content
- **Objective**: Blog article with author information and scroll-to-top functionality.
- **Use Case**: Professional blog post with author attribution and enhanced navigation.
- **Visual Style**: Two-column layout with author bio and sticky navigation sidebar.
- **Interactivity**: Scroll-based table of contents, back-to-top button, and smooth navigation.

## Description
A professional blog article layout featuring author information, breadcrumb navigation, and advanced scroll interactions. Includes a sticky sidebar with table of contents that highlights active sections and a back-to-top button that appears after scrolling.

## Features
- Author avatar and information display
- Breadcrumb navigation for content hierarchy
- Scroll-based table of contents with active section highlighting
- Back-to-top button with smooth scroll behavior
- Responsive two-column layout
- Rich content elements (images, lists, blockquotes)
- Professional typography with proper heading hierarchy
- Interactive navigation with smooth scrolling
- Scroll position detection for enhanced UX

## Source Code
```tsx
"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

interface Content4Props {
  className?: string;
}

const Content4 = ({ className }: Content4Props) => {
  const [activeHeader, setActiveHeader] = useState<string | null>(null);
  const headerRefs = useRef<Record<string, HTMLElement>>({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const headers = Object.keys(headerRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeader(entry.target.id);
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    headers.forEach((headerId) => {
      const element = headerRefs.current[headerId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addHeaderRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      headerRefs.current[id] = ref;
    }
  };
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Exploring New Horizons</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-9 flex flex-col gap-12 md:gap-20">
          <h1 className="max-w-3xl text-4xl font-semibold text-balance md:text-5xl">
            Exploring New Horizons in Web Development
          </h1>
          <div className="flex items-center gap-3">
            <Avatar className="border border-border">
              <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
            </Avatar>
            <p className="text-sm tracking-tight md:text-base">
              <span className="font-semibold">Jane Smith</span>
              <span className="ml-1 font-medium text-muted-foreground">
                on June 15, 2024
              </span>
            </p>
          </div>
        </div>
        <div className="relative flex max-w-6xl flex-col-reverse gap-6 lg:mt-32 lg:grid lg:grid-cols-10">
          <div className="lg:col-span-6">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="max-h-96 w-full rounded-xl border border-border object-cover"
            />
            <div className="prose mt-6 prose-h2:scroll-m-10">
              <p>
                The world of web development is in a constant state of flux,
                with new tools, frameworks, and paradigms emerging regularly.
                Keeping pace with these changes is crucial for developers aiming
                to build cutting-edge applications.
              </p>
              <h2 id="header-1" ref={(ref) => addHeaderRef("header-1", ref)}>
                The Evolution of Frontend Frameworks
              </h2>
              <p>
                Frontend development has seen a significant transformation over
                the years. Understanding the journey from simple libraries to
                complex frameworks provides insight into current best practices
                and future possibilities.
              </p>
              <p>
                Modern frameworks offer powerful features like component-based
                architecture, state management, and server-side rendering. These
                advancements enable developers to create highly interactive and
                performant user interfaces efficiently.
              </p>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="placeholder"
                className="max-h-96 w-full rounded-xl border border-border object-cover"
              />
              <p>
                Choosing the right framework depends heavily on project
                requirements, team expertise, and performance goals. Each
                popular option comes with its own set of trade-offs, from
                learning curve to ecosystem support and scalability.
              </p>
              <ul>
                <li>
                  <p>
                    Component-based architecture promotes reusability and
                    maintainability in large-scale applications.
                  </p>
                </li>
                <li>
                  <p>
                    State management solutions help manage complex application
                    data flows effectively and predictably.
                  </p>
                </li>
              </ul>
              <h2 id="header-2" ref={(ref) => addHeaderRef("header-2", ref)}>
                Backend Technologies and Their Impact
              </h2>
              <p>
                On the server-side, the landscape is equally diverse and
                dynamic. Innovations in backend technologies directly influence
                application scalability, security, and overall performance.
              </p>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt="placeholder"
                className="max-h-96 w-full rounded-xl border border-border object-cover"
              />
              <ul>
                <li>
                  <p>
                    <strong>Microservices architecture </strong> allows for
                    building scalable and resilient systems by breaking down
                    applications into smaller, independent services.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Serverless computing </strong> offers a way to run
                    backend code without managing servers, reducing operational
                    overhead and enabling auto-scaling.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Database innovations</strong> including NoSQL and
                    NewSQL, provide flexible and scalable data storage solutions
                    for modern applications.
                  </p>
                </li>
              </ul>
              <h2 id="header-3" ref={(ref) => addHeaderRef("header-3", ref)}>
                Future Trends in Development
              </h2>
              <p>
                Looking ahead, several exciting trends are poised to shape the
                future of web development. Artificial intelligence, WebAssembly,
                and progressive web apps are just a few examples.
              </p>
              <p>
                We are eager to see how these technologies will be adopted and
                the innovative solutions they will enable. Feel free to share
                your thoughts or contact us for more insights.
              </p>
            </div>
          </div>

          <div className="top-6 h-fit lg:sticky lg:col-span-3 lg:col-start-8">
            <Separator className="my-10 block lg:hidden" />
            <div className="flex flex-col gap-1.5 text-sm lg:text-xs">
              <p className="text-xs text-muted-foreground">ON THIS PAGE</p>
              <ul>
                <li className="py-1.5 transition-colors duration-200">
                  <a
                    href="#header-1"
                    className={cn(
                      "block transition-colors duration-200",
                      activeHeader === "header-1"
                        ? "text-muted-foreground lg:text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    The Evolution of Frontend Frameworks
                  </a>
                </li>
                <li className="py-1.5 transition-colors duration-200">
                  <a
                    href="#header-2"
                    className={cn(
                      "block transition-colors duration-200",
                      activeHeader === "header-2"
                        ? "text-muted-foreground lg:text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    Backend Technologies and Their Impact
                  </a>
                </li>
                <li className="py-1.5 transition-colors duration-200">
                  <a
                    href="#header-3"
                    className={cn(
                      "block transition-colors duration-200",
                      activeHeader === "header-3"
                        ? "text-muted-foreground lg:text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    Future Trends in Development
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={cn(
                "hidden opacity-0 transition-opacity duration-200 lg:block",
                showBackToTop && "opacity-100",
              )}
            >
              <Separator className="my-3" />
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="gap-1 text-xs text-muted-foreground"
              >
                <ArrowUp className="size-3.5" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Content4 };

```
