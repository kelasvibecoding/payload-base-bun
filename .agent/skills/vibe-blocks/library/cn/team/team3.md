# Team 3

## Metadata
- **Category**: Team
- **Objective**: Team showcase with gradient background and social media links
- **Use Case**: Company team page with enhanced visual design and social connections
- **Visual Style**: Gradient background with hover effects and social media icons
- **Interactivity**: Hover effects with scale animations and clickable social links

## Description
A sophisticated team showcase section featuring a gradient background with enhanced visual design. Displays team member profiles with hover effects, scale animations, and social media integration. Each member card includes avatar, name, role, and interactive social media icons with smooth transitions. Perfect for modern company about pages with engaging visual appeal.

## Source Code
```tsx
import { Github, Linkedin, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
}

interface Team3Props {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
  className?: string;
}

const Team3 = ({
  heading = "Team",
  description = "Our diverse team of experts brings together decades of experience in design, engineering, and product development.",
  members = [
    {
      id: "member-1",
      name: "Sarah Chen",
      role: "CEO & Founder",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-2",
      name: "Marcus Rodriguez",
      role: "CTO",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-3",
      name: "Emily Watson",
      role: "Head of Design",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-4",
      name: "David Kim",
      role: "Lead Engineer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-5",
      name: "Lisa Thompson",
      role: "Product Manager",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: "member-6",
      name: "Alex Johnson",
      role: "UX Designer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  ],
  className,
}: Team3Props) => {
  return (
    <section
      className={cn(
        "bg-gradient-to-b from-background to-muted/20 py-24 lg:py-32",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent lg:text-6xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <Avatar className="relative size-24 shadow-lg ring-4 ring-background transition-all duration-300 group-hover:ring-primary/20 lg:size-28">
                    <AvatarImage src={member.avatar} className="object-cover" />
                    <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5 text-xl font-semibold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {member.name}
                  </h3>
                  <p className="inline-block rounded-full bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground">
                    {member.role}
                  </p>
                </div>

                <div className="flex gap-3">
                  {member.github && (
                    <a
                      href={member.github}
                      className="rounded-xl bg-muted/80 p-3 transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:shadow-lg"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="size-5 text-muted-foreground transition-colors duration-300 hover:text-primary" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      className="rounded-xl bg-muted/80 p-3 transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:shadow-lg"
                      aria-label={`${member.name}'s twitter`}
                    >
                      <Twitter className="size-5 text-muted-foreground transition-colors duration-300 hover:text-primary" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="rounded-xl bg-muted/80 p-3 transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:shadow-lg"
                      aria-label={`${member.name}'s linkedin`}
                    >
                      <Linkedin className="size-5 text-muted-foreground transition-colors duration-300 hover:text-primary" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team3 };
```
