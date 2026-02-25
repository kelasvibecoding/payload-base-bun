# Stats 9

## Metadata
- **Category**: Stats
- **Objective**: Company testimonial statistics with performance metrics
- **Use Case**: Customer success stories with compelling performance data
- **Visual Style**: Card-based grid layout with company logos and executive avatars
- **Interactivity**: Hover effects with card elevation and border highlight

## Description
A modern testimonial-style stats section featuring company success stories with performance metrics. Displays three customer cards with company logos, executive avatars, and compelling statistics about ad performance and growth. Each card includes hover effects with smooth transitions and border highlighting. Perfect for showcasing customer success stories and business impact metrics.

## Source Code
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const statsData = [
  {
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    avatarFallback: "",
    heading: "89%",
    text: "Stop spending on ads with zero conversions",
  },
  {
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    avatarFallback: "",
    heading: "7 HRS",
    text: "Daily savings on ad management",
  },
  {
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    avatarFallback: "",
    heading: "2,540%",
    text: "Growth in overall client ad investment",
  },
];

interface Stats9Props {
  className?: string;
}

const Stats9 = ({ className }: Stats9Props) => {
  return (
    <section className={cn("py-12 md:py-20", className)}>
      <div className="container max-w-[75rem]">
        <div className="pt-10 pb-10">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {statsData.map(
              ({ logo, avatar, avatarFallback, heading, text }, i) => (
                <a href="#" key={`link${i}`} className="block w-full">
                  <Card className="rounded-3xl border-2 p-10 transition hover:-translate-y-3 hover:border-primary">
                    <CardContent className="block p-0">
                      <div className="flex items-center gap-7">
                        <Avatar className="h-14 w-14 overflow-hidden rounded-full border">
                          <AvatarImage src={avatar} alt="" />
                          <AvatarFallback>{avatarFallback}</AvatarFallback>
                        </Avatar>
                        <img src={logo} alt="" className="h-6" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="text-6xl font-bold">{heading}</div>
                        <div className="text-sm text-muted-foreground">{text}</div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats9 };
```
