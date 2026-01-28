# Local API Overview

The Payload Local API gives you the ability to execute the same operations that are available through REST and GraphQL within Node, directly on your server. Here, you don't need to deal with server latency or network speed whatsoever and can interact directly with your database.

> **Tip**: The Local API is incredibly powerful when used in React Server Components and other similar server-side contexts. With other headless CMS, you need to request your data from third-party servers via an HTTP layer, which can add significant loading time to your server-rendered pages. With Payload, you don't have to leave your server to gather the data you need. It can be incredibly fast and is definitely a game changer.

## Common Use Cases

Here are some common examples of how you can use the Local API:

- Fetching Payload data within React Server Components
- Seeding data via Node seed scripts that you write and maintain
- Opening custom Next.js route handlers which feature additional functionality but still rely on Payload
- Within Access Control and Hooks

## Accessing Payload

You can gain access to the currently running payload object via two ways:

### Accessing from args or req

In most places within Payload itself, you can access payload directly from the arguments of Hooks, Access Control, Validation functions, and similar. This is the simplest way to access Payload in most cases. Most config functions take the `req` (Request) object, which has Payload bound to it (`req.payload`).

**Example:**

```typescript
const afterChangeHook: CollectionAfterChangeHook = async ({
  req: { payload },
}) => {
  const posts = await payload.find({
    collection: 'posts',
  })
}
```

### Importing it

If you want to import Payload in places where you don't have the option to access it from function arguments or req, you can import it and initialize it.

```typescript
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })
```

If you're working in Next.js' development mode, Payload will work with Hot Module Replacement (HMR), and as you make changes to your Payload Config, your usage of Payload will always be in sync with your changes. In production, `getPayload` simply disables all HMR functionality so you don't need to write your code any differently.

## Local Options Available

You can specify more options within the Local API vs. REST or GraphQL due to the server-only context that they are executed in.

| Local Option | Description |
| :--- | :--- |
| **collection** | Required for Collection operations. Specifies the Collection slug to operate against. |
| **data** | The data to use within the operation. Required for create, update. |
| **depth** | Control auto-population of nested relationship and upload fields. |
| **locale** | Specify locale for any returned documents. |
| **select** | Specify select to control which fields to include to the result. |
| **populate** | Specify populate to control which fields to include to the result from populated documents. |
| **fallbackLocale** | Specify a fallback locale to use for any returned documents. This can be a single locale or array of locales. |
| **overrideAccess** | Skip access control. By default, this property is set to true within all Local API operations. |
| **overrideLock** | By default, document locks are ignored (true). Set to false to enforce locks and prevent operations when a document is locked by another user. |
| **user** | If you set overrideAccess to false, you can pass a user to use against the access control checks. |
| **showHiddenFields** | Opt-in to receiving hidden fields. By default, they are hidden from returned documents in accordance to your config. |
| **pagination** | Set to false to return all documents and avoid querying for document counts. |
| **context** | Context, which will then be passed to context and req.context, which can be read by hooks. |
| **disableErrors** | When set to true, errors will not be thrown. Instead, the findByID operation will return null, and the find operation will return an empty documents array. |
| **disableTransaction** | When set to true, a database transactions will not be initialized. |

> **Note**: By default, all access control checks are disabled in the Local API, but you can re-enable them if you'd like, as well as pass a specific user to run the operation with.

## Transactions

When your database uses transactions you need to thread `req` through to all local operations. Postgres uses transactions and MongoDB uses transactions when you are using replica sets. Passing req without transactions is still recommended.

```typescript
const post = await payload.find({
  collection: 'posts',
  req, // passing req is recommended
})
```

## Collection Operations

### Create

```typescript
const post = await payload.create({
  collection: 'posts', // required
  data: {
    // required
    title: 'sure',
    description: 'maybe',
  },
  locale: 'en',
  fallbackLocale: false,
  user: dummyUserDoc,
  overrideAccess: true,
  showHiddenFields: false,

  // If creating verification-enabled auth doc,
  // you can optionally disable the email that is auto-sent
  disableVerificationEmail: true,

  // If your collection supports uploads, you can upload
  // a file directly through the Local API by providing
  // its full, absolute file path.
  filePath: path.resolve(__dirname, './path-to-image.jpg'),

  // Alternatively, you can directly pass a File,
  // if file is provided, filePath will be omitted
  file: uploadedFile,

  // If you want to create a document that is a duplicate of another document
  duplicateFromID: 'document-id-to-duplicate',
})
```

### Find

```typescript
const result = await payload.find({
  collection: 'posts', // required
  depth: 2,
  page: 1,
  limit: 10,
  pagination: false, // If you want to disable pagination count, etc.
  where: {}, // pass a `where` query here
  sort: '-title',
  locale: 'en',
  fallbackLocale: false,
  user: dummyUser,
  overrideAccess: false,
  showHiddenFields: true,
})
```

