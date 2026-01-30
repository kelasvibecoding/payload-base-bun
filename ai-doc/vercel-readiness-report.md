# Vercel Readiness Report

## Status: READY (Configuration Required)

The codebase is technically ready for Vercel deployment, but requires specific environment configuration to function correctly.

## Critical Requirements

### 1. Database (MongoDB Required)

- **Constraint**: Vercel Serverless Functions are ephemeral and cannot persist local files.
- **Action**: You **cannot** use the default SQLite (`file:./local.db`) adapter.
- **Fix**: Set `DATABASE_URL` to a MongoDB Atlas connection string (or similar cloud Mongo provider).
  ```env
  DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/dbname?retryWrites=true&w=majority
  ```

### 2. Storage (Vercel Blob Configured)

- **Status**: ✅ Good.
- **Config**: The project uses `@payloadcms/storage-vercel-blob`.
- **Action**: Ensure `BLOB_READ_WRITE_TOKEN` is set in Vercel.
- **Note**: Uploadthing configuration is available as a commented alternative in `payload.config.ts`.

### 3. Vercel Configuration

- **File**: `vercel.json` created.
- **Settings**: Increased `maxDuration` to 60s for Admin and API routes to handle "Cold Start" delays common with CMS initializations.

## Environment Variables to Set in Vercel

| Variable                 | Description                | Example                       |
| ------------------------ | -------------------------- | ----------------------------- |
| `DATABASE_URL`           | Cloud MongoDB Connection   | `mongodb+srv://...`           |
| `PAYLOAD_SECRET`         | Secure string for sessions | `openssl rand -hex 32`        |
| `BLOB_READ_WRITE_TOKEN`  | Vercel Blob storage token  | Auto-generated in Vercel      |
| `NEXT_PUBLIC_SERVER_URL` | Your Vercel Domain         | `https://your-app.vercel.app` |

## Deployment Steps

1. Push code to GitHub/GitLab.
2. Import project -> Select "Next.js" framework.
3. Paste the Environment Variables.
4. Deploy.
