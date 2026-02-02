# Grid List 10

## Metadata
- **Category**: Grid List
- **Objective**: Course/Video Gallery Grid
- **Use Case**: LMS platforms or video libraries.
- **Visual Style**: Video Thumbnail Cards.
- **Interactivity**: Lightbox video play.

## Description
A versatile listing component that organizes data points, profiles, or products into structured grid layouts with built-in actions and filters.

## Source Code
```tsx
"use client";

import {
  Button,
  ButtonProps,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui';
import clsx from 'clsx';
import { useState } from 'react';
import { BiBookmark, BiBookOpen, BiDotsHorizontalRounded } from 'lucide-react';
import { FaCirclePlay } from 'lucide-react';
import { CgSpinner } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type CourseCard = {
  image: ImageProps;
  title: string;
  description: string;
  video: string;
  numberOfLessons: number;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
  courses: CourseCard[];
};

export type GridList10Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const GridList10 = (props: GridList10Props) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const { heading, description, buttons, options, courses } = {
    ...GridList10Defaults,
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
        {courses.map((course, index) => (
          <div key={index} className="border border-border-primary">
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative flex w-full items-center justify-center">
                  <img
                    src={course.image.src}
 className="aspect-video w-full object-cover"
                    alt={course.image.alt}
                  />
                  <FaCirclePlay className="absolute z-20 size-16 text-white" />
                  <span className="absolute inset-0 z-10 bg-black/50" />
                </button>
              </DialogTrigger>
              <DialogContent>
                {!isIframeLoaded && (
                  <CgSpinner className="mx-auto size-16 animate-spin text-white" />
                )}
                <iframe
 className={clsx("z-0 mx-auto aspect-video size-full", {
                    visible: isIframeLoaded,
                    hidden: !isIframeLoaded,
                  })}
                  src={course.video}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsIframeLoaded(true)}
></iframe>
              </DialogContent>
            </Dialog>
            <div className="flex flex-col p-6">
              <div className="mb-2 flex items-center justify-between gap-4">
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">{course.title}</h2>
              </div>
              <p>{course.description}</p>
              <div className="mt-5 flex items-center justify-between md:mt-6">
                <div className="flex items-center text-sm">
                  <BiBookOpen className="mr-2 size-6" />
                  {course.numberOfLessons} lessons
                </div>
                <div className="p-2">
                  <Button className="cursor-pointer" size="icon" variant="tertiary" asChild>
                    <BiBookmark className="size-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const courseCard: CourseCard = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "vibecoding placeholder image",
  },
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  title: "Course title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  numberOfLessons: 40,
};

export const GridList10Defaults: Props = {
  heading: "All Courses",
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
  courses: [courseCard, courseCard, courseCard, courseCard, courseCard, courseCard],
};

GridList10.displayName = 'GridList10';
```

