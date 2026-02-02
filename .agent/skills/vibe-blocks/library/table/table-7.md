# Table 7

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
  TableHead,
  TableHeader,
  TableRow,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { RxChevronDown } from 'lucide-react';

type ImageProps = {
  src: string;
  alt: string;
};

type DetailedTableData = {
  name: string;
  company: string;
  number: number;
  team: string;
  date: string;
  link: string;
  details: {
    dateJoined: {
      label: string;
      value: string;
    };
    jobTitle: {
      label: string;
      value: string;
    };
    level: {
      label: string;
      value: number;
    };
    address: {
      label: string;
      value: string;
    };
    phone: {
      label: string;
      value: string;
    };
    email: {
      label: string;
      value: string;
    };
    skills: {
      label: string;
      value: string;
    };
    languages: {
      label: string;
      value: string;
    };
    experience: {
      label: string;
      value: string;
    };
    image: ImageProps;
  };
};

type RowGroup = {
  rows: DetailedTableData[];
};

type Props = {
  headerTitle: string;
  headerDescription: string;
  buttons: ButtonProps[];
  tableHeaders: string[];
  subHeadings: RowGroup[];
  paginationItems: number[];
};

export type Table7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const TABLE_SUBHEADING_CLASSES = [
  "w-[250px] pl-14",
  "w-[250px] pl-8 lg:pl-12",
  "w-[250px] pl-12",
  "w-[250px] pl-10",
  "w-[250px] pl-8",
];

