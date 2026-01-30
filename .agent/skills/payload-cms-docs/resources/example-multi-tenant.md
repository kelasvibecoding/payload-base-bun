# Example: Multi-tenant Architecture

Shows how to isolates data for multiple clients/organizations on a single Payload instance.

## Architecture
- **Tenants Collection**: Stores organization-level data and domains.
- **Scoping**: Most collections have a `relationship` field to `Tenants`.
- **Access Control**: Users are scoped to specific tenants and have roles within them (e.g., Tenant Admin).

## Implementation Samples

### 1. Access Control Logic
Logic to determine if a user has "Super Admin" privileges across all tenants.
```typescript
// access/isSuperAdmin.ts
export const isSuperAdmin = (user: User | null): boolean => {
  return Boolean(user?.roles?.includes('super-admin'))
}
```

### 2. Scoping via Plugin
The `multiTenantPlugin` automates field injection and filtering.
```typescript
// payload.config.ts
multiTenantPlugin<Config>({
  collections: {
    pages: {},
  },
  tenantField: {
    access: {
      read: () => true,
      update: ({ req }) => {
        if (isSuperAdmin(req.user)) return true
        return getUserTenantIDs(req.user).length > 0
      },
    },
  },
  userHasAccessToAllTenants: (user) => isSuperAdmin(user),
})
```

### 3. Extracting Tenant IDs
Utility to fetch all tenants a user belongs to, optionally filtered by role.
```typescript
// utilities/getUserTenantIDs.ts
export const getUserTenantIDs = (user: User | null, role?: string): Tenant['id'][] => {
  if (!user) return []
  return user?.tenants?.reduce((acc, { roles, tenant }) => {
    if (role && !roles.includes(role)) return acc
    if (tenant) acc.push(typeof tenant === 'string' ? tenant : tenant.id)
    return acc
  }, []) || []
}
```

## Advanced Patterns
- **Domain-based Selection**: Automatically switching the active tenant based on the request URL (e.g., `brand-a.com` vs `brand-b.com`).
- **Tenant Admins**: Users who are restricted to managing only their assigned organization's content.
