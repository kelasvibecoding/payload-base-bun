# Ecommerce Footer Component 1

## Metadata
- **Category**: Ecommerce Footer
- **Objective**: Complete multi-section ecommerce store footer
- **Use Case**: Full production-ready footer for an online electronics or apparel store with newsletter, quick links, contact info, and socials
- **Visual Style**: Modern, clean responsive layout with muted text accents and consistent shadcn/ui styling
- **Interactivity**: Newsletter form with validation, footer link navigation, social media links, language selector, back-to-top button

## Description
A comprehensive ecommerce footer component that includes every standard feature for a modern online store. It features a newsletter signup form with Zod and react-hook-form validation, organized footer link sections for easy navigation, contact information with mailto/telephone links, social media icons, a language selector, copyright attribution, and a back-to-top button. The component supports dark/light mode for logos and social icons, and is fully responsive across all device sizes.

## Features
- Fully responsive grid layout adapting to mobile, tablet, and desktop
- Newsletter signup form with email validation using Zod and react-hook-form
- Customizable footer link sections with organized category links
- Contact details with mailto (email) and tel (phone) link support
- Social media icons using simple-icons with dark/light mode adapters
- Dropdown language selector for multi-language stores
- Copyright and powered-by attribution text
- Back-to-top button for improved user experience
- Dark/light mode compatible styling for all elements
- Type-safe TypeScript interfaces for all component props

