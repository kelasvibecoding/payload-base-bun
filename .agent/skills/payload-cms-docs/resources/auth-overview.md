# Authentication Overview

Payload provides a secure, built-in way to manage user accounts. When Authentication is enabled on a Collection, Payload automatically injects functionality for account creation, login/logout, password resets, email verification, and the necessary UI in the Admin Panel.

## Enabling Authentication

To enable authentication with default settings, set `auth: true` in your Collection Config. Every document created in this collection effectively becomes a "user".

```typescript
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true, // Enables default authentication
  fields: [],
}
```

## Configuration Options

For more control, pass an object to the `auth` property:

```typescript
export const Admins: CollectionConfig = {
  slug: 'admins',
  auth: {
    tokenExpiration: 7200, // 2 hours in seconds
    verify: true, // Require email verification
    maxLoginAttempts: 5, // Lock account after 5 failures
    lockTime: 600000, // Lock duration in milliseconds (10 mins)
    useAPIKey: true, // Enable API keys for third-party access
  },
}
```

### Key Auth Options

| Option | Description |
| :--- | :--- |
| **tokenExpiration** | Duration (seconds) before JWT and cookies expire. |
| **verify** | Requires users to verify their email before logging in. |
| **maxLoginAttempts** | Number of failed attempts before a temporary lockout. |
| **lockTime** | Duration of the lockout (in milliseconds). |
| **loginWithUsername** | Allow logging in with a `username` instead of (or in addition to) `email`. |
| **useAPIKey** | Enables an API key field on each user for programmatic access. |
| **cookies** | Advanced cookie settings (secure, sameSite, domain). |

## Login with Username

You can switch from email-based login to username-based login:

```typescript
auth: {
  loginWithUsername: {
    allowEmailLogin: true, // Users can use either email or username
    requireEmail: true,    // Email is still required even if not used for login
  },
}
```

## Dev Features: Auto-Login & Auto-Refresh

### Auto-Login
Speed up development by automatically logging in with specified credentials.

```typescript
// payload.config.ts
admin: {
  autoLogin: process.env.NODE_ENV === 'development' ? {
    email: 'dev@example.com',
    password: 'password',
    prefillOnly: true, // Fills fields but requires manual button click
  } : false,
}
```

### Auto-Refresh
Keeps users logged in indefinitely while the Admin Panel is open by refreshing the token before it expires.

```typescript
admin: {
  autoRefresh: true,
}
```

## Authentication Strategies

Payload supports three strategies out of the box:
1.  **HTTP-Only Cookies**: Highly secure, protected from XSS, used by the Admin Panel.
2.  **JSON Web Tokens (JWT)**: Accessible via standard headers, useful for external apps.
3.  **API Keys**: Fixed keys set per-user, ideal for server-to-server communication.

## Overriding Default Fields

Default auth fields (`email`, `username`, `password`) can be overridden by adding a field with the same name to the `fields` array. This is useful for adding **Access Control** to these sensitive fields.

```typescript
fields: [
  {
    name: 'email',
    type: 'email',
    access: {
      update: ({ req: { user } }) => user?.roles?.includes('admin'), // Only admins can change emails
    },
  },
]
```

> **Note**: If you override the `password` field, set `hidden: true` to prevent it from appearing twice in the Admin Panel UI.
