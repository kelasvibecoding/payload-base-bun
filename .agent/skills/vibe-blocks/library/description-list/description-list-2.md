# Description List 2

## Metadata
- **Category**: Description List
- **Objective**: Bordered Description List
- **Use Case**: Separated data points in a dashboard or settings page.
- **Visual Style**: Bordered containers with dividers.
- **Interactivity**: Passive display.

## Description
A component for displaying pairs of related data, such as labels and their values, commonly used in profile pages, settings, and dashboards.

## Source Code
```tsx
type ListItem = {
  title: string;
  value: string;
};

type Props = {
  title: string;
  description: string;
  listItems: ListItem[][];
};

export type DescriptionList2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const DescriptionList2 = (props: DescriptionList2Props) => {
  const { title, description, listItems } = {
    ...DescriptionList2Defaults,
    ...props,
  };

  return (
    <section className="border border-border-primary p-8">
      <div className="pb-5 md:pb-6">
        <h1 className="text-lg font-bold leading-[1.4] md:text-2xl">{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
      <div className="grid grid-cols-1 border-t border-border-primary">
        {listItems.map((itemPair, index) => (
          <div
            key={index}
 className="grid auto-cols-fr grid-cols-1 gap-6 border-b border-border-primary py-6 sm:grid-flow-col"
>
            {itemPair.map((item, subIndex) => (
              <div key={subIndex}>
                <p className="mb-2 font-semibold">{item.title}</p>
                <p className="w-full max-w-lg">{item.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export const DescriptionList2Defaults: Props = {
  title: "Account",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  listItems: [
    [
      { title: "Full name", value: "Name Surname" },
      { title: "Website", value: "www.vibecoding.io" },
    ],
    [
      {
        title: "About",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      },
    ],
    [
      { title: "Email address", value: "hello@vibecoding.io" },
      { title: "Password", value: "*******" },
    ],
    [{ title: "Language", value: "English" }],
  ],
};

DescriptionList2.displayName = 'DescriptionList2';
```

