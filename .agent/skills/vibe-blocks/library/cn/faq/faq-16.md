# FAQ 16

## Metadata
- **Category**: FAQ
- **Objective**: High-density accordion FAQ within a surfaced container.
- **Use Case**: Compact FAQ sections where a large number of questions need to be accessible in a small vertical footprint.
- **Visual Style**: Centered "FAQs" heading, 2xl max-width surfaced container, with individual items styled on `bg-muted` blocks.
- **Interactivity**: Standard single-open accordion functionality for efficient information disclosure.

## Description
FAQ 16 focuses on efficient space utilization. By placing the questions inside a structured `bg-background` container and using `bg-muted` for the accordion items, it creates a clear visual hierarchy that separates the FAQ section from its surrounding background. This approach is ideal for utility pages or support sections where the user's primary focus is finding specific answers.

## Source Code

```tsx
"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_QUESTIONS = [
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
];

interface FAQ16Props {
  className?: string;
}

const FAQ16 = ({ className }: FAQ16Props) => {
  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container">
        <h1 className="mb-10 text-center text-6xl font-bold tracking-tighter text-foreground">
          FAQs
        </h1>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-background p-3">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col items-center justify-center gap-3"
          >
            {FAQ_QUESTIONS.map((item, index) => (
              <AccordionItem
                value={index.toString()}
                key={index}
                className="m-0 w-full rounded-xl bg-muted px-4 py-2 border-none"
              >
                <AccordionTrigger className="flex flex-1 justify-between text-left font-semibold transition-all hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { FAQ16 };
```
