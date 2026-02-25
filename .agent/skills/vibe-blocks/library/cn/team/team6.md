# Team 6

## Metadata
- **Category**: Team
- **Objective**: Professional team showcase with department organization
- **Use Case**: Company team page with member profiles and career opportunities
- **Visual Style**: Grid-based layout with department badges and professional cards
- **Interactivity**: Career call-to-action button and professional member presentation

## Description
A professional team showcase section featuring team member profiles organized by departments. Displays team member photos, names, roles, departments, and brief descriptions in a responsive grid layout. Includes a career opportunities call-to-action section. Perfect for company team pages and recruitment-focused presentations with organized department structure.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    id: "person-1",
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    department: "Leadership",
    description:
      "Former Google PM with 10+ years building products that millions use daily. Passionate about creating meaningful impact through technology.",
    expertise: ["Product Strategy", "Team Leadership", "Growth"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "person-2",
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder",
    department: "Engineering",
    description:
      "Ex-Meta engineer who led teams building infrastructure that served billions of users. Loves solving complex technical challenges.",
    expertise: ["System Architecture", "AI/ML", "Scalability"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
  },
  {
    id: "person-3",
    name: "Priya Patel",
    role: "Head of Design",
    department: "Design",
    description:
      "Design leader with experience at Airbnb and Figma. Believes great design should be invisible and solve real user problems.",
    expertise: ["UX Design", "Design Systems", "User Research"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
  },
  {
    id: "person-4",
    name: "David Kim",
    role: "VP of Engineering",
    department: "Engineering",
    description:
      "Built and scaled engineering teams at Stripe and Uber. Focuses on creating high-performing teams and robust systems.",
    expertise: ["Team Building", "Backend Systems", "DevOps"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
  },
  {
    id: "person-5",
    name: "Emma Thompson",
    role: "Head of Marketing",
    department: "Marketing",
    description:
      "Marketing strategist who grew multiple startups from 0 to millions in revenue. Expert in growth marketing and brand building.",
    expertise: ["Growth Marketing", "Brand Strategy", "Content"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
  },
  {
    id: "person-6",
    name: "Alex Johnson",
    role: "Head of Sales",
    department: "Sales",
    description:
      "Sales leader with a track record of building high-performing teams and exceeding revenue targets in competitive markets.",
    expertise: ["Enterprise Sales", "Team Management", "Customer Success"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
  },
  {
    id: "person-7",
    name: "Priya Patel",
    role: "Head of Design",
    department: "Design",
    description:
      "Marketing strategist who grew multiple startups from 0 to millions in revenue. Expert in growth marketing and brand building.",
    expertise: ["Growth Marketing", "Brand Strategy", "Content"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
  },
  {
    id: "person-8",
    name: "Emma Thompson",
    role: "Head of Marketing",
    department: "Marketing",
    description:
      "Sales leader with a track record of building high-performing teams and exceeding revenue targets in competitive markets.",
    expertise: ["Enterprise Sales", "Team Management", "Customer Success"],
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
  },
];

interface Team6Props {
  className?: string;
}

const Team6 = ({ className }: Team6Props) => {
  return (
    <section
      className={cn(
        "bg-gradient-to-b from-background to-muted/20 py-24",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Team
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Our diverse team of experts brings together decades of experience in
            design, engineering, and product development.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.id}
              className="group rounded-lg border border-muted bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-muted"
            >
              {/* Avatar Placeholder */}
              <div className="relative mb-6">
                <Avatar className="mx-auto h-20 w-20">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-2xl font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-lg font-medium transition-colors group-hover:text-primary">
                  {member.name}
                </h3>
                <p className="mb-2 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <Badge variant="outline" className="text-xs">
                  {member.department}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border-t pt-16 text-center">
          <h3 className="mb-4 text-2xl font-semibold">
            Ready to build the future with us?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            We're always looking for talented individuals who share our passion
            for innovation and making a difference. Check out our current
            openings.
          </p>
          <Button size="lg" className="px-8">
            Explore Careers
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Team6 };
```
