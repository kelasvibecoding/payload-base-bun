# Sort

Documents in Payload can be easily sorted by a specific field. When querying documents, you can pass the name of any top-level field, and the response will sort the documents by that field in ascending order.

To sort in **descending** order, prefix the field name with a minus symbol (`-`).

> **Note**: Because sorting is handled by the database, the field cannot be a **Virtual Field** unless it's linked with a relationship field. It must be stored in the database to be searchable.

## Local API

In the Local API, you can pass a string for a single field or an **array of strings** for multiple fields.

```typescript
// Sort by createdAt descending
const posts = await payload.find({
  collection: 'posts',
  sort: '-createdAt', 
})

// Sort by multiple fields: priority ascending, then createdAt descending
const posts = await payload.find({
  collection: 'posts',
  sort: ['priority', '-createdAt'], 
})
```

## REST API

In the REST API, multiple fields are specified by separating them with a **comma**.

```bash
# Single field sort
GET /api/posts?sort=-createdAt

# Multiple field sort
GET /api/posts?sort=priority,-createdAt
```

If using a query string builder like `qs-esm`, you can also pass an array:

```typescript
import { stringify } from 'qs-esm'

const stringifiedQuery = stringify(
  {
    sort: ['priority', '-createdAt'],
  },
  { addQueryPrefix: true },
)

const response = await fetch(`https://localhost:3000/api/posts${stringifiedQuery}`)
```

## GraphQL API

In the GraphQL API, you pass a string to the `sort` argument. For multiple fields, use a **comma-separated list**.

```graphql
# Single field
query {
  Posts(sort: "-createdAt") {
    docs {
      title
    }
  }
}

# Multiple fields
query {
  Posts(sort: "priority,-createdAt") {
    docs {
      title
    }
  }
}
```

## Performance Tip

For performance reasons, it is highly recommended to enable `index: true` in the Field Config for any fields that you plan to sort by frequently. This allows the database to perform the sort operation much faster.
