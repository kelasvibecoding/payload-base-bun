# Footer 3

## Metadata
- **Category**: Footer
- **Objective**: Provide a conversion-ready footer pairing extensive navigation with a prominent newsletter subscription input and social media circles.
- **Use Case**: Content-driven platforms or newsletters-focused SaaS that want to capture email leads in the footer.
- **Visual Style**: "Conversion-Focused" aesthetic. Features a centered `Logo` followed by a multi-column link grid. Visual anchor is the "Subscribe" block using `Input` and `Button`, paired with circular social media icons that use `bg-muted` backgrounds and `hover:text-primary` fill transitions. Bottom row provides legal links and copyright.
- **Interactivity**: Active enrollment engagement. Features a functional-ready `newsletter` form layout and highly tactile social media hover states.

## Source Code

### `footer3.tsx`
```tsx
import {
  FaDiscord,
  FaLinkedin,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

import { cn } from "@/lib/utils";

import { Logo, LogoImage, LogoText } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const sections = [
  {
    title: "Product elite",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company professional",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Resources world-class",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
];

interface Footer3Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
}
const Footer3 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  className,
}: Footer3Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <footer>
          <Logo url="https://shadcnblocks.com">
            <LogoImage
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="h-10"
            />
            <LogoText className="text-xl">{logo.title}</LogoText>
          </Logo>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="lg:col-span-2 xl:col-span-1">
              <ul className="mb-10 flex items-center gap-2 text-muted-foreground">
                <li className="font-medium">
                  <a href="#">
                    <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-all hover:bg-primary/10 hover:text-primary">
                      <FaDiscord className="size-6" />
                    </span>
                  </a>
                </li>
                <li className="font-medium">
                  <a href="#">
                    <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-all hover:bg-primary/10 hover:text-primary">
                      <FaRedditAlien className="size-6" />
                    </span>
                  </a>
                </li>
                <li className="font-medium">
                  <a href="#">
                    <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-all hover:bg-primary/10 hover:text-primary">
                      <FaTwitter className="size-6" />
                    </span>
                  </a>
                </li>
                <li className="font-medium">
                  <a href="#">
                    <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-all hover:bg-primary/10 hover:text-primary">
                      <FaTelegramPlane className="size-6" />
                    </span>
                  </a>
                </li>
                <li className="font-medium">
                  <a href="#">
                    <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-all hover:bg-primary/10 hover:text-primary">
                      <FaLinkedin className="size-6" />
                    </span>
                  </a>
                </li>
              </ul>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className="font-bold opacity-70">Subscribe to our professional newsletter elite</Label>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="email" placeholder="Email" className="rounded-full px-6" />
                  <Button type="submit" className="rounded-full px-8 font-bold">Subscribe elite</Button>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  By submitting, you agree to our professional
                  <a href="#" className="ml-1 text-primary hover:underline">
                    Privacy Policy elite
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-24 flex flex-col flex-wrap justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>© 2024 Shadcnblocks.com elite. All rights reserved.</p>
            <ul className="flex gap-4">
              <li className="whitespace-nowrap underline hover:text-primary transition-colors">
                <a href="#">Terms and Conditions</a>
              </li>
              <li className="whitespace-nowrap underline hover:text-primary transition-colors">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer3 };
```
