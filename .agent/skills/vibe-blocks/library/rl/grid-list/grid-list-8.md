# Grid List 8

## Metadata
- **Category**: Grid List
- **Objective**: Minimal Contact Grid
- **Use Case**: Simplified help center links.
- **Visual Style**: Thin row list.
- **Interactivity**: Contact buttons.

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
import { BiTimeFive, BiDotsHorizontalRounded } from 'lucide-react';

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
  time: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
  positions: PositionCard[];
};

export type GridList8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const GridList8 = (props: GridList8Props) => {
  const { heading, description, positions, buttons, options } = {
    ...GridList8Defaults,
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
      <div className="grid auto-cols-fr grid-cols-1 gap-6 lg:grid-cols-2">
        {positions.map((position, index) => (
          <div key={index} className="border border-border-primary p-6">
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-[max-content_1fr]">
              <div className="flex items-start justify-between md:mb-6">
                <img
                  src={position.image.src}
                  alt={position.image.alt}
 className="size-18 min-h-18 min-w-18 object-cover"
                />
              </div>
              <div className="flex items-start">
                <div className="flex flex-1 flex-col items-start justify-between">
                  <div className="mb-3 flex flex-col md:mb-4">
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
                  <p>{position.description}</p>
                </div>
                <div className="absolute right-0 top-0 flex items-center md:static md:right-1.5 md:top-1.5 md:ml-6">
                  <BiTimeFive className="mr-2 size-6" />
                  <p className="text-sm">{position.time}</p>
                </div>
              </div>
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
  time: "14h ago",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
};

export const GridList8Defaults: Props = {
  heading: "Latest Jobs",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
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
  options: ["Option One", "Option Two", "Option Three"],
  positions: [position, position, position, position, position, position],
};

GridList8.displayName = 'GridList8';
```

