# REST API Overview

A fully functional REST API is automatically generated from your Collection and Global configs.

The REST API is a fully functional HTTP client that allows you to interact with your Documents in a RESTful manner. It supports all CRUD operations and is equipped with automatic pagination, depth, and sorting. All Payload API routes are mounted and prefixed to your config's `routes.api` URL segment (default: `/api`).

## REST Query Parameters

- **depth** - automatically populates relationships and uploads
- **locale** - retrieves document(s) in a specific locale
- **fallback-locale** - specifies a fallback locale if no locale value exists
- **select** - specifies which fields to include in the result
- **populate** - specifies which fields to include in the result from populated documents
- **limit** - limits the number of documents returned
- **page** - specifies which page to get documents from when used with a limit
- **sort** - specifies the field(s) to use to sort the returned documents by
- **where** - specifies advanced filters to use to query documents
- **joins** - specifies the custom request for each join field by name of the field

## Collections

Each collection is mounted using its slug value. For example, if a collection's slug is `users`, all corresponding routes will be mounted on `/api/users`.

> **Note**: Collection slugs must be formatted in kebab-case

### CRUD Operations

| Operation | Method | Path |
| :--- | :--- | :--- |
| Find | GET | `/api/{collection-slug}` |
| Find By ID | GET | `/api/{collection-slug}/{id}` |
| Count | GET | `/api/{collection-slug}/count` |
| Create | POST | `/api/{collection-slug}` |
| Update | PATCH | `/api/{collection-slug}` |
| Update By ID | PATCH | `/api/{collection-slug}/{id}` |
| Delete | DELETE | `/api/{collection-slug}` |
| Delete by ID | DELETE | `/api/{collection-slug}/{id}` |

### Auth Operations

Auth enabled collections are also given the following endpoints:

| Operation | Method | Path |
| :--- | :--- | :--- |
| Login | POST | `/api/{user-collection}/login` |
| Logout | POST | `/api/{user-collection}/logout` |
| Unlock | POST | `/api/{user-collection}/unlock` |
| Refresh | POST | `/api/{user-collection}/refresh-token` |
| Verify User | POST | `/api/{user-collection}/verify/{token}` |
| Current User | GET | `/api/{user-collection}/me` |
| Forgot Password | POST | `/api/{user-collection}/forgot-password` |
| Reset Password | POST | `/api/{user-collection}/reset-password` |

## Globals

Globals cannot be created or deleted, so there are only two REST endpoints opened:

| Operation | Method | Path |
| :--- | :--- | :--- |
| Get Global | GET | `/api/globals/{global-slug}` |
| Update Global | POST | `/api/globals/{global-slug}` |

## Preferences

In addition to the dynamically generated endpoints above Payload also has REST endpoints to manage the admin user preferences for data specific to the authenticated user.

| Operation | Method | Path |
| :--- | :--- | :--- |
| Get Preference | GET | `/api/payload-preferences/{key}` |
| Create Preference | POST | `/api/payload-preferences/{key}` |
| Delete Preference | DELETE | `/api/payload-preferences/{key}` |

## Custom Endpoints

Additional REST API endpoints can be added to your application by providing an array of endpoints in various places within a Payload Config. Custom endpoints are useful for adding additional middleware on existing routes or for building custom functionality into Payload apps and plugins.

> **Important**: Custom endpoints are not authenticated by default. You are responsible for securing your own endpoints.

### Endpoint Configuration

Each endpoint object needs to have:

| Property | Description |
| :--- | :--- |
| **path** | A string for the endpoint route after the collection or globals slug |
| **method** | The lowercase HTTP verb to use: 'get', 'head', 'post', 'put', 'delete', 'connect' or 'options' |
| **handler** | A function that accepts req - PayloadRequest object which contains Web Request properties, currently authenticated user and the Local API instance payload. |
| **root** | When true, defines the endpoint on the root Next.js app, bypassing Payload handlers and the routes.api subpath. Note: this only applies to top-level endpoints of your Payload Config. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |

### Example

