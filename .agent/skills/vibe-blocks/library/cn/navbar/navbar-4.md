# Navbar 4

## Metadata
- **Category**: Navigation Bar
- **Objective**: Provide an ultra-expansive, structured enterprise navigation with robust mega-menus containing embedded descriptions, images, and categorized lists.
- **Use Case**: Giant SaaS platforms, Fortune 500 company corporate sites, or deeply hierarchical sites offering numerous sub-products (e.g., Atlassian, Microsoft, Salesforce).
- **Visual Style**: Uses massive dropdown layers (`min-w-[calc(100vw-4rem)]` up to 1400px wide) that almost act like dedicated sub-pages. Incorporates grids to display features with icons, descriptions, and feature images within the dropdown panels. Includes a dedicated logo/menu bar.
- **Interactivity**: Classic Shadcn UI `NavigationMenu` on desktop for triggering hover states. Uses component extraction heavily (`SolutionsMenu`, `ProductsMenu`, `GlobalGuidanceMenu`, etc.) to keep the main menu structure clean. On mobile, implements a deep-linked interface where clicking a main item completely replaces the menu view with the child view, and includes a "Go back" button. 

## Source Code

```tsx
"use client";

import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  BookOpen,
  Building2,
  Calendar,
  ChevronRight,
  Computer,
  FileText,
  Files,
  Gamepad2,
  Globe,
  Headset,
  HeartPulse,
  LineChart,
  Megaphone,
  Menu,
  MessageSquare,
  Newspaper,
  Paintbrush,
  Plane,
  Play,
  Settings,
  Shield,
  ShoppingCart,
  Smile,
  Users,
  Video,
  X,
} from "lucide-react";
import { Fragment, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const industrySolutions = [
  {
    title: "Healthcare",
    description: "Streamline patient care and operational efficiency.",
    icon: HeartPulse,
    href: "#",
  },
  {
    title: "E-commerce",
    description: "Boost sales and enhance customer shopping experiences.",
    icon: ShoppingCart,
    href: "#",
  },
  {
    title: "Education",
    description: "Empower learning with innovative digital tools.",
    icon: BookOpen,
    href: "#",
  },
  {
    title: "Finance",
    description: "Secure and scalable solutions for financial institutions.",
    icon: Building2,
  },
  {
    title: "Travel & Hospitality",
    description: "Provide unforgettable experiences for your guests.",
    icon: Plane,
    href: "#",
  },
  {
    title: "Media & Entertainment",
    description: "Captivate audiences with rich, interactive content.",
    icon: Film,
    href: "#",
  },
];

const teamSolutions = [
  {
    title: "Marketing",
    description: "Drive campaigns and maximize ROI.",
    icon: Megaphone,
    href: "#",
  },
  {
    title: "Sales",
    description: "Accelerate revenue growth and close deals faster.",
    icon: LineChart,
    href: "#",
  },
  {
    title: "Customer Support",
    description: "Deliver exceptional service and build loyalty.",
    icon: Headset,
    href: "#",
  },
  {
    title: "Human Resources",
    description: "Attract, retain, and develop top talent.",
    icon: Users,
    href: "#",
  },
  {
    title: "Operations",
    description: "Optimize processes and increase efficiency.",
    icon: Settings,
    href: "#",
  },
  {
    title: "Design",
    description: "Create stunning visuals and user experiences.",
    icon: Paintbrush,
    href: "#",
  },
];

const mainProducts = [
  {
    id: "product-1",
    title: "Analytics Engine",
    description:
      "Transform your data into actionable insights. Our powerful engine processes millions of points in real-time.",
    icon: LineChart,
    href: "#",
  },
  {
    id: "product-2",
    title: "Security Shield",
    description:
      "Protect your infrastructure with advanced threat detection, automated responses, and comprehensive compliance tools.",
    icon: Shield,
    href: "#",
  },
  {
    id: "product-3",
    title: "Automation Hub",
    description:
      "Streamline your workflows by connecting your favorite apps and automating repetitive tasks.",
    icon: Settings,
    href: "#",
  },
  {
    id: "product-4",
    title: "Collaboration Suite",
    description:
      "Bring your team together with integrated messaging, video conferencing, and document co-authoring.",
    icon: Users,
    href: "#",
  },
];

const featuredProductCards = [
  {
    id: "feat-1",
    title: "Introducing AI Assistant",
    description:
      "Supercharge your productivity with our new AI-powered tools.",
    href: "#",
  },
  {
    id: "feat-2",
    title: "The Future of Work",
    description: "Discover how remote teams are thriving with our platform.",
    href: "#",
  },
];

const productCategories = [
  {
    title: "Developer Tools",
    items: [
      { id: "dev-1", title: "API Gateway", href: "#", icon: Blocks },
      { id: "dev-2", title: "SDKs & Libraries", href: "#", icon: Files },
      { id: "dev-3", title: "Webhooks", href: "#", icon: Globe },
    ],
  },
  {
    title: "Customer Engagement",
    items: [
      { id: "ce-1", title: "Live Chat", href: "#", icon: MessageSquare },
      { id: "ce-2", title: "Feedback Forms", href: "#", icon: FileText },
      { id: "ce-3", title: "Video Support", href: "#", icon: Video },
    ],
  },
];

const regions = [
  {
    id: "americas",
    title: "Americas",
    description: "North, Central, and South America",
    icon: Globe,
    href: "#",
  },
  {
    id: "emea",
    title: "EMEA",
    description: "Europe, Middle East, and Africa",
    icon: Globe,
    href: "#",
  },
  {
    id: "apac",
    title: "APAC",
    description: "Asia-Pacific Region",
    icon: Globe,
    href: "#",
  },
];

const globalServices = [
  {
    id: "gs-1",
    title: "International Expansion",
    description: "Scale your business across borders seamlessly.",
    icon: Plane,
    href: "#",
  },
  {
    id: "gs-2",
    title: "Localization",
    description: "Adapt your product for local markets.",
    icon: Globe,
    href: "#",
  },
  {
    id: "gs-3",
    title: "Global Compliance",
    description: "Navigate international regulations with ease.",
    icon: Shield,
    href: "#",
  },
];

const companyFocus = [
  {
    id: "cf-1",
    title: "Our Mission",
    description: "To empower every person and organization to achieve more.",
    icon: Smile,
    href: "#",
  },
  {
    id: "cf-2",
    title: "Sustainability",
    description: "Commitment to a greener, more sustainable future.",
    icon: Globe,
    href: "#",
  },
  {
    id: "cf-3",
    title: "Diversity & Inclusion",
    description: "Building a culture where everyone belongs.",
    icon: Users,
    href: "#",
  },
];

const latestUpdates = [
  {
    id: "lu-1",
    title: "Q3 Earnings Report",
    date: "Oct 15, 2023",
    href: "#",
  },
  {
    id: "lu-2",
    title: "New European Data Center Open",
    date: "Sep 22, 2023",
    href: "#",
  },
];

const resources = [
  {
    id: "res-1",
    title: "Documentation",
    description: "API references, SDK guides, and comprehensive tutorials.",
    icon: BookOpen,
    href: "#",
  },
  {
    id: "res-2",
    title: "Community Forum",
    description:
      "Connect with other developers, ask questions, and share knowledge.",
    icon: Users,
    href: "#",
  },
  {
    id: "res-3",
    title: "Video Tutorials",
    description: "Step-by-step visual guides to master our platform.",
    icon: Play,
    href: "#",
  },
];

const topicGroups = [
  {
    title: "Learn",
    topics: [
      { id: "topic-1", title: "Getting Started", icon: Play, href: "#" },
      { id: "topic-2", title: "Best Practices", icon: Shield, href: "#" },
      { id: "topic-3", title: "Case Studies", icon: FileText, href: "#" },
    ],
  },
  {
    title: "Stay Updated",
    topics: [
      { id: "topic-4", title: "Blog", icon: Newspaper, href: "#" },
      { id: "topic-5", title: "Changelog", icon: Files, href: "#" },
      { id: "topic-6", title: "Events", icon: Calendar, href: "#" },
    ],
  },
];

const SolutionsMenu = () => (
  <div className="grid gap-y-12 md:gap-x-12 lg:grid-cols-2">
    <div>
      <div className="mb-4 border-b border-border pb-3 lg:mb-6">
        <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
          By Industry
        </strong>
      </div>
      <menu className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-4 lg:gap-x-6">
        {industrySolutions.map((solution, index) => (
          <NavigationMenuLink
            key={index}
            href={solution.href}
            className="group flex items-start space-x-3 rounded-lg border-border py-4 text-left transition-colors hover:bg-accent md:py-3 lg:border lg:p-4 lg:hover:bg-accent"
          >
            <div className="flex shrink-0 items-center justify-center">
              <solution.icon className="size-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground/85 group-hover:text-foreground">
                {solution.title}
              </div>
              <p className="mt-1 text-xs text-muted-foreground group-hover:text-foreground">
                {solution.description}
              </p>
            </div>
          </NavigationMenuLink>
        ))}
      </menu>
    </div>
    <div>
      <div className="mb-4 border-b border-border pb-3 lg:mb-6">
        <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
          By Team
        </strong>
      </div>
      <menu className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-4 lg:gap-x-6">
        {teamSolutions.map((solution, index) => (
          <NavigationMenuLink
            key={index}
            href={solution.href}
            className="group flex items-start space-x-3 rounded-lg border-border py-4 text-left transition-colors hover:bg-accent md:py-3 lg:border lg:p-4 lg:hover:bg-accent"
          >
            <div className="flex shrink-0 items-center justify-center">
              <solution.icon className="size-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground/85 group-hover:text-foreground">
                {solution.title}
              </div>
              <p className="mt-1 text-xs text-muted-foreground group-hover:text-foreground">
                {solution.description}
              </p>
            </div>
          </NavigationMenuLink>
        ))}
      </menu>
    </div>
  </div>
);

const ProductsMenu = () => (
  <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-6">
    <div className="lg:col-span-2">
      <div className="mb-4 border-b border-border pb-3 text-left lg:mb-6">
        <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Core Platform
        </strong>
      </div>
      <menu className="grid gap-y-4 lg:grid-cols-2 lg:gap-6">
        {mainProducts.map((product) => (
          <NavigationMenuLink
            key={product.id}
            href={product.href}
            className="group flex flex-row items-center space-x-4 rounded-md border-border py-4 text-left md:space-x-5 lg:border lg:bg-background lg:p-5 lg:hover:bg-accent"
          >
            <product.icon className="size-6 sm:size-7" />
            <div className="ml-4 flex-1">
              <div className="text-sm font-medium text-foreground/85 group-hover:text-foreground">
                {product.title}
              </div>
              <p className="mt-1 text-xs text-muted-foreground group-hover:text-foreground">
                {product.description}
              </p>
            </div>
          </NavigationMenuLink>
        ))}
      </menu>
    </div>
    <div className="col-span-1 border-t border-border pt-8 md:pt-0 lg:border-t-0">
      <div className="mb-4 border-b border-border pb-3 text-left lg:mb-6">
        <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Features
        </strong>
      </div>
      <div className="grid gap-y-8">
        {productCategories.map((category) => (
          <div key={category.title}>
            <div className="mb-3 text-sm font-semibold">{category.title}</div>
            <menu className="grid gap-y-2 lg:gap-y-1">
              {category.items.map((item) => (
                <NavigationMenuLink
                  key={item.id}
                  href={item.href}
                  className="group flex items-center py-2 text-sm text-muted-foreground hover:text-foreground md:py-3 lg:py-2"
                >
                  <item.icon className="mr-3 size-4" />
                  <span>{item.title}</span>
                </NavigationMenuLink>
              ))}
            </menu>
          </div>
        ))}
      </div>
    </div>

    <div className="col-span-1 border-t border-border pt-8 md:pt-0 lg:border-t-0">
      <div className="mb-4 border-b border-border pb-3 text-left lg:mb-6">
        <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Featured
        </strong>
      </div>
      <div className="grid gap-y-4 md:grid-cols-2 lg:grid-cols-1">
        {featuredProductCards.map((card) => (
          <NavigationMenuLink
            key={card.id}
            href={card.href}
            className="group block overflow-hidden rounded-md border border-border"
          >
            <div className="aspect-[16/9] w-full bg-accent">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-background p-4 transition-colors group-hover:bg-accent/50">
              <div className="mb-1 text-sm font-semibold text-foreground/85 group-hover:text-foreground">
                {card.title}
              </div>
              <p className="text-xs text-muted-foreground group-hover:text-foreground">
                {card.description}
              </p>
            </div>
          </NavigationMenuLink>
        ))}
      </div>
    </div>
  </div>
);

const GlobalGuidanceMenu = () => (
  <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-6">
    <div className="col-span-1 border-border lg:border-r lg:pr-6">
      <div className="mb-4 border-b border-border pb-3 text-left lg:mb-6">
        <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Company
        </strong>
      </div>
      <menu className="grid gap-y-4">
        {companyFocus.map((item) => (
          <NavigationMenuLink
            key={item.id}
            href={item.href}
            className="group flex items-start space-x-4 py-2"
          >
            <item.icon className="mt-0.5 size-5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-foreground/85 group-hover:text-foreground">
                {item.title}
              </div>
              <p className="mt-1 hidden text-xs text-muted-foreground md:block">
                {item.description}
              </p>
            </div>
          </NavigationMenuLink>
        ))}
      </menu>
    </div>

    <div className="lg:col-span-2">
      <div className="mb-4 border-b border-border pb-3 text-left lg:mb-6">
        <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Regions
        </strong>
      </div>
      <menu className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {regions.map((region) => (
          <NavigationMenuLink
            key={region.id}
            href={region.href}
            className="group flex flex-col rounded-md border border-border bg-accent p-5 transition-colors hover:bg-background lg:bg-background lg:hover:bg-accent"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-background lg:bg-accent lg:group-hover:bg-background">
              <region.icon className="h-5 w-5" />
            </div>
            <div className="text-sm font-medium text-foreground/85 group-hover:text-foreground">
              {region.title}
            </div>
            <p className="mt-1 text-xs text-muted-foreground group-hover:text-foreground">
              {region.description}
            </p>
          </NavigationMenuLink>
        ))}
        {globalServices.slice(0, 1).map((service) => (
          <NavigationMenuLink
            key={service.id}
            href={service.href}
            className="group flex flex-col rounded-md border border-border bg-accent p-5 transition-colors hover:bg-background lg:bg-background lg:hover:bg-accent"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-background lg:bg-accent lg:group-hover:bg-background">
              <service.icon className="h-5 w-5" />
            </div>
            <div className="text-sm font-medium text-foreground/85 group-hover:text-foreground">
              {service.title}
            </div>
            <p className="mt-1 text-xs text-muted-foreground group-hover:text-foreground">
              {service.description}
            </p>
          </NavigationMenuLink>
        ))}
      </menu>
    </div>

    <div className="col-span-1 border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
      <div className="mb-4 border-b border-border pb-3 text-left lg:mb-6">
        <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Latest Updates
        </strong>
      </div>
      <menu className="grid gap-y-6">
        {latestUpdates.map((update) => (
          <NavigationMenuLink
            key={update.id}
            href={update.href}
            className="group flex flex-col"
          >
            <span className="mb-1 text-xs text-muted-foreground group-hover:text-foreground">
              {update.date}
            </span>
            <span className="text-sm font-medium text-foreground/85 transition-colors group-hover:text-foreground">
              {update.title}
            </span>
            <div className="mt-2 text-xs font-semibold text-primary">
              Read More &rarr;
            </div>
          </NavigationMenuLink>
        ))}
      </menu>
      <div className="mt-8 border-t border-border pt-6">
        <a href="#" className="flex items-center text-sm font-medium w-fit">
          <Gamepad2 className="mr-2 size-4" />
          Careers
          <ArrowRight className="ml-1 size-4" />
        </a>
      </div>
    </div>
  </div>
);

const PartnersMenu = () => (
  <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4">
    <div className="md:col-span-2">
      <a
        href="#"
        className="group relative flex h-full flex-row overflow-hidden rounded-lg bg-primary p-0 text-primary-foreground lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pt-6 pb-[14rem] md:pt-40 md:pb-6">
            <div className="mt-auto flex items-center space-x-1 text-xs font-medium">
              Partner Program
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs">
              Join our partner network and grow your business with our leading
              productivity platform.
            </p>
          </div>
          <div className="absolute inset-0 top-[32%] bg-accent invert md:top-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="object-fit h-full w-full object-top-right opacity-100 md:h-2/3 md:object-top"
            />
          </div>
        </div>
      </a>
    </div>
    <div className="md:col-span-1">
      <a
        href="#"
        className="group relative flex h-full flex-row overflow-hidden rounded-lg bg-accent p-0 text-accent-foreground lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pt-6 pb-[14rem] md:pt-40 md:pb-6">
            <div className="mt-auto flex items-center space-x-1 text-xs font-medium">
              Solution Partners
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Build and deliver solutions that help customers achieve more.
            </p>
          </div>
          <div className="absolute inset-0 top-[32%] md:top-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="object-fit h-full w-full object-top-right md:h-2/3 md:object-top"
            />
          </div>
        </div>
      </a>
    </div>
    <div className="grid gap-4 md:col-span-1">
      <NavigationMenuLink
        href="#"
        className="group flex w-full flex-row items-center rounded-lg border border-border lg:rounded-xl"
      >
        <div className="flex items-start p-6 text-left">
          <Users className="size-8" />
          <div className="ml-4">
            <div className="mt-auto mb-1 text-sm font-bold text-foreground/85 hover:text-foreground">
              Implementation Partners
            </div>
            <p className="text-xs text-muted-foreground group-hover:text-foreground">
              Velit incididunt duis id consequat elit.
            </p>
          </div>
        </div>
      </NavigationMenuLink>
      <NavigationMenuLink
        href="#"
        className="group flex w-full flex-row items-center rounded-lg border border-border lg:rounded-xl"
      >
        <div className="flex items-start p-6 text-left">
          <Computer className="size-8" />
          <div className="ml-4">
            <div className="mt-auto mb-1 text-sm font-bold text-foreground/85 hover:text-foreground">
              Technology Partners
            </div>
            <p className="text-xs text-muted-foreground group-hover:text-foreground">
              Consequat nulla ex culpa aliquip ad.
            </p>
          </div>
        </div>
      </NavigationMenuLink>
    </div>
  </div>
);

const ResourcesMenu = () => (
  <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-6">
    <div className="col-span-1">
      <a
        href="#"
        className="group relative flex h-full flex-row overflow-hidden rounded-lg bg-primary p-0 text-primary-foreground lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pt-6 pb-[14rem] md:pt-40 md:pb-6">
            <div className="mt-auto flex items-center space-x-1 text-xs">
              Resource Center
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs">
              Access guides, tutorials, and best practices to maximize your
              success.
            </p>
          </div>
          <div className="absolute inset-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
              alt="placeholder"
              className="h-full w-full object-cover object-center invert"
            />
          </div>
          <div className="absolute inset-x-0 top-0 z-10 h-[60%] bg-[linear-gradient(hsl(var(--color-primary))_50%,transparent)] md:top-auto md:bottom-[-10%] md:h-[50%] md:bg-[linear-gradient(transparent,hsl(var(--color-primary))_50%)]"></div>
        </div>
      </a>
    </div>
    <div className="lg:col-span-2 lg:flex lg:flex-col">
      <div>
        <div className="mb-4 border-border pb-3 text-left md:mb-6 lg:border-b">
          <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Featured Resources
          </strong>
        </div>
      </div>
      <menu className="grid gap-y-4 lg:h-full lg:grid-cols-2 lg:gap-6">
        {resources.map((resource) => (
          <NavigationMenuLink
            key={resource.id}
            href={resource.href}
            className="group flex flex-row items-center space-x-4 rounded-md border-border bg-accent px-6 py-5 text-left md:space-x-5 lg:border lg:bg-background lg:p-5"
          >
            <resource.icon className="size-6 sm:size-7" />
            <div className="ml-4 flex-1">
              <div className="text-sm font-medium text-foreground/85 group-hover:text-foreground">
                {resource.title}
              </div>
              <p className="mt-1 text-xs text-muted-foreground group-hover:text-foreground">
                {resource.description}
              </p>
            </div>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
          </NavigationMenuLink>
        ))}
      </menu>
    </div>
    <div className="col-span-1 md:col-span-2 lg:col-span-1">
      {topicGroups.map((group) => (
        <Fragment key={group.title}>
          <div className="mb-4 border-border pb-3 text-left md:col-span-2 md:mb-7 lg:border-b">
            <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Learning & Support
            </strong>
          </div>
          <menu className="mb-7 grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-1 lg:gap-x-0">
            {group.topics.map((topic) => (
              <NavigationMenuLink
                key={topic.id}
                href={topic.href}
                className="group flex flex-row items-center space-x-6 border-b border-border py-5 text-left sm:py-8 lg:space-x-4 lg:border-0 lg:py-0"
              >
                <div className="flex aspect-square size-9 shrink-0 items-center justify-center">
                  <topic.icon className="size-5" />
                </div>
                <div className="flex-1 text-xs font-medium text-foreground/85 group-hover:text-foreground md:text-sm">
                  {topic.title}
                </div>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
              </NavigationMenuLink>
            ))}
          </menu>
        </Fragment>
      ))}
    </div>
  </div>
);

const navigationMenuItems = [
  {
    key: "solutions",
    label: "Solutions",
    component: SolutionsMenu,
  },
  {
    key: "products",
    label: "Products",
    component: ProductsMenu,
  },
  {
    key: "global",
    label: "Company",
    component: GlobalGuidanceMenu,
  },
  {
    key: "partners",
    label: "Partners",
    component: PartnersMenu,
  },
  {
    key: "resources",
    label: "Resources",
    component: ResourcesMenu,
  },
] as const;

interface Navbar4Props {
  className?: string;
}

const Navbar4 = ({ className }: Navbar4Props) => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<
    "solutions" | "products" | "global" | "partners" | "resources" | null
  >(null);

  return (
    <section className={cn("inset-x-0 top-0 z-20 bg-background", className)}>
      <div className="container">
        <NavigationMenu className="min-w-full [&>div:last-child]:left-auto">
          <div className="flex w-full justify-between gap-2 py-4">
            <a
              href="https://www.shadcnblocks.com"
              className="flex items-center gap-2"
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                className="max-h-8 dark:invert"
                alt="Shadcn UI Navbar"
              />
              <span className="text-lg font-semibold tracking-tighter">
                Shadcnblocks.com
              </span>
            </a>
            <div className="flex items-center gap-2 xl:gap-8">
              <NavigationMenuList className="hidden gap-0 lg:flex">
                {navigationMenuItems.map((item) => (
                  <NavigationMenuItem key={item.key}>
                    <NavigationMenuTrigger className="text-xs xl:text-sm">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                      <item.component />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </div>
            <div className="flex items-center gap-2">
              <Button className="hidden md:block">Login</Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                className="lg:hidden"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                    setSubmenu(null);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="fixed inset-0 top-[72px] container flex h-[calc(100vh-72px)] w-full flex-col overflow-auto border-t border-border bg-background lg:hidden">
              {submenu && (
                <div className="mt-3">
                  <Button
                    variant="link"
                    onClick={() => setSubmenu(null)}
                    className="relative -left-4"
                  >
                    <ArrowLeft className="size-4 text-xs" />
                    Go back
                  </Button>
                </div>
              )}
              {submenu === null && (
                <div>
                  {navigationMenuItems.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      className="flex w-full items-center border-b border-border py-6 text-left"
                      onClick={() => setSubmenu(item.key)}
                    >
                      <span className="flex-1 text-sm font-medium">
                        {item.label}
                      </span>
                      <span className="shrink-0">
                        <ArrowRight className="size-4" />
                      </span>
                    </button>
                  ))}
                </div>
              )}
              {navigationMenuItems.map(
                (item) =>
                  submenu === item.key && (
                    <div key={item.key}>
                      <h2 className="pt-4 pb-6 text-lg font-medium">
                        {item.label}
                      </h2>
                      <item.component />
                    </div>
                  ),
              )}
              {/* Mobile menu footer */}
              <div className="mx-[2rem] mt-auto flex flex-col items-center gap-8 py-24">
                <Button>Login</Button>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  );
};

export { Navbar4 };
```
