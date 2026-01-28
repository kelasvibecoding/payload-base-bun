# Production Deployment

Payload runs within Next.js, meaning it can be deployed anywhere Next.js is supported, including Vercel, Netlify, AWS, and Docker.

## Deployment Checklist

### 1. Security
- **Secret Key**: Ensure `PAYLOAD_SECRET` is a long, complex string in your production environment.
- **Access Control**: Thoroughly test your access control functions. By default, they require a logged-in user, but custom logic must be verified.
- **Secure Cookies**: Enable `auth: { cookies: { secure: true } }` in your auth-enabled collections if running over HTTPS.

### 2. Database
Payload supports PostgreSQL and MongoDB.
- **Postgres**: Use `process.env.DATABASE_URL`. Ensure your production environment can reach the DB.
- **AWS DocumentDB**: Set `connectOptions.useFacet: false` as `$facet` is unsupported.
- **Azure Cosmos DB**: Use `indexSortableFields: true` to ensure sorting works in the Admin UI.

### 3. File Storage
**Avoid Ephemeral Filesystems**: Hosts like Heroku or DigitalOcean App Platform delete local files on restart.
- **Solution**: Use one of Payload's official [Cloud Storage Adapters](./upload-storage-adapters.md) (S3, Vercel Blob, GCS, etc.) for persistent uploads.

## Docker Deployment

To deploy Payload as a Docker container, you should use the Next.js **standalone** output mode.

### 1. Configure Next.js
In `next.config.js`:
```javascript
const nextConfig = {
  output: 'standalone',
}
```

### 2. Dockerfile Example (Multi-stage)
```dockerfile
FROM node:24-alpine AS base

# 1. Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# 2. Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm run build

# 3. Production runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

## Environment Variables
Ensure these are set on your deployment platform:
- `PAYLOAD_SECRET`: Random complex string.
- `DATABASE_URL`: Your database connection string.
- `NEXT_PUBLIC_SERVER_URL`: The public URL of your application.
- `PAYLOAD_CONFIG_PATH`: (Optional) If your config is not in the default location.
