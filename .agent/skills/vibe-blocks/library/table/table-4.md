# Table 4

## Metadata
- **Category**: Table
- **Objective**: General Table
- **Use Case**: Standard Table hierarchy.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A fundamental data-organization component for displaying large sets of structured information with support for navigation and row-level interactions.

## Source Code
```tsx
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Input,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { useState } from 'react';
import { BiSearch } from 'lucide-react';
import { X } from 'lucide-react';
import { LuListFilter } from 'lucide-react';

type TableData = {
  name: string;
  company: string;
  number: number;
  team: string;
  date: string;
  link: string;
};

type Props = {
  headerTitle: string;
  headerDescription: string;
  buttons: ButtonProps[];
  tableHeaders: string[];
  tableRows: TableData[];
  paginationItems: number[];
};

export type Table4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Table4 = (props: Table4Props) => {
  const { headerTitle, headerDescription, buttons, tableHeaders, tableRows, paginationItems } = {
    ...Table4Defaults,
    ...props,
  } as Props;

  const tableHeaderClasses = [
    "w-[245px] pr-4 xxl:w-[350px]",
    "w-[245px] pr-4 xxl:w-[250px]",
    "w-[128px] pr-4",
    "w-[245px] pr-4 xxl:w-[250px]",
    "w-[192px] pr-4",
    "w-[96px] pr-4 text-center",
  ];

  const [searchInput, setSearchInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      searchInput,
    });
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-4 border border-b-0 border-border-primary p-6 sm:flex-row sm:items-center">
          <div>
            <h1 className="mb-1 text-md font-semibold md:text-lg">{headerTitle}</h1>
            <p>{headerDescription}</p>
          </div>
          <div className="flex gap-4">
            {buttons.map((buttonProps, index) => (
              <Button key={index} {...buttonProps} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 border-x border-t border-border-primary p-6 sm:flex-row sm:items-center">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
              <div className="flex flex-1 gap-4">
                <div className="relative flex max-w-xs flex-1 items-center">
                  <Input
                    id="search"
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    iconPosition="left"
                    icon={<BiSearch className="size-6" />}
                  />
                </div>
                <Button
                  variant="secondary"
                  size="sm"
 className="flex items-center gap-2 px-6 underline"
>
                  <LuListFilter className="size-6" />
                  Filters
                </Button>
              </div>
              <div className="mt-4 flex md:mt-0">
                <p className="text-sm">Showing 0 of 100</p>
              </div>
            </div>
            <div className="flex flex-wrap items-start">
              <div className="mr-2 mt-4 flex items-center gap-3 bg-background-secondary py-2 pl-4 pr-4">
                <p>Tag</p>
                <Button asChild variant="link" size="link" className="cursor-pointer">
                  <X />
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <Table className="border-collapse">
            <TableHeader>
              <TableRow>
                {tableHeaders.map((header, index) => (
                  <TableHead key={index} className={tableHeaderClasses[index]}>
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableRows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.team}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell className="py-6 text-center font-semibold">
                    <a href={row.link}>View</a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" size="sm" variant="secondary" />
            </PaginationItem>
            <PaginationItem className="hidden md:block">
              {paginationItems.map((item, index) => (
                <PaginationLink key={index} href="#" size="sm" variant="link" className="px-4 py-2">
                  {item}
                </PaginationLink>
              ))}
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" size="sm" variant="secondary" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export const Table4Defaults: Table4Props = {
  headerTitle: "Table Header",
  headerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    { children: "Button", variant: "secondary", size: "sm" },
    { children: "Button", size: "sm" },
  ],
  tableHeaders: ["Name", "Company", "Number", "Team", "Date", ""],
  tableRows: [
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
  ],
  paginationItems: [1, 2, 3, 4, 5],
};

Table4.displayName = 'Table4';
```

