# User Profile 6

## Metadata
- **Category**: User Profile
- **Objective**: Provide a comprehensive, tab-driven professional portfolio card with deep experience and project disclosures.
- **Use Case**: Expert resumes, freelancer marketplace member details, or professional networking bios where work history is the 1st priority information.
- **Visual Style**: Rich, data-centric card architecture featuring a left-aligned vertical identity header. Includes a large-scale avatar (size-20), multi-platform social iconography, and a primary 3-tab content hub (About, Experience, Projects). Experience is rendered via a clean "Timeline" with vertical-line connectors, and projects use a "Tag-rich" grid to display technical competencies.
- **Interactivity**: Fully functional `Tabs` navigation with state persistence, hover-responsive social links, and reactive scroll-into-view behavior for long bios.

## Description
User Profile 6 is the "Professional Portfolio" component. It rejects simple summaries in favor of a layered, chronological disclosure of a user's professional journey. By utilizing the `Tabs` primitive, it allows for a high-density experience (About/Work/Projects) without overwhelming the initial view. The "Architectural Timeline" in the Experience tab and the "Technical Tagging" in Projects ensure that technical recruiters or project managers can extract key historical value at a glance.

## Source Code

```tsx
"use client";

import { Briefcase, Github, Linkedin, MapPin, Twitter } from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface User {
  name: string;
  avatar?: string;
  role?: string;
  company?: string;
  location?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  about?: string;
  experience?: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  projects?: Array<{
    name: string;
    description: string;
    tech: string[];
  }>;
}

interface UserProfile6Props {
  user?: User;
  className?: string;
}

const UserProfile6 = ({
  user = {
    name: "Sarah Montgomery",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    role: "Principal Software Engineer",
    company: "Infrastructure Lab",
    location: "San Francisco, CA",
    bio: "Engineering high-performance UI primitives and modular architectural systems. Open source enthusiast and performance minimalist.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    about:
      "I'm a senior software engineer with 12+ years of experience building elite web architectures. I specialize in React, TypeScript, and high-performance design systems. Currently focused on developer productivity and structural code integrity. Previously built core payment systems at Stripe and search infrastructure at Google. I'm passionate about open source and have contributed to Next.js and Radix UI.",
    experience: [
      {
        title: "Principal Engineer",
        company: "Vercel",
        period: "2022 - Present",
        description:
          "Architecting Next.js core features and optimizing hydration performance across enterprise-scale applications.",
      },
      {
        title: "Lead Architect",
        company: "Stripe",
        period: "2019 - 2022",
        description:
          "Developed high-throughput payment components serving billions in transactional volume daily.",
      },
      {
        title: "Systems Engineer",
        company: "Google",
        period: "2016 - 2019",
        description:
          "Designed distributed user interfaces for the Google Cloud Platform management console.",
      },
    ],
    projects: [
      {
        name: "ProUI Architecture",
        description: "A high-performance component library used by 500+ production teams globally.",
        tech: ["TypeScript", "React", "Radix"],
      },
      {
        name: "Hydrate Guard",
        description: "Open source visual debugger for React hydration errors and TBT bottlenecks.",
        tech: ["Rust", "Wasm", "React"],
      },
      {
        name: "Scale Mesh",
        description: "Real-time visualization engine for distributed microservice health.",
        tech: ["Go", "Three.js", "gRPC"],
      },
    ],
  },
  className,
}: UserProfile6Props) => {
  const [activeTab, setActiveTab] = useState("about");

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className={cn("w-full max-w-2xl border border-border/50 bg-card/50 shadow-2xl shadow-black/5 rounded-[2.5rem] overflow-hidden", className)}>
      <CardContent className="p-10 font-sans">
        {/* Identity Header */}
        <div className="flex items-start gap-8 max-md:flex-col">
          <div className="relative group">
            <Avatar className="size-24 border-4 border-background shadow-xl transition-transform duration-500 group-hover:scale-110">
                <AvatarImage
                src={user.avatar}
                alt={user.name}
                className="object-cover"
                />
                <AvatarFallback className="text-3xl font-bold bg-muted">
                {initials}
                </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-1 right-1 size-5 bg-emerald-500 rounded-full border-4 border-card" />
          </div>
          
          <div className="flex-1 pt-1">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">{user.name}</h2>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mt-0.5">
              {user.role}
              {user.company && (
                <span className="text-muted-foreground/60"> — <span className="text-foreground">{user.company}</span></span>
              )}
            </p>
            {user.location && (
              <p className="mt-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                <MapPin className="size-3.5 text-primary/50" />
                {user.location}
              </p>
            )}
            {user.bio && (
              <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground italic">&ldquo;{user.bio}&rdquo;</p>
            )}
            <div className="mt-6 flex items-center gap-3">
              {user.socialLinks?.twitter && (
                <Button variant="outline" size="icon" className="size-9 rounded-xl border-border hover:bg-muted group/link" asChild>
                  <a href={user.socialLinks.twitter} target="_blank">
                    <Twitter className="size-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
                  </a>
                </Button>
              )}
              {user.socialLinks?.linkedin && (
                <Button variant="outline" size="icon" className="size-9 rounded-xl border-border hover:bg-muted group/link" asChild>
                  <a href={user.socialLinks.linkedin} target="_blank">
                    <Linkedin className="size-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
                  </a>
                </Button>
              )}
              {user.socialLinks?.github && (
                <Button variant="outline" size="icon" className="size-9 rounded-xl border-border hover:bg-muted group/link" asChild>
                  <a href={user.socialLinks.github} target="_blank">
                    <Github className="size-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Tabbed Portfolio Engine */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mt-12 w-full"
        >
          <TabsList className="h-auto w-full justify-start gap-4 bg-transparent p-0 border-b border-border/50 rounded-none">
            <TabsTrigger 
                value="about" 
                className="rounded-none border-b-2 border-transparent px-2 pb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground transition-all"
            >
                About
            </TabsTrigger>
            <TabsTrigger 
                value="experience" 
                className="rounded-none border-b-2 border-transparent px-2 pb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground transition-all"
            >
                Experience
            </TabsTrigger>
            <TabsTrigger 
                value="projects" 
                className="rounded-none border-b-2 border-transparent px-2 pb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground transition-all"
            >
                Portfolio
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-8">
            <p className="text-sm font-medium leading-relaxed text-muted-foreground">
              {user.about}
            </p>
          </TabsContent>

          <TabsContent value="experience" className="mt-8">
            <div className="space-y-8">
              {user.experience?.map((exp, index) => (
                <div
                  key={index}
                  className="relative border-l-2 border-primary/10 pl-8 pb-2 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 size-4 rounded-full border-4 border-card bg-primary shadow-sm" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <Briefcase className="size-3.5 text-primary" />
                        <h4 className="text-base font-bold text-foreground leading-none">{exp.title}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                        <span>{exp.company}</span>
                        <span className="size-1 rounded-full bg-border" />
                        <span>{exp.period}</span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-muted-foreground leading-relaxed">
                    {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="mt-8">
            <div className="grid gap-6">
              {user.projects?.map((project, index) => (
                <div key={index} className="group rounded-2xl border border-border/50 bg-muted/20 p-6 transition-all hover:bg-muted/40 hover:border-primary/20">
                  <h4 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">{project.name}</h4>
                  <p className="mt-1 text-sm font-medium text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/5 border border-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export { UserProfile6 };
```
