# Document Locking

Document locking ensures that only one user at a time can edit a document, preventing data conflicts and accidental overwrites in collaborative environments.

## How it Works

When a user begins editing a document in the Admin Panel, Payload automatically triggers a lock. If another user attempts to access the same document, they are notified and given three options:

1.  **View in Read-Only**: View the document without the ability to make changes.
2.  **Take Over**: Take over editing from the current user (this locks the document for the new editor and notifies the original user).
3.  **Return to Dashboard**: Navigate away.

The lock remains in place until the user exits the editing view or the lock expires due to inactivity.

## Config Options

Document locking is **enabled by default**. You can customize the duration or disable it by setting the `lockDocuments` property in your Collection or Global Config.

```typescript
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  // ...
  lockDocuments: {
    duration: 600, // Duration in seconds (default is 300 / 5 minutes)
  },
}
```

### Options

| Option | Description |
| :--- | :--- |
| **lockDocuments** | Enables or disables locking. Set to an object to configure, or `false` to disable. |
| **duration** | Specifies the duration (in seconds) for how long a document remains locked without user interaction. |

## Impact on APIs

Document locking affects the Local, REST, and GraphQL APIs. If a document is locked, concurrent users will receive an error if they attempt to perform `update` or `delete` operations.

### Overriding Locks

For programmatic operations, Payload includes an `overrideLock` option.

- **By default**, `overrideLock` is `true` (locks are ignored).
- To **enforce** locks in your API calls, set `overrideLock: false`.

```typescript
const result = await payload.update({
  collection: 'posts',
  id: '123',
  data: {
    title: 'New title',
  },
  overrideLock: false, // Prevents update if the document is currently locked in the Admin UI
})
```
