# Companies Detail 1

## Metadata
- **Category**: CRUD
- **Objective**: Company detail view with sheet panel and comprehensive company information display.
- **Use Case**: Detailed company profile viewing with organized information sections and expandable sheet interface.
- **Visual Style**: Sheet-based detail view with table layout and badge displays.
- **Interactivity**: Sheet panel management, expandable detail view, and organized information display.

## Description
A comprehensive company detail view featuring a sheet panel interface that displays detailed company information in an organized table format. Includes company metrics, categories, team information, and owner details with professional styling.

## Features
- Sheet panel interface for detail viewing
- Organized table layout for company information
- Badge displays for categories and domains
- Team member and owner information display
- Professional table styling with proper spacing
- Expandable sheet content area
- Icon-organized information sections
- Responsive design for different screen sizes
- Clean typography and visual hierarchy
- Proper data formatting and display

## Source Code
```tsx
"use client";

import {
  Globe,
  IdCard,
  LucideProps,
  MapPin,
  NotepadText,
  Tag,
  User,
  Users,
} from "lucide-react";
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

interface Owner {
  name: string;
  image: string;
}

interface Company {
  id: number;
  name: string;
  description: string;
  location: string;
  domains: string[];
  team: number;
  categories: string[];
  owner: Owner;
}

interface CompanyInfo {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  value?: string | string[] | number;
  cell?: React.ReactNode;
}

const CompanyInfoItem = ({ label, value, cell }: CompanyInfo) => {
  return (
    <div className="hide-scrollbar flex items-center gap-2 overflow-x-auto">
      {cell ? (
        cell
      ) : Array.isArray(value) ? (
        value.map((it: string, i: number) => {
          return <Badge key={`badge-${label}-${i}`}>{it}</Badge>;
        })
      ) : (
        <p className="font-medium text-nowrap">{value}</p>
      )}
    </div>
  );
};

interface CompanyDetailCardProps {
  company: Company;
}

const CompanyDetailCard = ({ company }: CompanyDetailCardProps) => {
  const info: CompanyInfo[] = [
    {
      icon: Globe,
      label: "Domains",
      value: company.domains,
    },
    {
      icon: IdCard,
      label: "Name",
      value: company.name,
    },
    {
      icon: NotepadText,
      label: "Description",
      value: company.description,
    },
    {
      icon: Users,
      label: "Team",
      value: company.team,
    },
    {
      icon: Tag,
      label: "Categories",
      value: company.categories,
    },
    {
      icon: MapPin,
      label: "Location",
      value: company.location,
    },
    {
      icon: User,
      label: "Owner",
      cell: (
        <Badge variant="outline">
          <img
            src={company.owner.image}
            alt={company.owner.name}
            className="size-4 rounded-full"
          />
          {company.owner.name}
        </Badge>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 px-4 py-4 md:px-6">
      <p className="text-lg font-semibold">Record Details</p>

      <ul className="space-y-4">
        {info.map((item, i) => {
          return (
            <li
              className="flex justify-between gap-6 text-sm"
              key={`company-detail-card-info-${i}`}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="size-4" />
                <span>{item.label}</span>
              </div>
              <CompanyInfoItem {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface CompaniesDetail1Props {
  className?: string;
  companies: Company[];
}

const CompaniesDetail1 = ({
  companies = [
    {
      id: 1,
      name: "Acme Corp",
      description: "Leading provider of innovative solutions",
      location: "San Francisco, CA",
      domains: ["acmecorp.com", "acme.io"],
      team: 125,
      categories: ["Technology", "Enterprise"],
      owner: {
        name: "John Smith",
        image: "https://shadcnblocks.com/images/block/avatar-1.webp",
      },
    },
    {
      id: 2,
      name: "TechStart Inc",
      description: "Cutting-edge technology company",
      location: "New York, NY",
      domains: ["techstart.com"],
      team: 45,
      categories: ["SaaS", "Startup"],
      owner: {
        name: "Sarah Johnson",
        image: "https://shadcnblocks.com/images/block/avatar-2.webp",
      },
    },
    {
      id: 3,
      name: "CloudNine Solutions",
      description: "Cloud infrastructure and DevOps services",
      location: "Seattle, WA",
      domains: ["cloudnine.io", "c9solutions.com"],
      team: 89,
      categories: ["Cloud", "Infrastructure"],
      owner: {
        name: "Michael Chen",
        image: "https://shadcnblocks.com/images/block/avatar-3.webp",
      },
    },
    {
      id: 4,
      name: "GreenLeaf Analytics",
      description: "Data analytics for sustainable businesses",
      location: "Austin, TX",
      domains: ["greenleaf.ai"],
      team: 32,
      categories: ["Analytics", "Sustainability"],
      owner: {
        name: "Emily Davis",
        image: "https://shadcnblocks.com/images/block/avatar-4.webp",
      },
    },
    {
      id: 5,
      name: "Nova Digital Agency",
      description: "Full-service digital marketing agency",
      location: "Los Angeles, CA",
      domains: ["novadigital.com", "nova.agency"],
      team: 67,
      categories: ["Marketing", "Agency"],
      owner: {
        name: "David Wilson",
        image: "https://shadcnblocks.com/images/block/avatar-5.webp",
      },
    },
  ],
  className,
}: CompaniesDetail1Props) => {
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
                <TableHead>Description</TableHead>
                <TableHead>Location</TableHead>
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
                  <TableCell>{company.description}</TableCell>
                  <TableCell>{company.location}</TableCell>
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
            className={cn("bg-muted sm:max-w-lg", className)}
          >
            {selectedCompany && (
              <>
                <SheetHeader className="sr-only">
                  <SheetTitle>{selectedCompany.name}</SheetTitle>
                  <SheetDescription>
                    {selectedCompany.name} details
                  </SheetDescription>
                </SheetHeader>
                <CompanyDetailCard company={selectedCompany} />
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export { CompaniesDetail1 };

```
