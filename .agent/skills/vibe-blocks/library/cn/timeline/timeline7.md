# Timeline 7

## Metadata
- **Category**: Timeline
- **Objective**: Display an interactive stepper timeline with progress bar and navigation buttons.
- **Use Case**: Multi-step form or onboarding process showing progress through steps with interactive navigation.
- **Visual Style**: Horizontal progress bar with circular step indicators, content area with image and description, and navigation buttons.
- **Interactivity**: Previous/Next buttons to navigate through steps, animated progress bar showing current step.

## Description
An interactive stepper timeline with horizontal progress bar, circular step indicators, content area with image and description, and navigation buttons. Features animated progress bar that updates as users navigate through steps: Introduction, Personal Information, Address Details, and Review & Submit.

## Source Code
```tsx
"use client";

import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Circle } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Timeline7Props {
  className?: string;
}

interface StepProps {
  title: string;
  imageSrc: string;
  description: string;
}

const steps: StepProps[] = [
  {
    title: "Introduction",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    description:
      "Welcome to our step-by-step guide. This introduction will help you get started with the process and understand what to expect.",
  },
  {
    title: "Personal Information",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    description:
      "In this section, we'll collect some basic information about you to personalize your experience and provide better recommendations.",
  },
  {
    title: "Address Details",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    description:
      "Please provide your address details so we can deliver your products to the right location and calculate shipping costs.",
  },
  {
    title: "Review & Submit",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    description:
      "Take a moment to review all the information you've provided before finalizing your submission. You can go back to any step.",
  },
];

const ProcessBar: React.FC<{
  currentStep: number;
  steps: StepProps[];
}> = ({ currentStep, steps }) => (
  <div className="relative w-full scale-75">
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <React.Fragment key={step.title}>
          <div className="flex flex-col items-center">
            <motion.div
              className={`z-10 flex h-8 w-8 items-center justify-center rounded-full ${
                index <= currentStep
                  ? "bg-neutral-800 text-white"
                  : "bg-gray-200 text-white dark:bg-gray-800 dark:text-gray-600"
              }`}
              animate={{ scale: 1.02 }}
            >
              {index < currentStep ? (
                <Check size={17} />
              ) : (
                <Circle size={17} fill="white" />
              )}
            </motion.div>
          </div>
          {index < steps.length - 1 && (
            <div className="relative grow">
              <div className="absolute -top-1 h-1.5 w-full bg-muted" />
              <motion.div
                className="absolute -top-1 h-1.5 w-full bg-primary"
                initial={{ width: "0%" }}
                animate={{
                  width: index < currentStep ? "100%" : "0%",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const StepperContent: React.FC<{ step: StepProps }> = ({ step }) => {
  return (
    <div className="my-4 flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-muted p-6 text-center">
      <motion.div
        key={step.imageSrc}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex h-[200px] w-[500px] items-center justify-center overflow-hidden"
      >
        <img
          src={step.imageSrc}
          alt={step.title}
          className="w-[500px]"
          onError={(e) => {
            e.currentTarget.src = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg";
          }}
        />
      </motion.div>
      <p className="mt-6 px-10 text-base leading-snug font-normal tracking-tight text-muted-foreground">
        {step.description}
      </p>
    </div>
  );
};

const NavButtons: React.FC<{
  currentStep: number;
  totalSteps: number;
  handlePrev: () => void;
  handleNext: () => void;
}> = ({ handlePrev, handleNext }) => (
  <div className="flex w-full justify-end gap-3 tracking-tight">
    <Button
      onClick={handlePrev}
      className="flex gap-2 transition-all ease-in-out hover:gap-4"
      variant="secondary"
    >
      <ChevronLeft size={20} />
      Previous
    </Button>

    <Button
      onClick={handleNext}
      className="flex gap-2 transition-all ease-in-out hover:gap-4"
      variant="default"
    >
      Next
      <ChevronRight size={20} />
    </Button>
  </div>
);

const Timeline7: React.FC<Timeline7Props> = ({ className }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container flex max-w-2xl flex-col items-center gap-10 md:gap-0">
        <h1 className="mb-10 text-center text-6xl font-bold tracking-tighter text-foreground">
          Stepper
        </h1>
        <ProcessBar currentStep={currentStep} steps={steps} />
        <StepperContent step={steps[currentStep]} />
        <NavButtons
          handlePrev={handlePrev}
          handleNext={handleNext}
          currentStep={currentStep}
          totalSteps={steps.length}
        />
      </div>
    </section>
  );
};

export { Timeline7 };
```
