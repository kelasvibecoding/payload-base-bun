# Ecommerce Footer Component 2

## Metadata
- **Category**: Ecommerce Footer
- **Objective**: Mobile-responsive ecommerce footer with accordion links and newsletter signup
- **Use Case**: Modern online store footer with collapsible mobile navigation, newsletter sign-up, and social media integration
- **Visual Style**: Clean modern layout with rounded input groups, accordion sections, and minimal muted styling
- **Interactivity**: Newsletter form validation, collapsible accordion links for mobile, social media button links

## Description
A fully responsive ecommerce footer component that adapts seamlessly between desktop and mobile views. On desktop, it displays footer links in a clean grid layout, while on mobile it uses accordion sections to conserve space and improve usability. The component includes a validated newsletter signup form, social media icons with dark/light mode support, and a descriptive footer message.

## Features
- Responsive layout that switches between grid (desktop) and accordion (mobile) views
- Newsletter signup form with Zod validation and react-hook-form
- Collapsible accordion sections for mobile footer navigation
- Support for multiple footer link categories with custom link types (standard and email)
- Social media icons using simple-icons with dark/light mode adapters
- Clean, accessible styling following shadcn/ui design system
- Type-safe TypeScript interfaces for all component props
- Easily customizable content, links, and branding

## Source Code
```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Plus } from "lucide-react";
import { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { siFacebook, siInstagram, type SimpleIcon, siX } from "simple-icons";
import z from "zod";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldTitle,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

type NewsletterData = {
  title?: string;
  description?: string;
};

type NewsletterFormProps = NewsletterData;

type FooterLink = {
  text: string;
  type?: string;
  link?: string;
  email?: string;
};

type FooterLinksSection = {
  title: string;
  id: string;
  items: FooterLink[];
};

type SocialLink = {
  link: string;
  icon: SimpleIcon;
};

interface EcommerceFooter2Props {
  newsletter: NewsletterData;
  footerLinks: FooterLinksSection[];
  socialLinks: SocialLink[];
  description: string;
  className?: string;
}

interface FooterLinksSectionProps {
  sections: FooterLinksSection[];
}

interface SocialMediaSectionProps {
  links: SocialLink[];
}

const NEWSLETTER_DATA = {
  title: "Subscribe & Get 10% Off Your First Gadget",
  description:
    "Join our newsletter to receive exclusive deals, tech tips, product launches, and early access to the latest electronics.",
};

const FOOTER_LINKS: FooterLinksSection[] = [
  {
    title: "The Brand",
    id: "the-brand",
    items: [
      {
        text: "Our Story",
        link: "#",
      },
      {
        text: "Sustainability",
        link: "#",
      },
      {
        text: "Customer Reviews",
        link: "#",
      },
      {
        text: "Store Locator",
        link: "#",
      },
      {
        text: "Refer a Friend",
        link: "#",
      },
    ],
  },
  {
    title: "Help",
    id: "help",
    items: [
      {
        text: "Contact Us",
        link: "#",
      },
      {
        text: "FAQs",
        link: "#",
      },
      {
        text: "Shipping & Tracking",
        link: "#",
      },
      {
        text: "Returns & Exchanges",
        link: "#",
      },
    ],
  },
  {
    title: "Information",
    id: "information",
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
    title: "Contact",
    id: "contact",
    items: [
      {
        type: "email",
        text: "support@techstore.com",
        email: "support@techstore.com",
      },
    ],
  },
];

const SOCIAL_MEDIA_LINKS = [
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
];

const DESCRIPTION =
  "Get the latest tech updates, exclusive discounts, product launches, and expert tips delivered straight to your inbox. Stay ahead with smarter gadgets.";

const EcommerceFooter2 = ({
  newsletter = NEWSLETTER_DATA,
  footerLinks = FOOTER_LINKS,
  socialLinks = SOCIAL_MEDIA_LINKS,
  description = DESCRIPTION,
  className,
}: EcommerceFooter2Props) => {
  return (
    <footer className={cn("px-0 py-10 md:px-7.5 md:py-12 lg:px-20", className)}>
      <div className="container">
        <div className="grid grid-cols-1 gap-12.5 lg:grid-cols-2 xl:grid-cols-3">
          <div>
            <NewsletterSection {...newsletter} />
          </div>
          <div>
            <FooterLinksSection sections={footerLinks} />
          </div>
          <div className="space-y-10">
            <p className="leading-normal font-light max-lg:text-center">
              {description}
            </p>
            <SocialMediaSection links={socialLinks} />
          </div>
        </div>
      </div>
    </footer>
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
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="space-y-5">
              <div className="space-y-4">
                <FieldTitle className="text-lg leading-none font-bold">
                  {title}
                </FieldTitle>
                <FieldDescription className="text-sm leading-normal font-light">
                  {description}
                </FieldDescription>
              </div>
              <InputGroup
                aria-invalid={fieldState.invalid}
                className="rounded-full"
              >
                <InputGroupInput
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Email Address"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    type="submit"
                    size="icon-xs"
                    variant="default"
                    className="rounded-full"
                  >
                    <ArrowRight />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </form>
  );
};

const FooterLinksSection = ({ sections }: FooterLinksSectionProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [value, setValue] = useState("");

  if (!sections) return;

  const allAccordionIds = sections.map(({ id }) => id);
  const handleOnValueChange = (value: string) => {
    setValue(value);
  };

  if (isDesktop) {
    return (
      <Accordion
        value={allAccordionIds}
        type="multiple"
        className="lg:grid lg:grid-cols-2 lg:gap-x-17 lg:gap-y-4"
      >
        <AccordionItems sections={sections} />
      </Accordion>
    );
  } else {
    return (
      <Accordion
        value={value}
        type="single"
        collapsible={true}
        onValueChange={handleOnValueChange}
        className="lg:grid lg:grid-cols-2 lg:gap-x-17 lg:gap-y-4"
      >
        <AccordionItems sections={sections} />
      </Accordion>
    );
  }
};

const AccordionItems = ({ sections }: { sections: FooterLinksSection[] }) => {
  return (
    <Fragment>
      {sections.map(({ id, title, items }) => (
        <AccordionItem key={id} value={id} className="border-none">
          <AccordionTrigger className="cursor-auto rounded-none pt-0 text-lg leading-none font-bold hover:no-underline max-lg:border-b max-lg:py-4 [&>svg]:hidden">
            {title}
            <div className="lg:hidden">
              <Plus className="size-5" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-0 max-lg:py-4 max-lg:pl-4">
            <ul className="space-y-4 lg:space-y-2">
              {items.map(({ link, text, type, email }) => (
                <li
                  className="text-sm leading-tight font-light"
                  key={crypto.randomUUID()}
                >
                  {type === "email" && <p className="mb-1.5">Email us at:</p>}
                  <a
                    data-type={type}
                    href={type === "email" ? `mailto:${email}` : link}
                    className="data-[type=email]:underline data-[type=email]:underline-offset-2"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Fragment>
  );
};

const SocialMediaSection = ({ links }: SocialMediaSectionProps) => {
  return (
    <ul className="flex flex-wrap gap-4 max-lg:justify-center">
      {links.map(({ icon, link }) => (
        <li key={crypto.randomUUID()}>
          <Button size="icon-lg" asChild className="rounded-full">
            <a href={link}>
              <img
                className="size-5 dark:hidden"
                alt={icon.title}
                src={`https://cdn.simpleicons.org/${icon.slug}/white`}
              />
              <img
                className="hidden size-5 dark:block"
                alt={icon.title}
                src={`https://cdn.simpleicons.org/${icon.slug}/black`}
              />
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export { EcommerceFooter2 };
```
