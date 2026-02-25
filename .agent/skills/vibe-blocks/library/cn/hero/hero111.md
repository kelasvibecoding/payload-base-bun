# Hero 111

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver an "HR Management" introduction pairing a centered email-lead form with a high-fidelity 3-image "Device Mosaic" visual.
- **Use Case**: Best for HR platforms, applicant tracking systems (ATS), or team operations tools that want to emphasize "Hiring process" and "Centralized data."
- **Visual Style**: Recruitment professional aesthetic. Features a centered (top) to staggered image (bottom) layout on a `bg-muted` background. The lead generator is a high-engagement email `Input` + `Button` field with specialized rounded corners (`rounded-full`). Below the form, a dual "Trust Merit" row uses `CircleCheck` icons. The visual anchor is a 3-image mosaic utilize varying aspect ratios to create a high-fidelity depth-of-field effect. Concludes with a categorical logo cloud for social proof.
- **Interactivity**: High engagement functional form. Includes a `zod`-validated email lead capture form using `react-hook-form`. Image mosaic uses high-resolution placeholders to simulate a dashboard environment.

## Source Code

### `hero111.tsx`
```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
  });

function HeroForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your professional email"
                      className="block h-fit w-full rounded-full border-2 border-primary/10 px-8 py-4 text-lg font-medium shadow-sm transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 sm:py-6"
                    />
                  </FormControl>
                  <FormMessage className="ml-6 mt-2" />
                </FormItem>
              )}
            />
          </div>
          <div className="shrink-0">
            <Button
              type="submit"
              size="lg"
              className="h-full w-full rounded-full px-12 py-5 text-xl font-black shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

interface Hero111Props {
  className?: string;
}

const Hero111 = ({ className }: Hero111Props) => {
  return (
    <section className={cn("bg-muted/30 py-20 lg:py-40 font-sans overflow-hidden border-b", className)}>
      <div className="container relative z-10 px-6">
        
        {/* Editorial side */}
        <div className="mx-auto flex max-w-[45rem] flex-col items-center justify-center gap-12 text-center text-pretty">
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="text-5xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-primary">
              HR Management with advanced Hiring
            </h1>
            <p className="text-xl lg:text-3xl font-medium text-primary/70 leading-relaxed max-w-2xl">
              Simplify payroll, benefit tasks, and empower your team with our unified hiring solution.
            </p>
          </div>
          
          <div className="w-full max-w-[35rem] drop-shadow-2xl">
            <HeroForm />
          </div>
          
          {/* Trust Merit Row */}
          <div className="flex w-full flex-wrap items-center justify-center gap-10">
            {[
                "No Credit Card Required",
                "Cancel Anytime"
            ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 group">
                    <div className="flex h-8 w-8 rounded-full bg-primary/5 border border-primary/10 transition-transform group-hover:scale-110">
                        <CircleCheck className="m-auto size-5 stroke-primary" strokeWidth={3} />
                    </div>
                    <p className="text-sm lg:text-lg font-black uppercase tracking-widest text-muted-foreground">
                        {text}
                    </p>
                </div>
            ))}
          </div>
        </div>
        
        {/* Staggered 3-Image "Device Mosaic" visual */}
        <div className="mt-32 lg:mt-48 flex w-full items-start justify-between group">
          <div className="w-[42%] overflow-hidden rounded-[2rem] lg:rounded-[3rem] border-4 border-background shadow-2xl transition-transform duration-1000 group-hover:-translate-y-4">
            <AspectRatio ratio={1.3 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt="HR analytics dashboard"
                className="h-full w-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </AspectRatio>
          </div>
          <div className="w-[24%] overflow-hidden rounded-[2rem] border-4 border-background shadow-2xl transition-transform duration-1000 group-hover:translate-y-4">
            <AspectRatio ratio={0.75 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                alt="employee profile view"
                className="h-full w-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </AspectRatio>
          </div>
          <div className="w-[33%] overflow-hidden rounded-[2rem] lg:rounded-[3rem] border-4 border-background shadow-2xl transition-transform duration-1000 group-hover:-translate-x-4">
            <AspectRatio ratio={1 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                alt="team calendar view"
                className="h-full w-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </AspectRatio>
          </div>
        </div>
        
        {/* Enterprise Brand Verification side */}
        <div className="flex flex-col items-center justify-center gap-12 mt-32 lg:mt-48">
          <p className="text-center text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60">
            Trusted by 7+ million people at companies like
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-16 gap-y-10 opacity-40">
            {Array(6).fill(null).map((_, i) => (
                <img
                    key={`hero111-logo-${i}`}
                    src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-${i + 1}.svg`}
                    alt="partner logo"
                    className="h-8 lg:h-10 w-full object-contain grayscale hover:grayscale-0 transition-grayscale duration-500"
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero111 };
```
