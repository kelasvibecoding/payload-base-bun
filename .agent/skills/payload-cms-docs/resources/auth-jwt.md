# JWT Strategy

Payload provides the ability to authenticate via **JSON Web Tokens (JWT)**. These tokens are returned in the responses of `login`, `refresh`, and `me` operations.

JWTs are useful for authenticating external applications (mobile apps, SPAs, third-party services) that cannot easily share cookies with the Payload server.

## Using the Authorization Header

In addition to HTTP-only cookies, you can identify users by passing the token in the `Authorization` header of your HTTP requests.

**Format**: `Authorization: JWT <your-token>`

### Example

```javascript
// 1. Login to get the token
const loginRes = await fetch('http://localhost:3000/api/users/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'dev@payloadcms.com', password: 'password' }),
})
const { token } = await loginRes.json()

// 2. Use the token in subsequent requests
const postsRes = await fetch('http://localhost:3000/api/posts', {
  headers: {
    Authorization: `JWT ${token}`,
  },
})
```

## Security Options

### Omitting Tokens from Responses
For security reasons, you may want to prevent the token from being returned in the JSON response (relying solely on HTTP-only cookies).

```typescript
export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    removeTokenFromResponses: true, 
  },
}
```

## External Validation (Secret Keys)

If you need to validate Payload-generated JWTs in an external service, you must use the **processed secret**. Payload does not use your raw `PAYLOAD_SECRET` directly; instead, it hashes it.

To derive the secret used by Payload for JWT signing:

```javascript
import crypto from 'node:crypto'

const payloadSecret = process.env.PAYLOAD_SECRET
const processedSecret = crypto
  .createHash('sha256')
  .update(payloadSecret)
  .digest('hex')
  .slice(0, 32)
```

Use this `processedSecret` in your external JWT verification library (e.g., `jsonwebtoken`).
