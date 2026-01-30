# Example: Authentication (Auth)

This example demonstrates how to implement [Payload Authentication](https://payloadcms.com/docs/authentication/overview) into various types of applications.

## Key Features
- **Role-based Access Control (RBAC)**: Uses a `roles` field to distinguish between `admin` and `user`.
- **Local API vs REST/GraphQL**: Shows how to authenticate on the server using `payload.auth` and on the client via `/api/users/me`.
- **Security**: Configured with CORS, CSRF, and secure cookies.

## Collection Config: Users

The `Users` collection is the central hub for authentication. It distinguishes between `admin` and `user` roles and protects sensitive fields.

```typescript
// collections/Users.ts
export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: { useAsTitle: 'email' },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
    admin: ({ req: { user } }) => checkRole(['admin'], user),
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      access: {
        read: admins,
        update: admins,
        create: admins,
      },
      hooks: {
        beforeChange: [protectRoles],
      },
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
}
```

## Role Protection Hook

Ensures that only admins can assign roles, and every user gets the `user` role by default.

```typescript
// hooks/protectRoles.ts
export const protectRoles: FieldHook = ({ data, req }) => {
  const isAdmin = req.user?.roles.includes('admin') || data.email === 'demo@payloadcms.com'

  if (!isAdmin) {
    return ['user']
  }

  const userRoles = new Set(data?.roles || [])
  userRoles.add('user')
  return [...userRoles]
}
```

## Authentication Usage

### Server-Side (React Server Components)
Fetch the current user directly on the server for zero-latency authorization.
```typescript
import { headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'

const headers = await getHeaders()
const { permissions, user } = await payload.auth({ headers })
```

### Client-Side
Use standard fetch with credentials to access auth-protected REST endpoints.
```typescript
const res = await fetch('/api/users/me', {
  method: 'GET',
  credentials: 'include',
})
```
