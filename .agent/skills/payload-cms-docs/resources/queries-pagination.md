# Pagination

Pagination allows you to limit the number of documents returned per page and retrieve a specific page of results. All `find` operations in Collections are paginated automatically.

Paginated responses nest documents within a `docs` array and return top-level metadata like `totalDocs`, `limit`, `totalPages`, and `page`.

## Options

All Payload APIs support these pagination controls:

| Control | Default | Description |
| :--- | :--- | :--- |
| **limit** | 10 | Limits the number of documents returned per page. |
| **pagination** | true | Set to `false` to disable pagination and return all documents. |
| **page** | 1 | Get a specific page number. |

## Local API

```typescript
const posts = await payload.find({
  collection: 'posts',
  limit: 10,
  page: 2,
})
```

## REST API

```bash
GET /api/posts?limit=10&page=2
```

## Response Body

The response from a `find` operation includes:

| Property | Description |
| :--- | :--- |
| **docs** | Array of documents in the collection |
| **totalDocs** | Total available documents matching the query |
| **limit** | Number of documents per page |
| **totalPages** | Total pages available |
| **page** | Current page number |
| **pagingCounter** | Number of the first doc on the current page |
| **hasPrevPage** | `true`/`false` if previous page exists |
| **hasNextPage** | `true`/`false` if next page exists |
| **prevPage** | Number of previous page (null if none) |
| **nextPage** | Number of next page (null if none) |

### Example Response

```json
{
  "docs": [...],
  "totalDocs": 6,
  "limit": 10,
  "totalPages": 1,
  "page": 1,
  "pagingCounter": 1,
  "hasPrevPage": false,
  "hasNextPage": false,
  "prevPage": null,
  "nextPage": null
}
```

## Disabling Pagination

Disabling pagination can improve performance by reducing the overhead of calculations. This is useful when you want to retrieve all documents at once.

```typescript
const allPosts = await payload.find({
  collection: 'posts',
  pagination: false,
})
```

> **Performance Tip**: If you are querying for a unique document (e.g., by `slug`), set `limit: 1` and `pagination: false` for the best possible performance.
