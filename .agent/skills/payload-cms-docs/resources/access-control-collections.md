# Collection Access Control

Collection Access Control is Access Control used to restrict access to Documents within a Collection, as well as what they can and cannot see within the Admin Panel as it relates to that Collection.

To add Access Control to a Collection, use the `access` property in your Collection Config:

```typescript
import type { CollectionConfig } from 'payload'

export const CollectionWithAccessControl: CollectionConfig = {
  // ...
  access: {
    create: () => {...},
    read: () => {...},
    update: () => {...},
    delete: () => {...},

    // Auth-enabled Collections only
    admin: () => {...},
    unlock: () => {...},

    // Version-enabled Collections only
    readVersions: () => {...},
  },
}
```

## Config Options

Access Control is specific to the operation of the request.

| Function | Allows/Denies Access |
| :--- | :--- |
| **create** | Used in the create operation. |
| **read** | Used in the find and findByID operations. |
| **update** | Used in the update operation. |
| **delete** | Used in the delete operation. |

If a Collection supports Authentication, the following additional options are available:

| Function | Allows/Denies Access |
| :--- | :--- |
| **admin** | Used to restrict access to the Admin Panel. |
| **unlock** | Used to restrict which users can access the unlock operation. |

If a Collection supports Versions, the following additional options are available:

| Function | Allows/Denies Access |
| :--- | :--- |
| **readVersions** | Used to control who can read versions, and who can't. Will automatically restrict the Admin UI version viewing access. |

## Create

Returns a boolean which allows/denies access to the create request.

```typescript
import type { CollectionConfig } from 'payload'

export const CollectionWithCreateAccess: CollectionConfig = {
  // ...
  access: {
    create: ({ req: { user }, data }) => {
      return Boolean(user)
    },
  },
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **req** | The Request object containing the currently authenticated user. |
| **data** | The data passed to create the document with. |

## Read

Returns a boolean which allows/denies access to the read request.

```typescript
import type { CollectionConfig } from 'payload'

export const CollectionWithReadAccess: CollectionConfig = {
  // ...
  access: {
    read: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
}
```

> **Tip**: Return a Query to limit the Documents to only those that match the constraint. This can be helpful to restrict users' access to specific Documents.

**Example with Query Constraint:**

```typescript
import type { Access } from 'payload'
import type { Page } from '@/payload-types'

export const canReadPage: Access<Page> = ({ req: { user } }) => {
  // Allow authenticated users
  if (user) {
    return true
  }

  // By returning a Query, guest users can read public Documents
  // Note: this assumes you have a `isPublic` checkbox field on your Collection
  return {
    isPublic: {
      equals: true,
    },
  }
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **req** | The Request object containing the currently authenticated user. |
| **id** | id of document requested, if within findByID. |

## Update

Returns a boolean which allows/denies access to the update request.

```typescript
import type { CollectionConfig } from 'payload'

export const CollectionWithUpdateAccess: CollectionConfig = {
  // ...
  access: {
    update: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
}
```

> **Tip**: Return a Query to limit the Documents to only those that match the constraint. This can be helpful to restrict users' access to specific Documents.

**Example with Query Constraint:**

```typescript
import type { Access } from 'payload'
import type { User } from '@/payload-types'

export const canUpdateUser: Access<User> = ({ req: { user }, id }) => {
  // Allow users with a role of 'admin'
  if (user.roles && user.roles.some((role) => role === 'admin')) {
    return true
  }

  // allow any other users to update only oneself
  return user.id === id
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **req** | The Request object containing the currently authenticated user. |
| **id** | id of document requested to update. |
| **data** | The data passed to update the document with. |

## Delete

Similarly to the Update function, returns a boolean or a query constraint to limit which documents can be deleted by which users.

```typescript
import type { CollectionConfig } from 'payload'

export const CollectionWithDeleteAccess: CollectionConfig = {
  // ...
  access: {
    delete: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
}
```

**Example with Async Logic:**

```typescript
import type { Access } from 'payload'
import type { Customer } from '@/payload-types'

export const canDeleteCustomer: Access<Customer> = async ({ req, id }) => {
  if (!id) {
    // allow the admin UI to show controls to delete since it is indeterminate without the `id`
    return true
  }

  // Query another Collection using the `id`
  const result = await req.payload.find({
    collection: 'contracts',
    limit: 0,
    depth: 0,
    where: {
      customer: { equals: id },
    },
  })

  return result.totalDocs === 0
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **req** | The Request object with additional user property, which is the currently logged in user. |
| **id** | id of document requested to delete. |

## Admin

If the Collection is used to access the Admin Panel, the Admin Access Control function determines whether or not the currently logged in user can access the admin UI.

```typescript
import type { CollectionConfig } from 'payload'

export const CollectionWithAdminAccess: CollectionConfig = {
  // ...
  access: {
    admin: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **req** | The Request object containing the currently authenticated user. |

## Unlock

Determines which users can unlock other users who may be blocked from authenticating successfully due to failing too many login attempts.

```typescript
import type { CollectionConfig } from 'payload'

export const CollectionWithUnlockAccess: CollectionConfig = {
  // ...
  access: {
    unlock: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **req** | The Request object containing the currently authenticated user. |

## Read Versions

If the Collection has Versions enabled, the readVersions Access Control function determines whether or not the currently logged in user can access the version history of a Document.

```typescript
import type { CollectionConfig } from 'payload'

export const CollectionWithVersionsAccess: CollectionConfig = {
  // ...
  access: {
    readVersions: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
}
```

> **Note**: Returning a Query will apply the constraint to the versions collection, not the original Collection.

**Arguments:**

| Option | Description |
| :--- | :--- |
| **req** | The Request object containing the currently authenticated user. |
