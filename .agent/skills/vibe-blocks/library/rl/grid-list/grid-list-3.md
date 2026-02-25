# Grid List 3

## Metadata
- **Category**: Grid List
- **Objective**: Numbered Process Grid
- **Use Case**: Step-by-step or tiered info.
- **Visual Style**: Indicator focused grid.
- **Interactivity**: Link actions.

## Description
A versatile listing component that organizes data points, profiles, or products into structured grid layouts with built-in actions and filters.

## Source Code
```tsx
import {
  Button,
  ButtonProps,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { BiDotsHorizontalRounded } from 'lucide-react';
import { BiSearch } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type PersonCard = {
  image: ImageProps;
  fullName: string;
  jobTitle: string;
  description: string;
  options: string[];
  buttons: ButtonProps[];
};

type Props = {
  heading: string;
  description: string;
  inputIcon: React.ReactNode;
  buttons: ButtonProps[];
  selectPlaceholder: string;
  selectItems: string[];
  cards: PersonCard[];
};

export type GridList3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const GridList3 = (props: GridList3Props) => {
  const { heading, description, inputIcon, selectPlaceholder, selectItems, cards } = {
    ...GridList3Defaults,
    ...props,
  };

  return (
    <section>
      <div className="grid auto-cols-fr grid-cols-1 items-end gap-4 pb-5 md:grid-cols-[1fr_max-content] md:gap-6 md:pb-6">
        <div className="max-w-lg">
          <h1 className="text-xl font-bold md:text-2xl">{heading}</h1>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex items-center justify-between md:justify-normal">
          <Input placeholder="Search" icon={inputIcon} className="mr-4" />
          <Select>
            <SelectTrigger className="w-[110px] px-4 py-2">
              <SelectValue placeholder={selectPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {selectItems.map((item, index) => (
                <SelectItem key={index} value={`${item.toLowerCase().replace(/\s/g, "-")}`}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid auto-cols-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((person, index) => (
          <div key={index} className="border border-border-primary p-6">
            <div className="flex flex-col">
              <div className="mb-5 flex w-full items-start justify-between md:mb-6">
                <img
                  src={person.image.src}
                  alt={person.image.alt}
 className="size-16 min-h-16 min-w-16 rounded-full object-cover"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BiDotsHorizontalRounded className="size-6" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {person.options.map((option, index) => (
                      <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="font-semibold">{person.fullName}</h5>
                <h6 className="text-sm">{person.jobTitle}</h6>
              </div>
              <p className="mb-6 md:mb-8">{person.description}</p>
              <div className="flex flex-col items-center gap-4">
                {person.buttons.map((button, index) => (
                  <Button key={index} {...button} className="w-full">
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const personCard: PersonCard = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
    alt: "vibecoding placeholder image",
  },
  fullName: "Full name",
  jobTitle: "Job title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  options: ["Option One", "Option Two", "Option Three"],
  buttons: [
    {
      title: "Message",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "View profile",
      size: "sm",
    },
  ],
};

export const GridList3Defaults: Props = {
  heading: "Connections",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  selectPlaceholder: "Sort by",
  inputIcon: <BiSearch className="size-6" />,
  selectItems: ["Option 1", "Option 2", "Option 3"],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "Button",
      size: "sm",
    },
  ],
  cards: [personCard, personCard, personCard, personCard, personCard, personCard],
};

GridList3.displayName = 'GridList3';
```

