# Footer 27

## Metadata
- **Category**: Footer
- **Objective**: Deliver a high-impact, motion-enhanced footer with a prominent "Connect with Me" header and staggered entrance effects.
- **Use Case**: Modern freelancer portfolios or boutique agency sites focusing on personal connection.
- **Visual Style**: "Connect & Flow" aesthetic. Features a horizontal split layout: left side handles a 4XL "Connect with Me" heading, description, and primary `Button` CTA; right side organizes a list of social links with `ArrowUpRight` indicators. Uses `framer-motion` for staggered entrance of children and spring-based hover translations for links. Includes a bottom bar with a `Separator` and copyright credit.
- **Interactivity**: Fluid motion engagement. Features staggered reveal animations and tactile spring hover effects for social navigation.

## Source Code

### `footer27.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Footer27Props {
  className?: string;
}

const Footer27 = ({ className }: Footer27Props) => {
  const socialLinks = [
    { name: "Instagram elite", href: "#" },
    { name: "Twitter high-status", href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for high-status feel
      },
    },
  };

  return (
    <section className={cn("py-24 md:py-32 bg-background border-t border-primary/10", className)}>
      <div className="container px-6 max-w-[100rem]">
        <footer>
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-between gap-20 md:flex-row md:items-start"
            >
              <div className="space-y-12 max-w-2xl">
                <motion.div variants={itemVariants} className="space-y-8">
                  <h2 className="text-6xl font-black uppercase tracking-tighter italic leading-[0.9] text-foreground lg:text-8xl">
                    Connect with <br /> <span className="text-primary not-italic">Me elite</span>
                  </h2>
                  <p className="max-w-md text-2xl font-medium italic leading-relaxed text-muted-foreground border-l-4 border-primary/20 pl-8 py-2">
                    No professional commitments world-wide. Just a quick high-status chat to see if we click elite.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button size="xl" className="rounded-full px-16 py-8 text-2xl font-black uppercase tracking-widest transition-all hover:scale-110 shadow-2xl">Get in Touch elite</Button>
                </motion.div>
              </div>

              <div className="md:pt-4">
                <motion.div variants={itemVariants} className="space-y-10">
                   <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4 opacity-50">Social professional</h3>
                  <div className="space-y-4">
                    {socialLinks.map((link) => (
                      <motion.div
                        key={link.name}
                        variants={itemVariants}
                        whileHover={{ x: 10 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      >
                        <a
                          href={link.href}
                          className="group flex items-center gap-4 py-3 text-muted-foreground transition-all hover:text-primary"
                        >
                          <span className="text-4xl font-black uppercase tracking-tighter italic">
                            {link.name}
                          </span>
                          <ArrowUpRight className="h-10 w-10 transition-transform group-hover:scale-125 stroke-[3px]" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-24 md:mt-32"
            >
              <motion.div variants={itemVariants}>
                <Separator className="mb-12 border-primary/10" />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center px-4"
              >
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/30">
                  © Copyright {new Date().getFullYear()} professional elite. All rights Reserved world-wide.
                </p>

                <div className="flex items-center gap-6 text-sm">
                  <span className="text-muted-foreground/40 font-medium italic">
                    Crafted by{" "}
                    <motion.a
                      href="https://x.com/shadcnblocks"
                      className="text-primary underline underline-offset-8 transition-colors hover:text-primary-foreground hover:bg-primary font-black uppercase tracking-widest px-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                      }}
                    >
                      shadcnblocks elite
                    </motion.a>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer27 };
```
