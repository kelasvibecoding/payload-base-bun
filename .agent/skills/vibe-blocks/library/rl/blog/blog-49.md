# Blog 49

## Metadata
- **Component Name**: Blog49
- **Category**: Blog
- **Technology Stack**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Objective**: Implement a blog listing with centered hero section and side-by-side post layout
- **Use Case**: Ideal for blogs needing a subtle, centered hero section followed by a grid of posts with square-aspect images and side-by-side text layout
- **Responsive Behavior**: Hero section uses centered layout on all screen sizes; post layout uses 1-column on mobile, 2-column on tablet/desktop
- **Visual Style**: Minimal centered hero section with heading, followed by a clean grid of post cards with square-aspect images and organized author metadata
- **Key Features**: Minimal centered hero section, square-aspect post images, side-by-side image and text layout, author metadata (name, date, read time), "View all" call-to-action button, responsive layout, default sample data for quick testing
- **Interactivity**: Post card click-through to full article, "View all" button navigation
- **Accessibility**: Semantic HTML section tag, descriptive alt text for images, keyboard-navigable buttons and links

## Description
A blog listing component designed for content discovery and navigation with specific layout and interaction patterns.

## Source Code
```tsx
"use client";
import * as React from 'react';
import { ButtonProps } from '@/components/ui';
import { Button } from '@/components/ui';

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
  avatar: ImageProps;
  fullName: string;
  date: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  blogPosts: BlogPost[];
};

export type Blog49Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog49 = (props: Blog49Props) => {
  const { tagline, heading, description, blogPosts, button } = {
    ...Blog49Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
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
 className="aspect-square size-full object-cover"
                  />
                </a>
                <div className="flex h-full flex-col items-start justify-start">
                  <p className="mb-2 text-sm font-semibold">{post.category}</p>
                  <div className="flex w-full flex-col items-start justify-start">
                    <a className="mb-2" href={post.url}>
                      <h3 className="text-xl font-bold md:text-2xl">{post.title}</h3>
                    </a>
                    <p>{post.description}</p>
                    <div className="mt-5 flex items-center md:mt-6">
                      <div className="mr-4 shrink-0">
                        <img
                          src={post.avatar.src}
                          alt={post.avatar.alt}
 className="aspect-square size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold">{post.fullName}</h6>
                        <div className="flex items-center">
                          <p className="text-sm">{post.date}</p>
                          <span className="mx-2">•</span>
                          <p className="text-sm">{post.readTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Button {...button} className="mt-10 sm:mt-18 md:mt-20">
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
  avatar: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder avatar",
  },
  fullName: "Full name",
  date: "11 Jan 2022",
};

export const Blog49Defaults: Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: { title: "View all", variant: "secondary" },
  blogPosts: [blogPost, blogPost, blogPost, blogPost],
};

Blog49.displayName = 'Blog49';
```

