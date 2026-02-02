# Table 6

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
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  ButtonProps,
} from '@/components/ui';
import { RxChevronDown } from 'lucide-react';

type TableData = {
  name: string;
  company: string;
  number: number;
  team: string;
  date: string;
  link: string;
};

type RowGroup = {
  groupName: string;
  rows: TableData[];
};

type Props = {
  headerTitle: string;
  headerDescription: string;
  buttons: ButtonProps[];
  tableHeaders: string[];
  tableRows: RowGroup[];
};

export type Table6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const TABLE_CELL_CLASSES = [
  "w-[245px] xxl:w-[350px] pl-14",
  "w-[245px] xxl:w-[250px] pl-12 lg:pl-6",
  "w-[128px] pl-6",
  "w-[245px] xxl:w-[250px] pl-6",
  "w-[192px] pl-6",
  "w-[96px] text-center pl-6",
];

const TableDataRow = ({ row, cellClasses }: { row: TableData; cellClasses: readonly string[] }) => (
  <TableRow className="w-full border-b border-l border-r border-t-0 border-border-primary first:border-t last:border-b-0">
    <TableCell className={`${cellClasses[0]}`}>{row.name}</TableCell>
    <TableCell className={`${cellClasses[1]}`}>{row.company}</TableCell>
    <TableCell className={`${cellClasses[2]}`}>{row.number}</TableCell>
    <TableCell className={`${cellClasses[3]}`}>{row.team}</TableCell>
    <TableCell className={`${cellClasses[4]}`}>{row.date}</TableCell>
    <TableCell className={`${cellClasses[5]}`}>
      <a href={row.link}>View</a>
    </TableCell>
  </TableRow>
);

export const Table6 = (props: Table6Props) => {
  const { headerTitle, headerDescription, buttons, tableHeaders, tableRows } = {
    ...Table6Defaults,
    ...props,
  } as Props;

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
              <TableRow className="border-b-0">
                {tableHeaders.map((header, index) => (
                  <TableHead key={index} className={`${TABLE_CELL_CLASSES[index]}`}>
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="w-full">
              <tr>
                <td colSpan={6} className="p-0">
                  <Accordion type="multiple" className="w-full">
                    {tableRows.map((group, groupIndex) => (
                      <AccordionItem
                        key={groupIndex}
                        value={`group-${groupIndex}`}
 className="w-full border-b border-t border-border-primary first:border-b-0 last:border-t-0"
>
                        <AccordionTrigger
 className="flex w-full items-center justify-normal border-none bg-background-secondary p-0"
                          icon={
                            <RxChevronDown className="absolute order-first ml-5 size-5 text-text-primary transition-transform duration-300" />
                          }
>
                          <div className="h-14 w-full px-6 py-4 pl-14 text-left text-base font-semibold">
                            {group.groupName}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="w-full p-0">
                          <table className="w-full">
                            <tbody>
                              {group.rows.map((row, rowIndex) => (
                                <TableDataRow
                                  key={rowIndex}
                                  row={row}
                                  cellClasses={TABLE_CELL_CLASSES}
                                />
                              ))}
                            </tbody>
                          </table>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </td>
              </tr>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export const Table6Defaults = {
  headerTitle: "Table Header",
  headerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    { children: "Button", variant: "secondary", size: "sm" },
    { children: "Button", size: "sm" },
  ],
  tableHeaders: ["Name", "Company", "Number", "Team", "Date", ""],
  tableRows: [
    {
      groupName: "Group name",
      rows: [
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
    },
    {
      groupName: "Group name",
      rows: [
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
    },
    {
      groupName: "Group name",
      rows: [
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
    },
  ],
};

Table6.displayName = 'Table6';
```

