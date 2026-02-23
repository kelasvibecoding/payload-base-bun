# FAQ Component 1

## Metadata
- **Category**: FAQ Accordion
- **Objective**: Basic accordion-style FAQ section for websites
- **Use Case**: Frequently asked questions section for any website or page
- **Visual Style**: Clean, modern accordion layout with collapsible questions and answers
- **Interactivity**: Collapsible accordion items for each FAQ entry

## Description
A basic accordion-style FAQ component designed for any website or page. It displays a list of frequently asked questions and answers in a collapsible format, allowing users to expand and collapse each entry as needed. It's perfect for adding a FAQ section to a product page, support page, or any other page where you need to provide answers to common questions.

## Features
- Responsive accordion layout that adapts to mobile and desktop screens
- Collapsible FAQ items with smooth animations
- Customizable heading and FAQ items
- Clean, minimal styling following shadcn/ui design system
- Type-safe TypeScript interfaces
- Easily customizable FAQ content and styling

## Source Code
```tsx
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  className?: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
  className?: string;
}

const Faq1 = ({
  heading = "Frequently asked questions",
  items = [
    {
      id: "faq-1",
      question: "What is a FAQ?",
      answer:
        "A FAQ is a list of frequently asked questions and answers on a particular topic.",
    },
    {
      id: "faq-2",
      question: "What is the purpose of a FAQ?",
      answer:
        "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
    },
    {
      id: "faq-3",
      question: "How do I create a FAQ?",
      answer:
        "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
    },
    {
      id: "faq-4",
      question: "What are the benefits of a FAQ?",
      answer:
        "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
    },
    {
      id: "faq-5",
      question: "How should I organize my FAQ?",
      answer:
        "You should organize your FAQ in a logical manner, grouping related questions together and ordering them from most basic to more advanced topics.",
    },
    {
      id: "faq-6",
      question: "How long should FAQ answers be?",
      answer:
        "FAQ answers should be concise and to the point, typically a few sentences or a short paragraph is sufficient for most questions.",
    },
    {
      id: "faq-7",
      question: "Should I include links in my FAQ?",
      answer:
        "Yes, including links to more detailed information or related resources can be very helpful for users who want to learn more about a particular topic.",
    },
  ],
  className,
}: Faq1Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq1 };
```
