# Grid List 9

## Metadata
- **Category**: Grid List
- **Objective**: Status-Led Grid
- **Use Case**: Project tracking or dashboards.
- **Visual Style**: Badge-heavy grid.
- **Interactivity**: Status updates.

## Description
A versatile listing component that organizes data points, profiles, or products into structured grid layouts with built-in actions and filters.

## Source Code
```tsx
import type { ButtonProps } from '@/components/ui';
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { BiBookmark, BiSearch, BiSolidStar, BiSolidStarHalf, BiStar } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type CourseCard = {
  image: ImageProps;
  title: string;
  description: string;
  button: ButtonProps;
  review: number;
  starsNumber: number;
};

type Props = {
  heading: string;
  description: string;
  inputIcon: React.ReactNode;
  selectPlaceholder: string;
  selectItems: string[];
  courses: CourseCard[];
};

export type GridList9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const GridList9 = (props: GridList9Props) => {
  const { heading, description, inputIcon, selectPlaceholder, selectItems, courses } = {
    ...GridList9Defaults,
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
        {courses.map((course, index) => (
          <div key={index} className="border border-border-primary">
            <div className="overflow-hidden">
              <img
                src={course.image.src}
                alt={course.image.alt}
 className="aspect-[3/2] size-full object-cover"
              />
            </div>
            <div className="flex flex-col p-6">
              <div className="mb-2 flex items-center justify-between gap-4">
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">{course.title}</h2>
                <div className="p-2">
                  <Button className="cursor-pointer" size="icon" variant="tertiary" asChild>
                    <BiBookmark className="size-6" />
                  </Button>
                </div>
              </div>
              <p className="mb-3 md:mb-4">{course.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                <RatingStars rating={course.starsNumber} />
                <p className="text-sm">{`(${course.starsNumber} stars) • ${course.review} reviews`}</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button {...course.button} className="w-full">
                  {course.button.title}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFullStar = i < fullStars;
        const isHalfStar = hasHalfStar && i === fullStars;

        return (
          <div key={i}>
            {isFullStar ? <BiSolidStar /> : isHalfStar ? <BiSolidStarHalf /> : <BiStar />}
          </div>
        );
      })}
    </div>
  );
};

const courseCard: CourseCard = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "vibecoding placeholder image",
  },
  title: "Course title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  review: 10,
  starsNumber: 3.5,
  button: {
    title: "Add to cart",
    size: "sm",
  },
};

export const GridList9Defaults: Props = {
  heading: "Popular Courses",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  selectPlaceholder: "Sort by",
  inputIcon: <BiSearch className="size-6" />,
  selectItems: ["Option 1", "Option 2", "Option 3"],
  courses: [courseCard, courseCard, courseCard, courseCard, courseCard, courseCard],
};

GridList9.displayName = 'GridList9';
```

