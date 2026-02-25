# Blog 32

## Metadata
- **Component Name**: Blog32
- **Category**: Blog
- **Technology Stack**: React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Lucide React
- **Objective**: Implement a select-filtered blog listing with side-by-side image and text layout
- **Use Case**: Ideal for blogs needing a clean, mobile-friendly category filtering experience with side-by-side content presentation and "Read more" buttons
- **Responsive Behavior**: 1-column grid on mobile, 2-column on tablet/desktop; select dropdown for category filtering
- **Visual Style**: Clean side-by-side image and text layout with select-based navigation, highlighted category tags, and "Read more" buttons with icons
- **Key Features**: Select-based content filtering, animated transitions with Framer Motion, square-aspect images, highlighted category tags, "Read more" buttons with ChevronRight icons, responsive layout, default sample data for quick testing
- **Interactivity**: Select dropdown category filtering, post card click-through to full article, "Read more" button navigation
- **Accessibility**: Semantic HTML section tag, descriptive alt text for images, keyboard-navigable select dropdown and links, icon buttons with clear purpose

## Description
A blog listing component designed for content discovery and navigation with specific layout and interaction patterns.

## Source Code
```tsx
"use client";

import { useState } from 'react';
import { Button, Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type BlogPost = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
  button: ButtonProps;
};

type BlogSelect = {
  value: string;
  trigger: string;
  content: BlogPost[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  defaultValue: string;
  selects: BlogSelect[];
};

export type Blog32Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog32 = (props: Blog32Props) => {
  const { tagline, heading, description, selects, defaultValue } = {
    ...Blog32Defaults,
    ...props,
  };

  const [activeSelect, setActiveSelect] = useState<string>(defaultValue);

  const currentSelect = selects.find((select) => select.value === activeSelect);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex max-w-lg flex-col">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="md:min-w- mb-10">
            <Select value={activeSelect} onValueChange={setActiveSelect}>
              <SelectTrigger className="min-w-[12.5rem] px-4 py-2 md:w-auto">
                {currentSelect ? currentSelect.trigger : "Select Category"}
              </SelectTrigger>

              <SelectContent>
                {selects.map((select, index) => (
                  <SelectItem key={index} value={select.value}>
                    {select.trigger}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <AnimatePresence mode="wait">
            {currentSelect && (
              <motion.div
                key={currentSelect.value}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
>
                <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-16">
                  {currentSelect.content.map((post, index) => (
                    <div
                      key={index}
 className="grid gap-x-8 gap-y-6 md:grid-cols-[.5fr_1fr] md:gap-x-10 md:gap-y-4"
>
                      <a href={post.url} className="w-full">
                        <img
                          src={post.image.src}
                          alt={post.image.alt}
 className="aspect-square w-full object-cover"
                        />
                      </a>
                      <div className="flex h-full flex-col items-start justify-center">
                        <div className="rb-4 mb-4 flex w-full items-center justify-start">
                          <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                            {post.category}
                          </p>
                          <p className="inline text-sm font-semibold">{post.readTime}</p>
                        </div>
                        <div className="flex w-full flex-col items-start justify-start">
                          <a className="mb-2" href={post.url}>
                            <h3 className="text-xl font-bold md:text-2xl">{post.title}</h3>
                          </a>
                          <p>{post.description}</p>
                          <Button
                            {...post.button}
 className="mt-6 flex items-center justify-center gap-x-2"
>
                            {post.button.title}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const blogPost: BlogPost = {
  url: "#",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "vibecoding placeholder image",
  },
  category: "Category",
  readTime: "5 min read",
  title: "Blog title heading will go here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
  button: {
    title: "Read more",
    variant: "link",
    size: "link",
    iconRight: <ChevronRight />,
  },
};

export const Blog32Defaults: Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  selects: [
    {
      value: "all-posts",
      trigger: "All Posts",
      content: [blogPost, blogPost, blogPost],
    },
    {
      value: "category-one",
      trigger: "Category one",
      content: [blogPost, blogPost, blogPost],
    },
    {
      value: "category-two",
      trigger: "Category two",
      content: [blogPost, blogPost, blogPost],
    },
    {
      value: "category-three",
      trigger: "Category three",
      content: [blogPost, blogPost, blogPost],
    },
    {
      value: "category-four",
      trigger: "Category four",
      content: [blogPost, blogPost, blogPost],
    },
  ],
  defaultValue: "all-posts",
};

Blog32.displayName = 'Blog32';
```

