"use client";

import { Mail, MessageSquare, Phone, Search } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

interface Help2Props {
  title?: string;
  faqs?: FAQ[];
  className?: string;
}

const DEFAULT_FAQS: FAQ[] = [
  {
    category: "Orders",
    question: "How can I track my order?",
    answer:
      "You can track your order by logging into your account and viewing your order history. You'll also receive tracking updates via email once your order ships.",
  },
  {
    category: "Orders",
    question: "Can I modify or cancel my order?",
    answer:
      "Orders can be modified or cancelled within 1 hour of placement. After that, please contact our support team and we'll do our best to help.",
  },
  {
    category: "Shipping",
    question: "What are your shipping options?",
    answer:
      "We offer standard shipping (5-7 business days), express shipping (2-3 business days), and next-day delivery in select areas.",
  },
  {
    category: "Shipping",
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship to over 50 countries worldwide. International shipping rates and delivery times vary by location.",
  },
  {
    category: "Returns",
    question: "What is your return policy?",
    answer:
      "We offer free returns within 30 days of delivery. Items must be unworn, unwashed, and in original condition with tags attached.",
  },
  {
    category: "Returns",
    question: "How do I start a return?",
    answer:
      "Log into your account, go to Order History, select the item you want to return, and follow the prompts. You'll receive a prepaid shipping label via email.",
  },
];

const Help2 = ({
  title = "How Can We Help?",
  faqs = DEFAULT_FAQS,
  className,
}: Help2Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const categories = [...new Set(faqs.map((faq) => faq.category))];

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-muted-foreground">
            Find answers to common questions or contact our support team
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* FAQs */}
        {searchQuery ? (
          <div className="mb-8">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <span className="mr-2 text-xs text-muted-foreground">
                          {faq.category}
                        </span>
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="py-8 text-center text-muted-foreground">
                No results found. Try a different search or contact us below.
              </p>
            )}
          </div>
        ) : (
          <div className="mb-8 space-y-6">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="mb-3 font-semibold">{category}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {faqs
                    .filter((faq) => faq.category === category)
                    .map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category}-${index}`}
                      >
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            ))}
          </div>
        )}

        {/* Contact Fallback */}
        <Card className="gap-0 bg-muted/30 p-0">
          <CardContent className="p-6">
            <h3 className="mb-2 text-center font-semibold">
              Still need help?
            </h3>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              Our support team is here for you
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 size-4" />
                Live Chat
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 size-4" />
                Email Us
              </Button>
              <Button variant="outline" className="w-full">
                <Phone className="mr-2 size-4" />
                Call Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Help2 };

