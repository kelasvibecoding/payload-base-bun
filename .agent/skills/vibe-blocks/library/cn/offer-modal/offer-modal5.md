# Offer Modal 5

## Metadata
- **Category**: Offer Modal
- **Objective**: Display a full-height, slide-out promotional drawer.
- **Use Case**: Useful for deep engagement offers that require more space to explain or those incorporating a strong brand visual without interrupting the center of the viewport (like a traditional modal).
- **Visual Style**: Incorporates a `Sheet` component that acts as a side drawer. Split vertically between typography/form (top half) and a large image aspect ratio (bottom half). Features rounded, pill-shaped inputs and buttons.
- **Interactivity**: Utilizes `react-hook-form` and `zod` for email validation. The drawer slides in from the edge of the screen, providing a smooth transition.

## Source Code

```tsx
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const OFFER_MODAL = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/ux.svg",
    alt: "",
  },
  title: "Join Now & Enjoy 20% Off",
  description:
    "Join our mailing list for updates and offers. You can unsubscribe at any time.",
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/promotional/Cozy-Smartphone-Interaction-2.png",
    alt: "",
  },
};

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type Image = {
  src: string;
  alt: string;
};

type FormType = z.infer<typeof formSchema>;

type OfferModalData = {
  logo: Image;
  image: Image;
  title: string;
  description: string;
};

type Offermodal5Props = OfferModalData;

const OfferModal5 = ({
  title = OFFER_MODAL.title,
  logo = OFFER_MODAL.logo,
  description = OFFER_MODAL.description,
  image = OFFER_MODAL.image,
}: Offermodal5Props) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
  }

  return (
    <Sheet defaultOpen>
      <SheetContent className="md:max-w-150 w-full max-md:!max-w-[calc(100dvw-2.5rem)] [&>button:hover>svg]:rotate-180 [&>button>svg]:size-5 [&>button>svg]:transition-all">
        <div className="max-h-full overflow-y-auto">
          <div className="space-y-4 p-6 md:p-16">
            <div className="basis-1/2 space-y-8">
              <SheetHeader className="gap-8 p-0">
                {logo && (
                  <img
                    src={logo.src}
                    alt={logo.src}
                    className="size-11 lg:size-16 dark:invert"
                  />
                )}
                <div className="space-y-4">
                  <SheetTitle className="text-2xl font-medium leading-tight md:text-3xl lg:text-4xl">
                    {title}
                  </SheetTitle>
                  <SheetDescription className="text-xl leading-tight">
                    {description}
                  </SheetDescription>
                </div>
              </SheetHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="flex items-start gap-3 max-sm:flex-col">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full flex-1">
                          <FormControl>
                            <Input
                              className="h-10 rounded-full px-6"
                              placeholder="Email Address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      size="lg"
                      className="sm:basis-30 rounded-full max-sm:w-full"
                    >
                      Join
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            <p className="text-muted-foreground text-xs">
              By signing up, you consent to our{" "}
              <a href="#" className="underline-offset-3 underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="underline-offset-3 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="h-1/2 basis-1/2">
            <AspectRatio ratio={1} className="overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="block size-full object-cover object-center"
              />
            </AspectRatio>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { OfferModal5 };
```
