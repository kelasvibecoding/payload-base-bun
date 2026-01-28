# Custom Providers

As you add more Custom Components to your Admin Panel, you may find it helpful to add additional React Context(s) to your app. Payload allows you to inject your own context providers that wrap the entire Admin Panel.

## Configuration

To add a Custom Provider, use the `admin.components.providers` property in your Payload Config:

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  admin: {
    components: {
      providers: ['/path/to/MyProvider'], 
    },
  },
})
```

## Implementation

Custom Providers must be **Client Components** because React Context is a client-side feature. Ensure you include the `'use client'` directive.

```tsx
'use client'
import React, { createContext, useContext } from 'react'

const MyCustomContext = createContext(null)

export function MyProvider({ children }: { children: React.ReactNode }) {
  const myValue = { status: 'active' }

  return (
    <MyCustomContext.Provider value={myValue}>
      {children}
    </MyCustomContext.Provider>
  )
}

export const useMyCustomContext = () => useContext(MyCustomContext)
```

> **Note**: While the provider itself must be a Client Component, it can wrap the entire Admin Panel, allowing you to use its context in any child Client Component (like custom fields or views).
