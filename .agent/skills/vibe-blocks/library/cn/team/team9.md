# Team 9

## Metadata
- **Category**: Team
- **Objective**: Team showcase with filtering and search functionality
- **Use Case**: Company team page with department filtering and member search
- **Visual Style**: Tab-based filtering with search input and responsive member grid
- **Interactivity**: Interactive tabs for department filtering, search bar for member search, displays member photos, names, roles, and experience

## Description
An interactive team showcase section featuring department-based filtering and search functionality. Displays team members in a responsive grid with tab-based filtering by department (Engineering, Design, Marketing, Sales, Support, Leadership) and a search bar to filter members by name or role. Each member card includes photo, name, role, and years of experience. Perfect for company team pages that need advanced filtering and search capabilities.

## Source Code
```tsx
"use client";

import { TabsTrigger } from "@radix-ui/react-tabs";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList } from "@/components/ui/tabs";

const categories = [
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Support",
  "Leadership"
] as const;

interface Member {
  name: string;
  image: string;
  role: string;
  yearsOfExperience: number;
  categories: (typeof categories)[number];
}

const members: Member[] = [
  {
    name: "John Smith",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    role: "CEO",
    yearsOfExperience: 15,
    categories: "Leadership",
  },
  {
    name: "Sarah Johnson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    role: "Lead Designer",
    yearsOfExperience: 8,
    categories: "Design",
  },
  {
    name: "Michael Chen",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    role: "Senior Engineer",
    yearsOfExperience: 10,
    categories: "Engineering",
  },
  {
    name: "Emily Brown",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    role: "Marketing Director",
    yearsOfExperience: 12,
    categories: "Marketing",
  },
  {
    name: "David Wilson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    role: "Sales Manager",
    yearsOfExperience: 7,
    categories: "Sales",
  },
  {
    name: "Jessica Lee",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    role: "Customer Success Lead",
    yearsOfExperience: 5,
    categories: "Support",
  },
  {
    name: "Robert Taylor",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    role: "CTO",
    yearsOfExperience: 20,
    categories: "Leadership",
  },
  {
    name: "Amanda Martinez",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    role: "Product Designer",
    yearsOfExperience: 6,
    categories: "Design",
  },
  {
    name: "James Anderson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    role: "Frontend Engineer",
    yearsOfExperience: 4,
    categories: "Engineering",
  },
  {
    name: "Lisa Wong",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    role: "Marketing Specialist",
    yearsOfExperience: 3,
    categories: "Marketing",
  },
  {
    name: "Kevin Park",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    role: "Sales Representative",
    yearsOfExperience: 5,
    categories: "Sales",
  },
  {
    name: "Rachel Green",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    role: "Support Specialist",
    yearsOfExperience: 2,
    categories: "Support",
  },
  {
    name: "Thomas Wright",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    role: "Backend Engineer",
    yearsOfExperience: 8,
    categories: "Engineering",
  },
  {
    name: "Michelle Kim",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    role: "UI Designer",
    yearsOfExperience: 4,
    categories: "Design",
  },
  {
    name: "Daniel Garcia",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    role: "Marketing Manager",
    yearsOfExperience: 9,
    categories: "Marketing",
  },
  {
    name: "Jennifer Lopez",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    role: "Sales Director",
    yearsOfExperience: 11,
    categories: "Sales",
  },
  {
    name: "Andrew Wilson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    role: "Support Manager",
    yearsOfExperience: 6,
    categories: "Support",
  },
  {
    name: "Patricia Moore",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    role: "COO",
    yearsOfExperience: 18,
    categories: "Leadership",
  },
  {
    name: "Ryan Thompson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    role: "Systems Engineer",
    yearsOfExperience: 7,
    categories: "Engineering",
  },
  {
    name: "Sophie Turner",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    role: "UX Designer",
    yearsOfExperience: 5,
    categories: "Design",
  },
  {
    name: "Chris Evans",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    role: "Content Marketing",
    yearsOfExperience: 4,
    categories: "Marketing",
  },
  {
    name: "Maria Rodriguez",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    role: "Sales Team Lead",
    yearsOfExperience: 8,
    categories: "Sales",
  },
  {
    name: "Steven Clark",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    role: "Technical Support",
    yearsOfExperience: 3,
    categories: "Support",
  },
  {
    name: "Elizabeth Chen",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    role: "CFO",
    yearsOfExperience: 16,
    categories: "Leadership",
  },
  {
    name: "Alex Turner",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    role: "DevOps Engineer",
    yearsOfExperience: 6,
    categories: "Engineering",
  },
  {
    name: "Nina Patel",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    role: "Motion Designer",
    yearsOfExperience: 4,
    categories: "Design",
  },
  {
    name: "Sam Roberts",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    role: "Cloud Engineer",
    yearsOfExperience: 5,
    categories: "Engineering",
  },
  {
    name: "Julia Zhang",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    role: "Security Engineer",
    yearsOfExperience: 7,
    categories: "Engineering",
  },
  {
    name: "Marcus Johnson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    role: "Mobile Engineer",
    yearsOfExperience: 6,
    categories: "Engineering",
  },
];

interface Team9Props {
  className?: string;
}

const Team9 = ({ className }: Team9Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0],
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = members.filter((member) => {
    const matchesCategory = selectedCategory === member.categories;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl">Meet Our Team</h2>
          <p className="max-w-2xl text-muted-foreground">
            Our diverse group of professionals brings together expertise from
            design, engineering, and technology to deliver innovative solutions
            that transform ideas into reality.
          </p>
        </div>
        <div className="mt-14">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="-mx-8 overflow-x-auto px-8"
            >
              <TabsList className="flex h-auto justify-start gap-4 bg-background md:flex-wrap">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="relative flex flex-col items-center gap-2 overflow-visible whitespace-nowrap data-[state=active]:text-foreground"
                  >
                    {category}
                    <span
                      className={cn(
                        "absolute -bottom-1 h-0.5 w-full bg-primary opacity-0",
                        selectedCategory === category && "opacity-100",
                      )}
                    />
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <div className="relative h-fit">
              <Input
                className="pl-9"
                placeholder="Search members"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 flex items-center justify-center pl-3 text-muted-foreground/80">
                <SearchIcon className="size-4" />
              </div>
            </div>
          </div>
          <div className="mt-9 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMembers.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-background p-7 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto size-28 rounded-full border border-border"
                />
                <div className="mt-6 flex flex-col justify-center">
                  <p className="text-xl font-medium text-primary">
                    {member.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <Separator className="my-6 bg-linear-to-r from-background via-border to-background" />
                <p className="text-sm text-muted-foreground">
                  {member.yearsOfExperience} years of experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Team9 };
```
