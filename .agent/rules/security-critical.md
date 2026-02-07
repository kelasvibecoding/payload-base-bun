---
title: Critical Security Patterns
trigger: always_on
glob: "**/*"
description: The three most important security patterns in Payload CMS
---

# CRITICAL SECURITY PATTERNS

These are the three most critical security patterns that MUST be followed in every Payload CMS project.

## 1. Local API Access Control (MOST IMPORTANT)

**By default, Local API operations bypass ALL access control**, even when passing a user.

```typescript
// ❌ SECURITY BUG: Passes user but ignores their permissions
await payload.find({
  collection: 'posts',
  user: someUser, // Access control is BYPASSED!
})

// ✅ SECURE: Actually enforces the user's permissions
await payload.find({
  collection: 'posts',
  user: someUser,
  overrideAccess: false, // REQUIRED for access control
})

// ✅ Administrative operation (intentional bypass)
await payload.find({
  collection: 'posts',
  // No user, overrideAccess defaults to true
})
```

**When to use each:**

- `overrideAccess: true` (default) - Server-side operations you trust (cron jobs, system tasks)
- `overrideAccess: false` - When operating on behalf of a user (API routes, webhooks)

**Rule**: When passing `user` to Local API, ALWAYS set `overrideAccess: false`

## 2. Transaction Safety in Hooks

**Nested operations in hooks without `req` break transaction atomicity.**

```typescript
// ❌ DATA CORRUPTION RISK: Separate transaction
hooks: {
  afterChange: [
    async ({ doc, req }) => {
      await req.payload.create({
        collection: 'audit-log',
        data: { docId: doc.id },
        // Missing req - runs in separate transaction!
      })
    },
  ]
}

// ✅ ATOMIC: Same transaction
hooks: {
  afterChange: [
    async ({ doc, req }) => {
      await req.payload.create({
        collection: 'audit-log',
        data: { docId: doc.id },
        req, // Maintains atomicity
      })
    },
  ]
}
```

**Why This Matters:**

- **MongoDB (with replica sets)**: Creates atomic session across operations
- **PostgreSQL**: All operations use same Drizzle transaction
- **SQLite (with transactions enabled)**: Ensures rollback on errors
- **Without req**: Each operation runs independently, breaking atomicity

**Rule**: ALWAYS pass `req` to nested operations in hooks

## 3. Prevent Infinite Hook Loops

**Hooks triggering operations that trigger the same hooks create infinite loops.**

```typescript
// ❌ INFINITE LOOP
hooks: {
  afterChange: [
    async ({ doc, req }) => {
      await req.payload.update({
        collection: 'posts',
        id: doc.id,
        data: { views: doc.views + 1 },
        req,
      }) // Triggers afterChange again!
    },
  ]
}

// ✅ SAFE: Use context flag
hooks: {
  afterChange: [
    async ({ doc, req, context }) => {
      if (context.skipHooks) return

      await req.payload.update({
        collection: 'posts',
        id: doc.id,
        data: { views: doc.views + 1 },
        context: { skipHooks: true },
        req,
      })
    },
  ]
}
```

**Rule**: Use `req.context` flags to prevent hook loops

## 4. Immunity to 1-Data-Off Bug (Stale Aggregation Sync)

**Counters and averages can be "one data point late" (the 1-data-late bug) if they query the DB index instead of the current transaction during hooks.**

### Why This Matters:
Statistical calculations (like averages or totals) inside hooks must reflect the *exact current state* including the change that triggered the hook. If you use `payload.count()` or query without the `req` object, you might read a stale index state, causing the UI to briefly show incorrect values or fall out of sync.

### ❌ STALE: `totalDocs` may not include the current change yet
```typescript
const { totalDocs } = await req.payload.find({
  collection: 'ratings',
  where: { toilet: id },
  req, // Even with req, totalDocs might be stale in some DBs
})
const avg = sum / totalDocs 
```

### ✅ ROBUST: Use the length of actual documents retrieved
```typescript
const { docs } = await req.payload.find({
  collection: 'ratings',
  where: { toilet: id },
  limit: 1000,
  req, // Essential for transaction visibility
})

const realCount = docs.length
const avg = sum / realCount
```

**Rule**: ALWAYS use `docs.length` instead of `totalDocs` for statistics inside hooks to ensure perfect synchronization. Deriving totals directly from the component indicator array is the only way to guarantee mathematical consistency.
