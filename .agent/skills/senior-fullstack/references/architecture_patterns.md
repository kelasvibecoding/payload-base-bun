# Architecture Patterns (Payload CMS 3.0 + Next.js App Router)

## Overview

This guide defines the architectural patterns for the `payload-base` project, ensuring scalability, type safety, and optimal performance using the Next.js App Router and Payload CMS.

## Core Architecture

### 1. Hybrid Headless Architecture
**Description:**
Payload serves as both the headless CMS (backend) AND resides within the same Next.js application (frontend). This allows for "Local API" access, bypassing HTTP requests for internal data fetching.

**When to Use:**
- Always. This is the fundamental architecture of the project.

**Benefits:**
- **Zero Latency**: Server Components read directly from the database via Payload.
- **Unified Types**: Frontend and Backend share the exact same `payload-types.ts`.
- **Simplified Deployment**: Single container/deployment for both Admin and Frontend.

### 2. Server-Centric Data Flow
**Description:**
Move data fetching logic out of client-side `useEffect` and into Server Components or Server Actions.

**Pattern:**
1.  **Read**: Use `getPayload()` in `page.tsx` or `layout.tsx`.
2.  **Pass**: Pass serializable data (JSON-like) to Client Components.
3.  **Write**: Use Server Actions (`'use server'`) which call Payload's Local API to mutate data.

**Implementation (Server Action):**
```typescript
'use server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function createContactSubmission(formData: FormData) {
  const payload = await getPayload({ config })
  
  await payload.create({
    collection: 'contact-forms',
    data: {
      email: formData.get('email'),
      message: formData.get('message'),
    }
  })
}
```

### 3. Component Composition (Shadcn UI)
**Description:**
Avoid monolithic components. Build flexible UIs by composing small, atomic Shadcn primitives.

**Pattern:**
- **Atoms**: `Button`, `Input`, `Label` (from `src/components/ui`)
- **Molecules**: `SearchForm` (composes Input + Button)
- **Organisms**: `Header` (composes Nav + SearchForm + UserMenu)

**Implementation:**
```tsx
// ✅ Correct Composition
<Card>
  <CardHeader>
    <CardTitle>Welcome</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Click me</Button>
  </CardContent>
</Card>
```

## State Management

### Server State
- **Tool**: Next.js Cache / Payload Local API
- **Strategy**: Rely on the server as the source of truth. Revalidate paths after mutations.

### Client State
- **Tool**: React `useState` / `useReducer`
- **Strategy**: Keep client state local to the interaction (e.g., form input, open/close modals). Avoid global stores (Redux/Zustand) unless absolutely necessary.

## Security Architecture

### 1. Access Control Layers
- **Layer 1 (Network)**: Next.js Middleware protects Admin routes.
- **Layer 2 (Application)**: Payload `access` functions restrict data based on User Roles.
- **Layer 3 (Field)**: Field-level `access` hides sensitive columns (e.g., `salary`).

### 2. Secure Contexts
- **Admin**: Full access context (controlled by cookies).
- **Public**: Limited access context (publicly `read: true` collections).
- **API**: Token-based access for external integrations.

## Performance Optimization

### 1. Selective Hydration
- **Technique**: Keep interactivity at the leaves of the component tree.
- **Example**: A `page.tsx` (Server) fetches data and passes it to a `<PostList>` (Server), which renders many `<LikeButton>` (Client) components.

### 2. Image Optimization Strategy
- **Uploads**: All images go through Payload's `Media` collection.
- **Processing**: Payload automatically generates sizes (thumbnail, tablet, desktop).
- **Delivery**: Next.js `<Image>` component serves the optimal WebP/AVIF version.

## Anti-Patterns

- **"The Kitchen Sink" Component**: Creating a single component that fetches data, manages state, and renders UI. Split these concerns.
- **Prop Drilling**: Passing data through 5+ layers. Use composition or Server Components to inject data closer to where it's needed.
- **Client-Side Sensitive Logic**: Never put business logic (like "can this user delete?") in the client. Always verify in Payload Hooks/Access Control.
