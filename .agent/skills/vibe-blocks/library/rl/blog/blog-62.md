# Blog 62

## Metadata
- **Component Name**: Blog62
- **Category**: Blog
- **Technology Stack**: React, TypeScript, Tailwind CSS, shadcn/ui, Lucide React
- **Objective**: Implement a blog listing with hero section and side-by-side post layout
- **Use Case**: Ideal for blogs needing a hero section with left-aligned heading and right-aligned button followed by a grid of posts with square-aspect images, "Read more" buttons, and side-by-side text layout
- **Responsive Behavior**: Hero section uses 1-column layout on mobile, 2-column on tablet/desktop; post layout uses 1-column on mobile, 2-column on tablet/desktop; button placement adjusts based on screen size
- **Visual Style**: Hero section with left-aligned heading and right-aligned button, followed by a clean grid of post cards with square-aspect images, highlighted category tags, and "Read more" buttons
- **Key Features**: Hero section with call-to-action button, square-aspect post images, side-by-side image and text layout, highlighted category tags, "Read more" buttons with ChevronRight icons, responsive button placement, default sample data for quick testing
- **Interactivity**: Post card click-through to full article, hero button navigation, "Read more" button navigation
- **Accessibility**: Semantic HTML section tag, descriptive alt text for images, keyboard-navigable buttons and links, icon buttons with clear purpose

## Description
A blog listing component designed for content discovery and navigation with specific layout and interaction patterns.

## Source Code
```tsx
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

export type Blog62Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog62 = (props: Blog62Props) => {
  const { tagline, heading, description, blogPosts, button } = {
    ...Blog62Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">{heading}</h1>
              <p className="md:text-md">{description}</p>
            </div>
          </div>
          <div className="hidden md:flex md:justify-end">
            <Button {...button}>{button.title}</Button>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:gap-y-16 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <div key={index}>
              <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
                <a className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden">
                  <img
                    src={post.image.src}
                    alt={post.image.alt}
 className="aspect-square size-full object-cover"
                  />
                </a>
                <div className="flex w-full flex-col justify-center">
                  <div className="rb-4 mb-3 flex w-full items-center justify-start md:mb-4">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      {post.category}
                    </p>
                    <p className="text-sm font-semibold">{post.readTime}</p>
                  </div>
                  <a className="mb-2" href={post.url}>
                    <h3 className="text-xl font-bold md:text-2xl">{post.title}</h3>
                  </a>
                  <p className="line-clamp-2">{post.description}</p>
                  <div className="mt-5 md:mt-6">
                    <Button {...post.button}>{post.button.title}</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-end md:hidden">
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
  button: {
    title: "Read more",
    variant: "link",
    size: "link",
    iconRight: <ChevronRight />,
  },
};

export const Blog62Defaults: Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: { title: "View all", variant: "secondary" },
  blogPosts: [blogPost, blogPost, blogPost, blogPost],
};

Blog62.displayName = 'Blog62';
```
