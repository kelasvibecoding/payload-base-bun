# Form 3

## Metadata
- **Category**: Form
- **Objective**: Multi-Section Account Form
- **Use Case**: Comprehensive user configuration.
- **Visual Style**: Separated group blocks.
- **Interactivity**: Form submit.

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
  Textarea,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { Mail } from 'lucide-react';
import { GoEye } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Form3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Form3 = (props: Form3Props) => {
  const { heading, description, buttons, image } = {
    ...Form3Defaults,
    ...props,
  };

  const [photoInput, setPhotoInput] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [websiteInput, setWebsiteInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [aboutInput, setAboutInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [languageInput, setLanguageInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      photoInput,
      userNameInput,
      websiteInput,
      emailInput,
      aboutInput,
      passwordInput,
      newPasswordInput,
      languageInput,
    });
  };

  const selectItems = [
    { value: "first-choice", label: "First Choice" },
    { value: "second-choice", label: "Second Choice" },
    { value: "third-choice", label: "Third Choice" },
  ];

  return (
    <section>
      <div className="grid items-start gap-6 lg:grid-cols-[0.75fr_1fr] lg:gap-12">
        <div>
          <h2 className="text-xl font-bold md:text-2xl">{heading}</h2>
          <p className="mt-2">{description}</p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="grid w-full max-w-md grid-cols-1 items-center">
            <Label className="mb-2">Photo</Label>
            <div className="flex items-center gap-6">
              <div className="size-20 shrink-0 overflow-hidden rounded-full">
                <img src={image.src} alt={image.alt} />
              </div>
              <Label
                htmlFor="photo"
 className="cursor-pointer border border-border-primary px-5 py-2"
>
                Upload photo
                <input
                  id="photo"
                  type="file"
 className="hidden"
                  value={photoInput}
                  onChange={(e) => setPhotoInput(e.target.value)}
                />
              </Label>
            </div>
          </div>
          <div className="grid w-full max-w-md grid-cols-1 items-center">
            <Label htmlFor="userName" className="mb-2">
              Username
            </Label>
            <Input
              type="text"
              id="userName"
              value={userNameInput}
              onChange={(e) => setUserNameInput(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-md grid-cols-1 items-center">
            <Label htmlFor="website" className="mb-2">
              Website
            </Label>
            <Input
              type="text"
              id="website"
              placeholder="www.vibecoding.io"
              prefix="http://"
              value={websiteInput}
              onChange={(e) => setWebsiteInput(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-md grid-cols-1 items-center">
            <Label htmlFor="email" className="mb-2">
              Email address
            </Label>
            <Input
              type="email"
              id="email"
              value={emailInput}
              icon={<Mail className="size-6" />}
              placeholder="hello@vibecoding.io"
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-md grid-cols-1 items-center">
            <Label htmlFor="about" className="mb-2">
              About
            </Label>
            <Textarea
              id="about"
              placeholder="Type your message..."
 className="h-auto min-h-[11.25rem] p-3"
              maxLength={263}
              value={aboutInput}
              onChange={(e) => setAboutInput(e.target.value)}
            />
            <p className="mt-2 text-sm">263 characters left</p>
          </div>
          <div className="grid w-full max-w-md grid-cols-1 items-center">
            <Label htmlFor="password" className="mb-2">
              Password
            </Label>
            <div className="flex flex-col space-y-4">
              <Input
                type="password"
                id="password"
                value={passwordInput}
                icon={<GoEye className="size-5" />}
                iconPosition="right"
                placeholder="Current password"
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              <Input
                type="password"
                id="newPassword"
                value={newPasswordInput}
                icon={<GoEye className="size-5" />}
                iconPosition="right"
                placeholder="New password"
                onChange={(e) => setNewPasswordInput(e.target.value)}
              />
            </div>
          </div>
          <div className="grid w-full max-w-md grid-cols-1 items-center">
            <Label className="mb-2">Language</Label>
            <Select onValueChange={setLanguageInput}>
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
          <div className="mt-5 flex items-center justify-end gap-4 md:mt-6">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export const Form3Defaults: Props = {
  heading: "Account",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  buttons: [
    { title: "Cancel", variant: "secondary", size: "sm" },
    { title: "Save", size: "sm" },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
    alt: "vibecoding placeholder image 1",
  },
};

Form3.displayName = 'Form3';
```