## Source Code
```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronUp, Clock, LucideIcon, MapPin, Phone } from "lucide-react";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import { siFacebook, siInstagram, SimpleIcon, siX } from "simple-icons";
import z from "zod";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

type NewsletterData = {
  title?: string;
  description?: string;
};

type NewsletterFormProps = NewsletterData;

type FooterLink = {
  text: string;
  link: string;
};

type FooterLinksSection = {
  title: string;
  items: FooterLink[];
};

interface FooterLinksSectionProps {
  sections: FooterLinksSection[];
};

type SocialLink = {
  link: string;
  icon: SimpleIcon;
};

type ContactLink = {
  icon: LucideIcon;
  text: string;
  type: LinkTypes;
  link?: string;
};

type ContactLinks = {
  contactDetails: ContactLink[];
  socialMedia: SocialLink[];
};

interface ContactSectionProps {
  links: ContactLinks;
};

interface EcommerceFooter1Props {
  newsletter: NewsletterData;
  footerLinks: FooterLinksSection[];
  contactLinks: ContactLinks;
  className?: string;
};

const LINK_TYPES = {
  NO_LINK: "NO_LINK",
  PHONE_LINK: "PHONE_LINK",
  EMAIL_LINK: "EMAIL_LINK",
};

type LinkTypes = keyof typeof LINK_TYPES;

const NEWSLETTER_DATA = {
  title: "Newsletter",
  description:
    "Join our newsletter to receive exclusive deals, tech tips, product launches, and early access to the latest electronics.",
};

const FOOTER_LINKS: FooterLinksSection[] = [
  {
    title: "Information",
    items: [
      {
        text: "Terms and Conditions",
        link: "#",
      },
      {
        text: "Privacy Policy",
        link: "#",
      },
      {
        text: "Warranty Policy",
        link: "#",
      },
      {
        text: "Terms of Service",
        link: "#",
      },
    ],
  },
  {
    title: "Collections",
    items: [
      {
        text: "New Arrivals",
        link: "#",
      },
      {
        text: "Best Sellers",
        link: "#",
      },
      {
        text: "Seasonal Edits",
        link: "#",
      },
      {
        text: "Wardrobe Essentials",
        link: "#",
      },
    ],
  },
];

const CONTACT_LINKS: ContactLinks = {
  contactDetails: [
    {
      icon: MapPin,
      text: "support@store.com",
      link: "support@store.com",
      type: LINK_TYPES.EMAIL_LINK as LinkTypes,
    },
    {
      icon: Phone,
      text: "+12345678910",
      link: "+12345678910",
      type: LINK_TYPES.PHONE_LINK as LinkTypes,
    },
    {
      icon: Clock,
      text: "Monday - Friday, 9 am - 9 pm",
      type: LINK_TYPES.NO_LINK as LinkTypes,
    },
  ],
  socialMedia: [
    {
      icon: siFacebook,
      link: "#",
    },
    {
      icon: siX,
      link: "#",
    },
    {
      icon: siInstagram,
      link: "#",
    },
  ],
};

const EcommerceFooter1 = ({
  newsletter = NEWSLETTER_DATA,
  footerLinks = FOOTER_LINKS,
  contactLinks = CONTACT_LINKS,
  className,
}: EcommerceFooter1Props) => {
  return (
    <section className={cn("pt-8 pb-8 xl:pt-12", className)}>
      <div className="container space-y-10">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <NewsletterSection {...newsletter} />
          </div>
          <FooterLinksSection sections={footerLinks} />
          <ContactSection links={contactLinks} />
        </div>
        <div className="flex justify-between pt-4">
          <div>
            <Select defaultValue="english">
              <SelectTrigger className="w-28">
                <SelectValue placeholder="Select a Language..." />
              </SelectTrigger>
              <SelectContent align="start">
                <SelectGroup>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="français">Français</SelectItem>
                  <SelectItem value="arabic">Arabic</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between gap-4 md:gap-12.5">
            <Separator className="flex-1" />
            <div className="basis-30 md:basis-37.5">
              <a href="/">
                <img
                  className="block dark:hidden"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark-black.svg"
                  alt="Logo"
                />
                <img
                  className="hidden dark:block"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark-white.svg"
                  alt="Logo"
                />
              </a>
            </div>
            <Separator className="flex-1" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <p className="text-muted-foreground max-md:text-xs">
            Copyright © 2026
          </p>
          <Separator
            orientation="vertical"
            className="!h-4.5 bg-foreground/60 max-sm:hidden"
          />
          <p className="max-md:text-xs">Powered by Shadcnblocks</p>
          <Button size="icon" variant="outline">
            <ChevronUp />
          </Button>
        </div>
      </div>
    </section>
  );
};

const newsletterFormSchema = z.object({
  email: z.string().email(),
});

type newsletterFormType = z.infer<typeof newsletterFormSchema>;

const NewsletterSection = ({ title, description }: NewsletterFormProps) => {
  const form = useForm({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: newsletterFormType) => {
    console.log(data);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-serif text-3xl leading-none font-medium">
          {title}
        </h3>
        <p className="leading-normal font-light">{description}</p>
      </div>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="Email Address"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button className="w-full">Subscribe</Button>
      </form>
    </div>
  );
};

const FooterLinksSection = ({ sections }: FooterLinksSectionProps) => {
  return (
    <Fragment>
      {sections.map(({ title, items }) => (
        <div key={crypto.randomUUID()}>
          <h2 className="mb-6 text-sm leading-tight font-medium text-muted-foreground uppercase">
            {title}
          </h2>
          <ul className="space-y-3">
            {items.map(({ text, link }) => (
              <li key={crypto.randomUUID()}>
                <a href={link} className="underline-offset-4 hover:underline">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Fragment>
  );
};

const ContactSection = ({ links }: ContactSectionProps) => {
  const { socialMedia, contactDetails } = links;

  return (
    <div>
      <h2 className="mb-6 text-sm leading-tight font-medium text-muted-foreground uppercase">
        Contact
      </h2>
      <div className="space-y-6">
        <ul className="space-y-3">
          {contactDetails.map((item) => (
            <li className="flex items-center gap-3" key={crypto.randomUUID()}>
              <item.icon className="size-4 shrink-0 basis-4" />
              <div className="flex-1">
                {item.type === LINK_TYPES.NO_LINK ? (
                  <p>{item.text}</p>
                ) : (
                  <a
                    href={
                      LINK_TYPES.EMAIL_LINK
                        ? `mailto:${item.link}`
                        : `tel:${item.link}`
                    }
                    className="underline-offset-4 hover:underline"
                  >
                    {item.text}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-3">
          {socialMedia.map(({ icon, link }) => (
            <li key={crypto.randomUUID()}>
              <Button size="icon-lg" variant="outline" asChild>
                <a href={link}>
                  <img
                    className="size-5 dark:hidden"
                    alt={icon.title}
                    src={`https://cdn.simpleicons.org/${icon.slug}/black`}
                  />
                  <img
                    className="hidden size-5 dark:block"
                    alt={icon.title}
                    src={`https://cdn.simpleicons.org/${icon.slug}/white`}
                  />
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { EcommerceFooter1 };
```
