# Token Data

During the lifecycle of a request, Payload automatically appends the authenticated user to the request object via `req.user`. This object contains data derived from the user's document that has been encoded into the JWT or HTTP-only cookie.

## Defining Token Data

By default, Payload includes basic user information (email, ID) in the token. You can include additional fields by setting the `saveToJWT` property on fields within your authentication-enabled collection.

```typescript
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      options: ['admin', 'editor', 'user'],
      saveToJWT: true, // This field will now be available on req.user
    },
    {
      name: 'preferences',
      type: 'group',
      saveToJWT: true, // The entire group object will be in the JWT
      fields: [
        {
          name: 'theme',
          type: 'text',
        },
        {
          name: 'internalID',
          type: 'text',
          saveToJWT: false, // Omit specific sub-fields from the JWT
        },
      ],
    },
  ],
}
```

### Advanced `saveToJWT` Options

- **Boolean**: `true` includes the field using its `name`. `false` excludes it.
- **String**: You can provide a string to map the field to a different key in the JWT. For example, `saveToJWT: 'userRole'` will store the field value under `req.user.userRole`.

## Using Token Data

Storing data in the JWT is extremely helpful for **Access Control** and **Hooks**, as it allows you to make decisions without fetching the full user document from the database on every request.

### Example: Access Control

```typescript
export const Invoices: CollectionConfig = {
  slug: 'invoices',
  access: {
    read: ({ req }) => {
      // Check for user and role directly from the token
      if (!req.user) return false

      if (req.user.role === 'admin') {
        return true
      }

      // Filter by owner ID (ID is always in the token)
      return {
        owner: {
          equals: req.user.id,
        },
      }
    },
  },
}
```

## Performance Considerations

While it is tempting to save many fields to the JWT, keep in mind that:
1.  **Size**: Large JWTs increase the size of every HTTP request header.
2.  **Staleness**: Data in a JWT is only updated when the token is refreshed or the user logs in again. If a user's role changes, `req.user` will reflect the old role until their session is updated.
