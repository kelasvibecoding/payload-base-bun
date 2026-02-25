# Sidebar 20

## Metadata
- **Category**: Sidebar
- **Objective**: Provide a structured documentation navigation experience with a built-in table of contents.
- **Use Case**: Documentation sites, technical wikis, knowledge bases, and long-form content platforms.
- **Visual Style**: Dual-sidebar layout. The left sidebar handles global documentation hierarchy, while the right sidebar provides a local on-page table of contents. Clean, minimalist, and text-focused.
- **Interactivity**: Search bar for quick documentation lookup, collapsible navigation sections, active state tracking for menu items, and a right-side navigation panel that highlights current section progress.

## Description
Sidebar 20 is a specialized layout for content-heavy documentation. It utilizes two sidebars to maximize readability and navigation efficiency. The left sidebar contains a version-aware workspace switcher and a nested, collapsible tree of documents. The right sidebar acts as a sticky table of contents for the current page, allowing users to jump between sections effortlessly.

## Source Code

```tsx
"use client";

import {
  Book,
  ChevronRight,
  ExternalLink,
  FileText,
  Search,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Documentation structure
const docsNav = [
  {
    title: "Getting Started",
    defaultOpen: true,
    items: [
      { title: "Introduction", href: "#", isActive: true },
      { title: "Installation", href: "#" },
      { title: "Project Structure", href: "#" },
      { title: "Configuration", href: "#" },
    ],
  },
  {
    title: "Core Concepts",
    defaultOpen: true,
    items: [
      { title: "Components", href: "#" },
      { title: "Styling", href: "#" },
      { title: "Theming", href: "#" },
      { title: "Dark Mode", href: "#" },
      { title: "Typography", href: "#" },
    ],
  },
  {
    title: "Components",
    defaultOpen: false,
    items: [
      { title: "Accordion", href: "#" },
      { title: "Alert", href: "#" },
      { title: "Avatar", href: "#" },
      { title: "Badge", href: "#" },
      { title: "Button", href: "#" },
      { title: "Card", href: "#" },
      { title: "Checkbox", href: "#" },
      { title: "Dialog", href: "#" },
      { title: "Dropdown Menu", href: "#" },
      { title: "Input", href: "#" },
      { title: "Select", href: "#" },
      { title: "Sidebar", href: "#" },
      { title: "Table", href: "#" },
      { title: "Tabs", href: "#" },
      { title: "Toast", href: "#" },
    ],
  },
  {
    title: "Guides",
    defaultOpen: false,
    items: [
      { title: "Authentication", href: "#" },
      { title: "Forms", href: "#" },
      { title: "Data Fetching", href: "#" },
      { title: "State Management", href: "#" },
      { title: "Testing", href: "#" },
      { title: "Deployment", href: "#" },
    ],
  },
  {
    title: "API Reference",
    defaultOpen: false,
    items: [
      { title: "CLI", href: "#" },
      { title: "Config", href: "#" },
      { title: "Utilities", href: "#" },
    ],
  },
];

// On this page - table of contents
const tableOfContents = [
  { title: "Overview", href: "#overview", level: 1 },
  { title: "Prerequisites", href: "#prerequisites", level: 2 },
  { title: "Quick Start", href: "#quick-start", level: 1 },
  { title: "Using the CLI", href: "#using-the-cli", level: 2 },
  { title: "Manual Setup", href: "#manual-setup", level: 2 },
  { title: "Configuration", href: "#configuration", level: 1 },
  { title: "Basic Options", href: "#basic-options", level: 2 },
  { title: "Advanced Options", href: "#advanced-options", level: 2 },
  { title: "Next Steps", href: "#next-steps", level: 1 },
];

const SearchForm = () => {
  return (
    <form>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search documentation..."
            className="pl-8"
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
};

const DocSection = ({ section }: { section: (typeof docsNav)[0] }) => {
  const [isOpen, setIsOpen] = React.useState(section.defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <SidebarGroup className="py-0">
        <SidebarGroupLabel asChild className="group/label">
          <CollapsibleTrigger className="flex w-full items-center">
            <ChevronRight className="mr-1 size-3.5 transition-transform group-data-[state=open]/label:rotate-90" />
            <span>{section.title}</span>
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <a href={item.href}>
                      <FileText className="size-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
};

const SidebarLeft = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
                  <Book className="size-5 text-primary-foreground" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Documentation</span>
                  <span className="truncate text-xs text-muted-foreground">
                    v2.0.0
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {docsNav.map((section) => (
          <DocSection key={section.title} section={section} />
        ))}

        {/* External links */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    <span>GitHub</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    <span>Discord</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

const SidebarRight = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const [activeSection, setActiveSection] = React.useState("#overview");

  return (
    <Sidebar
      side="right"
      collapsible="none"
      className="sticky top-0 hidden h-svh w-56 border-l lg:flex"
      {...props}
    >
      <SidebarHeader className="h-16 justify-center border-b">
        <div className="px-2">
          <span className="text-sm font-medium">On this page</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <nav className="flex flex-col gap-1">
              {tableOfContents.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  className={cn(
                    "block rounded-md px-2 py-1 text-sm transition-colors hover:text-foreground",
                    item.level === 2 && "pl-4",
                    activeSection === item.href
                      ? "font-medium text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

interface Sidebar20Props {
  className?: string;
}

const Sidebar20 = ({ className }: Sidebar20Props) => {
  return (
    <SidebarProvider className={cn(className)}>
      <SidebarLeft />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Docs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Getting Started</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Introduction</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
};

export { Sidebar20 };
```
