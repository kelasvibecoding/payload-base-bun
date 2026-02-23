# Blog 12

## Metadata
- **Category**: Blog
- **Objective**: Display a blog post listing with author information and read times.
- **Use Case**: Blog archives, news sections, and content hubs requiring author attribution and reading time estimates.
- **Visual Style**: Grid layout with card-based post display featuring author avatars and metadata.
- **Interactivity**: Hover effects on blog cards and a button to view all blogs.

## Description
A blog listing component featuring a header section with a badge, title, and description, followed by a responsive grid of blog post cards. Each card includes an image, title, excerpt, author information with avatar, and read time badge. The component also includes a "View All Blogs" button at the bottom. The layout is fully responsive, adapting from a single column on mobile to three columns on large screens.

## Source Code
```tsx
import { ArrowRight, FileText } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Blog12Props {
  className?: string;
}

const Blog12 = ({ className }: Blog12Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="gap-1 py-1">
            <FileText className="h-full w-4" /> Our Blogs
          </Badge>
          <h1 className="text-4xl font-semibold text-balance">
            Discover the latest trends
          </h1>
          <p className="text-muted-foreground">
            Explore our blog for insightful articles, personal reflections and
            ideas that inspire action on the topics you care about.
          </p>
        </div>
        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a className="rounded-xl border" href="#">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="placeholder"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-3 pt-2 pb-4">
              <h2 className="mb-1 font-medium">
                How to build a successful brand and business online in 2024
              </h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Separator className="my-5" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <span className="text-sm font-medium">John Doe</span>
                </div>
                <Badge variant="secondary" className="h-fit">
                  10 Min Read
                </Badge>
              </div>
            </div>
          </a>
          <a className="rounded-xl border" href="#">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="placeholder"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-3 pt-2 pb-4">
              <h2 className="mb-1 font-medium">
                The difference between UI and UX and how to design for both
              </h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Separator className="my-5" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <span className="text-sm font-medium">Jane Doe</span>
                </div>
                <Badge variant="secondary" className="h-fit">
                  14 Min Read
                </Badge>
              </div>
            </div>
          </a>
          <a className="rounded-xl border" href="#">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="placeholder"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-3 pt-2 pb-4">
              <h2 className="mb-1 font-medium">
                Optimizing your website for SEO and getting more traffic
              </h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Separator className="my-5" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <span className="text-sm font-medium">Jane Smith</span>
                </div>
                <Badge variant="secondary" className="h-fit">
                  9 Min Read
                </Badge>
              </div>
            </div>
          </a>
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline">
            View All Blogs <ArrowRight className="ml-2 h-full w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Blog12 };
```
