# Hero 172

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for customer service automation, pairing a split-column layout with a functional "One-Click" email form and a unique "Abstract-Stack" visual.
- **Use Case**: Best for customer support platforms, booking automation tools (e.g., "Automate and enhance"), or business growth tools that want to emphasize "Growing your business" and "14 days free trial."
- **Visual Style**: Narrative Automation aesthetic. Features a split-column layout starting with a unique "Hero-Form" block Utilizing the `react-hook-form` and `zod` validation stack. Includes a unique status-merit row ends with functional "Trust" icons Utilizing high-fidelity `Check` icons. Visual anchor is a unique "Abstract Matrix" on the right Featuring 3 relative-positioned image containers overlaying a complex absolute-positioned SVG "swirl" pattern. Matrix includes specialized categorical elements Like a floating `Star` icon and high-fidelity project previews (`aspect-[0.99]`) to drive architectural depth.
- **Interactivity**: High interactive business engagement. Features a functional "Get Started" email enrollment form and high-fidelity visual layering to drive user trust and Professional Professional conversion.

## Source Code

### `hero172.tsx`
```tsx
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Mail, Star } from "lucide-react";
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

function HeroFrom() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Financial High-Status Lead Captured:", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full relative group/form">
        <div className="flex w-full flex-col items-start gap-4 md:flex-row">
          <div className="w-full flex-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="relative w-full overflow-hidden rounded-[2rem] border-2 border-primary/20 bg-background transition-all hover:border-primary shadow-xl">
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your professional mail"
                        className="block h-fit w-full border-none py-6 pr-6 pl-14 text-xl font-medium tracking-tight text-foreground focus-visible:ring-0"
                      />
                    </FormControl>
                    <Mail className="absolute top-1/2 left-6 size-6 -translate-y-1/2 text-primary/40 group-hover/form:text-primary transition-colors" strokeWidth={2.5} />
                  </div>
                  <FormMessage className="pl-6 pt-2 font-black uppercase text-[10px] tracking-widest" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full shrink-0 md:w-fit">
            <Button
              type="submit"
              size="lg"
              className="h-fit w-full rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500"
            >
              Get Started
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

interface Hero172Props {
  className?: string;
}

const Hero172 = ({ className }: Hero172Props) => {
  return (
    <section
      className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}
    >
      <div className="container relative z-10 px-6 max-w-[90rem]">
        <div className="grid grid-cols-1 items-center justify-center gap-24 lg:gap-32 lg:grid-cols-2 text-pretty">
          
          {/* Automation Narrative side */}
          <div className="flex flex-col gap-12 lg:gap-20">
            <div className="flex flex-col gap-10">
              <h1 className="text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm">
                Automate and <span className="text-primary italic">enhance</span> your service.
              </h1>
              <p className="max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10">
                Ditch manual bookings and focus on growing your professional 
                empire or relishing your newfound free time.
              </p>
            </div>
            
            <HeroFrom />

            <div className="flex flex-col gap-4 py-4 pt-10 border-t border-border/40">
              {[
                "No credit card required for high-status entry",
                "14 days professional free trial"
              ].map((merit, i) => (
                <div key={i} className="flex items-center gap-4 group/merit translate-x-0 hover:translate-x-2 transition-transform duration-500">
                  <div className="flex size-8 rounded-full bg-primary/10 border border-primary/20 shadow-sm transition-colors group-hover/merit:bg-primary">
                    <Check className="m-auto size-4 text-primary group-hover/merit:text-primary-foreground" strokeWidth={3} />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover/merit:text-foreground">
                    {merit}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Unique "Abstract Interface Matrix" Visual Anchor side */}
          <div className="relative group isolate">
            {/* The Atmospheric Structural Depth layer side */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <div className="relative mx-auto aspect-[1/1] w-full max-w-[50rem] transition-transform duration-1000 group-hover:-translate-y-4">
              
              {/* Complex Geometric SVG Swirl Frame side */}
              <svg
                className="absolute top-[5%] left-[-10%] z-10 w-[85%] fill-none transition-all duration-1000 group-hover:scale-110 opacity-40"
                viewBox="0 0 588 655"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M319 645.463C229 659.797 41.4 652.163 11 506.963C-27 325.463 100.5 299.463 177 288.963C253.5 278.463 341.5 307 454.5 288.963C486.365 283.877 585 242.009 583.5 119.009C582.3 20.6093 583 2.5 583 0.498047"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-primary/20"
                />
              </svg>

              {/* Interface Fragment 1: Top-Left Profile Fragment */}
              <div className="absolute top-[5%] left-[5%] z-20 w-[45%] overflow-hidden rounded-[3rem] border-8 border-background bg-background shadow-2xl transition-transform duration-1000 group-hover:-translate-x-4">
                <AspectRatio ratio={0.85 / 1}>
                    <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                        alt="customer service lead preview"
                        className="size-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                </AspectRatio>
              </div>

              {/* Interface Fragment 2: Bottom-Right Content Fragment */}
              <div className="absolute right-[5%] bottom-[15%] z-20 w-[45%] overflow-hidden rounded-[3rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:translate-x-4">
                <AspectRatio ratio={0.8 / 1}>
                    <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                        alt="automated workflow detail"
                        className="size-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                </AspectRatio>
              </div>

              {/* Interface Fragment 3: Floating Status Overlay side (Bottom-Center) */}
              <div className="absolute bottom-[5%] left-[10%] z-30 w-[45%] overflow-hidden rounded-[3.5rem] border-8 border-background bg-secondary shadow-2xl transition-transform duration-700 hover:scale-105">
                <AspectRatio ratio={0.9 / 1}>
                    <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                        alt="automation system primary insight"
                        className="size-full object-cover"
                    />
                </AspectRatio>
              </div>

              {/* Abstract Trust merit icons side */}
              <Star className="absolute top-[18%] right-[15%] size-20 stroke-primary/30 fill-primary/5 transition-all duration-1000 group-hover:rotate-12 group-hover:scale-125" strokeWidth={1.5} />
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero172 };
```
