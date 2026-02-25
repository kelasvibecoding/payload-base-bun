# Form 10

## Metadata
- **Category**: Form
- **Objective**: General Form
- **Use Case**: Visual Form browsing.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A versatile data collection component for user accounts, profiles, and configuration with varied input patterns.

## Source Code
```tsx
"use client";

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Label,
  Button,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiCheck, BiCreditCard, Mail } from 'lucide-react';
import { RiQuestionLine } from 'lucide-react';
import clsx from 'clsx';

type ImageProps = {
  src: string;
  alt?: string;
};

type Plan = {
  value: string;
  title: string;
  price: string;
  text: string;
  image: ImageProps;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  plans: Plan[];
};

export type Form10Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Form10 = (props: Form10Props) => {
  const { heading, description, buttons, plans } = {
    ...Form10Defaults,
    ...props,
  };

  const [invoiceNameInput, setInvoiceNameInput] = useState("");
  const [сardNumberInput, setCardNumberInput] = useState("");
  const [expiryInput, setExpiryInput] = useState("");
  const [cvvInput, setCvvNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [streetAddressInput, setStreetAddressInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [zipInput, setZipInput] = useState("");
  const [plan, setPlan] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      invoiceNameInput,
      сardNumberInput,
      expiryInput,
      cvvInput,
      emailInput,
      countryInput,
      streetAddressInput,
      cityInput,
      stateInput,
      zipInput,
      plan,
    });
  };

  const selectItems = [
    { value: "first-choice", label: "First Choice" },
    { value: "second-choice", label: "Second Choice" },
    { value: "third-choice", label: "Third Choice" },
  ];

  return (
    <section>
      <form onSubmit={handleSubmit} className="border-t border-t-border-primary">
        <div className="mb-5 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_max-content] sm:items-end md:mb-6">
          <div>
            <h1 className="text-xl font-bold md:text-2xl">{heading}</h1>
            <p className="mt-2">{description}</p>
          </div>
          <div className="flex items-center justify-end gap-4">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="invoice" className="mb-2">
            Name on invoice
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="text"
              id="invoice"
              value={invoiceNameInput}
              placeholder="Name on invoice"
              onChange={(e) => setInvoiceNameInput(e.target.value)}
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="сardNumber" className="mb-2">
            Card number
          </Label>
          <div className="w-full max-w-md">
            <div className="relative">
              <Input
                type="number"
                id="сardNumber"
                value={сardNumberInput}
                icon={<BiCreditCard className="size-6" />}
                onChange={(e) => setCardNumberInput(e.target.value)}
                placeholder="Card number"
 className="pr-10"
              />
              <div className="absolute right-3 top-1/2 size-6 -translate-y-1/2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <RiQuestionLine className="size-6" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="expiry" className="mb-2">
            Expiry
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="number"
              id="expiry"
              value={expiryInput}
              onChange={(e) => setExpiryInput(e.target.value)}
              placeholder="MM/YY"
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="cvv" className="mb-2">
            CVV
          </Label>
          <div className="w-full max-w-md">
            <div className="relative">
              <Input
                type="number"
                id="cvv"
                value={cvvInput}
                onChange={(e) => setCvvNameInput(e.target.value)}
 className="pr-10"
                placeholder="CVV code"
              />
              <div className="absolute right-3 top-1/2 size-6 -translate-y-1/2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <RiQuestionLine className="size-6" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="email" className="mb-2">
            Email address
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="email"
              id="email"
              value={emailInput}
              icon={<Mail className="size-6" />}
              placeholder="hello@vibecoding.io"
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label className="mb-2">Country</Label>
          <div className="w-full max-w-md">
            <Select onValueChange={setCountryInput}>
              <SelectTrigger>
                <SelectValue placeholder="Select one..." />
              </SelectTrigger>
              <SelectContent>
                {selectItems.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="street" className="mb-2">
            Street address
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="text"
              id="street"
              value={streetAddressInput}
              onChange={(e) => setStreetAddressInput(e.target.value)}
              placeholder="e.g. 123 Sample St"
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="city" className="mb-2">
            City
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="text"
              id="city"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              placeholder="e.g. Sydney"
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="state" className="mb-2">
            State / Province
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="text"
              id="state"
              value={stateInput}
              onChange={(e) => setStateInput(e.target.value)}
              placeholder="e.g. New South Wales"
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="zip" className="mb-2">
            ZIP / Postal code
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="text"
              id="zip"
              value={zipInput}
              onChange={(e) => setZipInput(e.target.value)}
              placeholder="e.g. 2000"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 border-b border-b-border-primary py-6 md:grid-cols-[.75fr_1fr] md:gap-12">
          <div>
            <h2 className="text-md font-bold leading-[1.4] md:text-xl">Choose your plan</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-4">
            {plans.map((item) => (
              <div key={item.value}>
                <input
                  type="radio"
                  id={item.value}
                  name="plan"
                  value={item.value}
 className="peer hidden"
                  onChange={(e) => setPlan(e.target.value)}
                />
                <label
                  htmlFor={item.value}
 className="flex w-full cursor-pointer items-start gap-4 border border-border-primary px-4 py-6 md:px-6"
>
                  <div className="flex grow items-start gap-4">
                    <div className="flex size-14 shrink-0 items-center justify-center bg-background-secondary">
                      <img src={item.image.src} alt={item.image.alt} className="size-8" />
                    </div>
                    <div className="grow">
                      <p className="mb-1 text-md">
                        <span className="font-semibold">{item.title}</span> {item.price}
                      </p>
                      <p>{item.text}</p>
                    </div>
                  </div>
                  <div
 className={clsx(
                      "flex size-[18px] items-center justify-start rounded-full border border-border-primary",
                      {
                        "bg-background-alternative": plan === item.value,
                      },
                    )}
>
                    <BiCheck
 className={clsx("text-text-alternative opacity-0", {
                        "opacity-100": plan === item.value,
                      })}
                    />
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-end gap-4 md:mt-10 lg:mt-12">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </form>
    </section>
  );
};

export const Form10Defaults: Props = {
  heading: "Payment method",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  buttons: [
    { title: "Cancel", variant: "secondary", size: "sm" },
    { title: "Save", size: "sm" },
  ],
  plans: [
    {
      value: "basic-plan",
      title: "Basic plan",
      price: "$19/month",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.",
      image: {
        src: "vibecoding-icon.svg",
        alt: "Sub menu link 2",
      },
    },
    {
      value: "business-plan",
      title: "Business plan",
      price: "$29/month",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.",
      image: {
        src: "vibecoding-icon.svg",
        alt: "Sub menu link 2",
      },
    },
    {
      value: "enterprise-plan",
      title: "Enterprise plan",
      price: "$29/month",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.",
      image: {
        src: "vibecoding-icon.svg",
        alt: "Sub menu link 2",
      },
    },
  ],
};

Form10.displayName = 'Form10';
```

