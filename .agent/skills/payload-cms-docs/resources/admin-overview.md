# Admin Panel Overview

Payload dynamically generates a beautiful, fully type-safe Admin Panel to manage your users and data. Built with React and the Next.js App Router, it is highly performant and supports features like white-labeling, custom components, and real-time editing.

## Project Structure

The Admin Panel is integrated directly into your Next.js application within the `(payload)` route group.

```text
app
├─ (payload)
├── admin
├─── [[...segments]]
├──── page.tsx
├── api
├─── [...slug]
├──── route.ts
├── graphql
├──── route.ts
├── layout.tsx
```

- **admin**: Contains all the interface pages.
- **api / graphql**: Contains the REST and GraphQL API routes.
- **layout.tsx**: Manages the root HTML structure for Payload routes.
- **custom.scss**: Used for global style overrides (e.g., color palette).

## Admin Options

Root-level options are defined under the `admin` key in your Payload Config.

| Option | Description |
| :--- | :--- |
| **avatar** | Set profile pictures (gravatar, default, or custom component). |
| **autoLogin** | Automate login for development/demos. |
| **components** | Global component overrides. |
| **dateFormat** | Date format pattern (uses date-fns). |
| **livePreview** | Enable real-time visual feedback for the frontend. |
| **routes** | Replace built-in routes with custom paths. |
| **theme** | Restrict to light, dark, or allow both. |
| **user** | The slug of the auth-enabled Collection allowed to login. |
| **timezones** | Configure selectable timezones for date display. |
| **toast** | Customize toast notification duration and position. |

## The Admin User Collection

To specify which Collection can log in, set `admin.user`:

```typescript
export default buildConfig({
  admin: {
    user: 'admins', // Must be an auth-enabled collection slug
  },
})
```

By default, Payload provides a `users` collection. You can create your own `users` collection to override it, or use a completely different collection like `admins`.

## Customizing Routes

### Root-level Routes
These affect the base paths for the Admin Panel and APIs.

```typescript
export default buildConfig({
  routes: {
    admin: '/dashboard',
    api: '/rest-api',
    graphQL: '/graphql-query',
  },
})
```

> **Warning**: Changing root-level routes requires your `app` directory structure to be updated to match.

### Admin-level Routes
These affect paths within the Admin UI.

```typescript
export default buildConfig({
  admin: {
    routes: {
      account: '/profile',
      login: '/signin',
      logout: '/signout',
    },
  },
})
```

## Features

### I18n
Automatically detects browser language and supports 30+ languages. Users can manually switch languages on their account page.

### Light and Dark Modes
Persistent user-selected theme or automatic detection based on system preferences.

### Timezones
Payload stores all dates in UTC. The `admin.timezones` settings control how dates are *displayed* to editors.

```typescript
admin: {
  timezones: {
    supportedTimezones: ({ defaultTimezones }) => [
      ...defaultTimezones,
      { label: 'UTC', value: 'UTC' }
    ],
    defaultTimezone: 'Europe/London',
  },
}
```

### Toast Notifications
Customize the behavior of toast messages (via Sonner).

```typescript
admin: {
  toast: {
    duration: 5000,
    position: 'top-center',
    limit: 3,
  },
}
```