```typescript
import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  fields: [
    /* ... */
  ],
  endpoints: [
    {
      path: '/:id/tracking',
      method: 'get',
      handler: async (req) => {
        const tracking = await getTrackingInfo(req.routeParams.id)

        if (!tracking) {
          return Response.json({ error: 'not found' }, { status: 404 })
        }

        return Response.json({
          message: `Tracking info for order ${req.routeParams.id}`,
        })
      },
    },
    {
      path: '/:id/tracking',
      method: 'post',
      handler: async (req) => {
        const data = await req.json()
        await req.payload.update({
          collection: 'tracking',
          data: {
            // data to update the document with
          },
        })
        return Response.json({
          message: 'successfully updated tracking info',
        })
      },
    },
    {
      path: '/:id/forbidden',
      method: 'post',
      handler: async (req) => {
        // this is an example of an authenticated endpoint
        if (!req.user) {
          return Response.json({ error: 'forbidden' }, { status: 403 })
        }

        // do something

        return Response.json({
          message: 'successfully updated tracking info',
        })
      },
    },
  ],
}
```

### Helpful Tips

#### req.data

Data is not automatically appended to the request. You can read the body data by calling `await req.json()`.

Or you could use our helper function that mutates the request and appends data and file if found:

```typescript
import { addDataAndFileToRequest } from 'payload'

{
  path: '/:id/tracking',
  method: 'post',
  handler: async (req) => {
    await addDataAndFileToRequest(req)
    await req.payload.update({
      collection: 'tracking',
      data: {
        // data to update the document with
      }
    })
    return Response.json({
      message: 'successfully updated tracking info'
    })
  }
}
```

#### req.locale & req.fallbackLocale

The locale and the fallback locale are not automatically appended to custom endpoint requests. If you would like to add them you can use this helper function:

```typescript
import { addLocalesToRequestFromData } from 'payload'

{
  path: '/:id/tracking',
  method: 'post',
  handler: async (req) => {
    await addLocalesToRequestFromData(req)
    // you now can access req.locale & req.fallbackLocale
    return Response.json({ message: 'success' })
  }
}
```

#### headersWithCors

By default, custom endpoints don't handle CORS headers in responses. The `headersWithCors` function checks the Payload config and sets the appropriate CORS headers in the response accordingly.

```typescript
import { headersWithCors } from 'payload'

{
  path: '/:id/tracking',
  method: 'post',
  handler: async (req) => {
    return Response.json(
      { message: 'success' },
      {
        headers: headersWithCors({
          headers: new Headers(),
          req,
        })
      },
    )
  }
}
```

## Method Override for GET Requests

Payload supports a method override feature that allows you to send GET requests using the HTTP POST method. This can be particularly useful in scenarios when the query string in a regular GET request is too long.

### How to Use

To use this feature, include the `X-Payload-HTTP-Method-Override` header set to `GET` in your POST request. The parameters should be sent in the body of the request with the `Content-Type` set to `application/x-www-form-urlencoded`.

### Example

**Using Method Override (POST):**

```typescript
const res = await fetch(`${api}/${collectionSlug}`, {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Accept-Language': i18n.language,
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Payload-HTTP-Method-Override': 'GET',
  },
  body: qs.stringify({
    depth: 1,
    locale: 'en',
  }),
})
```

**Equivalent Regular GET Request:**

```typescript
const res = await fetch(`${api}/${collectionSlug}?depth=1&locale=en`, {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Accept-Language': i18n.language,
  },
})
```

### Passing as JSON

When using `X-Payload-HTTP-Method-Override`, it expects the body to be a query string. If you want to pass JSON instead, you can set the `Content-Type` to `application/json` and include the JSON body in the request.

```typescript
const res = await fetch(`${api}/${collectionSlug}/${id}`, {
  // Only the findByID endpoint supports HTTP method overrides with JSON data
  method: 'POST',
  credentials: 'include',
  headers: {
    'Accept-Language': i18n.language,
    'Content-Type': 'application/json',
    'X-Payload-HTTP-Method-Override': 'GET',
  },
  body: JSON.stringify({
    depth: 1,
    locale: 'en',
  }),
})
```

## Payload REST API SDK

The best, fully type-safe way to query Payload REST API is to use the SDK package, which can be installed with:

```bash
pnpm add @payloadcms/sdk
```

> **Note**: The SDK package is currently in beta and may be subject to change in minor versions updates prior to being stable.

### Basic Usage

