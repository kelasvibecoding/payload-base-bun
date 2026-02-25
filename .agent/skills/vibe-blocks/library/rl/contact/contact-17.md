# Contact 17

## Metadata
- **Category**: Contact
- **Objective**: General Contact
- **Use Case**: Standard Contact functionality.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A component suite for user outreach, lead generation, and support communication, featuring varied form patterns and organizational layouts.

## Source Code
```tsx
import React from 'react';
import { Mail, BiMap, Phone } from 'lucide-react';

type LinkProps = {
  label: string;
  url: string;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: LinkProps;
};

type Props = {
  contacts: Contact[];
};

export type Contact17Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact17 = (props: Contact17Props) => {
  const { contacts } = {
    ...Contact17Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          {contacts.map((contact, index) => (
            <div key={index}>
              <div className="mb-5 lg:mb-6">{contact.icon}</div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                {contact.title}
              </h3>
              <p className="mb-5 md:mb-6">{contact.description}</p>
              <a className="underline" href={contact.link?.url}>
                {contact.link?.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact17Defaults: Props = {
  contacts: [
    {
      icon: <Mail className="size-12" />,
      title: "Email",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: {
        label: "hello@vibecoding.io",
        url: "#",
      },
    },
    {
      icon: <Phone className="size-12" />,
      title: "Phone",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: {
        label: "+1 (555) 000-0000",
        url: "#",
      },
    },
    {
      icon: <BiMap className="size-12" />,
      title: "Office",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: {
        label: "123 Sample St, Sydney NSW 2000 AU",
        url: "#",
      },
    },
  ],
};

Contact17.displayName = 'Contact17';
```


