# Team 10

## Metadata
- **Category**: Team
- **Objective**: Team showcase with compact member list
- **Use Case**: Company team page with streamlined member profiles
- **Visual Style**: Grid-based layout with small avatars and condensed information
- **Interactivity**: Static display with professional member presentation and call-to-action

## Description
A streamlined team showcase section featuring a compact list of team members. Displays a heading with description and call-to-action button, followed by a responsive grid of team members. Each member shows their avatar, name, and role in a space-efficient format. Perfect for company about pages that need to display many team members in a compact layout.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const members = [
  {
    name: "Jane Doe",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    role: "CEO",
  },
  {
    name: "John Doe",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    role: "CTO",
  },
  {
    name: "Sarah Smith",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    role: "Head of Product",
  },
  {
    name: "Michael John",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    role: "Lead Engineer",
  },
  {
    name: "James Taylor",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    role: "UX Designer",
  },
  {
    name: "David Wilson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    role: "Data Engineer",
  },
  {
    name: "Lisa Anderson",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    role: "UI Designer",
  },
  {
    name: "Emily Brown",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    role: "DevOps Engineer",
  },
  {
    name: "Emma Davis",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    role: "Product Manager",
  },
  {
    name: "Robert Martin",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    role: "General Director",
  },
  {
    name: "Jennifer White",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    role: "HR Manager",
  },
  {
    name: "William Clark",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    role: "Sales Director",
  },
  {
    name: "Patricia Moore",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    role: "Social media",
  },
  {
    name: "Thomas Lee",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    role: "Security Engineer",
  },
  {
    name: "Mike Garcia",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    role: "Data Scientist",
  },
  {
    name: "Richard Tom",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    role: "QA Engineer",
  },
];

interface Team10Props {
  className?: string;
}

const Team10 = ({ className }: Team10Props) => {
  return (
    <section className={cn("bg-muted/50 py-32", className)}>
      <div className="container">
        <div className="max-w-xl">
          <h2 className="mb-5 text-4xl md:text-5xl">Meet Our Experts</h2>
          <p className="mb-12 text-muted-foreground md:text-lg">
            Join our team of talented professionals and be part of an innovative
            company that's shaping the future of technology through creative
            solutions.
          </p>
          <Button size="lg">Join Our Team</Button>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {members.map((member, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Avatar className="size-10 border border-border">
                <AvatarImage src={member.image} />
              </Avatar>
              <div>
                <h3 className="text-sm font-medium">{member.name}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team10 };
```
