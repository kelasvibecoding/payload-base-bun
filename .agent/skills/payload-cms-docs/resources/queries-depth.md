# Depth

Documents in Payload can have relationships to other Documents (via Collections or Globals). When you query a Document, you can specify the **depth** at which to populate any of its related Documents either as full objects or only their IDs.

Since Documents can be infinitely nested or recursively related, controlling depth is essential for performance and managing response size.

### Example

**Depth 0:**
```json
{
  "id": "5ae8f9bde69e394e717c8832",
  "title": "This is a great post",
  "author": "5f7dd05cd50d4005f8bcab17"
}
```

**Depth 1:**
```json
{
  "id": "5ae8f9bde69e394e717c8832",
  "title": "This is a great post",
  "author": {
    "id": "5f7dd05cd50d4005f8bcab17",
    "name": "John Doe"
  }
}
```

> **Important**: Depth has no effect in the **GraphQL API**, because depth there is determined by the shape of your query.

## Local API

Use the `depth` option in your query:

```typescript
const posts = await payload.find({
  collection: 'posts',
  depth: 2,
})
```

## REST API

Use the `depth` parameter in the query string:

```bash
GET /api/posts?depth=2
```

## Default Depth

If no depth is specified, Payload use its default depth, which is **2**.

You can change the global default in your main Payload Config:

```typescript
export default buildConfig({
  // ...
  defaultDepth: 1,
})
```

## Max Depth

Individual **Relationship** and **Upload** fields can set a `maxDepth`. This limit will be enforced regardless of what is requested in the query.

```typescript
{
  slug: 'posts',
  fields: [
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      maxDepth: 2, // Enforces a maximum population depth for this field
    }
  ]
}
```
