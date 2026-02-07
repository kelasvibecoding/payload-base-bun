# Price

## Metadata
- **Category**: Component Reference
- **Objective**: Reference component for Price
- **Use Case**: Base component intended for use within Vibe-Blocks layouts.
- **Visual Style**: Modern utility component.
- **Interactivity**: React component with internal state or props.

## Description
A reference component designed for architectural scaling and UI consistency across the Vibe-Block ecosystem. This is intended to be used as a child component within more complex blocks.

## Source Code
```tsx
"use client";

import type { ReactNode } from "react";
import { createContext, useContext } from "react";

import { cn } from "@/lib/utils";

const PriceContext = createContext<{ onSale?: boolean }>({ onSale: false });
export const usePriceContext = () => useContext(PriceContext);

interface PriceProps {
  className?: string;
  children: ReactNode;
  onSale?: boolean;
}

interface PriceValueProps {
  price?: number;
  currency?: string;
  variant?: "regular" | "sale";
  className?: string;
}

export type PriceType = {
  currency?: string;
  regular: number;
  sale?: number;
};

const formatterCache = new Map<string, Intl.NumberFormat>();

function formatCurrency(value: number, currency = "USD", locale = "en-US") {
  const key = `${locale}-${currency}`;
  if (!formatterCache.has(key)) {
    formatterCache.set(
      key,
      new Intl.NumberFormat(locale, { style: "currency", currency }),
    );
  }
  return formatterCache.get(key)!.format(value);
}

const Price = ({ className, children, onSale }: PriceProps) => {
  return (
    <PriceContext.Provider value={{ onSale }}>
      <div className={cn("flex flex-wrap items-center gap-x-2", className)}>
        {children}
      </div>
    </PriceContext.Provider>
  );
};

const PriceValue = ({
  price,
  currency = "USD",
  variant = "regular",
  className,
}: PriceValueProps) => {
  const { onSale } = usePriceContext();

  if (price == null) return null;

  return (
    <span
      className={cn(
        "leading-tight",
        variant === "regular"
          ? onSale
            ? "text-muted-foreground line-through"
            : "text-foreground"
          : "text-foreground",
        className,
      )}
    >
      {formatCurrency(price, currency)}
    </span>
  );
};

export { Price, PriceValue };

```
