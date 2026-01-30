# Framework Integrations (Astro & Remix)

Examples of using Payload CMS as a headless backend in monorepo setups with Astro and Remix.

## Astro Integration

### Real-world Component Usage
Astro components can consume the Payload Local API directly for static site generation or server-side rendering.

```astro
---
// website/src/components/Welcome.astro
import { getPayload } from 'payload'
import config from '../../payload.config'

const payload = await getPayload({ config })
const posts = await payload.find({
  collection: 'posts',
  depth: 1,
})
---
<div>
  <h1>Posts from Payload</h1>
  <ul>
    {posts.docs.map((post) => (
      <li>{post.title}</li>
    ))}
  </ul>
</div>
```

## Remix Integration

### Fetching in Loaders
Remix loaders run on the server, making them ideal for the Local API.

```typescript
// website/app/routes/_index.tsx
export const loader = async () => {
  const payload = await getPayload({ config })
  const posts = await payload.find({ collection: 'posts' })
  return json({ posts })
}
```

## Use Cases
- **Astro**: Perfect for content-heavy sites that need the speed of a static site with the power of a headless CMS.
- **Remix**: Ideal for dynamic, data-driven applications that require complex server-side state.
