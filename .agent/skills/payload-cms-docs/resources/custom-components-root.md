# Root Components

Root Components affect the Admin Panel at a high level (e.g., logo, main navigation, dashboard injection). These are defined in the `admin.components` property of your Payload Config.

## Configuration

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  admin: {
    components: {
      // Root-level overrides go here
    },
  },
})
```

## Available Components

| Option | Description |
| :--- | :--- |
| **actions** | Array of components rendered in the Admin header (e.g., global buttons). |
| **Nav** | Replaces the entire sidebar / mobile menu. |
| **graphics.Logo** | Full logo used in the Login view. |
| **graphics.Icon** | Small icon used in the Nav sidebar. |
| **header** | Components injected above the Payload header (e.g., announcement banners). |
| **logout.Button** | The logout button displayed in the sidebar. |
| **beforeDashboard** | Injected before the default Dashboard contents. |
| **afterDashboard** | Injected after the default Dashboard contents. |
| **beforeLogin** | Injected before the Login form. |
| **afterLogin** | Injected after the Login form. |
| **beforeNavLinks** | Injected before the collection/global links in the Nav. |
| **afterNavLinks** | Injected after the collection/global links in the Nav. |
| **settingsMenu** | Components injected into the gear icon menu above logout. |
| **providers** | Custom React Context providers to wrap the entire Admin Panel. |
| **views** | Create entirely new custom pages or override existing ones. |

---

## Component Details

### Actions
Actions appear in the main header of the Admin Panel.

```typescript
admin: {
  components: {
    actions: ['/components/HeaderAction'],
  },
}
```

### Graphics (Logo & Icon)
Used to white-label the Admin Panel with your brand.

```typescript
admin: {
  components: {
    graphics: {
      Logo: '/components/MyLogo',
      Icon: '/components/MyFavicon',
    },
  },
}
```

### Settings Menu
A popup menu accessible via a gear icon. Useful for admin-wide utilities or external links.

```typescript
'use client'
import { PopupList } from '@payloadcms/ui'

export function MySettingsMenu() {
  return (
    <PopupList.ButtonGroup>
      <PopupList.Button onClick={() => window.open('https://docs.example.com')}>
        Support Docs
      </PopupList.Button>
    </PopupList.ButtonGroup>
  )
}
```

### Custom Navigation (Nav)
You can completely replace the sidebar. We recommend using Payload's `Link` component from `@payloadcms/ui` for internal routing.

```typescript
import { Link } from '@payloadcms/ui'

export default function CustomNav() {
  return (
    <nav>
      <Link href="/dashboard">Dashboard</Link>
      {/* ... more links */}
    </nav>
  )
}
```

### Injections (Before/After)
Use these to add content to the Dashboard or Login pages without replacing them entirely.

```typescript
admin: {
  components: {
    beforeLogin: ['/components/LoginNotice'],
    afterDashboard: ['/components/UsefulStats'],
  },
}
```
