# Companies Detail 2

## Metadata
- **Category**: CRUD
- **Objective**: Company detail view with sheet panel and structured company information cards.
- **Use Case**: Detailed company profile viewing with card-based information organization and expandable sheet interface.
- **Visual Style**: Sheet-based detail view with card layout and badge displays.
- **Interactivity**: Sheet panel management, expandable detail view, and card-based information display.

## Description
A comprehensive company detail view featuring a sheet panel interface that displays detailed company information in organized cards. Includes company metrics, funding information, industry details, and tech stack with professional card-based styling.

## Features
- Sheet panel interface for detail viewing
- Card-based layout for company information
- Badge displays for status and industry
- Tech stack visualization with proper formatting
- Professional card styling with proper spacing
- Expandable sheet content area
- Clean typography and visual hierarchy
- Responsive design for different screen sizes
- Structured data presentation
- Proper information categorization

## Source Code
```tsx
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Company {
  id: number;
  name: string;
  logo: string;
  description: string;
  headquarters: string;
  website: string;
  employees: number;
  industry: string;
  founded: number;
  funding: string;
  status: string;
  mission: string;
  techStack: string[];
}

interface CompanyInfo {
  label: string;
  value?: string | string[] | number;
  cell?: React.ReactNode;
}

const CompanyDetailValueCard = ({ label, value, cell }: CompanyInfo) => {
  return (
    <div className="hide-scrollbar flex flex-wrap items-center gap-2">
      {cell ? (
        cell
      ) : Array.isArray(value) ? (
        value.map((it: string, i: number) => {
          return <Badge key={`badge-${label}-${i}`}>{it}</Badge>;
        })
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  );
};

interface CompanyDetailsCardProps {
  company: Company;
}

const CompanyDetailsCard = ({ company }: CompanyDetailsCardProps) => {
  const info: CompanyInfo[] = [
    {
      label: "Mission",
      value: company.mission,
    },
    {
      label: "Industry",
      value: company.industry,
    },
    {
      label: "Status",
      cell: (
        <Badge
          variant={
            company.status === "Active"
              ? "default"
              : company.status === "IPO"
                ? "secondary"
                : "outline"
          }
        >
          {company.status}
        </Badge>
      ),
    },
    {
      label: "Founded",
      value: company.founded,
    },
    {
      label: "Headquarters",
      value: company.headquarters,
    },
    {
      label: "Website",
      value: company.website,
    },
    {
      label: "Employees",
      value: company.employees.toLocaleString(),
    },
    {
      label: "Funding",
      value: company.funding,
    },
    {
      label: "Tech Stack",
      value: company.techStack,
    },
  ];

  return (
    <div className="flex flex-col gap-8 overflow-y-auto px-4 py-4 md:px-6">
      <div className="flex gap-4">
        <img src={company.logo} alt={company.name} className="size-12" />
        <div>
          <p className="text-xl font-semibold">{company.name}</p>
          <p className="text-sm">{company.description}</p>
        </div>
      </div>

      <ul className="space-y-8">
        {info.map((item, i) => {
          return (
            <li
              className="flex flex-col gap-2 text-sm"
              key={`company-detail-card-info-${i}`}
            >
              <p className="text-muted-foreground">{item.label}</p>

              <CompanyDetailValueCard {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface CompaniesDetail2Props {
  className?: string;
  companies: Company[];
}

const CompaniesDetail2 = ({
  companies = [
    {
      id: 1,
      name: "Vercel",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg",
      description: "Frontend cloud platform for developers",
      headquarters: "🇺🇸 San Francisco, CA",
      website: "vercel.com",
      employees: 450,
      industry: "Developer Tools",
      founded: 2015,
      funding: "$313M",
      status: "Active",
      mission:
        "To provide the best developer experience for building and deploying web applications at the edge.",
      techStack: ["Next.js", "React", "TypeScript", "Go", "Rust"],
    },
    {
      id: 2,
      name: "Supabase",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase.svg",
      description: "Open source Firebase alternative",
      headquarters: "🇸🇬 Singapore",
      website: "supabase.com",
      employees: 120,
      industry: "Database",
      founded: 2020,
      funding: "$116M",
      status: "Active",
      mission:
        "To make it easy for developers to build and scale applications with an open source backend platform.",
      techStack: ["PostgreSQL", "Elixir", "TypeScript", "Deno", "Swift"],
    },
    {
      id: 3,
      name: "Spotify",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
      description: "Digital music streaming service",
      headquarters: "🇸🇪 Stockholm, Sweden",
      website: "spotify.com",
      employees: 9800,
      industry: "Entertainment",
      founded: 2006,
      funding: "$2.7B",
      status: "IPO",
      mission:
        "To unlock the potential of human creativity by giving a million artists the opportunity to live off their art.",
      techStack: ["Java", "Python", "React", "Kafka", "GCP"],
    },
    {
      id: 4,
      name: "Slack",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
      description: "Business communication platform",
      headquarters: "🇺🇸 San Francisco, CA",
      website: "slack.com",
      employees: 2500,
      industry: "Communication",
      founded: 2013,
      funding: "$1.4B",
      status: "Acquired",
      mission:
        "To make work life simpler, more pleasant, and more productive by transforming team communication.",
      techStack: ["PHP", "Java", "React", "MySQL", "AWS"],
    },
    {
      id: 5,
      name: "Notion",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
      description: "All-in-one workspace for notes and docs",
      headquarters: "🇺🇸 San Francisco, CA",
      website: "notion.so",
      employees: 800,
      industry: "Productivity",
      founded: 2016,
      funding: "$343M",
      status: "Active",
      mission:
        "To make toolmaking ubiquitous by empowering everyone to create software that solves their problems.",
      techStack: ["React", "TypeScript", "Kotlin", "PostgreSQL", "Redis"],
    },
  ],
  className,
}: CompaniesDetail2Props) => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <section>
      <div className="container py-32">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Companies</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your company database
          </p>
        </div>
        <div className="mb-6 overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Headquarters</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company) => (
                <TableRow
                  key={company.id}
                  className="cursor-pointer"
                  onClick={() => setSelectedCompany(company)}
                >
                  <TableCell className="font-medium">{company.name}</TableCell>
                  <TableCell>{company.industry}</TableCell>
                  <TableCell>{company.headquarters}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Sheet
          open={!!selectedCompany}
          onOpenChange={(open) => !open && setSelectedCompany(null)}
        >
          <SheetContent
            side="right"
            className={cn("bg-background sm:max-w-lg", className)}
          >
            {selectedCompany && (
              <>
                <SheetHeader className="sr-only">
                  <SheetTitle>{selectedCompany.name}</SheetTitle>
                  <SheetDescription>
                    {selectedCompany.name} details
                  </SheetDescription>
                </SheetHeader>
                <CompanyDetailsCard company={selectedCompany} />
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export { CompaniesDetail2 };

```
