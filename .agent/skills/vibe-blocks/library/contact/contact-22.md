# Contact 22

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
import { Mail, BiMessageDetail, BiMap, Phone } from 'lucide-react';

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

export type Contact22Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact22 = (props: Contact22Props) => {
  const { contacts } = {
    ...Contact22Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr gap-x-8 gap-y-12 sm:gap-x-10 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {contacts.map((contact, index) => (
            <div key={index}>
              <div className="mb-5 sm:mb-6">{contact.icon}</div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
                {contact.title}
              </h3>
              <p className="mb-5 md:mb-6">{contact.description}</p>
              <a className="underline" href={contact.link.url}>
                {contact.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact22Defaults: Props = {
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
      icon: <BiMessageDetail className="size-12" />,
      title: "Live chat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: {
        label: "Start new chat",
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

Contact22.displayName = 'Contact22';
```


