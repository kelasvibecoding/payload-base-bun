# Querying Overview

In Payload, "querying" means filtering or searching through Documents within a Collection. The querying language is designed to be simple and powerful, allowing you to filter Documents with precision through an intuitive and standardized structure.

Payload provides three common APIs for querying your data:
- **Local API**: Extremely fast, direct-to-database access.
- **REST API**: Standard HTTP endpoints for querying and mutating data.
- **GraphQL**: A full GraphQL API with a GraphQL Playground.

Each of these APIs shares the same underlying querying language and fully supports all of the same features.

## Operators

The following operators are available for use in queries:

| Operator | Description |
| :--- | :--- |
| **equals** | The value must be exactly equal. |
| **not_equals** | Returns all documents where the value is not equal. |
| **greater_than** | For numeric or date-based fields. |
| **greater_than_equal** | For numeric or date-based fields. |
| **less_than** | For numeric or date-based fields. |
| **less_than_equal** | For numeric or date-based fields. |
| **like** | Case-insensitive string search. If multiple words, all words must be present in any order. |
| **contains** | Must contain the value entered, case-insensitive. |
| **in** | The value must be found within the provided comma-delimited list. |
| **not_in** | The value must NOT be within the provided comma-delimited list. |
| **all** | The value must contain all values provided (MongoDB only). |
| **exists** | Only return documents where the value exists (`true`) or does not (`false`). |
| **near** | For Point Fields, searching within a distance. |
| **within** | For Point Fields, filtering based on whether points are inside a GeoJSON area. |
| **intersects** | For Point Fields, filtering based on whether points intersect a GeoJSON area. |

> **Tip**: If you query a field frequently, add `index: true` to its Field Config to speed up searches.

## And / Or Logic

You can join multiple queries together using AND / OR logic, nested as deeply as needed.

```typescript
import type { Where } from 'payload'

const query: Where = {
  or: [
    {
      color: { equals: 'mint' },
    },
    {
      and: [
        { color: { equals: 'white' } },
        { featured: { equals: false } },
      ],
    },
  ],
}
```

## Nested Properties

Use dot notation to access properties within related collections or nested fields:

```typescript
import type { Where } from 'payload'

const query: Where = {
  'artists.featured': {
    exists: true,
  },
}
```

## Writing Queries

### Local API
The `find` operation accepts a raw query object:

```typescript
const posts = await payload.find({
  collection: 'posts',
  where: {
    color: { equals: 'mint' },
  },
})
```

### GraphQL API
The `where` argument accepts a raw query object:

```graphql
query {
  Posts(where: { color: { equals: mint } }) {
    docs {
      color
    }
  }
}
```

### REST API
Queries are written as query strings. For complex queries, use the `qs-esm` package:

```typescript
import { stringify } from 'qs-esm'

const query = { color: { equals: 'mint' } }
const stringifiedQuery = stringify({ where: query }, { addQueryPrefix: true })

const response = await fetch(`http://localhost:3000/api/posts${stringifiedQuery}`)
```

## Performance Optimization

- **Indexes**: Add `index: true` to fields used in `where` or `sort` clauses.
- **Depth**: Set `depth: 0` (or the minimum needed) to avoid populating unnecessary related documents.
- **Limit**: Set a `limit` (e.g., `limit: 1` when querying by a unique field).
- **Select**: Use the `select` API to only return the specific fields you need.
- **Pagination**: Disable pagination (`pagination: false`) if you are querying for a specific number of documents and don't need metadata.
