# Contact 17

## Metadata
- **Category**: Contact
- **Objective**: Contact form with budget selector and social proof.
- **Use Case**: Contact page with project budget selection, form validation, and trusted company logos.
- **Visual Style**: Grid-based layout with form and social proof.
- **Interactivity**: Form submission with react-hook-form.

## Description
A comprehensive contact section featuring a form with project budget selector, form validation using react-hook-form, and social proof with trusted company logos and benefits checklist.

## Source Code
```tsx
"use client";

import { Check } from "lucide-react";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface Contact17Props {
  className?: string;
}

const Contact17 = ({ className }: Contact17Props) => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companySize: "",
      message: "",
      referrer: "",
    },
  });

  const onSubmit = (data: {
    firstName: string;
    lastName: string;
    email: string;
    companySize: string;
    message: string;
    referrer: string;
  }) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <section className={cn("bg-muted/50 py-32", className)}>
      <div className="container">
        <span className="text-xs text-muted-foreground">GET STARTED /</span>
        <div className="mt-8 grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:grid-rows-[min-content_1fr]">
          <h2 className="order-1 text-4xl font-medium tracking-tight md:order-none md:text-5xl">
            Get in touch
          </h2>
          <div className="order-2 md:order-none md:row-span-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-6 sm:grid-cols-2"
                >
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Alex" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Smith" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="alex.smith@example.com"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Budget</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="5k-15k">$5K - $15K</SelectItem>
                              <SelectItem value="15k-30k">
                                $15K - $30K
                              </SelectItem>
                              <SelectItem value="30k-50k">
                                $30K - $50K
                              </SelectItem>
                              <SelectItem value="50k-100k">
                                $50K - $100K
                              </SelectItem>
                              <SelectItem value="100k-250k">
                                $100K - $250K
                              </SelectItem>
                              <SelectItem value="250k+">$250K+</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Tell us about your project..."
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="referrer"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>How did you find us?</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Google / Referral" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="sm:col-span-2">
                    Submit
                  </Button>
                  <p className="text-xs text-muted-foreground sm:col-span-2">
                    You acknowledge that you've reviewed and agreed to our{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>
                  </p>
                </form>
              </Form>
            </div>
          </div>
          <div className="order-3 my-6 md:order-none">
            <ul className="space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-background">
                  <Check className="size-4" />
                </span>
                Share your project goals and requirements
              </li>
              <li className="flex items-center gap-2">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-background">
                  <Check className="size-4" />
                </span>
                Receive a tailored proposal
              </li>
              <li className="flex items-center gap-2">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-background">
                  <Check className="size-4" />
                </span>
                Schedule a strategy consultation
              </li>
            </ul>
            <p className="my-6 font-bold">
              Trusted by +3000 businesses worldwide
            </p>
            <div className="grid grid-cols-2 place-items-center gap-8 md:grid-cols-4">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg"
                alt="placeholder"
                className="max-w-24 dark:invert"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                alt="placeholder"
                className="max-w-24 dark:invert"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                alt="placeholder"
                className="max-w-24 dark:invert"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg"
                alt="placeholder"
                className="max-w-24 dark:invert"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg"
                alt="placeholder"
                className="max-w-24 dark invert"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg"
                alt="placeholder"
                className="max-w-24 dark:invert"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg"
                alt="placeholder"
                className="max-w-24 dark:invert"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-8.svg"
                alt="placeholder"
                className="max-w-24 dark:invert"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-8 md:gap-12 lg:w-1/2 lg:grid-cols-2">
          <div>
            <h3 className="mb-1.5 font-bold">FAQ</h3>
            <p className="text-sm text-muted-foreground">
              Browse our collection of{" "}
              <a href="#" className="text-primary underline hover:underline">
                Frequently Asked Questions
              </a>{" "}
              about our process and project delivery.
            </p>
          </div>
          <div>
            <h3 className="mb-1.5 font-bold">Resources</h3>
            <p className="text-sm text-muted-foreground">
              Access our library and connect with designers in our{" "}
              <a href="#" className="text-primary underline hover:underline">
                resource center
              </a>{" "}
              filled with whitepapers and tutorials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact17 };