# Description List 3

## Metadata
- **Category**: Description List
- **Objective**: Actionable Description List
- **Use Case**: Settings page where each item can be modified.
- **Visual Style**: List with action buttons/links.
- **Interactivity**: Link/Button actions.

## Description
A component for displaying pairs of related data, such as labels and their values, commonly used in profile pages, settings, and dashboards.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';

type ListItem = {
  title: string;
  content: string;
  button: ButtonProps & {
    url: string;
  };
};

type Props = {
  sectionTitle: string;
  sectionDescription: string;
  listItems: ListItem[];
};

export type DescriptionList3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const DescriptionList3 = (props: DescriptionList3Props) => {
  const { sectionTitle, sectionDescription, listItems } = {
    ...DescriptionList3Defaults,
    ...props,
  };

  return (
    <section>
      <div className="pb-5 md:pb-6">
        <h1 className="text-lg font-bold leading-[1.4] md:text-2xl">{sectionTitle}</h1>
        <p className="mt-2">{sectionDescription}</p>
      </div>
      <div className="grid grid-cols-1">
        {listItems.map((item, index) => (
          <div
            key={index}
 className="grid auto-cols-fr grid-cols-[1fr_min-content] items-end gap-6 py-6 md:items-start"
>
            <div className="grid auto-cols-fr grid-cols-1 items-start gap-y-2 md:grid-cols-[0.5fr_1fr] md:gap-6">
              <p className="font-semibold">{item.title}</p>
              <p>{item.content}</p>
            </div>
            <Button {...item.button} asChild>
              <a href={item.button.url}>{item.button.title}</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export const DescriptionList3Defaults: Props = {
  sectionTitle: "Account",
  sectionDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  listItems: [
    {
      title: "Website",
      content: "www.vibecoding.io",
      button: {
        url: "#",
        title: "Change",
        variant: "link",
        size: "link",
      },
    },
    {
      title: "Full name",
      content: "Name Surname",
      button: {
        url: "#",
        title: "Change",
        variant: "link",
        size: "link",
      },
    },
    {
      title: "About",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      button: {
        url: "#",
        title: "Change",
        variant: "link",
        size: "link",
      },
    },
    {
      title: "Email address",
      content: "hello@vibecoding.io",
      button: {
        url: "#",
        title: "Change",
        variant: "link",
        size: "link",
      },
    },
    {
      title: "Password",
      content: "*******",
      button: {
        url: "#",
        title: "Change",
        variant: "link",
        size: "link",
      },
    },
    {
      title: "Language",
      content: "English",
      button: {
        url: "#",
        title: "Change",
        variant: "link",
        size: "link",
      },
    },
  ],
};

DescriptionList3.displayName = 'DescriptionList3';
```

