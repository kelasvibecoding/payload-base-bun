# Navbar 14

## Metadata
- **Category**: Navigation Bar
- **Objective**: Provide a clean, application-style top navigation with specific functional focus areas (Products, Support, About), combined with a streamlined mobile experience.
- **Use Case**: Educational platforms, software dashboards, or SaaS applications requiring clear separation of feature discovery ("Tools", "Quick Start") from support resources.
- **Visual Style**: Clean dropdown menus using `NavigationMenu`, segmented into structured panels mapping icons to functions. Utilizes `Separator` to clearly divide distinct content zones within the dropdown. Integrates inline imagery heavily in dropdowns.
- **Interactivity**: Desktop uses Shadcn UI's hover-activated `NavigationMenu`. On mobile, it utilizes Shadcn UI's `Accordion` within a custom, collapsible drop-down container (rather than a full-screen sheet overlay).

## Source Code

```tsx
"use client";

import {
  Award,
  BarChart3,
  Bell,
  Book,
  BookOpen,
  Brain,
  ChevronRight,
  FileCode,
  FileText,
  GraduationCap,
  Menu,
  MessageSquare,
  Users,
  Video,
  X,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    title: "Course Management & Content",
    description: "Create, organize and deliver courses",
    icon: GraduationCap,
    link: "#",
  },
  {
    title: "Student Analytics",
    description: "Track progress and performance data",
    icon: BarChart3,
    link: "#",
  },
  {
    title: "Interactive Learning",
    description: "Engage students with multimedia content",
    icon: Video,
    link: "#",
  },
  {
    title: "AI-Powered Tutoring",
    description: "Personalized learning with AI assistance",
    icon: Brain,
    link: "#",
  },
  {
    title: "Collaboration & Discussion",
    description: "Connect students and instructors seamlessly",
    icon: MessageSquare,
    link: "#",
  },
  {
    title: "Assessments & Certification",
    description: "Evaluate learning with comprehensive testing",
    icon: Award,
    link: "#",
  },
];

const docs = [
  {
    title: "Learning Center",
    description: "Discover how to use EduMax effectively",
    icon: Book,
    link: "#",
  },
  {
    title: "Course Catalog",
    description: "Browse our comprehensive course library",
    icon: BookOpen,
    link: "#",
  },
  {
    title: "API Documentation",
    description: "Integrate EduMax into your platform",
    icon: FileCode,
    link: "#",
  },
];

const company = [
  {
    title: "Platform Updates",
    icon: FileText,
    link: "#",
  },
  {
    title: "News & Events",
    icon: Bell,
    link: "#",
  },
  {
    title: "Education Blog",
    icon: Book,
    link: "#",
  },
  {
    title: "Join Our Team",
    icon: Users,
    link: "#",
  },
];

interface Navbar14Props {
  className?: string;
}

const Navbar14 = ({ className }: Navbar14Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={cn(
        "border-b border-border lg:border-b",
        isOpen && "border-b-0",
        className,
      )}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <div className="flex flex-1 items-center gap-9">
            <a href="#" className="flex items-center gap-2">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg"
                alt="logo"
                className="h-8 dark:invert"
              />
              <span className="text-lg font-semibold">Shadcnblocks</span>
            </a>
            <div className="hidden items-center gap-1.5 lg:flex">
              <NavigationMenu delayDuration={0}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0">
                      <div className="flex">
                        <div className="p-4">
                          <p className="mb-3 text-[10px] text-muted-foreground uppercase">
                            TOOLS
                          </p>
                          {features.map((feature) => (
                            <NavigationMenuLink key={feature.title} asChild>
                              <a
                                href={feature.link}
                                className="group flex cursor-pointer flex-row gap-3"
                              >
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                                  <feature.icon className="size-5!" />
                                </span>
                                <div className="flex flex-col">
                                  <span className="flex items-center gap-0.5 text-sm font-medium whitespace-nowrap">
                                    {feature.title}
                                    <ChevronRight className="size-4 text-primary! opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                  </span>
                                  <p className="text-xs whitespace-nowrap text-muted-foreground">
                                    {feature.description}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          ))}
                        </div>
                        <Separator
                          orientation="vertical"
                          className="data-[orientation=vertical]:h-auto"
                        />
                        <div className="p-4">
                          <p className="mb-3 text-[10px] text-muted-foreground uppercase">
                            QUICK START
                          </p>
                          <div>
                            <NavigationMenuLink asChild>
                              <a
                                href="#"
                                className="flex flex-row items-center gap-3"
                              >
                                <BookOpen className="size-4!" />
                                <span className="text-sm font-medium whitespace-nowrap">
                                  Shadcnblocks 101
                                </span>
                              </a>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <a
                                href="#"
                                className="flex flex-row items-center gap-3"
                              >
                                <Users className="size-4!" />
                                <span className="text-sm font-medium whitespace-nowrap">
                                  Find a tutor
                                </span>
                              </a>
                            </NavigationMenuLink>
                          </div>
                          <p className="mt-5 mb-3 text-[10px] text-muted-foreground uppercase">
                            LATEST UPDATES
                          </p>
                          <NavigationMenuLink asChild>
                            <a href="#">
                              <div className="rounded-lg bg-primary p-3">
                                <img
                                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                                  alt="placeholder"
                                  className="aspect-video min-w-52 rounded-md object-cover"
                                />
                              </div>
                              <div className="mt-3.5 flex flex-col gap-2 px-1">
                                <p className="text-xs font-medium">
                                  One Platform. Every Learner.
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Personalized learning paths for every student.
                                </p>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0">
                      <div className="flex">
                        <div className="p-4">
                          <p className="mb-3 text-[10px] text-muted-foreground uppercase">
                            GUIDES
                          </p>
                          {docs.map((doc) => (
                            <NavigationMenuLink key={doc.title} asChild>
                              <a
                                href={doc.link}
                                className="group flex flex-row gap-3"
                              >
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                                  <doc.icon className="size-5!" />
                                </span>
                                <div className="flex flex-col">
                                  <span className="flex items-center gap-0.5 text-sm font-medium whitespace-nowrap">
                                    {doc.title}
                                    <ChevronRight className="size-4 text-primary! opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                  </span>
                                  <p className="text-xs whitespace-nowrap text-muted-foreground">
                                    {doc.description}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          ))}
                        </div>
                        <Separator
                          orientation="vertical"
                          className="data-[orientation=vertical]:h-auto"
                        />
                        <div className="p-4">
                          <p className="mb-3 text-[10px] text-muted-foreground uppercase">
                            ABOUT US
                          </p>
                          <div>
                            {company.map((company) => (
                              <NavigationMenuLink key={company.title} asChild>
                                <a
                                  href={company.link}
                                  className="flex flex-row items-center gap-3"
                                >
                                  <company.icon className="size-4!" />
                                  <span className="text-sm font-medium whitespace-nowrap">
                                    {company.title}
                                  </span>
                                </a>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <a href="#">About</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="outline">Login</Button>
            <Button>Demo</Button>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </nav>
      </div>

      {isOpen && (
        <div className="border-t bg-background lg:hidden">
          <div className="container">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="learning-hub">
                <AccordionTrigger className="pr-2.5 text-base font-medium hover:no-underline">
                  Products
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-5">
                    <div>
                      <p className="mb-3 text-[10px] text-muted-foreground uppercase">
                        TOOLS
                      </p>
                      <div className="space-y-5">
                        {features.map((feature) => (
                          <a
                            key={feature.title}
                            href={feature.link}
                            className="group flex cursor-pointer flex-row gap-3 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                              <feature.icon className="size-4" />
                            </span>
                            <div className="flex min-w-0 flex-col">
                              <span className="text-sm leading-tight font-medium">
                                {feature.title}
                              </span>
                              <p className="text-xs leading-tight text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <p className="mb-3 text-[10px] text-muted-foreground uppercase">
                        QUICK START
                      </p>
                      <div className="space-y-5">
                        <a
                          href="#"
                          className="flex cursor-pointer flex-row items-center gap-3 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <BookOpen className="size-4" />
                          <span className="text-sm font-medium">
                            Shadcnblocks 101
                          </span>
                        </a>
                        <a
                          href="#"
                          className="flex cursor-pointer flex-row items-center gap-3 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <Users className="size-4" />
                          <span className="text-sm font-medium">
                            Find a tutor
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support" className="last:border-b">
                <AccordionTrigger className="pr-2.5 text-base font-medium hover:no-underline">
                  Support
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-3 text-[10px] text-muted-foreground uppercase">
                        GUIDES
                      </p>
                      <div className="space-y-5">
                        {docs.map((doc) => (
                          <a
                            key={doc.title}
                            href={doc.link}
                            className="group flex cursor-pointer flex-row gap-3 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                              <doc.icon className="size-4" />
                            </span>
                            <div className="flex min-w-0 flex-col">
                              <span className="text-sm leading-tight font-medium">
                                {doc.title}
                              </span>
                              <p className="text-xs leading-tight text-muted-foreground">
                                {doc.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <p className="mb-3 text-[10px] text-muted-foreground uppercase">
                        ABOUT US
                      </p>
                      <div className="space-y-5">
                        {company.map((companyItem) => (
                          <a
                            key={companyItem.title}
                            href={companyItem.link}
                            className="flex cursor-pointer flex-row items-center gap-3 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <companyItem.icon className="size-4" />
                            <span className="text-sm font-medium">
                              {companyItem.title}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="space-y-2">
              <a
                href="#"
                className="block border-b border-border py-4 pr-3 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { Navbar14 };
```
