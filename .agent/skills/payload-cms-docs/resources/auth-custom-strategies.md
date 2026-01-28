# Custom Authentication Strategies

Payload allows you to define custom authentication strategies to supplement or replace the built-in local strategy. This is an advanced feature that puts you in full control of how users are identified from incoming requests.

## Defining a Strategy

A custom strategy is added to the `auth.strategies` array in your Collection Config.

```typescript
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    strategies: [
      {
        name: 'my-custom-strategy',
        authenticate: async ({ payload, headers }) => {
          // logic to find and return a user
        },
      },
    ],
  },
}
```

## The `authenticate` Function

The `authenticate` function is the core of your strategy. It must return an object containing a `user` (or `null`) and optional `responseHeaders`.

### Arguments

| Argument | Description |
| :--- | :--- |
| **payload** | The Payload class instance. |
| **headers** | The headers of the incoming request. |
| **canSetHeaders** | Boolean indicating if response headers can be set in this context. |
| **isGraphQL** | Boolean indicating if the request is for the GraphQL endpoint. |

### Return Value

The function should return a Promise resolving to:

```typescript
{
  user: User | null; // Must include the 'collection' slug if a user is returned
  responseHeaders?: Headers; // Optional headers to set on the response
}
```

## Example: Header-based Secret Strategy

This example authenticates a user based on custom `code` and `secret` headers.

```typescript
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    disableLocalStrategy: true, // Optional: disable email/password auth
    strategies: [
      {
        name: 'header-secret',
        authenticate: async ({ payload, headers }) => {
          const code = headers.get('x-custom-code')
          const secret = headers.get('x-custom-secret')

          if (!code || !secret) return { user: null }

          const result = await payload.find({
            collection: 'users',
            where: {
              code: { equals: code },
              secret: { equals: secret },
            },
          })

          const user = result.docs[0]

          if (user) {
            return {
              user: {
                collection: 'users',
                ...user,
              },
            }
          }

          return { user: null }
        },
      },
    ],
  },
  fields: [
    { name: 'code', type: 'text', unique: true },
    { name: 'secret', type: 'text' },
  ],
}
```

## Use Cases

- **SSO / OAuth**: Integrating with external identity providers (OpenID, SAML, etc.).
- **Third-party Headers**: Authenticating via specific headers provided by a proxy or gateway.
- **Custom Tokens**: Using proprietary token formats or legacy authentication systems.
