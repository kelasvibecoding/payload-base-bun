# Compare 7

## Metadata
- **Category**: Compare
- **Objective**: Framework comparison table with tooltip explanations and detailed feature analysis.
- **Use Case**: Technology framework comparison, developer tool evaluation, feature comparison, technology decision making.
- **Visual Style**: Professional table layout with alternating row colors, tooltips, and detailed feature descriptions.
- **Interactivity**: Tooltip explanations for complex features, responsive table design, hover effects.

## Description
A comprehensive framework comparison component featuring a detailed side-by-side analysis between Shadcn and Bootstrap frameworks. The component includes professional table styling with alternating row colors, interactive tooltips for complex features, and detailed comparisons across design systems, customization, dark mode, TypeScript support, accessibility, component count, licensing, premium components, and Figma kit availability.

## Key Features
- **Framework Comparison**: Detailed side-by-side analysis of Shadcn vs Bootstrap
- **Interactive Tooltips**: Hover explanations for complex features like premium components and Figma kit availability
- **Professional Table Layout**: Clean design with proper borders and alternating row styling
- **Feature-Specific Analysis**: Covers design systems, customization, dark mode, TypeScript, accessibility, and more
- **Tooltip Integration**: Uses Tooltip components for additional context on specific features
- **Responsive Design**: Adapts to different screen sizes with proper table formatting

## Source Code
```tsx
import React from "react";

import { cn } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Compare7Props {
  className?: string;
}

const Compare7 = ({ className }: Compare7Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-semibold">Compare Us</h2>
        <p className="mb-8 text-center text-muted-foreground">
          A modern framework for building websites that is better than the
          competition.
        </p>
        <div className="mx-auto max-w-3xl overflow-x-auto">
          <Table className="rounded border text-left shadow-lg">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead className="bg-muted px-6 py-4 font-semibold">
                  Shadcn
                </TableHead>
                <TableHead className="px-6 py-4 font-semibold">
                  Bootstrap
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-foreground">
              <TableRow>
                <TableCell className="px-6 py-4">Design System</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  Modern, Utility-first
                </TableCell>
                <TableCell className="px-6 py-4">
                  Classic, Component-based
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Customization</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  Highly customizable
                </TableCell>
                <TableCell className="px-6 py-4">Limited by default</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Dark Mode</TableCell>
                <TableCell className="bg-muted px-6 py-4">Built-in</TableCell>
                <TableCell className="px-6 py-4">
                  Requires extra setup
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">TypeScript Support</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  First-class
                </TableCell>
                <TableCell className="px-6 py-4">Partial</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Accessibility</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  Focus on a11y
                </TableCell>
                <TableCell className="px-6 py-4">Basic</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Component Count</TableCell>
                <TableCell className="bg-muted px-6 py-4">30+</TableCell>
                <TableCell className="px-6 py-4">25+</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">License</TableCell>
                <TableCell className="bg-muted px-6 py-4">MIT</TableCell>
                <TableCell className="px-6 py-4">MIT</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Premium Components</TableCell>
                <TableCell className="bg-muted px-6 py-4">Available</TableCell>
                <TableCell className="relative px-6 py-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-pointer underline decoration-dotted">
                        Not included
                      </span>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={8} className="max-w-xs">
                      <span className="mb-1 block font-semibold">
                        Premium Only
                      </span>
                      Some advanced components are only available in paid
                      versions or require third-party libraries.
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Figma Kit</TableCell>
                <TableCell className="bg-muted px-6 py-4">Yes</TableCell>
                <TableCell className="relative px-6 py-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-pointer text-muted-foreground underline decoration-dotted">
                        No
                      </span>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={8} className="max-w-xs">
                      <span className="mb-1 block font-semibold">
                        Figma Kit Unavailable
                      </span>
                      Bootstrap does not provide an official Figma kit, but
                      community kits may exist.
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export { Compare7 };
```

## Usage Notes
- Framework names and feature comparisons can be customized for specific use cases
- Tooltip content should be updated to reflect accurate information about each framework
- The table uses alternating row colors (bg-muted) for better readability
- All text content can be modified to compare different technologies or frameworks
- Tooltip positioning uses sideOffset={8} for proper spacing from trigger elements
- The component is responsive with horizontal scrolling on smaller screens