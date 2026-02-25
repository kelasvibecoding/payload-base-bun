# Blog 57

## Metadata
- **Component Name**: Blog57
- **Category**: Blog
- **Technology Stack**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Objective**: Implement a blog listing with hero section and video-aspect post grid
- **Use Case**: Ideal for blogs needing a hero section with left-aligned heading and right-aligned button followed by a grid of posts with video-style aspect ratio images
- **Responsive Behavior**: Hero section uses 1-column layout on mobile, 2-column on tablet/desktop; grid uses 1-column on mobile, 2-column on tablet/desktop; button placement adjusts based on screen size
- **Visual Style**: Hero section with left-aligned heading and right-aligned button, followed by a clean grid of post cards with video-aspect images and organized author metadata
- **Key Features**: Hero section with call-to-action button, video-aspect post images, author metadata (name, date, read time), responsive button placement, default sample data for quick testing
- **Interactivity**: Post card click-through to full article, hero button navigation
- **Accessibility**: Semantic HTML section tag, descriptive alt text for images, keyboard-navigable buttons and links

## Description
A blog listing component designed for content discovery and navigation with specific layout and interaction patterns.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';

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

export type Blog57Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog57 = (props: Blog57Props) => {
  const { tagline, heading, description, button, blogPosts } = {
    ...Blog57Defaults,
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
            <div key={index}>
              <a href={post.url} className="mb-5 inline-block w-full max-w-full md:mb-6">
                <div className="w-full overflow-hidden">
                  <img
                    src={post.image.src}
                    alt={post.image.alt}
 className="aspect-video size-full object-cover"
                  />
                </div>
              </a>
              <a
                href={post.url}
 className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
>
                {post.category}
              </a>

              <a href={post.url} className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">{post.title}</h5>
              </a>
              <p>{post.description}</p>
              <div className="mt-5 flex items-center md:mt-6">
                <div className="mr-4 shrink-0">
                  <img
                    src={post.avatar.src}
                    alt={post.avatar.alt}
 className="size-12 min-h-12 min-w-12 rounded-full object-cover"
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
  avatar: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder avatar",
  },
  fullName: "Full name",
  date: "11 Jan 2022",
};

export const Blog57Defaults: Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: { title: "View all", variant: "secondary" },
  blogPosts: [blogPost, blogPost],
};

Blog57.displayName = 'Blog57';
```
