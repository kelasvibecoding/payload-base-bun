# Team 4

## Metadata
- **Category**: Team
- **Objective**: Team showcase with member bios and social links
- **Use Case**: Company team page with detailed member profiles and social connections
- **Visual Style**: Grid-based layout with member photos, bios, and social media links
- **Interactivity**: Clickable social media links for team members

## Description
A comprehensive team showcase section featuring team member profiles with detailed bios and social media integration. Displays member photos, names, roles, biographical information, and social media links in a professional grid layout. Perfect for company about pages and team sections that want to provide detailed information about team members and their professional backgrounds.

## Source Code
```tsx
import { Github, Twitter, Users } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",

    bio: "With a background in software development and a vision for productivity, Alex leads the team with passion on user-first innovation.",
    social: {
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Jamie Lee",
    role: "Chief Product Officer",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",

    bio: "Jamie brings years of experience in product design and strategy, ensuring each feature meets the highest standards of functionality and design. ",
    social: {
      twitter: "#",
    },
  },
  {
    name: "Taylor Smith",
    role: "Head of Engineering",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",

    bio: "Taylor drives the technical vision, overseeing development and ensuring the product is robust, secure, and scalable for users worldwide.",
    social: {
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Morgan Davis",
    role: "Marketing Lead",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",

    bio: "With a knack for storytelling and a deep understanding of the market, Morgan communicates our mission and product benefits to the world.",
    social: {
      twitter: "#",
    },
  },
];

interface Team4Props {
  className?: string;
}

const Team4 = ({ className }: Team4Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Users className="size-4" />
            <span>Team up!</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            The Minds Behind the Mission
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            A dedicated team passionate about shaping the future of
            productivity.
          </p>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col">
              <img
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
              <div className="mt-6 flex flex-col tracking-[-0.32px]">
                <h3 className="text-lg">{member.name}</h3>
                <p className="text-muted-foreground-subtle">{member.role}</p>
                <p className="mt-4 text-sm tracking-[-0.36px] text-muted-foreground">
                  {member.bio}
                </p>
                <div className="mt-6 flex gap-2">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="hover:text-foreground"
                    >
                      <Twitter />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="hover:text-foreground"
                    >
                      <Github />
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

export { Team4 };
```
