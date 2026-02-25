# Blog Post Header 2

## Metadata
- **Category**: Blog Post Header
- **Objective**: Minimal Article Header
- **Use Case**: Clean, distraction-free blog post header focusing on title and essential metadata.
- **Visual Style**: Simplified layout with title, author, and date - no featured image.
- **Interactivity**: Basic author and date display, minimal navigation.

## Description
A blog post header component designed to introduce article content with metadata, navigation, and visual hierarchy.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { FaXTwitter } from 'lucide-react';
import { BiLinkAlt, BiLogoLinkedinSquare, BiLogoFacebookCircle } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type PostDetails = {
  title: string;
  description: string;
};

type SocialMediaLinksProps = {
  icon: React.ReactNode;
  url: string;
};

type Props = {
  button: ButtonProps;
  category: string;
  readTime: string;
  heading: string;
  image: ImageProps;
  postDetails: PostDetails[];
  socialMediaLinks: SocialMediaLinksProps[];
};

export type BlogPostHeader2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BlogPostHeader2 = (props: BlogPostHeader2Props) => {
  const { button, category, readTime, heading, image, postDetails, socialMediaLinks } = {
    ...BlogPostHeader2Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 flex flex-col items-start justify-start md:mb-18 lg:mb-20">
          <Button {...button} className="mb-8 md:mb-10 lg:mb-12" asChild>
            <a>{button.title}</a>
          </Button>
          <div className="rb-4 mb-4 flex w-full items-center justify-start">
            <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
              {category}
            </p>
            <p className="inline text-sm font-semibold">{readTime}</p>
          </div>
          <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">{heading}</h1>
        </div>
        <div className="mx-auto mb-8 w-full overflow-hidden md:mb-12 lg:mb-8">
          <img src={image.src} className="aspect-[5/2] size-full object-cover" alt={image.alt} />
        </div>
        <div className="flex w-full flex-col items-start justify-between md:flex-row">
          <div className="rb-4 mb-4 flex items-center sm:mb-8 md:mb-0">
            {postDetails.map((detail, index) => (
              <div key={index} className="mr-8 md:mr-10 lg:mr-12">
                <p className="mb-2">{detail.title}</p>
                <p className="font-medium">{detail.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-flow-col grid-cols-[max-content] items-start gap-2">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
 className="rounded-[1.25rem] bg-background-secondary p-1"
>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const BlogPostHeader2Defaults: Props = {
  button: {
    title: "All Posts",
    variant: "link",
    size: "link",
    iconLeft: <ChevronLeft />,
  },
  category: "Category",
  readTime: "5 min read",
  heading: "Blog title heading will go here",
  postDetails: [
    { title: "Written by", description: "Full Name" },
    { title: "Published on", description: "22 January 2021" },
  ],
  socialMediaLinks: [
    { url: "#", icon: <BiLinkAlt className="size-6" /> },
    { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
    { url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
};

BlogPostHeader2.displayName = 'BlogPostHeader2';
```

