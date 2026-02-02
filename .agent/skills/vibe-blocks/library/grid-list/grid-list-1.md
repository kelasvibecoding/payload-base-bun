# Grid List 1

## Metadata
- **Category**: Grid List
- **Objective**: People/Team Grid
- **Use Case**: Company directories or social connections.
- **Visual Style**: Circular Avatar Cards.
- **Interactivity**: Action Buttons / Dropdowns.

## Description
A versatile listing component that organizes data points, profiles, or products into structured grid layouts with built-in actions and filters.

## Source Code
```tsx
import {
  Button,
  ButtonProps,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { BiDotsHorizontalRounded } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type PersonCard = {
  image: ImageProps;
  fullName: string;
  jobTitle: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
  cards: PersonCard[];
};

export type GridList1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const GridList1 = (props: GridList1Props) => {
  const { heading, description, buttons, cards, options } = {
    ...GridList1Defaults,
    ...props,
  };

  return (
    <section>
      <div className="grid auto-cols-fr grid-cols-1 items-end gap-4 pb-5 md:grid-cols-[1fr_max-content] md:gap-6 md:pb-6">
        <div className="max-w-lg">
          <h1 className="text-xl font-bold md:text-2xl">{heading}</h1>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex items-center justify-between gap-4 md:justify-normal">
          <div className="flex flex-wrap items-center gap-4">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BiDotsHorizontalRounded className="size-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {options.map((option, index) => (
                <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid auto-cols-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((person, index) => (
          <div key={index} className="border border-border-primary p-6">
            <div className="flex flex-col text-center">
              <div className="mb-5 flex size-full items-center justify-center md:mb-6">
                <img
                  src={person.image.src}
                  alt={person.image.alt}
 className="size-20 min-h-20 min-w-20 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="font-semibold">{person.fullName}</h5>
                <h6 className="text-sm">{person.jobTitle}</h6>
              </div>
              <p className="mb-6 md:mb-8">{person.description}</p>
              <Button {...person.button}>{person.button.title}</Button>
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
  button: {
    title: "Follow",
    variant: "secondary",
    size: "sm",
  },
};

export const GridList1Defaults: Props = {
  heading: "People you may know",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  options: ["Option One", "Option Two", "Option Three"],
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

GridList1.displayName = 'GridList1';
```

