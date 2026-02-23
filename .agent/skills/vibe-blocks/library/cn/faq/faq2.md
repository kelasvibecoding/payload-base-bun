# FAQ Component 2

## Metadata
- **Category**: FAQ Section
- **Objective**: Static bordered FAQ section for websites
- **Use Case**: Simple frequently asked questions section with clean bordered layout
- **Visual Style**: Clean, minimal layout with bordered separation between each FAQ item
- **Interactivity**: Static display, no collapsible functionality

## Description
A simple static FAQ component that displays a list of frequently asked questions and answers with a clean, bordered layout. Each item is separated by a bottom border, and the component includes a customizable heading. It's perfect for adding a minimal, easy-to-read FAQ section to any website or page without collapsible interactivity.

## Features
- Responsive layout that adapts to mobile and desktop screens
- Static FAQ items with bottom border separation between entries
- Customizable section heading and FAQ content
- Clean, minimal styling following shadcn/ui design system
- Type-safe TypeScript interfaces for full type support
- Easily customizable FAQ questions, answers, and styling

## Source Code
```tsx
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface Faq2Props {
  heading?: string;
  items?: FaqItem[];
  className?: string;
}

const Faq2 = ({
  heading = "Frequently asked questions",
  items = [
    {
      question: "What is a FAQ?",
      answer:
        "A FAQ is a list of frequently asked questions and answers on a particular topic.",
    },
    {
      question: "What is the purpose of a FAQ?",
      answer:
        "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
    },
    {
      question: "How do I create a FAQ?",
      answer:
        "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
    },
    {
      question: "What are the benefits of a FAQ?",
      answer:
        "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
    },
    {
      question: "How should I organize my FAQ?",
      answer:
        "You should organize your FAQ in a logical manner, grouping related questions together and ordering them from most basic to more advanced topics.",
    },
    {
      question: "How long should FAQ answers be?",
      answer:
        "FAQ answers should be concise and to the point, typically a few sentences or a short paragraph is sufficient for most questions.",
    },
    {
      question: "Should I include links in my FAQ?",
      answer:
        "Yes, including links to more detailed information or related resources can be very helpful for users who want to learn more about a particular topic.",
    },
  ],
  className,
}: Faq2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="mb-2 font-semibold">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Faq2 };
```
