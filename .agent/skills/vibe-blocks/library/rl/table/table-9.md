# Table 9

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
  ButtonProps,
} from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { BiDotsHorizontal } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type TableData = {
  name: string;
  email: string;
  avatar: ImageProps;
  createdDate: string;
  addedDate: string;
  fileSize: string;
  link: string;
  actions: string[];
};

type Props = {
  headerTitle: string;
  headerDescription: string;
  buttons: ButtonProps[];
  tableHeaders: string[];
  tableRows: TableData[];
  paginationItems: number[];
};

export type Table9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Table9 = (props: Table9Props) => {
  const { headerTitle, headerDescription, buttons, tableHeaders, tableRows, paginationItems } = {
    ...Table9Defaults,
    ...props,
  } as Props;

  const tableHeaderClasses = [
    "w-[302px] pr-4 xxl:w-[430px]",
    "w-[256px] pr-4 xxl:w-[256px]",
    "w-[192px] pr-4",
    "w-[192px] pr-4 xxl:w-[192px]",
    "w-[128px] pr-4",
    "w-[80px] pr-4 text-center",
  ];

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
        <Table>
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
                <TableCell className="flex-1 font-medium">
                  <div className="grid grid-cols-[max-content_1fr] items-center gap-3">
                    <img
                      src={row.avatar.src}
                      alt={row.avatar.alt}
 className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>{row.name}</div>
                  </div>
                </TableCell>
                <TableCell className="min-w-[12rem] max-w-[16rem] underline">{row.email}</TableCell>
                <TableCell className="min-w-[8rem] max-w-[12rem]">{row.createdDate}</TableCell>
                <TableCell className="min-w-[8rem] max-w-[12rem]">{row.addedDate}</TableCell>
                <TableCell className="min-w-[8rem] max-w-[6rem]">{row.fileSize}</TableCell>
                <TableCell className="text-center font-semibold">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <BiDotsHorizontal className="size-6" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {row.actions.map((action, index) => (
                        <DropdownMenuItem key={index}>{action}</DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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

export const Table9Defaults: Table9Props = {
  headerTitle: "Table Header",
  headerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    { children: "Button", variant: "secondary", size: "sm" },
    { children: "Button", size: "sm" },
  ],
  tableHeaders: ["File name", "Email", "Created", "Added", "Size", ""],
  tableRows: [
    {
      name: "File name",
      email: "hello@vibecoding.io",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
        alt: "vibecoding avatar 1",
      },
      createdDate: "1/11/2050",
      addedDate: "1/11/2050",
      fileSize: "818 KB",
      link: "#",
      actions: ["Option One", "Option Two", "Option Three"],
    },
    {
      name: "File name",
      email: "hello@vibecoding.io",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
        alt: "vibecoding avatar 1",
      },
      createdDate: "1/11/2050",
      addedDate: "1/11/2050",
      fileSize: "818 KB",
      link: "#",
      actions: ["Option One", "Option Two", "Option Three"],
    },
    {
      name: "File name",
      email: "hello@vibecoding.io",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
        alt: "vibecoding avatar 1",
      },
      createdDate: "1/11/2050",
      addedDate: "1/11/2050",
      fileSize: "818 KB",
      link: "#",
      actions: ["Option One", "Option Two", "Option Three"],
    },
    {
      name: "File name",
      email: "hello@vibecoding.io",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
        alt: "vibecoding avatar 1",
      },
      createdDate: "1/11/2050",
      addedDate: "1/11/2050",
      fileSize: "818 KB",
      link: "#",
      actions: ["Option One", "Option Two", "Option Three"],
    },
    {
      name: "File name",
      email: "hello@vibecoding.io",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
        alt: "vibecoding avatar 1",
      },
      createdDate: "1/11/2050",
      addedDate: "1/11/2050",
      fileSize: "818 KB",
      link: "#",
      actions: ["Option One", "Option Two", "Option Three"],
    },
    {
      name: "File name",
      email: "hello@vibecoding.io",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
        alt: "vibecoding avatar 1",
      },
      createdDate: "1/11/2050",
      addedDate: "1/11/2050",
      fileSize: "818 KB",
      link: "#",
      actions: ["Option One", "Option Two", "Option Three"],
    },
  ],
  paginationItems: [1, 2, 3, 4, 5],
};

Table9.displayName = 'Table9';
```

