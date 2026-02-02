# Links 2

## Metadata
- **Category**: Links
- **Objective**: Brand Resource Links
- **Use Case**: Corporate landing page for quick access.
- **Visual Style**: Category-grouped link blocks.
- **Interactivity**: Link actions.

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
  avatar: ImageProps;
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

export type Links2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Links2 = (props: Links2Props) => {
  const { author, image, categories, newsLetter, button, socialLinks } = {
    ...Links2Defaults,
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
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-md">
        <div className="mb-10 flex flex-col items-center text-center text-text-alternative md:mb-14 lg:mb-16">
          <img
            src={author.avatar.src}
            alt={author.avatar.alt}
 className="mb-5 size-24 rounded-full object-cover md:mb-6"
          />
          <h2 className="mb-2 text-xl font-bold md:text-2xl">{author.fullName}</h2>
          <p>{author.position}</p>
          <div className="mt-3 flex items-center justify-center gap-2 md:mt-4">
            <MdLocationOn className="size-5" />
            <p>{author.location}</p>
          </div>
        </div>
        <div className="space-y-8">
          {categories.map((category, index) => (
            <Category key={index} {...category} />
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                {...button}
 className="w-full gap-4 whitespace-normal border-none p-4 text-left"
              />
            </DialogTrigger>
            <DialogContent
              closeIconPosition="inside"
              overlayClassName="bg-black/25"
 className="flex size-full flex-col bg-white px-[5%] pb-28 pt-12 md:size-auto md:w-[90%] md:px-12 md:py-12 lg:max-w-sm"
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
          <div className="flex flex-wrap justify-center gap-3 text-text-alternative">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

const Category = (category: CategoryProps) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      {category.heading && (
        <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
          {category.heading}
        </h3>
      )}
      {category.links.map((link, index) => (
        <Button key={index} {...link} asChild className="border-none">
          <a href={link.url}>{link.title}</a>
        </Button>
      ))}
    </div>
  );
};

export const Links2Defaults: Props = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "vibecoding placeholder image",
  },
  author: {
    avatar: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
      alt: "vibecoding placeholder avatar",
    },
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

Links2.displayName = 'Links2';
```

