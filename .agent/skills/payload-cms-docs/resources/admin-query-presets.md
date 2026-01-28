# Query Presets

Query Presets allow users to save and share specific filtering, column selection, and sort orders in the Admin Panel's List View. Each preset is saved as a record in the built-in `payload-query-presets` collection.

## Enabling Query Presets

Enable presets on a per-collection basis:

```typescript
import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  enableQueryPresets: true, // Enables the preset UI in the List View
}
```

## Global Configuration

You can customize the behavior of Query Presets globally in your root config:

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  queryPresets: {
    // Labels for the internal collection
    labels: {
      singular: 'View Filter',
      plural: 'View Filters',
    },
    // Collection-level access control
    access: {
      read: ({ req }) => !!req.user,
    },
  },
})
```

## Access Control

Query Presets support two levels of security:

### 1. Collection Access Control
Fixed rules defined in the config that apply to ALL presets (e.g., only admins can see the management UI).

### 2. Document Access Control (User-defined)
Users can choose who can see their specific preset via the UI:
- **Only Me**: Private to the creator.
- **Everyone**: Public to all authenticated users.
- **Specific Users**: Shared with a select list of individuals.

### Custom Constraints
You can add custom sharing options (like "Specific Roles") by defining constraints in the root config:

```typescript
queryPresets: {
  constraints: {
    read: [
      {
        label: 'Specific Roles',
        value: 'specificRoles',
        fields: [
          {
            name: 'roles',
            type: 'select',
            hasMany: true,
            options: ['admin', 'editor'],
          },
        ],
        access: ({ req: { user } }) => ({
          'access.read.roles': { in: [user?.roles] },
        }),
      },
    ],
  },
}
```

## Filtering Constraints
You can dynamically hide or disable sharing options based on the user's permissions:

```typescript
queryPresets: {
  filterConstraints: ({ req, options }) => {
    // Only admins can share presets with 'everyone'
    if (!req.user?.roles?.includes('admin')) {
      return options.filter(opt => opt.value !== 'everyone')
    }
    return options
  },
}
```

## Database Storage
Presets are stored in the `payload-query-presets` collection. This collection can be overridden or customized like any other internal collection if you need to add custom fields or logic.
