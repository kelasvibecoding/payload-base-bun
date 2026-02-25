# Team 15

## Metadata
- **Category**: Team
- **Objective**: Modern team showcase with social media integration
- **Use Case**: Company team page with comprehensive member profiles and social links
- **Visual Style**: Card-based layout with avatar images and social media buttons
- **Interactivity**: Social media links for each team member

## Description
A modern team showcase section featuring a stylized header with label, dual-tone title, and subtitle. Displays team members in card-based layout with avatar images, names, roles, and social media links (Twitter, Instagram, LinkedIn). Each card includes interactive social media buttons that link to external profiles. The component features a clean, modern design with proper spacing and responsive layout. Perfect for company about pages that want to showcase their team with comprehensive social media integration.

## Source Code
```tsx
import { Instagram, Linkedin, Twitter, Users } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  social: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

interface Team15Props {
  label: string;
  title1: string;
  title2: string;
  subtitle: string;
  members: TeamMember[];
  className?: string;
}

const Team15 = ({
  className,
  label = "MEET OUR CREATORS",
  title1 = "Building the Future",
  title2 = "Together",
  subtitle = "Our diverse team of innovators, designers, and engineers work together to create exceptional digital experiences that make a difference.",
  members = [
    {
      id: "sophia-chen",
      name: "Sophia Chen",
      role: "Creative Director",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar1.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: "marcus-rodriguez",
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar2.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: "elena-petrov",
      name: "Elena Petrov",
      role: "UX Designer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar3.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: "david-kim",
      name: "David Kim",
      role: "Product Manager",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar4.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: "amara-singh",
      name: "Amara Singh",
      role: "Marketing Lead",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar5.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: "alex-thompson",
      name: "Alex Thompson",
      role: "Data Scientist",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar6.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ],
}: Team15Props) => {
  return (
    <section className={cn("bg-background py-24", className)}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 text-center">
          {/* Label with icon */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <Users className="h-4 w-4 text-foreground" />
            <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
              {label}
            </p>
          </div>

          {/* Main Title */}
          <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl">
            <span className="font-semibold text-foreground">{title1}</span>{" "}
            <span className="font-medium text-muted-foreground italic">
              {title2}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-muted-foreground">{subtitle}</p>
        </div>

        {/* Team Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <Card
              key={member.id}
              className="border-border/50 bg-card/50 p-6 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 items-start gap-4">
                {/* Content */}
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Media Buttons */}
                  <div className="flex gap-2">
                    {member.social.twitter && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 rounded-md border-border/50 bg-background/50 p-0 transition-all duration-200"
                      >
                        <Twitter className="h-3 w-3" />
                      </Button>
                    )}
                    {member.social.instagram && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 rounded-md border-border/50 bg-background/50 p-0 transition-all duration-200"
                      >
                        <Instagram className="h-3 w-3" />
                      </Button>
                    )}
                    {member.social.linkedin && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 rounded-md border-border/50 bg-background/50 p-0 transition-all duration-200"
                      >
                        <Linkedin className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Avatar */}
                <div className="">
                  <div className="h-full">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team15 };
```
