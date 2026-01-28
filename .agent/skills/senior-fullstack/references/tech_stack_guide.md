# Tech Stack Guide (Payload CMS + React + Tailwind + Shadcn)

## Overview

This guide establishes the professional standards and patterns for the `payload-base` ecosystem, focusing on Payload CMS 3.0, Next.js App Router, and Tailwind 4.

## Core Patterns

### 1. Payload Local API over REST
**Description:** Use Payload's Local API for all server-side operations (Server Components, Hooks, Actions) to avoid network overhead and ensure direct database access.

**When to Use:**
- Standard data fetching in Next.js Server Components.
- Operations inside Payload Hooks.
- Custom Server Actions for frontend forms.

**Implementation:**
```typescript
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })
const { docs } = await payload.find({
  collection: 'posts',
  depth: 1,
  where: { status: { equals: 'published' } }
})
```

### 2. Atomic Shadcn UI Components
**Description:** Build the interface by composing atomic Shadcn primitives. Extend components using `class-variance-authority` (cva).

**Implementation:**
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export const PostPreview = ({ title, excerpt }) => (
  <Card className="hover:border-primary transition-colors">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{excerpt}</CardContent>
    <Button variant="outline">Read More</Button>
  </Card>
)
```

### 3. Type-Safe Field Definitions
**Description:** Leverage the generated `payload-types.ts` for absolute type safety across the stack.

**Implementation:**
```typescript
import type { Post } from '@/payload-types'

function formatPost(post: Post) {
  return {
    title: post.title,
    date: new Date(post.createdAt).toLocaleDateString()
  }
}
```

## Guidelines

### Code Organization
- **Collections**: Separate files in `src/collections/`, named with PascalCase.
- **Components**: Group by function (UI, Admin, Layout) in `src/components/`.
- **Styles**: Global theme in `src/app/(frontend)/globals.css` using Tailwind 4 features.

### Performance
- **Streaming**: Use Next.js `Suspense` for heavy Payload queries.
- **Media**: Always use the `Media` collection for uploads to leverage Payload's image resizing.
- **Depth**: Keep relationship `depth` minimal (default 2) to prevent over-fetching.

### Security
- **RBAC**: Implement Role-Based Access Control in every collection's `access` property.
- **Environment**: Use `process.env.PAYLOAD_SECRET` for all cryptographic operations.

## Anti-Patterns to Avoid

- **Direct DB Access**: Never use Mongoose/Postgres drivers directly; always go through `payload`.
- **Client-Side Fetching**: Avoid fetching Payload data via `fetch()` on the client if it can be done in a Server Component.
- **Hardcoded Slugs**: Never hardcode slugs; use the `slugField` utility or constants.

## Tools and Resources

- **Payload Admin**: Accessible at `/admin` for content management.
- **Tailwind DevTools**: Use for real-time CSS variable debugging.
- **Lucide Icon Search**: Primary icon library for the project.
