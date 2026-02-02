# Table 10

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

type TableData = {
  transactionId: string;
  company: string;
  date: string;
  price: string;
  quantity: string;
  status: string;
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

export type Table10Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Table10 = (props: Table10Props) => {
  const { headerTitle, headerDescription, buttons, tableHeaders, tableRows, paginationItems } = {
    ...Table10Defaults,
    ...props,
  } as Props;

  const tableHeaderClasses = [
    "w-[187.5px] pr-4 xxl:w-[247px]",
    "w-[192px] pr-4 xxl:w-[247px]",
    "w-[187.5px] pr-4 xxl:w-[192px]",
    "w-[187.5px] pr-4 xxl:w-[192px]",
    "w-[128px] pr-4",
    "w-[187.5px] pr-4 xxl:w-[192px]",
    "w-[80px] px-4 text-center",
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
                <TableRow key={rowIndex} className="h-14">
                  <TableCell className="h-14 flex-1 font-medium">{row.transactionId}</TableCell>
                  <TableCell className="h-14">{row.company}</TableCell>
                  <TableCell className="h-14">{row.date}</TableCell>
                  <TableCell className="h-14">{row.price}</TableCell>
                  <TableCell className="h-14">{row.quantity}</TableCell>
                  <TableCell className="h-14 font-medium">
                    <div className="inline-block bg-background-secondary px-3 py-0.5 text-sm">
                      {row.status}
                    </div>
                  </TableCell>
                  <TableCell className="h-14 p-0 text-center font-semibold">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <BiDotsHorizontal className="size-6 p-0" />
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

export const Table10Defaults: Table10Props = {
  headerTitle: "Table Header",
  headerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    { children: "Button", variant: "secondary", size: "sm" },
    { children: "Button", size: "sm" },
  ],
  tableHeaders: ["Transaction ID", "Company", "Date", "Price", "Quantity", "Status", ""],
  tableRows: [
    {
      transactionId: "123456",
      company: "Company name",
      date: "1/11/2050",
      price: "$55.00",
      quantity: "14",
      status: "Complete",
      actions: ["Option One", "Option Two", "Option Three"],
    },
    {
      transactionId: "123456",
      company: "Company name",
      date: "1/11/2050",
      price: "$55.00",
      quantity: "14",
      status: "Complete",
      actions: ["Option One", "Option Two", "Option Three"],
    },
    {
      transactionId: "123456",
      company: "Company name",
      date: "1/11/2050",
      price: "$55.00",
      quantity: "14",
      status: "Complete",
      actions: ["Option One", "Option Two", "Option Three"],
    },
    {
      transactionId: "123456",
      company: "Company name",
      date: "1/11/2050",
      price: "$55.00",
      quantity: "14",
      status: "Complete",
      actions: ["Option One", "Option Two", "Option Three"],
    },
    {
      transactionId: "123456",
      company: "Company name",
      date: "1/11/2050",
      price: "$55.00",
      quantity: "14",
      status: "Complete",
      actions: ["Option One", "Option Two", "Option Three"],
    },
    {
      transactionId: "123456",
      company: "Company name",
      date: "1/11/2050",
      price: "$55.00",
      quantity: "14",
      status: "Complete",
      actions: ["Option One", "Option Two", "Option Three"],
    },
  ],
  paginationItems: [1, 2, 3, 4, 5],
};

Table10.displayName = 'Table10';
```