### Find by ID

```typescript
const result = await payload.findByID({
  collection: 'posts', // required
  id: '507f1f77bcf86cd799439011', // required
  depth: 2,
  locale: 'en',
  fallbackLocale: false,
  user: dummyUser,
  overrideAccess: false,
  showHiddenFields: true,
})
```

### Count

```typescript
const result = await payload.count({
  collection: 'posts', // required
  locale: 'en',
  where: {}, // pass a `where` query here
  user: dummyUser,
  overrideAccess: false,
})
```

### Find Distinct

```typescript
const result = await payload.findDistinct({
  collection: 'posts', // required
  locale: 'en',
  where: {}, // pass a `where` query here
  user: dummyUser,
  overrideAccess: false,
  field: 'title',
  sort: 'title',
})
```

### Update by ID

```typescript
const result = await payload.update({
  collection: 'posts', // required
  id: '507f1f77bcf86cd799439011', // required
  data: {
    // required
    title: 'sure',
    description: 'maybe',
  },
  depth: 2,
  locale: 'en',
  fallbackLocale: false,
  user: dummyUser,
  overrideAccess: false,
  overrideLock: false,
  showHiddenFields: true,

  filePath: path.resolve(__dirname, './path-to-image.jpg'),
  overwriteExistingFiles: true,
})
```

### Update Many

```typescript
const result = await payload.update({
  collection: 'posts', // required
  where: {
    // required
    fieldName: { equals: 'value' },
  },
  data: {
    // required
    title: 'sure',
    description: 'maybe',
  },
  depth: 0,
  locale: 'en',
  fallbackLocale: false,
  user: dummyUser,
  overrideAccess: false,
  overrideLock: false,
  showHiddenFields: true,
})
```

### Delete

```typescript
const result = await payload.delete({
  collection: 'posts', // required
  id: '507f1f77bcf86cd799439011', // required
  depth: 2,
  locale: 'en',
  fallbackLocale: false,
  user: dummyUser,
  overrideAccess: false,
  overrideLock: false,
  showHiddenFields: true,
})
```

### Delete Many

```typescript
const result = await payload.delete({
  collection: 'posts', // required
  where: {
    // required
    fieldName: { equals: 'value' },
  },
  depth: 0,
  locale: 'en',
  fallbackLocale: false,
  user: dummyUser,
  overrideAccess: false,
  overrideLock: false,
  showHiddenFields: true,
})
```

## Auth Operations

If a collection has Authentication enabled, additional Local API operations will be available:

### Login

```typescript
const result = await payload.login({
  collection: 'users', // required
  data: {
    // required
    email: 'dev@payloadcms.com',
    password: 'rip',
  },
  req: req,
  depth: 2,
  locale: 'en',
  fallbackLocale: false,
  overrideAccess: false,
  showHiddenFields: true,
})
```

### Forgot Password

```typescript
const token = await payload.forgotPassword({
  collection: 'users', // required
  data: {
    // required
    email: 'dev@payloadcms.com',
  },
  req: req,
})
```

### Reset Password

```typescript
const result = await payload.resetPassword({
  collection: 'users', // required
  data: {
    // required
    password: req.body.password,
    token: 'afh3o2jf2p3f...',
  },
  req: req,
})
```

### Unlock

```typescript
const result = await payload.unlock({
  collection: 'users', // required
  data: {
    // required
    email: 'dev@payloadcms.com',
  },
  req: req,
  overrideAccess: true,
})
```

### Verify

```typescript
const result = await payload.verifyEmail({
  collection: 'users', // required
  token: 'afh3o2jf2p3f...',
})
```

## Global Operations

### Find Global

```typescript
const result = await payload.findGlobal({
  slug: 'header', // required
  depth: 2,
  locale: 'en',
  fallbackLocale: false,
  user: dummyUser,
  overrideAccess: false,
  showHiddenFields: true,
})
```

### Update Global

```typescript
const result = await payload.updateGlobal({
  slug: 'header', // required
  data: {
    // required
    nav: [
      {
        url: 'https://google.com',
      },
      {
        url: 'https://payloadcms.com',
      },
    ],
  },
  depth: 2,
  locale: 'en',
  fallbackLocale: false,
  user: dummyUser,
  overrideAccess: false,
  overrideLock: false,
  showHiddenFields: true,
})
```

## TypeScript

Local API calls will automatically infer your generated types.

```typescript
// Properly inferred as `Post` type
const post = await payload.create({
  collection: 'posts',

  // Data will now be typed as Post and give you type hints
  data: {
    title: 'my title',
    description: 'my description',
  },
})
```
