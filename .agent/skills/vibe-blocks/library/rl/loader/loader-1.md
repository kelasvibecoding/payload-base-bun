# Loader 1

## Metadata
- **Category**: Loader
- **Objective**: Full Screen Transition
- **Use Case**: Initial app load or page transition.
- **Visual Style**: High-contrast dark reveal.
- **Interactivity**: Timed animation / Exit transition.

## Description
A transitional visual component used to indicate background processing, page loads, or data fetching states.

## Source Code
```tsx
"use client";

import { useEffect, useState } from 'react';
import { CgSpinner } from 'lucide-react';

export const Loader1 = () => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
 className={`fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-black transition-transform duration-700 ease-in-out ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
>
        {!isExiting && (
          <div className="flex flex-col items-center justify-center">
            <CgSpinner className="h-16 w-16 animate-spin text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

Loader1.displayName = 'Loader1';
```

