# Grid List 4

## Metadata
- **Category**: Grid List
- **Objective**: Action-Based User Grid
- **Use Case**: Member management or lists.
- **Visual Style**: Card rows with buttons.
- **Interactivity**: CRUD-style buttons.

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

type ProjectCard = {
  image: ImageProps;
  projectName: string;
  category: string;
  date: string;
  options: string[];
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
  projects: ProjectCard[];
};

export type GridList4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const GridList4 = (props: GridList4Props) => {
  const { heading, description, buttons, projects, options } = {
    ...GridList4Defaults,
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
        {projects.map((projects, index) => (
          <div key={index} className="border border-border-primary p-6">
            <div className="flex flex-col">
              <div className="flex items-start justify-between">
                <div className="mb-5 flex items-start justify-start md:mb-6">
                  <div className="mr-4 bg-neutral-lightest p-2">
                    <img
                      src={projects.image.src}
                      alt={projects.image.alt}
 className="size-8 min-h-8 min-w-8 object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="font-semibold">{projects.projectName}</h6>
                    <div className="flex items-center">
                      <p className="text-sm">{projects.date}</p>
                      <span className="mx-2">•</span>
                      <p className="text-sm">{projects.category}</p>
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BiDotsHorizontalRounded className="size-6" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {projectCard.options.map((option, index) => (
                      <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="mb-6 md:mb-8">{projects.description}</p>
              <Button {...projects.button}>{projects.button.title}</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const projectCard: ProjectCard = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
    alt: "vibecoding icon 1",
  },
  projectName: "Project name",
  category: "Category",
  date: "11 Jan 2022",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  options: ["Rename", "Share", "Delete"],
  button: {
    title: "View project",
    variant: "secondary",
    size: "sm",
  },
};

export const GridList4Defaults: Props = {
  heading: "Latest Projects",
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
  projects: [projectCard, projectCard, projectCard, projectCard, projectCard, projectCard],
};

GridList4.displayName = 'GridList4';
```

