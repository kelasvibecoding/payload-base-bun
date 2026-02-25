# Blog 56

## Metadata
- **Component Name**: Blog56
- **Category**: Blog
- **Technology Stack**: React, TypeScript, Tailwind CSS, shadcn/ui, Lucide React
- **Objective**: Implement a blog listing with left-aligned hero section and side-by-side post layout
- **Use Case**: Ideal for blogs needing a left-aligned hero section followed by a grid of posts with square-aspect images, "Read more" buttons, and a right-aligned "View all" button
- **Responsive Behavior**: Hero section uses left-aligned layout on all screen sizes; post layout uses 1-column on mobile, 2-column on tablet/desktop
- **Visual Style**: Left-aligned hero section with heading, followed by a clean grid of post cards with square-aspect images, highlighted category tags, and "Read more" buttons
- **Key Features**: Left-aligned hero section, square-aspect post images, side-by-side image and text layout, highlighted category tags, "Read more" buttons with ChevronRight icons, right-aligned "View all" call-to-action button, responsive layout, default sample data for quick testing
- **Interactivity**: Post card click-through to full article, "Read more" button navigation, "View all" button navigation
- **Accessibility**: Semantic HTML section tag, descriptive alt text for images, keyboard-navigable buttons and links, icon buttons with clear purpose

## Description
A blog listing component designed for content discovery and navigation with specific layout and interaction patterns.

## Source Code
```tsx
"use client";
import * as React from 'react';
import { ButtonProps } from '@/components/ui';
import { Button } from '@/components/ui';
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

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  blogPosts: BlogPost[];
};

export type Blog56Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog56 = (props: Blog56Props) => {
  const { tagline, heading, description, blogPosts, button } = {
    ...Blog56Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-16 lg:grid-cols-2">
            {blogPosts.map((post, index) => (
              <div key={index} className="grid gap-x-8 gap-y-6 md:grid-cols-[.75fr_1fr] md:gap-y-4">
                <a href={post.url} className="w-full">
                  <img
                    src={post.image.src}
                    alt={post.image.alt}
 className="aspect-square w-full object-cover"
                  />
                </a>
                <div className="flex h-full flex-col items-start justify-start">
                  <div className="rb-4 mb-3 flex w-full items-center justify-start md:mb-4">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      {post.category}
                    </p>
                    <p className="inline text-sm font-semibold">{post.readTime}</p>
                  </div>{" "}
                  <div className="flex w-full flex-col items-start justify-start">
                    <a className="mb-2" href={post.url}>
                      <h3 className="text-xl font-bold md:text-2xl">{post.title}</h3>
                    </a>
                    <p>{post.description}</p>
                    <Button
                      {...post.button}
 className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
>
                      {post.button.title}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end">
            <Button {...button} className="mt-10 md:mt-14 lg:mt-16">
              {button.title}
            </Button>
          </div>
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

export const Blog56Defaults: Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: { title: "View all", variant: "secondary" },
  blogPosts: [blogPost, blogPost, blogPost, blogPost],
};

Blog56.displayName = 'Blog56';
```
