# FAQ 15

## Metadata
- **Category**: FAQ
- **Objective**: Simple, icon-based FAQ or Feature grid.
- **Use Case**: Concise FAQ sections or value proposition lists where visual icons help convey meaning.
- **Visual Style**: Centered title, 2x2 grid layout with distinct icons, headings, and descriptions.
- **Interactivity**: Static information list (no accordion expansion).

## Description
FAQ 15 is a straightforward informational grid perfect for landing pages that need to highlight key reasons or frequent questions without the complexity of an accordion. By using icons alongside bold headings, it creates an easily scannable format that is both professional and visually engaging.

## Source Code

```tsx
import type { LucideIcon } from "lucide-react";
import { Clock, Heart, Home, Wallet } from "lucide-react";

import { cn } from "@/lib/utils";

interface FaqItem {
  icon: LucideIcon;
  heading: string;
  description: string;
}

interface FAQ15Props {
  title?: string;
  items?: FaqItem[];
  className?: string;
}

const defaultItems: FaqItem[] = [
  {
    icon: Heart,
    heading: "Save a life, gain a friend",
    description:
      "By choosing to adopt, you're giving a deserving animal a second chance at happiness while gaining a loyal companion who will bring joy to your life.",
  },
  {
    icon: Wallet,
    heading: "More affordable than buying",
    description:
      "Adoption fees typically include vaccinations, microchipping, and spaying/neutering, making it a more cost-effective option than purchasing from a breeder.",
  },
  {
    icon: Clock,
    heading: "Skip the puppy phase",
    description:
      "Many shelter pets are already house-trained and understand basic commands, saving you time and effort in the training process.",
  },
  {
    icon: Home,
    heading: "Support local shelters",
    description:
      "Your adoption helps support the vital work of local shelters, enabling them to continue rescuing and caring for animals in need.",
  },
];

const FAQ15 = ({
  title = "Why should you adopt a pet from your local shelter?",
  items = defaultItems,
  className,
}: FAQ15Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold md:text-5xl lg:mx-14">
            {title}
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {items.map((item, idx) => (
              <li className="flex flex-col gap-2.5" key={idx}>
                <div className="flex items-center gap-2 md:gap-2.5">
                  <item.icon className="size-5 shrink-0 md:size-6" />
                  <h3 className="font-semibold md:text-lg text-foreground">{item.heading}</h3>
                </div>
                <p className="text-sm text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { FAQ15 };
```