export const Table7 = (props: Table7Props) => {
  const { headerTitle, headerDescription, buttons, tableHeaders, subHeadings, paginationItems } = {
    ...Table7Defaults,
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
                  <TableHead
                    key={index}
 className={`w-[250px] ${index === 1 ? "pl-8 lg:pl-14" : "pl-14"}`}
>
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="w-full">
              <tr>
                <td colSpan={6} className="p-0">
                  <Accordion type="multiple" className="w-full">
                    {subHeadings.map((subHeading, index) => (
                      <AccordionItem
                        key={index}
                        value={`group-${index}`}
 className="w-full border-b border-t border-border-primary first:border-b-0 last:border-t-0"
>
                        <AccordionTrigger
 className="flex w-full items-center justify-start border-none p-0"
                          icon={
                            <RxChevronDown className="absolute order-first ml-5 size-5 text-text-primary transition-transform duration-300" />
                          }
>
                          <table className="w-full">
                            <tbody>
                              {subHeading.rows.map((row, rowIndex) => (
                                <TableHeadData
                                  key={rowIndex}
                                  row={row}
                                  cellClasses={TABLE_SUBHEADING_CLASSES}
                                />
                              ))}
                            </tbody>
                          </table>
                        </AccordionTrigger>
                        <AccordionContent className="w-full border-none p-0">
                          {subHeading.rows.map((row, rowIndex) => (
                            <ExpandedContent key={rowIndex} details={row.details} />
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </td>
              </tr>
            </TableBody>
          </Table>
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" size="sm" variant="secondary" />
              </PaginationItem>
              <PaginationItem className="hidden md:block">
                {paginationItems.map((item, index) => (
                  <PaginationLink
                    key={index}
                    href="#"
                    size="sm"
                    variant="link"
 className="px-4 py-2"
>
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
      </div>
    </section>
  );
};

const TableHeadData = ({
  row,
  cellClasses,
}: {
  row: DetailedTableData;
  cellClasses: readonly string[];
}) => (
  <TableRow className="w-full border-none [&_th]:h-20 [&_th]:font-normal [&_th]:no-underline">
    <TableHead className={`${cellClasses[0]}`}>{row.name}</TableHead>
    <TableHead className={`${cellClasses[1]}`}>{row.company}</TableHead>
    <TableHead className={`${cellClasses[2]}`}>{row.number}</TableHead>
    <TableHead className={`${cellClasses[3]}`}>{row.team}</TableHead>
    <TableHead className={`${cellClasses[4]}`}>{row.date}</TableHead>
  </TableRow>
);

const DetailRow = ({ label, value }: { label: string; value: string | number }) => (
  <div className="mb-4">
    <p className="mb-1 text-sm font-semibold">{label}</p>
    <p className="text-base">{value}</p>
  </div>
);

const ExpandedContent = ({ details }: { details: DetailedTableData["details"] }) => (
  <div className="grid flex-1 auto-cols-fr grid-cols-5 items-start bg-background-secondary py-8 pl-8 pr-0">
    <div className="flex flex-col items-start gap-4 px-6">
      <DetailRow label={details.dateJoined.label} value={details.dateJoined.value} />
      <DetailRow label={details.address.label} value={details.address.value} />
      <DetailRow label={details.skills.label} value={details.skills.value} />
    </div>
    <div className="flex flex-col items-start gap-4 px-6">
      <DetailRow label={details.jobTitle.label} value={details.jobTitle.value} />
      <DetailRow label={details.phone.label} value={details.phone.value} />
      <DetailRow label={details.languages.label} value={details.languages.value} />
    </div>
    <div className="flex flex-col items-start gap-4 px-6">
      <DetailRow label={details.level.label} value={details.level.value} />
      <DetailRow label={details.email.label} value={details.email.value} />
      <DetailRow label={details.experience.label} value={details.experience.value} />
    </div>

    <div className="col-start-4 col-end-6 row-start-1 row-end-2 px-6">
      <div className="relative w-full overflow-hidden pb-[56.25%]">
        <img
          src={details.image.src}
          alt={details.image.alt}
 className="absolute inset-0 size-full object-cover"
        />
      </div>
    </div>
  </div>
);

export const Table7Defaults = {
  headerTitle: "Table Header",
  headerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    { children: "Button", variant: "secondary", size: "sm" },
    { children: "Button", size: "sm" },
  ],
  tableHeaders: ["Name", "Company", "Number", "Team", "Date"],
  subHeadings: [
    {
      rows: [
        {
          name: "First name",
          company: "Company name",
          number: 14,
          team: "Team name",
          date: "Jan 11, 2050",
          link: "#",
          details: {
            dateJoined: {
              label: "Date Joined",
              value: "Jan 11, 2050",
            },
            jobTitle: {
              label: "Job title",
              value: "Web developer",
            },
            level: {
              label: "Level",
              value: 2,
            },
            address: {
              label: "Address",
              value: "123 Sample St, Sydney",
            },
            phone: {
              label: "Phone",
              value: "+1 (555) 000-0000",
            },
            email: {
              label: "Email",
              value: "hello@vibecoding.io",
            },
            skills: {
              label: "Skills",
              value: "Webflow, Figma",
            },
            languages: {
              label: "Languages",
              value: "English",
            },
            experience: {
              label: "Experience",
              value: "5+ years",
            },
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "vibecoding placeholder image",
            },
          },
        },
      ],
    },
    {
      rows: [
        {
          name: "First name",
          company: "Company name",
          number: 14,
          team: "Team name",
          date: "Jan 11, 2050",
          link: "#",
          details: {
            dateJoined: {
              label: "Date Joined",
              value: "Jan 11, 2050",
            },
            jobTitle: {
              label: "Job title",
              value: "Web developer",
            },
            level: {
              label: "Level",
              value: 2,
            },
            address: {
              label: "Address",
              value: "123 Sample St, Sydney",
            },
            phone: {
              label: "Phone",
              value: "+1 (555) 000-0000",
            },
            email: {
              label: "Email",
              value: "hello@vibecoding.io",
            },
            skills: {
              label: "Skills",
              value: "Webflow, Figma",
            },
            languages: {
              label: "Languages",
              value: "English",
            },
            experience: {
              label: "Experience",
              value: "5+ years",
            },
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "vibecoding placeholder image",
            },
          },
        },
      ],
    },
    {
      rows: [
        {
          name: "First name",
          company: "Company name",
          number: 14,
          team: "Team name",
          date: "Jan 11, 2050",
          link: "#",
          details: {
            dateJoined: {
              label: "Date Joined",
              value: "Jan 11, 2050",
            },
            jobTitle: {
              label: "Job title",
              value: "Web developer",
            },
            level: {
              label: "Level",
              value: 2,
            },
            address: {
              label: "Address",
              value: "123 Sample St, Sydney",
            },
            phone: {
              label: "Phone",
              value: "+1 (555) 000-0000",
            },
            email: {
              label: "Email",
              value: "hello@vibecoding.io",
            },
            skills: {
              label: "Skills",
              value: "Webflow, Figma",
            },
            languages: {
              label: "Languages",
              value: "English",
            },
            experience: {
              label: "Experience",
              value: "5+ years",
            },
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "vibecoding placeholder image",
            },
          },
        },
      ],
    },
  ],
  paginationItems: [1, 2, 3, 4, 5],
};

Table7.displayName = 'Table7';
```

