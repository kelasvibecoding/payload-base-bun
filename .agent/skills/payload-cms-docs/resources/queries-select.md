# Select

By default, Payload returns all fields for a given collection or global. The **Select API** allows you to define exactly which fields you'd like to retrieve. This improves performance by reducing database load and response size.

## Local API

You can use the `select` option in your query to include or exclude specific fields.

### Include Mode
Explicitly set fields to `true` to include them. All other fields will be excluded.

```typescript
const posts = await payload.find({
  collection: 'posts',
  select: {
    text: true,
    // select a specific field from group
    group: {
      number: true,
    },
    // select all fields from array
    array: true,
  },
})
```

### Exclude Mode
Set fields to `false` to exclude them. All other fields will be included.

```typescript
const posts = await payload.find({
  collection: 'posts',
  // Select everything except for array and group.number
  select: {
    array: false,
    group: {
      number: false,
    },
  },
})
```

> **Important**: Select queries are implemented at the database level. Hooks (`beforeRead`, `afterRead`) and Access Control may not receive the full document. Use the `forceSelect` collection config property to ensure critical fields are always retrieved.

## REST API

Specify `select` as a query parameter. We recommend using `qs-esm` for complex objects.

```typescript
import { stringify } from 'qs-esm'

const select = {
  text: true,
  group: {
    number: true,
  },
}

const stringifiedQuery = stringify({ select }, { addQueryPrefix: true })
const response = await fetch(`http://localhost:3000/api/posts${stringifiedQuery}`)
```

## defaultPopulate

The `defaultPopulate` property in your **Collection Config** specifies which fields to select when this collection is "populated" from another document (via Relationship or Upload fields). This is a powerful optimization to prevent over-fetching when you only need a subset of data (like a `slug`).

```typescript
export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  defaultPopulate: {
    slug: true,
  },
  fields: [
    { name: 'slug', type: 'text', required: true },
    // more fields...
  ],
}
```

> **Note for Uploads**: If you want to select the `url` field on an upload-enabled collection, you **must** also select `filename: true`. Otherwise, Payload cannot construct the URL and will return `null`.

## Overriding defaultPopulate with Populate

You can override a collection's `defaultPopulate` settings on a per-query basis using the `populate` property.

### Local API
```typescript
const posts = await payload.find({
  collection: 'posts',
  populate: {
    // Override 'pages' defaultPopulate to get 'text' instead
    pages: {
      text: true,
    }, 
  },
})
```

### REST API
```bash
GET /api/posts?populate[pages][text]=true
```
