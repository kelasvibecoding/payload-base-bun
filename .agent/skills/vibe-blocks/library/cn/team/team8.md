# Team 8

## Metadata
- **Category**: Team
- **Objective**: Carousel-based team showcase with experience metrics
- **Use Case**: Company team page with interactive member carousel and experience tracking
- **Visual Style**: Carousel layout with member cards and experience indicators
- **Interactivity**: Manual carousel navigation with previous/next buttons

## Description
An interactive team showcase section featuring a carousel-based layout with team member profiles. Displays member photos, names, roles, and years of experience in a card-based carousel format. Includes manual navigation controls and responsive design. Perfect for company team pages that want to showcase team members in an engaging, interactive format.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const members = [
  {
    name: "John Smith",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    role: "CEO",
    yearsOfExperience: 15,
  },
  {
    name: "Sarah Johnson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    role: "Lead Designer",
    yearsOfExperience: 8,
  },
  {
    name: "Michael Chen",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    role: "Senior Engineer",
    yearsOfExperience: 10,
  },
  {
    name: "Emily Brown",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    role: "Marketing Director",
    yearsOfExperience: 12,
  },
  {
    name: "David Wilson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    role: "Sales Manager",
    yearsOfExperience: 7,
  },
  {
    name: "Jessica Lee",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    role: "Customer Success Lead",
    yearsOfExperience: 5,
  },
  {
    name: "Robert Taylor",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    role: "CTO",
    yearsOfExperience: 20,
  },
  {
    name: "Amanda Martinez",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    role: "Product Designer",
    yearsOfExperience: 6,
  },
  {
    name: "Daniel Wilson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    role: "Frontend Engineer",
    yearsOfExperience: 4,
  },
  {
    name: "Lisa Wong",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    role: "Marketing Specialist",
    yearsOfExperience: 3,
  },
  {
    name: "Kevin Park",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    role: "Sales Representative",
    yearsOfExperience: 5,
  },
  {
    name: "Rachel Green",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    role: "Support Specialist",
    yearsOfExperience: 2,
  },
  {
    name: "Thomas Wright",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    role: "Backend Engineer",
    yearsOfExperience: 8,
  },
  {
    name: "Michelle Kim",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    role: "UI Designer",
    yearsOfExperience: 4,
  },
  {
    name: "Daniel Garcia",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    role: "Marketing Manager",
    yearsOfExperience: 9,
  },
  {
    name: "Jennifer Lopez",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    role: "Sales Director",
    yearsOfExperience: 11,
  },
  {
    name: "Andrew Wilson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    role: "Support Manager",
    yearsOfExperience: 6,
  },
  {
    name: "Patricia Moore",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    role: "COO",
    yearsOfExperience: 18,
  },
  {
    name: "Ryan Thompson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    role: "Systems Engineer",
    yearsOfExperience: 7,
  },
  {
    name: "Sophie Turner",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    role: "UX Designer",
    yearsOfExperience: 5,
  },
];

interface Team8Props {
  className?: string;
}

const Team8 = ({ className }: Team8Props) => {
  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container">
        <h2 className="text-5xl font-medium md:text-6xl">
          Tech Pioneers <br />
          <span className="text-primary/50">building the future</span>
        </h2>
        <p className="mt-6 max-w-md text-muted-foreground">
          We bring together brilliant developers, engineers, and tech innovators
          to create groundbreaking digital solutions.
        </p>
        <Carousel>
          <div className="mt-4 hidden items-center justify-end gap-4 md:flex">
            <CarouselPrevious className="static size-11 translate-x-0 translate-y-0" />
            <CarouselNext className="static size-11 translate-x-0 translate-y-0" />
          </div>
          <div className="mt-16 [&>div[data-slot=carousel-content]]:overflow-visible">
            <CarouselContent className="max-w-[min(calc(100vw-4rem),24rem)] select-none">
              {members.map((member, idx) => (
                <CarouselItem key={idx} className="max-w-72">
                  <div className="rounded-2xl border border-border bg-background p-7 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="mx-auto size-20 rounded-full border border-border"
                    />
                    <div className="mt-6 flex flex-col justify-center">
                      <p className="text-lg font-medium text-primary">
                        {member.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                    <Separator className="my-6 bg-linear-to-r from-background via-border to-background" />
                    <p className="text-sm text-muted-foreground">
                      {member.yearsOfExperience}+ years of experience
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Team8 };
```
