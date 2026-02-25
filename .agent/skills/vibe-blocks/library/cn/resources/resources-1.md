# Resources 1

## Metadata
- **Category**: Resources
- **Objective**: Provide a comprehensive, category-filtered content hub for reports and articles with integrated lead capture.
- **Use Case**: Deep resource libraries for SaaS or Enterprise platforms that require real-time category filtering, search-like interactions, and a featured content hero for reports or whitepapers.
- **Visual Style**: Architectural grid layout featuring a subtle dot-patterned hero background, integrated full-width email capture, and a dynamic multi-column grid of high-fidelity bordered content cards with integrated CTA badges.
- **Interactivity**: Reactive category filtering driven by a custom checkbox-based form, persistent "Load More" pagination, and client-side form validation using Zod and React Hook Form.

## Description
Resources 1 is the "Discovery Hub" component. It excels at organizing large volumes of content (like industry reports or technical blogs) into a scannable, filterable interface. By combining a "Primary Post" spotlight in the hero with a robust filtering system below, it guides the user toward high-value content while allowing for deep-dive discovery. The integrated email form ensures that the resource hub serves as a high-conversion lead generation tool.

## Source Code

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Slash } from "lucide-react";
import { Fragment, useCallback, useMemo, useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface Post {
  category: string;
  title: string;
  summary: string;
  link: string;
  cta: string;
  thumbnail: string;
}

interface Category {
  label: string;
  value: string;
}

interface FilterFormProps {
  categories: Array<Category>;
  onCategoryChange: (selectedCategories: string[]) => void;
}

interface BlogsResultProps {
  posts: Array<Post>;
  categories: Array<Category>;
}

interface BreadcrumbBlogProps {
  breadcrumb: Array<BreadcrumbItem>;
}

const POSTS_PER_PAGE = 6;

const BREADCRUMB: Array<BreadcrumbItem> = [
  {
    label: "Resources",
    link: "#",
  },
  {
    label: "Reports",
    link: "#",
  },
];

const CATEGORIES: Array<Category> = [
  { label: "All", value: "all" },
  { label: "Productivity", value: "productivity" },
  { label: "Accessibility", value: "accessibility" },
  { label: "Performance", value: "performance" },
];

const PRIMARY_POST: Post = {
  category: "Innovation Spotlight",
  title: "How AI is Transforming Frontend Development",
  summary:
    "Explore how tools like GitHub Copilot, AI design generators, and code assistants are changing the way developers build UIs and ship features faster.",
  link: "#",
  cta: "Discover the Future",
  thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
};

const POSTS: Array<Post> = [
  {
    category: "Productivity",
    title: "5 VS Code Extensions That Will Save You Hours",
    summary: "Discover must-have extensions to boost your coding efficiency.",
    link: "#",
    cta: "Boost Your Editor",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Why Accessibility Should Be Part of Your MVP",
    summary: "Making your product inclusive from day one improves usability.",
    link: "#",
    cta: "Learn Why",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
];

const FilterFormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.length > 0, {
    message: "At least one category should be selected.",
  }),
});

const FilterForm = ({ categories, onCategoryChange }: FilterFormProps) => {
  const form = useForm<z.infer<typeof FilterFormSchema>>({
    resolver: zodResolver(FilterFormSchema),
    defaultValues: {
      items: [CATEGORIES[0].value],
    },
  });

  const handleCheckboxChange = useCallback(
    (
      checked: boolean | string,
      categoryValue: string,
      field: ControllerRenderProps<z.infer<typeof FilterFormSchema>, "items">,
    ) => {
      let updatedValues = checked
        ? [...field.value, categoryValue]
        : field.value.filter((value: string) => value !== categoryValue);

      if (updatedValues.length === 0) {
        form.setValue("items", ["all"]);
        onCategoryChange(["all"]);
        return;
      }

      if (updatedValues.includes("all") && updatedValues.length > 1) {
        updatedValues = updatedValues.filter((v: string) => v !== "all");
      }

      if (JSON.stringify(field.value) !== JSON.stringify(updatedValues)) {
        form.setValue("items", updatedValues);
        onCategoryChange(updatedValues);
      }
    },
    [form, onCategoryChange],
  );

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem className="flex w-full flex-wrap items-center gap-3">
              {categories.map((category) => {
                const isChecked = field.value?.includes(category.value);
                return (
                  <FormItem key={category.value}>
                    <FormControl>
                      <Label className={cn(
                        "flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 transition-all",
                        isChecked ? "bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20" : "bg-muted text-muted-foreground hover:bg-muted/80 font-medium"
                      )}>
                        <div>{category.label}</div>
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(checked, category.value, field)
                          }
                          className="sr-only"
                        />
                      </Label>
                    </FormControl>
                  </FormItem>
                );
              })}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const ResourcesCard = ({
  category,
  title,
  thumbnail,
  summary,
  link,
  cta,
}: Post) => {
  return (
    <a href={link} className="group block h-full w-full">
      <Card className="h-full border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-muted/50 border-b border-border p-3 text-xs font-bold uppercase tracking-widest text-primary">
            {category}
          </div>
          <AspectRatio ratio={1.5}>
            <img
              src={thumbnail}
              alt={title}
              className="block size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </AspectRatio>
          <div className="flex w-full flex-col gap-4 p-6">
            <h2 className="text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
              {title}
            </h2>
            <p className="text-sm font-medium leading-relaxed text-muted-foreground line-clamp-3">
              {summary}
            </p>
            <div className="mt-2">
              <Badge variant="secondary" className="rounded-full px-4 py-1 font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                {cta}
                <ArrowRight className="ml-1 size-3" />
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

const Resources1 = ({ className }: Resources1Props) => {
  return (
    <section className={cn("pb-32 bg-background font-sans", className)}>
      {/* Hero Section */}
      <div className="bg-muted/30 py-24 border-b border-border bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="container flex flex-col items-center gap-16 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col gap-10 max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Resource Library
              </h1>
              <p className="text-xl font-medium leading-relaxed text-muted-foreground">
                Deep-dive reports and expert guides crafted to help modern engineering teams scale with confidence.
              </p>
            </div>
            
            {/* Email Form (Mock) */}
            <div className="max-w-md w-full p-1.5 bg-background border border-border rounded-2xl flex gap-2 focus-within:ring-2 ring-primary/20 transition-all">
              <Input placeholder="name@company.com" className="border-none shadow-none focus-visible:ring-0" />
              <Button className="rounded-xl font-bold">Subscribe</Button>
            </div>
          </div>

          <div className="w-full max-w-[400px]">
            <ResourcesCard {...PRIMARY_POST} />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-20">
        <div className="container flex flex-col gap-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Featured Content</h2>
          <ResourcesResult posts={POSTS} categories={CATEGORIES} />
        </div>
      </div>
    </section>
  );
};

// Simplified Result Component for documentation
const ResourcesResult = ({ posts, categories }: BlogsResultProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["all"]);
  const filteredPosts = posts.filter(
    (p) => selectedCategories.includes("all") || selectedCategories.includes(p.category.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <FilterForm categories={categories} onCategoryChange={setSelectedCategories} />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post, i) => (
          <ResourcesCard key={i} {...post} />
        ))}
      </div>
    </div>
  );
};

export { Resources1 };
```
