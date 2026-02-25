# Links 4

## Metadata
- **Category**: Links
- **Objective**: General Links
- **Use Case**: Visual Links browsing.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A versatile component for organizing multiple external or internal links, often styled for personal branding pages or resource directories.

## Source Code
```tsx
import { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTrigger, Input } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { MdLocationOn } from 'lucide-react';
import { FaXTwitter } from 'lucide-react';
import { Mail, BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoYoutube } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type AuthorDetailsProps = {
  fullName: string;
  position: string;
  location: string;
};

type CategoryLinkProps = {
  url: string;
  title: string;
  variant?: string;
};

type CategoryProps = {
  heading?: string;
  links: CategoryLinkProps[];
};

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
};

type NewsletterProps = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  submitButton: ButtonProps;
  termsAndConditions: string;
};

type Props = {
  image: ImageProps;
  author: AuthorDetailsProps;
  categories: CategoryProps[];
  button: ButtonProps;
  newsLetter: NewsletterProps;
  socialLinks: SocialLinkProps[];
};

export type Links4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Links4 = (props: Links4Props) => {
  const { author, image, categories, button, newsLetter, socialLinks } = {
    ...Links4Defaults,
    ...props,
  };
  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };
  return (
    <section className="px-[5%] md:pt-8">
      <div className="container relative z-10 max-w-md">
        <div className="mb-6 pt-6 text-center text-text-alternative md:mb-8 md:pt-0">
          <div className="relative">
            <div className="absolute bottom-0 left-0 z-10 w-full px-6 py-8">
              <h2 className="mb-2 text-xl font-bold md:text-2xl">{author.fullName}</h2>
              <p>{author.position}</p>
              <div className="my-3 flex items-center justify-center gap-2 md:my-4">
                <MdLocationOn className="size-5" />
                <p>{author.location}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href}>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative z-0 flex aspect-square items-center justify-center object-cover">
              <div className="absolute -top-6 size-full h-[calc(100%+1.5rem)] w-screen md:top-0 md:size-full">
                <img src={image.src} className="size-full object-cover" alt={image.alt} />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8 pb-16 md:pb-24 lg:pb-28">
          {categories.map((category, index) => (
            <Category key={index} {...category} />
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Button
 className="w-full gap-4 whitespace-normal border border-border-primary p-4 text-left"
                {...button}
              />
            </DialogTrigger>
            <DialogContent
              closeIconPosition="inside"
              overlayClassName="bg-black/25"
 className="flex size-full flex-col justify-center bg-white px-[5%] pb-28 pt-12 md:size-auto md:w-[90%] md:px-12 md:py-12 lg:max-w-sm"
>
              <div className="mb-8 text-center md:mb-12">
                <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  {newsLetter.heading}
                </h2>
                <p>{newsLetter.description}</p>
              </div>
              <form className="mb-4 flex flex-col gap-y-4" onSubmit={handleSubmit}>
                <Input
                  id="email"
                  type="email"
                  placeholder={newsLetter.inputPlaceholder}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <Button {...newsLetter.submitButton}>{newsLetter.submitButton.title}</Button>
              </form>
              <div dangerouslySetInnerHTML={{ __html: newsLetter.termsAndConditions }} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

const Category = (category: CategoryProps) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      {category.heading && (
        <h3 className="text-md font-bold leading-[1.4] md:text-xl">{category.heading}</h3>
      )}
      {category.links.map((link, index) => (
        <Button key={index} {...link} asChild>
          <a href={link.url}>{link.title}</a>
        </Button>
      ))}
    </div>
  );
};

export const Links4Defaults: Props = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
  author: {
    fullName: "Name Surname",
    position: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Location",
  },
  categories: [
    {
      links: [
        {
          url: "#",
          title: "Link one",
          variant: "secondary",
        },
      ],
    },
    {
      heading: "Category name",
      links: [
        {
          url: "#",
          title: "Link two",
          variant: "secondary",
        },
        {
          url: "#",
          title: "Link three",
          variant: "secondary",
        },
        {
          url: "#",
          title: "Link four",
          variant: "secondary",
        },
      ],
    },
    {
      heading: "Category name",
      links: [
        {
          url: "#",
          title: "Link five",
          variant: "secondary",
        },
        {
          url: "#",
          title: "Link six",
          variant: "secondary",
        },
      ],
    },
  ],
  button: {
    variant: "secondary",
    children: (
      <>
        <Mail className="size-8 shrink-0" />
        <span className="flex grow flex-col items-start">
          <span className="font-semibold md:text-md">Join our newsletter</span>
          <span className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </span>
      </>
    ),
  },
  newsLetter: {
    heading: "Join our newsletter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    inputPlaceholder: "Enter your email",
    submitButton: {
      title: "Subscribe",
    },
    termsAndConditions: `
		<p class='text-xs'>
			By subscribing you agree to with our  
			<a href='#' class='underline'>Privacy Policy</a> and provide consent to receive updates from our company.
		</p>
  `,
  },
  socialLinks: [
    { href: "#", icon: <BiLogoFacebookCircle className="size-8" /> },
    { href: "#", icon: <BiLogoInstagram className="size-8" /> },
    { href: "#", icon: <FaXTwitter className="size-8" /> },
    { href: "#", icon: <BiLogoLinkedinSquare className="size-8" /> },
    { href: "#", icon: <BiLogoYoutube className="size-8" /> },
  ],
};

Links4.displayName = 'Links4';
```

