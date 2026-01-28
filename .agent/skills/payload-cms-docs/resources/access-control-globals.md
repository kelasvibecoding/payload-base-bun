# Globals Access Control

Global Access Control is Access Control used to restrict access to Global Documents, as well as what they can and cannot see within the Admin Panel as it relates to that Global.

To add Access Control to a Global, use the `access` property in your Global Config:

```typescript
import type { GlobalConfig } from 'payload'

export const GlobalWithAccessControl: GlobalConfig = {
  // ...
  access: {
    read: ({ req: { user } }) => {...},
    update: ({ req: { user } }) => {...},

    // Version-enabled Globals only
    readVersions: () => {...},
  },
}
```

## Config Options

Access Control is specific to the operation of the request.

| Function | Allows/Denies Access |
| :--- | :--- |
| **read** | Used in the findOne Global operation. |
| **update** | Used in the update Global operation. |

If a Global supports Versions, the following additional options are available:

| Function | Allows/Denies Access |
| :--- | :--- |
| **readVersions** | Used to control who can read versions, and who can't. Will automatically restrict the Admin UI version viewing access. |

## Read

Returns a boolean result or optionally a query constraint which limits who can read this global based on its current properties.

```typescript
import { GlobalConfig } from 'payload'

const Header: GlobalConfig = {
  // ...
  access: {
    read: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **req** | The Request object containing the currently authenticated user. |

## Update

Returns a boolean result or optionally a query constraint which limits who can update this global based on its current properties.

```typescript
import { GlobalConfig } from 'payload'

const Header: GlobalConfig = {
  // ...
  access: {
    update: ({ req: { user }, data }) => {
      return Boolean(user)
    },
  },
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **req** | The Request object containing the currently authenticated user. |
| **data** | The data passed to update the global with. |

## Read Versions

If the Global has Versions enabled, the readVersions Access Control function determines whether or not the currently logged in user can access the version history of a Document.

```typescript
import type { GlobalConfig } from 'payload'

export const GlobalWithVersionsAccess: GlobalConfig = {
  // ...
  access: {
    readVersions: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
}
```

> **Note**: Returning a Query will apply the constraint to the versions collection, not the original Global.

**Arguments:**

| Option | Description |
| :--- | :--- |
| **req** | The Request object containing the currently authenticated user. |
