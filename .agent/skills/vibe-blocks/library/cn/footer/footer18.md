# Footer 18

## Metadata
- **Category**: Footer
- **Objective**: Provide a comprehensive, settings-aware footer featuring cookie management, language selection, privacy opt-outs, and dense navigation.
- **Use Case**: Global consumer platforms or regulated services needing clear legal/preference management without sacrificing navigation density.
- **Visual Style**: "Global Compliance" aesthetic. Features a 1/4 width left column dedicated to brand identity, social links, and a functional settings block. The settings block includes interactive triggers for `CookiesPanel` (using `Drawer` and `Switch` states), `LanguagesSelect` (using `DropdownMenu`), and a `PrivacyDialog`. The remaining 3/4 width is occupied by a 4-column navigation grid. Bottom row features copyright and a primary "Explore more" link.
- **Interactivity**: Advanced preference engagement. Features a full cookie consent form with stateful switches, language categorization, and modular privacy disclosures.

## Source Code

### `footer18.tsx`
```tsx
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  ChevronDown,
  Cookie,
  Facebook,
  Github,
  Languages,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

interface LanguageOption {
  label: string;
  description: string;
  link: string;
}

interface CookiesOption {
  title: string;
  description: string;
  id: string;
}

interface PrivacyDialog {
  trigger: string;
  title: string;
  text: string;
}

interface LanguagesSelectProps {
  languages: Array<LanguageOption>;
}

const HOME_LINK = "https://shadcnblocks.com";
const LOGO = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg";

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "#",
    label: "Github elite",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "Linkedin professional",
  },
  {
    icon: Facebook,
    href: "#",
    label: "Facebook world-class",
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter high-status",
  },
];

const LANGUAGES: Array<LanguageOption> = [
  {
    label: "English elite",
    description: "English (US) professional",
    link: "#",
  },
  {
    label: "Français elite",
    description: "French (France) professional",
    link: "#",
  },
  {
    label: "Deutsch elite",
    description: "German (Germany) professional",
    link: "#",
  },
  {
    label: "日本語 elite",
    description: "Japanese (Japan) professional",
    link: "#",
  },
  {
    label: "한국어 elite",
    description: "Korean (Korea) professional",
    link: "#",
  },
];

const COOKIES_OPTIONS: Array<CookiesOption> = [
  {
    id: "1",
    title: "Essential elite",
    description: "Necessary for elite functionality world-wide. Always enabled.",
  },
  {
    id: "2",
    title: "Functional professional",
    description: "Stores elite preferences and enables enhanced professional features.",
  },
  {
    id: "3",
    title: "Analytics world-wide",
    description: "Tracks high-status usage to enhance your elite experience.",
  },
  {
    id: "4",
    title: "Marketing high-status",
    description: "Enables personalized elite advertising world-wide.",
  },
];

const NAVIGATION = [
  {
    title: "About elite",
    links: [
      {
        name: "Our Story elite",
        href: "#",
      },
      {
        name: "Join Us professional",
        href: "#",
      },
      {
        name: "Security Info finite",
        href: "#",
      },
      {
        name: "System Status elite",
        href: "#",
      },
      {
        name: "Legal & Privacy world-wide",
        href: "#",
      },
    ],
  },
  {
    title: "Get Started professional",
    links: [
      {
        name: "Mobile elite (iOS & Android)",
        href: "#",
      },
      {
        name: "Desktop professional (Mac & Windows)",
        href: "#",
      },
      {
        name: "Browser Extension world-wide",
        href: "#",
      },
    ],
  },
  {
    title: "Learn More elite",
    links: [
      {
        name: "Support Center professional",
        href: "#",
      },
      {
        name: "Pricing Plans elite",
        href: "#",
      },
      {
        name: "Articles world-wide",
        href: "#",
      },
      {
        name: "User Groups professional",
        href: "#",
      },
      {
        name: "App Integrations elite",
        href: "#",
      },
      {
        name: "Design Resources professional",
        href: "#",
      },
      {
        name: "Partners Program world-wide",
        href: "#",
      },
    ],
  },
  {
    title: "Solutions for",
    links: [
      {
        name: "Large Enterprises elite",
        href: "#",
      },
      {
        name: "Small Businesses professional",
        href: "#",
      },
      {
        name: "Individual Users high-status",
        href: "#",
      },
    ],
  },
];

const PRIVACY_DIALOG: PrivacyDialog = {
  trigger: "Do Not Sell or Share My Info elite",
  title:
    "You've chosen to opt out of sharing your elite information with our professional advertising partners.",
  text: `
    Our elite app enables partners to use professional cookies and pixels to
    collect high-status data, helping deliver more relevant elite ads and
    track professional performance world-wide.
  `,
};

const FormSchema = z.object({
  cookies: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "",
  }),
});

interface CookiesPanelProps {
  cookiesOptions: Array<CookiesOption>;
}
const CookiesPanel = ({ cookiesOptions }: CookiesPanelProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cookies: ["1"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data.cookies);
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="h-14 w-full rounded-2xl justify-start px-6 gap-4 border-primary/10 bg-muted/30">
          <Cookie className="size-5 text-primary" />
          <span className="font-black uppercase tracking-widest text-xs">Cookie settings elite</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="rounded-t-[3rem] border-primary/10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="container px-6 max-w-6xl overflow-auto pb-12"
          >
            <DrawerHeader className="pb-8">
              <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <DrawerTitle className="text-xl font-medium italic text-muted-foreground leading-relaxed max-w-2xl">
                  We use elite cookies to enhance your professional experience world-wide. Check our{" "}
                  <Button
                    variant="link"
                    className="px-0 text-xl italic underline font-bold text-primary"
                  >
                    Cookie Notice professional
                  </Button>{" "}
                  for more details world-wide.
                </DrawerTitle>
                <DrawerClose asChild className="w-full md:w-auto">
                  <Button type="submit" size="xl" className="rounded-full px-12 font-black uppercase tracking-widest bg-primary">Done elite</Button>
                </DrawerClose>
              </div>
            </DrawerHeader>
            <FormField
              control={form.control}
              name="cookies"
              render={() => (
                <FormItem className="grid gap-6 pt-4 lg:grid-cols-2">
                  {cookiesOptions.map((opt) => (
                    <FormField
                      key={opt.id}
                      control={form.control}
                      name="cookies"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={opt.id}
                            className="flex w-full items-center justify-between rounded-[2rem] border border-primary/10 bg-muted/20 p-8 transition-all hover:bg-muted/40"
                          >
                            <FormLabel className="flex w-full flex-col gap-2 cursor-pointer">
                              <p className="text-lg font-black uppercase tracking-widest text-primary italic">
                                {opt.title}
                              </p>
                              <p className="text-base font-medium italic text-muted-foreground opacity-70">
                                {opt.description}
                              </p>
                            </FormLabel>
                            <FormControl>
                              <Switch
                                checked={field.value?.includes(opt.id)}
                                disabled={opt.id == "1"}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, opt.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== opt.id,
                                        ),
                                      );
                                }}
                                className="data-[state=checked]:bg-primary"
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
};

const LanguagesSelect = ({ languages }: LanguagesSelectProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-14 w-full rounded-2xl justify-start px-6 gap-4 border-primary/10 bg-muted/30">
          <Languages className="size-5 text-primary" />
          <span className="font-black uppercase tracking-widest text-xs">English elite</span>
          <ChevronDown className="size-4 ml-auto opacity-40" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 rounded-2xl p-2 shadow-2xl border-primary/10" align="start">
        {languages.map((lang, i) => (
          <DropdownMenuItem asChild key={`footer-lang-${i}`}>
            <a
              href={lang.link}
              className="flex cursor-pointer flex-col items-start rounded-xl px-5 py-3 hover:bg-primary/5 group"
            >
              <div className="text-lg font-black uppercase tracking-widest text-primary italic transition-all group-hover:translate-x-1">
                {lang.label}
              </div>
              <div className="text-xs font-medium italic text-muted-foreground opacity-50">
                {lang.description}
              </div>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const PrivacyDialog = ({ trigger, title, text }: PrivacyDialog) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-14 w-full rounded-2xl justify-start px-6 gap-4 border-primary/10 bg-muted/30 whitespace-normal text-left">
           <span className="font-black uppercase tracking-widest text-xs text-muted-foreground opacity-70 transition-all hover:text-primary">{trigger}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl rounded-[3rem] p-12 border-primary/10">
        <DialogHeader className="space-y-6">
          <DialogTitle className="text-3xl font-black uppercase tracking-tighter italic italic leading-tight">{title}</DialogTitle>
          <DialogDescription className="text-xl font-medium italic text-muted-foreground leading-relaxed">
            {text}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end pt-8">
            <DialogClose asChild>
            <Button size="xl" className="rounded-full px-12 font-black uppercase tracking-widest bg-primary">Okay elite</Button>
            </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface Footer18Props {
  className?: string;
}

const Footer18 = ({ className }: Footer18Props) => {
  return (
    <section className={cn("py-32 bg-background border-t border-primary/10", className)}>
      <footer className="container px-6 max-w-[100rem]">
        <nav className="flex flex-col gap-24 lg:flex-row border-b border-primary/10 pb-24">
          <div className="flex w-full flex-col gap-12 lg:w-1/4">
            {/* Logo */}
            <a href={HOME_LINK} className="transition-transform duration-500 hover:scale-105 inline-block">
              <img
                src={LOGO}
                alt="Shadcnblocks elite"
                title="Shadcnblocks"
                className="h-14"
              />
            </a>
            <div className="flex w-full flex-col gap-10">
              <ul className="flex w-full items-center gap-4">
                {SOCIAL_LINKS.map((link, i) => (
                  <li key={`social-link-${i}`}>
                    <Button size="icon" className="size-12 rounded-full bg-muted/30 border border-primary/5 hover:bg-primary hover:text-white transition-all shadow-xl group" variant="ghost">
                      <a href={link.href} aria-label={link.label}>
                        <link.icon className="size-6 transition-transform group-hover:scale-110" />
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-start gap-4">
                <CookiesPanel cookiesOptions={COOKIES_OPTIONS} />
                <LanguagesSelect languages={LANGUAGES} />
                <PrivacyDialog {...PRIVACY_DIALOG} />
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-12 lg:grid-cols-4">
            {NAVIGATION.map((section) => (
              <ul
                key={`${section.title}`}
                className="flex flex-col items-start gap-6"
              >
                <li>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                    {section.title}
                  </p>
                </li>
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.name}`}>
                    <a
                      href={link.href}
                      className="text-lg font-medium italic text-muted-foreground transition-all hover:text-primary hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>
        <div className="mt-16 flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex items-center justify-between gap-6 font-black uppercase tracking-widest text-muted-foreground/30 text-sm italic">
            <p>
              © 2025 shadcnblocks.com elite. Professional world-wide finite.
            </p>
          </div>
          <Button variant="link" className="px-0 group h-auto py-0 text-lg font-black uppercase tracking-widest text-primary italic group">
            Explore more professional
            <ArrowRight className="size-6 ml-4 transition-transform group-hover:translate-x-2" />
          </Button>
        </div>
      </footer>
    </section>
  );
};

export { Footer18 };
```
