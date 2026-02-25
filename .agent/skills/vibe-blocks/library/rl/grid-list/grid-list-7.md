# Grid List 7

## Metadata
- **Category**: Grid List
- **Objective**: Article/Log Grid
- **Use Case**: News feed or system logs.
- **Visual Style**: Text-heavy row cards.
- **Interactivity**: Reading links.

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
} from '@/components/ui';
import { BiBookmark, BiSearch } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type PositionCard = {
  image: ImageProps;
  positionName: string;
  location: string;
  jobType: string;
  locationType: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  inputIcon: React.ReactNode;
  selectPlaceholder: string;
  selectItems: string[];
  positions: PositionCard[];
};

export type GridList7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const GridList7 = (props: GridList7Props) => {
  const { heading, description, positions, inputIcon, selectPlaceholder, selectItems } = {
    ...GridList7Defaults,
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
        {positions.map((position, index) => (
          <div key={index} className="border border-border-primary p-6">
            <div className="flex flex-col text-left">
              <div className="flex items-start justify-between">
                <div className="mb-5 flex w-full items-start justify-between md:mb-6">
                  <img
                    src={position.image.src}
                    alt={position.image.alt}
 className="size-18 min-h-18 min-w-18 object-cover"
                  />
                </div>
                <div className="p-2">
                  <Button className="cursor-pointer" size="icon" variant="tertiary" asChild>
                    <BiBookmark className="size-6" />
                  </Button>
                </div>
              </div>
              <div className="mb-3 md:mb-4">
                <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                  {position.positionName}
                </h6>
                <div className="flex items-center">
                  <p className="text-sm">{position.location}</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">{position.jobType}</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">{position.locationType}</p>
                </div>
              </div>
              <p className="mb-6 md:mb-8">{position.description}</p>
              <Button {...position.button}>{position.button.title}</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const position: PositionCard = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
    alt: "vibecoding placeholder image",
  },
  positionName: "Job title",
  location: "Location",
  jobType: "Full-time",
  locationType: "Remote",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  button: {
    title: "Apply now",
    variant: "secondary",
    size: "sm",
  },
};

export const GridList7Defaults: Props = {
  heading: "Open Positions",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  selectPlaceholder: "Sort by",
  inputIcon: <BiSearch className="size-6" />,
  selectItems: ["Option 1", "Option 2", "Option 3"],
  buttons: [
    {
      title: "All Positions",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "Post a Job",
      size: "sm",
    },
  ],
  positions: [position, position, position, position, position, position],
};

GridList7.displayName = 'GridList7';
```

