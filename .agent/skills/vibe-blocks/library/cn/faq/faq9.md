payload-base-bun\.agent\skills\vibe-blocks\library\cn\faq\faq9.md
# FAQ Component 9

## Metadata
- **Category**: FAQ Accordion
- **Objective**: Styled accordion FAQ section with muted background
- **Use Case**: Modern FAQ page with polished, consistent accordion styling
- **Visual Style**: Clean accordion layout with muted background for each FAQ item
- **Interactivity**: Collapsible accordion items with hover and active states

## Description
A polished accordion FAQ component that features a bold section heading and muted background for each FAQ entry. Each item has rounded corners and proper spacing, making it perfect for a clean, modern FAQ page with consistent, professional styling.

## Features
- Responsive layout that adapts to mobile and desktop screens
- Styled accordion items with muted background and rounded corners
- Collapsible accordion items with smooth open/close animations
- Clean, minimal styling following shadcn/ui design system
- Type-safe TypeScript interfaces for full type support
- Easily customizable FAQ questions, answers, and styling

## Source Code
```tsx
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a FAQ and why is it important?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic.",
  },
  {
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions. ",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
  },
  {
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience.",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
  },
];

interface Faq9Props {
  className?: string;
}

const Faq9 = ({ className }: Faq9Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h2 className="mt-2 mb-12 text-3xl font-bold md:text-6xl">FAQ</h2>
        <Accordion type="multiple">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-2 rounded-md border-b-0 bg-muted px-5 py-2 md:mb-4"
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq9 };
```
