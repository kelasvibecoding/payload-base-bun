# Community 4

## Metadata
- **Category**: Community
- **Objective**: Modern social media community section with gradient backgrounds and platform-specific styling.
- **Use Case**: Community building, social media presence, platform engagement, modern social outreach.
- **Visual Style**: Card-based layout with gradient backgrounds, radial patterns, and platform-specific color schemes.
- **Interactivity**: External social media links with hover effects and smooth transitions.

## Description
A modern community engagement component featuring a card-based layout with four social media platforms (Facebook, YouTube, X/Twitter, Instagram). Each platform card features unique gradient backgrounds, radial patterns, platform-specific color schemes, and hover effects with smooth transitions. The component uses advanced CSS techniques for visual appeal while maintaining accessibility and responsive design.

## Key Features
- **Gradient Backgrounds**: Platform-specific radial gradients with color schemes
- **Radial Patterns**: Advanced CSS radial patterns for visual depth
- **Platform-Specific Colors**: Facebook (blue), YouTube (red), X/Twitter (zinc), Instagram (pink)
- **Hover Effects**: Smooth transitions with arrow movement on hover
- **Modern Card Design**: Rounded corners with border styling
- **Responsive Grid**: Adapts from 1 to 4 columns based on screen size
- **External Link Integration**: All links include proper target attributes

## Source Code
```tsx
import { ChevronRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { cn } from "@/lib/utils";

interface Community4Props {
  className?: string;
}

const Community4 = ({ className }: Community4Props) => {
  const socialPlatforms = [
    {
      name: "Facebook",
      icon: <FaFacebook className="size-6 text-blue-400/90" />,
      color: "blue",
      heading: "Join our group",
      description:
        "Share your thoughts, ideas, and projects with the community.",
      followText: "Follow us on Facebook",
      url: "#",
    },
    {
      name: "Youtube",
      icon: <FaYoutube className="size-6 text-red-500/90" />,
      color: "red",
      heading: "Join our channel",
      description: "Watch our latest videos and keep up with the latest news.",
      followText: "Follow us on Youtube",
      url: "#",
    },
    {
      name: "X",
      icon: <FaXTwitter className="size-5 text-white" />,
      color: "zinc",
      heading: "Follow our updates",
      description: "Get the latest news and quick updates from our team.",
      followText: "Follow us on X",
      url: "#",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="size-6 text-pink-400/90" />,
      color: "pink",
      heading: "See our gallery",
      description: "Browse our latest visual content and behind-the-scenes.",
      followText: "Follow us on Instagram",
      url: "#",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h2 className="text-4xl font-medium md:text-5xl">
            Join our community
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Connect with others, share experiences, and stay in the loop.
          </p>
        </div>
        <div className="mx-auto mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className={cn(
                "group relative flex h-full flex-col gap-10 overflow-hidden rounded-xl border bg-radial-[at_80%_14%] from-[-50%] via-zinc-950 via-75% to-zinc-950 p-6",
                platform.color === "pink" &&
                  "from-pink-500 dark:border-pink-500/50",
                platform.color === "blue" &&
                  "from-blue-500 dark:border-blue-500/50",
                platform.color === "red" &&
                  "from-red-500 dark:border-red-500/50",
                platform.color === "zinc" &&
                  "from-zinc-500 dark:border-zinc-500/50",
              )}
            >
              <div className="absolute inset-0 h-full w-full shrink-0 bg-[radial-gradient(white_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_80%_14%,#000,transparent_40%)] [background-size:3px_3px] opacity-35"></div>
              <div
                className={`relative grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-b from-${platform.color === "zinc" ? "white" : `${platform.color}-500`}/50 via-transparent to-${platform.color === "zinc" ? "white" : `${platform.color}-500`}/50 p-px`}
              >
                <div
                  className={`grid size-full place-items-center rounded-full bg-zinc-950 bg-gradient-to-b from-${platform.color === "zinc" ? "white" : `${platform.color}-500`}/30 via-transparent to-${platform.color === "zinc" ? "white" : `${platform.color}-500`}/30`}
                >
                  {platform.icon}
                </div>
              </div>
              <div className="flex h-full flex-col justify-between">
                <div className="mb-5">
                  <h3 className="relative text-lg font-semibold text-white">
                    {platform.heading}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {platform.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-white/90 transition-colors group-hover:text-white">
                  {platform.followText}
                  <ChevronRight className="size-4.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Community4 };
```

## Usage Notes
- Links are currently placeholder "#" and should be updated with actual social media URLs
- The component uses advanced CSS gradient syntax that may require PostCSS or similar preprocessing
- Radial pattern overlay uses opacity-35 for subtle visual effect
- Icon sizing varies (size-5 for X/Twitter, size-6 for others) for optimal visual balance
- Gradient classes use dynamic color interpolation based on platform
- The component includes dark mode variants for border colors
- Chevron icon has smooth translate-x transition on hover for enhanced interactivity
