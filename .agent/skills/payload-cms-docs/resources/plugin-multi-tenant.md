# Multi-Tenant Plugin

The Multi-Tenant plugin allows you to run multiple separate websites or "tenants" from a single Payload application. It automatically injects tenant fields into your collections and filters the Admin UI based on the selected tenant.

## Installation

```bash
pnpm add @payloadcms/plugin-multi-tenant
```

## Basic Usage

### 1. Define a Tenants Collection
You own the structure of the `tenants` collection. You might add fields like `name`, `slug`, or `domain`.

```typescript
export const Tenants = {
  slug: 'tenants',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true },
  ],
}
```

### 2. Configure the Plugin
Add the plugin to your `payload.config.ts`.

```typescript
import { multiTenantPlugin } from '@payloadcms/plugin-multi-tenant'

export default buildConfig({
  collections: [Tenants],
  plugins: [
    multiTenantPlugin({
      collections: {
        pages: {}, // Normal multi-tenant collection
        navigation: {
          isGlobal: true, // Acts like a global: 1 doc per tenant
        },
      },
      tenantsSlug: 'tenants',
      userHasAccessToAllTenants: (user) => user.role === 'admin',
    }),
  ],
})
```

## Core Features
- **Tenant Selector**: Adds a global tenant switcher to the Admin Panel.
- **Automatic Filtering**: List views and relationship fields are automatically filtered by the currently selected tenant.
- **Auto-Assignment**: New documents are automatically assigned to the active tenant.
- **Global-like Collections**: Setting `isGlobal: true` for a collection ensures exactly one document exists per tenant (useful for settings or navigation).

## UI Hooks
You can access the multi-tenant state in your custom components using the `useTenantSelection` hook.

```typescript
import { useTenantSelection } from '@payloadcms/plugin-multi-tenant/client'

const { selectedTenantID, setTenant } = useTenantSelection()
```

## Frontend Querying
On your frontend, simply filter by the `tenant` field (or `tenant.slug` if you have a slug field on the tenant):

```typescript
const tenantData = await payload.find({
  collection: 'pages',
  where: {
    'tenant.slug': { equals: 'client-a' },
  },
})
```

## Security & Cleanup
By default, the plugin will delete all related documents when a tenant is deleted. Ensure you have strong access control on your `tenants` collection to prevent accidental data loss. You can disable this via `cleanupAfterTenantDelete: false`.
