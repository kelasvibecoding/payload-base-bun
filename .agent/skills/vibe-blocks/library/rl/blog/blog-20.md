# Blog 20

## Metadata
- **Component Name**: Blog20
- **Category**: Blog
- **Technology Stack**: React, TypeScript, Tailwind CSS, shadcn/ui, Lucide React
- **Objective**: Implement a category-grouped blog listing with vertical tab navigation and bordered post cards
- **Use Case**: Ideal for blogs needing organized category browsing with vertical tabs on desktop and horizontal tabs on mobile
- **Responsive Behavior**: Vertical tab navigation on desktop, horizontal scroll on mobile; featured post spans 2 columns on tablet/desktop, 1 column on mobile
- **Visual Style**: Clean layout with vertical tab navigation, bordered post cards, highlighted category tags, and "Read more" buttons with icons
- **Key Features**: Category-based tab navigation (vertical/horizontal responsive), featured post spanning columns, video-aspect images, bordered post cards, highlighted category tags, "Read more" buttons with ChevronRight icons, responsive layout, default sample data for quick testing
- **Interactivity**: Tab-based content filtering, post card click-through to full article, "Read more" button navigation
- **Accessibility**: Semantic HTML section tag, descriptive alt text for images, keyboard-navigable tabs and links, icon buttons with clear purpose

## Description
A blog listing component designed for content discovery and navigation with specific layout and interaction patterns.

## Source Code
```tsx
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
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

type Tab = {
  value: string;
  trigger: string;
  content: BlogPost[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  tabs: Tab[];
};

export type Blog20Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog20 = (props: Blog20Props) => {
  const { tagline, heading, description, tabs } = {
    ...Blog20Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <Tabs
          defaultValue={tabs[0].value}
 className="grid grid-cols-1 gap-x-12 gap-y-12 text-left md:grid-cols-[0.25fr_1fr] md:gap-x-12 lg:grid-cols-[15rem_1fr] lg:gap-x-16"
>
          <TabsList className="mb-12 flex w-full flex-col md:mb-16">
            <div className="mb-6 text-base font-bold md:text-md">Blog categories</div>
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
 className="flex w-full justify-start px-4 py-3 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
>
                {tab.trigger}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
 className="data-[state=active]:animate-tabs"
>
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
                {tab.content.map((post, index) => (
                  <div
                    key={index}
 className={`${index === 0 ? "md:col-span-2" : ""}
                        flex
                        flex-col border border-border-primary`}
>
                    <a href={post.url} className="inline-block w-full max-w-full overflow-hidden">
                      <div className="w-full overflow-hidden">
                        <img
                          src={post.image.src}
                          alt={post.image.alt}
 className="aspect-video size-full object-cover"
                        />
                      </div>
                    </a>
                    <div className="px-5 py-6 md:px-6">
                      <div className="rb-4 mb-4 flex w-full items-center justify-start">
                        <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                          {post.category}
                        </p>
                        <p className="inline text-sm font-semibold">{post.readTime}</p>
                      </div>

                      <a
                        href={post.url}
 className={`${index === 0 ? "mb-4" : "mb-2"} block max-w-full`}
>
                        <h5
 className={`font-bold ${index === 0 ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl"}`}
>
                          {post.title}
                        </h5>
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
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
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
  button: {
    title: "Read more",
    variant: "link",
    size: "link",
    iconRight: <ChevronRight />,
  },
};

export const Blog20Defaults: Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tabs: [
    {
      value: "view-all",
      trigger: "View all",
      content: [blogPost, blogPost, blogPost, blogPost, blogPost],
    },
    {
      value: "category-one",
      trigger: "Category one",
      content: [blogPost, blogPost, blogPost, blogPost, blogPost],
    },
    {
      value: "category-two",
      trigger: "Category two",
      content: [blogPost, blogPost, blogPost, blogPost, blogPost],
    },
    {
      value: "category-three",
      trigger: "Category three",
      content: [blogPost, blogPost, blogPost, blogPost, blogPost],
    },
    {
      value: "category-four",
      trigger: "Category four",
      content: [blogPost, blogPost, blogPost, blogPost, blogPost],
    },
  ],
};

Blog20.displayName = 'Blog20';
```