```typescript
import { PayloadSDK } from '@payloadcms/sdk'

const sdk = new PayloadSDK({
  baseURL: 'https://example.com/api',
})
```

For projects without a `payload-types.ts` file, or when working with multiple Payload configs, you can manually pass the types as a generic:

```typescript
import { PayloadSDK } from '@payloadcms/sdk'
import type { Config } from './payload-types'

const sdk = new PayloadSDK<Config>({
  baseURL: 'https://example.com/api',
})
```

### SDK Operations

```typescript
// Find operation
const posts = await sdk.find({
  collection: 'posts',
  draft: true,
  limit: 10,
  locale: 'en',
  page: 1,
  where: { _status: { equals: 'published' } },
})

// Find by ID operation
const post = await sdk.findByID({
  id,
  collection: 'posts',
  draft: true,
  locale: 'en',
})

// Create operation
const result = await sdk.create({
  collection: 'posts',
  data: { text: 'text' },
})

// Create operation with a file
const result = await sdk.create({ collection: 'media', file, data: {} })

// Count operation
const result = await sdk.count({
  collection: 'posts',
  where: { id: { equals: post.id } },
})

// Update (by ID) operation
const result = await sdk.update({
  collection: 'posts',
  id: post.id,
  data: {
    text: 'updated-text',
  },
})

// Update (bulk) operation
const result = await sdk.update({
  collection: 'posts',
  where: {
    id: {
      equals: post.id,
    },
  },
  data: { text: 'updated-text-bulk' },
})

// Delete (by ID) operation
const result = await sdk.delete({ id: post.id, collection: 'posts' })

// Delete (bulk) operation
const result = await sdk.delete({
  where: { id: { equals: post.id } },
  collection: 'posts',
})

// Find Global operation
const result = await sdk.findGlobal({ slug: 'global' })

// Update Global operation
const result = await sdk.updateGlobal({
  slug: 'global',
  data: { text: 'some-updated-global' },
})
```

### Auth Operations

```typescript
// Auth Login operation
const result = await sdk.login({
  collection: 'users',
  data: { email: 'dev@payloadcms.com', password: '123456' },
})

// Auth Me operation
const result = await sdk.me(
  { collection: 'users' },
  {
    headers: {
      Authorization: `JWT ${user.token}`,
    },
  },
)

// Auth Refresh Token operation
const result = await sdk.refreshToken(
  { collection: 'users' },
  { headers: { Authorization: `JWT ${user.token}` } },
)

// Auth Forgot Password operation
const result = await sdk.forgotPassword({
  collection: 'users',
  data: { email: user.email },
})

// Auth Reset Password operation
const result = await sdk.resetPassword({
  collection: 'users',
  data: { password: '1234567', token: resetPasswordToken },
})
```

### Version Operations

```typescript
// Find Versions operation
const result = await sdk.findVersions({
  collection: 'posts',
  where: { parent: { equals: post.id } },
})

// Find Version by ID operation
const result = await sdk.findVersionByID({
  collection: 'posts',
  id: version.id,
})

// Restore Version operation
const result = await sdk.restoreVersion({
  collection: 'posts',
  id,
})

// Find Global Versions operation
const result = await sdk.findGlobalVersions({
  slug: 'global',
})

// Find Global Version by ID operation
const result = await sdk.findGlobalVersionByID({
  id: version.id,
  slug: 'global',
})

// Restore Global Version operation
const result = await sdk.restoreGlobalVersion({
  slug: 'global',
  id,
})
```

### Custom Request Options

Every operation has optional 3rd parameter which is used to add additional data to the RequestInit object (like headers):

```typescript
await sdk.me(
  {
    collection: 'users',
  },
  {
    // RequestInit object
    headers: {
      Authorization: `JWT ${token}`,
    },
  },
)
```

### Custom Endpoints

To query custom endpoints, you can use the `request` method:

```typescript
await sdk.request({
  method: 'POST',
  path: '/send-data',
  json: {
    id: 1,
  },
})
```

### Custom Fetch Implementation

```typescript
const sdk = new PayloadSDK<Config>({
  baseInit: { credentials: 'include' },
  baseURL: 'https://example.com/api',
  fetch: async (url, init) => {
    console.log('before req')
    const response = await fetch(url, init)
    console.log('after req')
    return response
  },
})
```
