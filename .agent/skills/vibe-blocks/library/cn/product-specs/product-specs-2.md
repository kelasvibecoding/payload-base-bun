# Product Specs 2

## Metadata
- **Category**: Product Specifications
- **Objective**: Manage high-density specification data through a clean, tabbed interface that highlights essential hardware details and features.
- **Use Case**: Complex professional equipment (laptops, workstations, cameras) where technical depth is extreme and needs to be partitioned into logical views (Overview, Performance, Connectivity).
- **Visual Style**: High-Efficiency Grid. Uses a wide layout (`max-w-5xl`) with consistent padding and subtle background highlights for "Key specs".
- **Interactivity**: 
    - Tabbed Navigation: Uses the `Tabs` component to organize data into logical groups, preventing vertical fatigue and allowing users to jump directly to sections like "Memory" or "Ports".
    - Smart Highlighting: Includes a "Key spec" `Badge` for high-importance attributes, styled with a distinct subtle background (`bg-muted/30`) for quick scanning.
    - Boolean Feature Icons: Automatically converts boolean "true/false" values into high-visibility `Check` or `X` icons, improving visual processing speed.
    - Automated Summary Panel: Dynamically generates a "Key Highlights" section at the bottom of the component, pulling the first four highlighted items from the Overview tab for a quick executive summary.
    - Horizontal Scroll Support: The `TabsList` is wrapped in an overflow container, ensuring accessibility on mobile and small-screen devices.

## Description
Product Specs 2 is designed for technical confidence. By partitioning specifications into tabs, it provides an organized "deep-dive" experience without overwhelming the shopper. The technical standout is the automated value rendering (bool to icon) and the highlighting system, which together guide the user's eye toward the most significant selling points of the product.

## Source Code

```tsx
"use client";

import { Check, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Spec {
  label: string;
  value: string | boolean;
  highlight?: boolean;
}

interface SpecGroup {
  id: string;
  name: string;
  specs: Spec[];
}

const DEFAULT_SPEC_GROUPS: SpecGroup[] = [
  {
    id: "overview",
    name: "Overview",
    specs: [
      { label: "Model", value: "MacBook Pro 14 (2024)", highlight: true },
      { label: "Processor", value: "Apple M3 Pro", highlight: true },
      { label: "Memory", value: "18GB Unified Memory" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: '14.2" Liquid Retina XDR', highlight: true },
      { label: "Battery Life", value: "Up to 17 hours" },
      { label: "Weight", value: "1.60 kg (3.5 lb)" },
      { label: "Color", value: "Space Black" },
    ],
  },
  {
    id: "display",
    name: "Display",
    specs: [
      { label: "Screen Size", value: '14.2" diagonal' },
      { label: "Resolution", value: "3024 x 1964 pixels" },
      { label: "Pixel Density", value: "254 ppi" },
      { label: "Display Type", value: "Liquid Retina XDR" },
      { label: "Refresh Rate", value: "ProMotion (24-120Hz)", highlight: true },
      { label: "Peak Brightness (HDR)", value: "1600 nits" },
      { label: "Peak Brightness (SDR)", value: "1000 nits" },
      { label: "Wide Color (P3)", value: true },
      { label: "True Tone", value: true },
      { label: "ProMotion Technology", value: true },
    ],
  },
  {
    id: "performance",
    name: "Chip & Performance",
    specs: [
      { label: "Chip", value: "Apple M3 Pro", highlight: true },
      { label: "CPU Cores", value: "11-core (5 performance + 6 efficiency)" },
      { label: "GPU Cores", value: "14-core" },
      { label: "Neural Engine", value: "16-core" },
      { label: "Memory Bandwidth", value: "150GB/s" },
      { label: "Unified Memory", value: "18GB (configurable to 36GB)" },
      { label: "Hardware Accelerated Ray Tracing", value: true },
      { label: "Media Engine", value: true },
    ],
  },
  {
    id: "storage",
    name: "Storage & Memory",
    specs: [
      { label: "Base Storage", value: "512GB SSD" },
      { label: "Max Storage", value: "8TB SSD" },
      { label: "Storage Type", value: "NVMe SSD" },
      { label: "Read Speed", value: "Up to 7.4GB/s" },
      { label: "Base Memory", value: "18GB Unified" },
      { label: "Max Memory", value: "36GB Unified" },
      { label: "Memory Type", value: "LPDDR5" },
      { label: "User Upgradeable", value: false },
    ],
  },
  {
    id: "connectivity",
    name: "Ports & Connectivity",
    specs: [
      { label: "Thunderbolt 4 Ports", value: "3" },
      { label: "HDMI Port", value: "1 (supports 8K)" },
      { label: "SDXC Card Slot", value: true },
      { label: "MagSafe 3", value: true },
      { label: "Headphone Jack", value: "3.5mm (high-impedance)" },
      { label: "Wi-Fi", value: "Wi-Fi 6E (802.11ax)" },
      { label: "Bluetooth", value: "5.3" },
    ],
  },
  {
    id: "dimensions",
    name: "Size & Weight",
    specs: [
      { label: "Height", value: "1.55 cm (0.61 in)" },
      { label: "Width", value: "31.26 cm (12.31 in)" },
      { label: "Depth", value: "22.12 cm (8.71 in)" },
      { label: "Weight", value: "1.60 kg (3.5 lb)" },
    ],
  },
];

interface ProductSpecs2Props {
  specGroups?: SpecGroup[];
  title?: string;
  className?: string;
}

const ProductSpecs2 = ({
  specGroups = DEFAULT_SPEC_GROUPS,
  title = "Specifications",
  className,
}: ProductSpecs2Props) => {
  const [activeTab, setActiveTab] = useState(specGroups[0]?.id || "overview");

  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="size-5 text-emerald-600" />
      ) : (
        <X className="size-5 text-muted-foreground" />
      );
    }
    return value;
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container max-w-5xl">
        {/* Header */}
        <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="mb-6 overflow-x-auto">
            <TabsList className="inline-flex w-auto">
              {specGroups.map((group) => (
                <TabsTrigger key={group.id} value={group.id}>
                  {group.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {specGroups.map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-0">
              <div className="rounded-lg border">
                <div className="grid divide-y">
                  {group.specs.map((spec, index) => (
                    <div
                      key={index}
                      className={cn(
                        "grid grid-cols-2 gap-4 px-4 py-3 md:px-6",
                        spec.highlight && "bg-muted/30",
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">
                          {spec.label}
                        </span>
                        {spec.highlight && (
                          <Badge
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            Key spec
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center font-medium">
                        {renderValue(spec.value)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Specs Summary */}
        <div className="mt-8 rounded-lg bg-muted/30 p-6">
          <h3 className="mb-4 font-medium">Key Highlights</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {specGroups[0]?.specs
              .filter((s) => s.highlight)
              .slice(0, 4)
              .map((spec, index) => (
                <div key={index}>
                  <p className="text-sm text-muted-foreground">{spec.label}</p>
                  <p className="font-semibold">{spec.value as string}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductSpecs2 };
```
