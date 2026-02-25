# Description List 1

## Metadata
- **Category**: Description List
- **Objective**: Simple Description List
- **Use Case**: Displaying account details or key-value pairs.
- **Visual Style**: Clean, unbordered list.
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

export type DescriptionList1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const DescriptionList1 = (props: DescriptionList1Props) => {
  const { title, description, listItems } = {
    ...DescriptionList1Defaults,
    ...props,
  };

  return (
    <section>
      <div className="pb-5 md:pb-6">
        <h1 className="text-lg font-bold leading-[1.4] md:text-2xl">{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
      <div className="grid grid-cols-1">
        {listItems.map((itemPair, index) => (
          <div key={index} className="grid auto-cols-fr grid-cols-1 gap-6 py-6 sm:grid-flow-col">
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

export const DescriptionList1Defaults: Props = {
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

DescriptionList1.displayName = 'DescriptionList1';
```

