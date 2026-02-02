# Onboarding 11

## Metadata
- **Category**: Onboarding
- **Objective**: General Onboarding
- **Use Case**: Visual Onboarding browsing.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A sequential flow component designed to guide new users through initial setup, account creation, or platform orientation.

## Source Code
```tsx
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  logo: ImageProps;
  footerText: string;
  image: ImageProps;
};

export type Onboarding11Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const formSchema = z.object({
  name: z.string().min(1, {
    message: "This field is required",
  }),
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email({ message: "Please enter a valid email address" }),
  companyName: z.string().min(1, { message: "This field is required" }),
  employees: z.string().min(1, { message: "This field is required" }),
  jobTitle: z.string().min(1, { message: "This field is required" }),
  employmentType: z.string().min(1, { message: "This field is required" }),
  aboutUs: z.string().min(1, { message: "This field is required" }),
});

type FormValues = z.infer<typeof formSchema>;

interface StepProps {
  form: ReturnType<typeof useForm<FormValues>>;
}

export const Onboarding11 = (props: Onboarding11Props) => {
  const { logo, footerText, image } = {
    ...Onboarding11Defaults,
    ...props,
  };
  const [step, setStep] = useState(0);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      employees: "",
      jobTitle: "",
      employmentType: "",
      aboutUs: "",
    },
    mode: "onChange",
  });
  const onSubmit = (values: FormValues) => {
    console.log(values);
    // Handle form submission here
  };
  const steps = [
    { component: StepOne, fields: ["name", "email"] },
    { component: StepTwo, fields: ["companyName", "employees"] },
    { component: StepThree, fields: ["jobTitle", "employmentType"] },
    { component: StepFour, fields: ["aboutUs"] },
  ] as const;
  const Step = steps[step].component;
  const currentFields = steps[step].fields;
  const totalSteps = steps.length;
  const isLastStep = step === steps.length - 1;
  const isFirstStep = step === 0;
  const handleNext = async () => {
    const output = await form.trigger(currentFields);
    if (output) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex min-h-dvh flex-col">
      <section className="grid grow grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col px-[5vw]">
          <nav>
            <div className="flex min-h-16 items-center justify-between md:min-h-18">
              <a href={logo.url}>
                <img src={logo.src} alt={logo.alt} />
              </a>
            </div>
          </nav>
          <div className="flex grow items-center pt-2 lg:pt-0">
            <div className="container">
              <div className="mx-auto w-full max-w-sm">
                <Form {...form}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!isLastStep) {
                        handleNext();
                      } else {
                        form.handleSubmit(onSubmit)();
                      }
                    }}
 className="min-h-[34rem]"
>
                    <ProgressBar step={step} totalSteps={totalSteps} />
                    <Step form={form} />
                    <StepAction
                      isFirstStep={isFirstStep}
                      isLastStep={isLastStep}
                      handlePrev={handlePrev}
                    />
                  </form>
                </Form>
              </div>
            </div>
          </div>
          <footer className="mt-2 lg:mt-0">
            <div className="flex min-h-16 items-center md:min-h-18">
              <p className="text-sm">{footerText}</p>
            </div>
          </footer>
        </div>
        <div className="hidden lg:block">
          <img src={image.src} alt={image.alt} className="size-full object-cover" />
        </div>
      </section>
    </div>
  );
};

const ProgressBar = ({ step, totalSteps }: { step: number; totalSteps: number }) => {
  const progress = (step / totalSteps) * 100;
  return (
    <div className="mb-8">
      <div className="relative h-1 bg-background-secondary">
        <div
 className="absolute left-0 top-0 h-full bg-background-alternative transition-all"
          style={{ width: `${progress}%` }}
></div>
      </div>
      <p className="mt-2">
        Step {step + 1}/{totalSteps}
      </p>
    </div>
  );
};

const StepAction = ({
  isFirstStep,
  isLastStep,
  handlePrev,
}: {
  isFirstStep: boolean;
  isLastStep: boolean;
  handlePrev: () => void;
}) => (
  <div className="mt-6 flex flex-wrap justify-end gap-4">
    <Button
      type="button"
      variant="secondary"
      onClick={() => {
        if (!isFirstStep) {
          handlePrev();
        }
      }}
>
      {isFirstStep ? "Cancel" : "Back"}
    </Button>
    <Button type="submit">{isLastStep ? "Get started" : "Next"}</Button>
  </div>
);

const StepOne: React.FC<StepProps> = ({ form }) => (
  <React.Fragment>
    <div className="mb-6 md:mb-8">
      <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
        Let’s start with your name & email
      </h2>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
      </p>
    </div>
    <div className="flex flex-col gap-y-6">
      <FormField
        control={form.control}
        name="name"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel className={clsx({ "text-text-error": fieldState.invalid })}>
              Enter your name
            </FormLabel>
            <FormControl>
              <Input className={clsx({ "border-border-error": fieldState.invalid })} {...field} />
            </FormControl>
            <FormMessage className="text-base text-text-error" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel className={clsx({ "text-text-error": fieldState.invalid })}>
              Enter your email*
            </FormLabel>
            <FormControl>
              <Input
                placeholder="hello@vibecoding.io"
                iconPosition="left"
                icon={<Mail className="size-6" />}
 className={clsx({ "border-border-error": fieldState.invalid })}
                {...field}
              />
            </FormControl>
            <FormMessage className="text-base text-text-error" />
          </FormItem>
        )}
      />
    </div>
  </React.Fragment>
);

const StepTwo: React.FC<StepProps> = ({ form }) => {
  const employeesData = [
    {
      label: "Just me",
      value: "1",
    },
    {
      label: "2-10",
      value: "2-10",
    },
    {
      label: "11-50",
      value: "11-50",
    },
    {
      label: "51-100",
      value: "51-100",
    },
    {
      label: "101-500",
      value: "101-500",
    },
    {
      label: "501+",
      value: "501+",
    },
  ];
  return (
    <React.Fragment>
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
          Let's confirm your company info
        </h2>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
      </div>
      <div className="flex flex-col gap-y-6">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ "text-text-error": fieldState.invalid })}>
                What is your company name?
              </FormLabel>
              <FormControl>
                <Input className={clsx({ "border-border-error": fieldState.invalid })} {...field} />
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employees"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ "text-text-error": fieldState.invalid })}>
                How many people are you working with?
              </FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-2">
                  {employeesData.map((item, index) => {
                    return (
                      <Button
                        key={index}
                        type="button"
 className="px-4 py-2"
                        variant={field.value === item.value ? "primary" : "secondary"}
                        onClick={() => field.onChange(item.value)}
>
                        {item.label}
                      </Button>
                    );
                  })}
                </div>
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
      </div>
    </React.Fragment>
  );
};

const StepThree: React.FC<StepProps> = ({ form }) => {
  const employmentTypeData = [
    {
      label: "Part-time",
      value: "part-time",
    },
    {
      label: "Full-time",
      value: "full-time",
    },
    {
      label: "Contract",
      value: "contract",
    },
  ];
  return (
    <React.Fragment>
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
          Nice, let's get some basic info about you
        </h2>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
      </div>
      <div className="flex flex-col gap-y-6">
        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ "text-text-error": fieldState.invalid })}>
                Current job title
              </FormLabel>
              <FormControl>
                <Input className={clsx({ "border-border-error": fieldState.invalid })} {...field} />
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employmentType"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ "text-text-error": fieldState.invalid })}>
                Employment type
              </FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-2">
                  {employmentTypeData.map((item, index) => {
                    return (
                      <Button
                        key={index}
                        type="button"
 className="px-4 py-2"
                        variant={field.value === item.value ? "primary" : "secondary"}
                        onClick={() => field.onChange(item.value)}
>
                        {item.label}
                      </Button>
                    );
                  })}
                </div>
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
      </div>
    </React.Fragment>
  );
};

const StepFour: React.FC<StepProps> = ({ form }) => {
  return (
    <React.Fragment>
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
          Finally, how did you hear about us?
        </h2>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
      </div>
      <div className="flex flex-col gap-y-6">
        <FormField
          control={form.control}
          name="aboutUs"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ "text-text-error": fieldState.invalid })}>
                How did you hear about us?
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className={clsx({ "border-border-error": fieldState.invalid })}>
                    <SelectValue placeholder="Select one..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first">First choice</SelectItem>
                    <SelectItem value="second">Second choice</SelectItem>
                    <SelectItem value="third">Third choice</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
      </div>
    </React.Fragment>
  );
};

export const Onboarding11Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  footerText: "© 2024 vibecoding",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Logo image",
  },
};

Onboarding11.displayName = 'Onboarding11';
```

