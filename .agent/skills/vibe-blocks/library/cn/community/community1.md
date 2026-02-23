# Community 1

## Metadata
- **Category**: Community
- **Objective**: Social media community engagement section with platform links.
- **Use Case**: Community building, social media presence, developer/designer engagement, brand community.
- **Visual Style**: Clean centered layout with social media icons and community messaging.
- **Interactivity**: External social media links with target="_blank" for new tab opening.

## Description
A simple and elegant community engagement component featuring a centered logo, compelling headline text, and social media platform links. The component uses React Icons for consistent social media branding and provides a clean, minimal design that encourages community participation across multiple platforms.

## Key Features
- **Social Media Integration**: Links to Twitter/X, GitHub, and Discord
- **React Icons**: Consistent iconography using react-icons/fa6
- **Centered Layout**: Clean, balanced design with proper spacing
- **External Links**: All links open in new tabs for better user experience
- **Responsive Design**: Adapts to different screen sizes
- **Brand Integration**: Includes company logo for brand recognition

## Source Code
```tsx
import { FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Community1Props {
  className?: string;
}

const Community1 = ({ className }: Community1Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center gap-5">
          <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg" alt="logo" className="size-10" />
          <h2 className="text-center text-3xl font-semibold">
            Join our community
            <br />
            <span className="text-muted-foreground/80">
              of designers & developers
            </span>
          </h2>
          <div className="flex items-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://x.com/shadcnblocks"
                target="_blank"
                className="size-10"
              >
                <FaXTwitter />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/shadcnblocks"
                target="_blank"
                className="size-10"
              >
                <FaGithub />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://shadcnblocks.com"
                target="_blank"
                className="size-10"
              >
                <FaDiscord />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Community1 };
```

## Usage Notes
- Links are hardcoded but can be made configurable via props
- Icon sizes are consistent using Tailwind's size-10 class
- The component uses Next.js Link behavior through the asChild prop
- Social media URLs should be updated to match your actual community links
- The logo image URL can be customized for your brand