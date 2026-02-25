# Blog 58

## Metadata
- **Component Name**: Blog58
- **Category**: Blog
- **Technology Stack**: React, TypeScript, Tailwind CSS, shadcn/ui, Lucide React
- **Objective**: Implement a blog listing with hero section and video-aspect post grid
- **Use Case**: Ideal for blogs needing a hero section with left-aligned heading and right-aligned button followed by a grid of posts with video-style aspect ratio images and "Read more" buttons
- **Responsive Behavior**: Hero section uses 1-column layout on mobile, 2-column on tablet/desktop; grid uses 1-column on mobile, 2-column on tablet/desktop; button placement adjusts based on screen size
- **Visual Style**: Hero section with left-aligned heading and right-aligned button, followed by a clean grid of post cards with video-aspect images, highlighted category tags, and "Read more" buttons
- **Key Features**: Hero section with call-to-action button, video-aspect post images, highlighted category tags, "Read more" buttons with ChevronRight icons, responsive button placement, default sample data for quick testing
- **Interactivity**: Post card click-through to full article, hero button navigation, "Read more" button navigation
- **Accessibility**: Semantic HTML section tag, descriptive alt text for images, keyboard-navigable buttons and links, icon buttons with clear purpose

## Description
A blog listing component designed for content discovery and navigation with specific layout and interaction patterns.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
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
  blogPosts: BlogPost[];
  button: ButtonProps;
};

export type Blog58Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog58 = (props: Blog58Props) => {
  const { tagline, heading, description, button, blogPosts } = {
    ...Blog58Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
          </div>
          <div className="hidden flex-wrap items-center justify-end md:block">
            <Button {...button}>{button.title}</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex size-full flex-col items-center justify-start">
              <a href={post.url} className="mb-5 w-full md:mb-6">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
 className="aspect-video size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-3 flex w-full items-center justify-start md:mb-4">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  {post.category}
                </p>
                <p className="inline text-sm font-semibold">{post.readTime}</p>
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <a className="mb-2" href={post.url}>
                  <h2 className="text-xl font-bold md:text-2xl">{post.title}</h2>
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
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-end md:hidden">
          <Button {...button}>{button.title}</Button>
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  button: { title: "Read more", variant: "link", size: "link", iconRight: <ChevronRight /> },
};

export const Blog58Defaults: Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: { title: "View all", variant: "secondary" },
  blogPosts: [blogPost, blogPost],
};

Blog58.displayName = 'Blog58';
```

