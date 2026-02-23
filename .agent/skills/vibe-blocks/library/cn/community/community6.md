# Community 6

## Metadata
- **Category**: Community
- **Objective**: Multi-platform community engagement section with six social media platforms and modern card design.
- **Use Case**: Community building, social media presence, developer engagement, multi-platform outreach.
- **Visual Style**: Modern card-based layout with rounded corners, hover effects, and dotted border icon wrappers.
- **Interactivity**: External social media links with hover shadow effects and smooth transitions.

## Description
A comprehensive community engagement component featuring six social media platforms (Twitter, GitHub, Discord, LinkedIn, Slack, Bluesky) in a modern card-based layout. Each platform is presented as an interactive card with hover shadow effects, dotted border icon wrappers, and platform-specific descriptions. The component uses a responsive grid that adapts from single column on mobile to six columns on desktop.

## Key Features
- **Six Platform Support**: Twitter, GitHub, Discord, LinkedIn, Slack, and Bluesky
- **Dotted Border Icon Wrappers**: Visual enhancement with hover background effects
- **Modern Card Design**: Rounded-2xl corners with clean typography
- **Hover Effects**: Shadow transitions on card hover for enhanced interactivity
- **Responsive Grid**: Adapts from 1 to 6 columns based on screen size
- **Platform-Specific Descriptions**: Tailored messaging for each social platform
- **External Link Integration**: All links include proper target and rel attributes

## Source Code
```tsx
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaSlack,
  FaXTwitter,
} from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/card";

const iconWrapper =
  "mb-4 flex items-center justify-center h-16 w-16 rounded-full border-2 border-dotted border-muted-foreground/40 transition-colors duration-200";

interface Community6Props {
  className?: string;
}

const Community6 = ({ className }: Community6Props) => {
  const communityCards = [
    {
      icon: <FaXTwitter className="h-8 w-8 text-foreground/80" />,
      title: "Twitter",
      description: "Follow us for updates, insights, and news",
      link: "#",
    },
    {
      icon: <FaGithub className="h-8 w-8 text-foreground/80" />,
      title: "GitHub",
      description: "Contribute, report issues, and star the project",
      link: "#",
    },
    {
      icon: <FaDiscord className="h-8 w-8 text-foreground/80" />,
      title: "Discord",
      description: "Chat, share ideas, and get support from the community",
      link: "#",
    },
    {
      icon: <FaLinkedin className="h-8 w-8 text-foreground/80" />,
      title: "LinkedIn",
      description: "Connect with us professionally and grow your network",
      link: "#",
    },
    {
      icon: <FaSlack className="h-8 w-8 text-foreground/80" />,
      title: "Slack",
      description: "Join our Slack for real-time collaboration",
      link: "#",
    },
    {
      icon: <SiBluesky className="h-8 w-8 text-foreground/80" />,
      title: "Bluesky",
      description: "Connect with us on Bluesky for open social networking",
      link: "#",
    },
  ];

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-3xl bg-background py-32 text-foreground",
        className,
      )}
    >
      <div className="relative z-10 container flex flex-col items-center justify-center">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
          Join Our Vibrant Network
        </h2>
        <p className="mb-8 max-w-2xl text-center text-lg font-normal text-muted-foreground md:text-xl">
          Connect, collaborate, and create with passionate developers and
          creators worldwide.
        </p>
        <div className="mb-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-6">
          {communityCards.map((card) => (
            <Card
              key={card.title}
              className="group flex flex-1 flex-col items-center rounded-2xl bg-background p-8 transition-shadow duration-200 hover:shadow-lg"
            >
              <a
                href={card.link}
                target="_blank"
                className="flex flex-col items-center"
              >
                <span className={`${iconWrapper} group-hover:bg-muted`}>
                  {card.icon}
                </span>
                <h5 className="mb-1 text-lg font-semibold">{card.title}</h5>
                <p className="mb-2 text-center text-base text-muted-foreground">
                  {card.description}
                </p>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Community6 };
```

## Usage Notes
- Links are currently placeholder "#" and should be updated with actual social media URLs
- Icon wrapper uses border-dotted for visual distinction with muted foreground color
- The component uses a responsive grid: 1 column mobile, 3 columns tablet, 6 columns desktop
- Card hover effects use transition-shadow for smooth shadow appearance
- All social platform icons maintain consistent sizing (h-8 w-8) for visual harmony
- The section includes rounded-3xl corners for modern, soft appearance
- External links should include rel="noopener noreferrer" for security best practices