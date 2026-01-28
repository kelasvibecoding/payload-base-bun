# Building Without a Database Connection

A common challenge when building Payload for production (especially in Docker environments) is the requirement for a database connection during the build step.

## Why is a DB connection required?
Payload itself does not require a database connection to *build*. However, **Next.js Static Site Generation (SSG)** does. If your application uses the Payload Local API within a route segment that is statically generated (the default behavior in Next.js), the build process will attempt to fetch data from the database.

## Solution 1: `experimental-build-mode`
Next.js provides an experimental build mode that decouples compilation from static generation. This allows you to compile your code in a CI/CD environment without a database connection.

### Compile Only
Run the following command to only compile the code:
```bash
npx next build --experimental-build-mode compile
```
In this mode, pages are rendered dynamically at runtime.

### Generate Static Pages Later
Once you have a database connection available (e.g., during deployment), you can run:
```bash
npx next build --experimental-build-mode generate
```

### Note on Environment Variables
When using `compile`, `NEXT_PUBLIC_` variables are not inlined. You can use `--experimental-build-mode generate-env` to handle environment variables if a DB is still unavailable.

## Solution 2: Opting out of SSG
If you do not want static generation for certain routes, you can force them to be dynamic. This prevents the build process from attempting to "pre-render" the page (and thus fetching data from the DB).

Add this to your route segment file (`page.tsx` or `layout.tsx`):
```typescript
export const dynamic = 'force-dynamic'
```

*Note: This will disable static optimization for that route, causing it to be rendered on every request.*
