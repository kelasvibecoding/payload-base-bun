# Loader 3

## Metadata
- **Category**: Loader
- **Objective**: General Loader
- **Use Case**: Standard Loader functionality.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A transitional visual component used to indicate background processing, page loads, or data fetching states.

## Source Code
```tsx
"use client";

import { useEffect, useState } from 'react';

export const Loader3 = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 500);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
 className={`fixed inset-0 z-50 flex items-center justify-center bg-neutral-black transition-transform duration-700 ease-in-out ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
>
        {!isExiting && (
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/vibecoding-logo-white.svg"
              alt="vibecoding logo"
 className={`size-full transition-all duration-500 ease-out ${
                showImage ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

Loader3.displayName = 'Loader3';
```

