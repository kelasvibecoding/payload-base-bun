# Blog 46

## Metadata
- **Component Name**: Blog46
- **Category**: Blog
- **Technology Stack**: React, TypeScript, Tailwind CSS, shadcn/ui, Lucide React
- **Objective**: Implement a minimal blog listing with centered hero section and video-aspect post grid
- **Use Case**: Ideal for blogs needing a subtle, centered hero section followed by a grid of posts with video-style aspect ratio images and "Read more" buttons
- **Responsive Behavior**: Hero section uses centered layout on all screen sizes; grid uses 1-column on mobile, 2-column on tablet/desktop
- **Visual Style**: Minimal centered hero section with heading, followed by a clean grid of post cards with video-aspect images, highlighted category tags, and "Read more" buttons
- **Key Features**: Minimal centered hero section, video-aspect post images, highlighted category tags, "Read more" buttons with ChevronRight icons, "View all" call-to-action button, responsive layout, default sample data for quick testing
- **Interactivity**: Post card click-through to full article, "Read more" button navigation, "View all" button navigation
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

export type Blog46Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog46 = (props: Blog46Props) => {
  const { tagline, heading, description, button, blogPosts } = {
    ...Blog46Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex size-full flex-col items-center justify-start">
              <a href={post.url} className="mb-5 block sm:mb-6">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
 className="aspect-video size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-3 flex w-full items-center justify-start sm:mb-4">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  {post.category}
                </p>
                <p className="text-sm font-semibold">{post.readTime}</p>
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <a className="mb-2" href={post.url}>
                  <h2 className="text-xl font-bold md:text-2xl">{post.title}</h2>
                </a>
                <p>{post.description}</p>
                <Button
                  {...post.button}
 className="mt-5 flex items-center justify-center gap-x-2 sm:mt-6"
>
                  {post.button.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center md:mt-20">
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

export const Blog46Defaults: Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: { title: "View all", variant: "secondary" },
  blogPosts: [blogPost, blogPost],
};

Blog46.displayName = 'Blog46';
```

