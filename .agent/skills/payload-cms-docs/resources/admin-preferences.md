# Managing User Preferences

Payload provides a persistent way to store user preferences across sessions and devices. This is used internally for features like column visibility in list views, active locales, and collapsed states of UI elements.

## Internal Usage

Out of the box, Payload automatically persists:
- **List View Columns**: Active state and order of columns.
- **Locale**: The user's last active locale.
- **Collapsed States**: Toggled state of blocks, arrays, and collapsibles.
- **Nav State**: Last-known state of the navigation component.

Preferences are stored on an **individual user basis**.

## Database Structure

Payload creates an internal `payload-preferences` Collection. Each document contains:
- **key**: A unique string identifying the preference.
- **user**: A relationship to the user document (`value` ID and `relationTo` collection slug).
- **value**: The preference data (any valid JSON shape).
- **timestamps**: `createdAt` and `updatedAt`.

## Using Preferences in Custom Components

You can use the `usePreferences` hook in your client components to get and set custom preference values.

### usePreferences

This hook provides two async methods:
- `getPreference(key: string)`: Retrieves a preference value.
- `setPreference(key: string, value: any)`: Stores a preference value.

### Example

```tsx
'use client'
import React, { useState, useEffect } from 'react'
import { usePreferences } from '@payloadcms/ui'

const PREFERENCE_KEY = 'my-custom-preference'

export function MyCustomComponent() {
  const { getPreference, setPreference } = usePreferences()
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchPreference = async () => {
      const val = await getPreference(PREFERENCE_KEY)
      setData(val)
    }
    fetchPreference()
  }, [getPreference])

  const updatePreference = async (newVal) => {
    setData(newVal)
    await setPreference(PREFERENCE_KEY, newVal)
  }

  return (
    // ... component JSX
  )
}
```

## APIs

Preferences are also available via the **REST** and **GraphQL** APIs, allowing you to manage them programmatically outside of the Admin Panel.
