# Scrollable Tabslist

## Metadata
- **Category**: Component Reference
- **Objective**: Reference component for Scrollable Tabslist
- **Use Case**: Base component intended for use within Vibe-Blocks layouts.
- **Visual Style**: Modern utility component.
- **Interactivity**: React component with internal state or props.

## Description
A reference component designed for architectural scaling and UI consistency across the Vibe-Block ecosystem. This is intended to be used as a child component within more complex blocks.

## Source Code
```tsx
import type { ReactNode } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ScrollableTabsListProps {
  children: ReactNode;
}

const ScrollableTabsList = ({ children }: ScrollableTabsListProps) => {
  return (
    <div className="overflow-hidden rounded-full">
      <ScrollArea className="whitespace-nowrap">
        {children}
        <ScrollBar orientation="horizontal" className="h-2" />
      </ScrollArea>
    </div>
  );
};

export { ScrollableTabsList };

```
