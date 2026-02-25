# Blog 17

## Metadata
- **Component Name**: Blog17
- **Category**: Blog
- **Technology Stack**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Objective**: Implement a category-grouped blog listing with vertical tab navigation and featured post spanning
- **Use Case**: Ideal for blogs needing organized category browsing with vertical tabs on desktop and horizontal tabs on mobile
- **Responsive Behavior**: Vertical tab navigation on desktop, horizontal scroll on mobile; featured post spans 2 columns on tablet/desktop, 1 column on mobile
- **Visual Style**: Clean layout with vertical tab navigation, featured post spanning columns, and organized author metadata
- **Key Features**: Category-based tab navigation (vertical/horizontal responsive), featured post spanning columns, video-aspect images, author metadata (name, date, read time), responsive layout, default sample data for quick testing
- **Interactivity**: Tab-based content filtering, post card click-through to full article
- **Accessibility**: Semantic HTML section tag, descriptive alt text for images, keyboard-navigable tabs and links

## Description
A blog listing component designed for content discovery and navigation with specific layout and interaction patterns.

## Source Code
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';

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

export type Blog17Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog17 = (props: Blog17Props) => {
  const { tagline, heading, description, tabs } = {
    ...Blog17Defaults,
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
 className=" flex w-full justify-start whitespace-nowrap border-none px-4 py-3 data-[state=active]:bg-background-secondary data-[state=active]:font-semibold data-[state=active]:text-neutral-black"
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
                  <div key={index} className={index === 0 ? "md:col-span-2" : ""}>
                    <a href={post.url} className="mb-6 inline-block w-full max-w-full">
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
                    <div className="mt-6 flex items-center">
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
  avatar: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder avatar",
  },
  fullName: "Full name",
  date: "11 Jan 2022",
};

export const Blog17Defaults: Props = {
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

Blog17.displayName = 'Blog17';
```

