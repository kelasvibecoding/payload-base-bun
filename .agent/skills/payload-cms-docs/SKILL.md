---
name: payload-cms-docs
description: Official reference documentation for Payload CMS 3.0. Use this skill to look up official documentation, configuration options, and API details.
---

# Payload CMS Documentation

This skill serves as a knowledge base for Payload CMS documentation.

## How to use

1.  **Add Documentation**: Copy content from the [Payload Docs](https://payloadcms.com/docs) and save it as a markdown file in the `resources/` directory.
2.  **Reference**: When you need to check specific configuration options or APIs, read the relevant file in `resources/`.
3.  **Search (Token Efficient)**: Use the Python search script to find relevant documentation without reading the entire index or large files.

## How to Search Documentation

To find specific documentation topics efficiently:

```bash
# Search for a topic (returns top 2 most relevant documents)
python .agent/skills/payload-cms-docs/scripts/search.py "access control collections"

# Search for specific field configuration
python .agent/skills/payload-cms-docs/scripts/search.py "blocks field validation"
```

## Index of Resources

The following documentation modules are available in `resources/`:

- [Database Overview](./resources/database-overview.md)
- [Migrations](./resources/migrations.md)
- [Transactions](./resources/transactions.md)
- [Indexes](./resources/indexes.md)
- [MongoDB](./resources/mongodb.md)
- [Postgres](./resources/postgres.md)
- [SQLite](./resources/sqlite.md)
- [Fields Overview](./resources/fields-overview.md)
- [Array Field](./resources/fields-array.md)
- [Blocks Field](./resources/fields-blocks.md)
- [Checkbox Field](./resources/fields-checkbox.md)
- [JSON Field](./resources/fields-json.md)
- [Code Field](./resources/fields-code.md)
- [Collapsible Field](./resources/fields-collapsible.md)
- [Date Field](./resources/fields-date.md)
- [Email Field](./resources/fields-email.md)
- [Group Field](./resources/fields-group.md)
- [Join Field](./resources/fields-join.md)
- [Number Field](./resources/fields-number.md)
- [Point Field](./resources/fields-point.md)
- [Radio Group Field](./resources/fields-radio.md)
- [Relationship Field](./resources/fields-relationship.md)
- [Rich Text Field](./resources/fields-rich-text.md)
- [Rich Text (Lexical)](./resources/rich-text-lexical.md)
- [Lexical Features](./resources/rich-text-features.md)
- [Lexical Blocks](./resources/rich-text-blocks.md)
- [Lexical Custom Features](./resources/rich-text-custom-features.md)
- [Rendering Lexical On Demand](./resources/rich-text-rendering-on-demand.md)
- [Rich Text Converters](./resources/rich-text-converters.md)
- [Converting Lexical to JSX](./resources/rich-text-converting-jsx.md)
- [Converting Lexical to HTML](./resources/rich-text-converting-html.md)
- [Converting Lexical to Markdown](./resources/rich-text-converting-markdown.md)
- [Converting Lexical to Plaintext](./resources/rich-text-converting-plaintext.md)
- [Row Field](./resources/fields-row.md)
- [Select Field](./resources/fields-select.md)
- [Tabs Field](./resources/fields-tabs.md)
- [Text Field](./resources/fields-text.md)
- [Textarea Field](./resources/fields-textarea.md)
- [UI Field](./resources/fields-ui.md)
- [Upload Field](./resources/fields-upload.md)
- [Uploads Overview](./resources/upload-overview.md)
- [Storage Adapters](./resources/upload-storage-adapters.md)
- [Access Control Overview](./resources/access-control-overview.md)
- [Collection Access Control](./resources/access-control-collections.md)
- [Globals Access Control](./resources/access-control-globals.md)
- [Field-level Access Control](./resources/access-control-fields.md)
- [Hooks Overview](./resources/hooks-overview.md)
- [Collection Hooks](./resources/hooks-collections.md)
- [Global Hooks](./resources/hooks-globals.md)
- [Field Hooks](./resources/hooks-fields.md)
- [Hook Context](./resources/hooks-context.md)
- [Local API Overview](./resources/local-api-overview.md)
- [Using Payload outside Next.js](./resources/local-api-outside-nextjs.md)
- [Server Functions](./resources/local-api-server-functions.md)
- [Local API Access Control](./resources/local-api-access-control.md)
- [REST API Overview](./resources/rest-api-overview.md)
- [GraphQL Overview](./resources/graphql-overview.md)
- [Extending GraphQL](./resources/graphql-extending.md)
- [GraphQL Schema](./resources/graphql-schema.md)
- [Authentication Overview](./resources/auth-overview.md)
- [Authentication Operations](./resources/auth-operations.md)
- [Authentication Emails](./resources/auth-emails.md)
- [Email Functionality](./resources/email.md)
- [Jobs Queue](./resources/jobs-queue.md)
- [Jobs Tasks](./resources/jobs-tasks.md)
- [Jobs Workflows](./resources/jobs-workflows.md)
- [Jobs Management](./resources/jobs-management.md)
- [Jobs Queues & Execution](./resources/jobs-queues.md)
- [Job Schedules](./resources/jobs-schedules.md)
- [JWT Strategy](./resources/auth-jwt.md)
- [Cookie Strategy](./resources/auth-cookies.md)
- [API Key Strategy](./resources/auth-api-keys.md)
- [Custom Strategies](./resources/auth-custom-strategies.md)
- [Token Data](./resources/auth-token-data.md)
- [Admin Panel Overview](./resources/admin-overview.md)
- [Query Presets](./resources/admin-query-presets.md)
- [Folders Overview](./resources/folders-overview.md)
- [Live Preview Overview](./resources/admin-live-preview-overview.md)
- [Live Preview - Server-side](./resources/admin-live-preview-server.md)
- [Live Preview - Client-side](./resources/admin-live-preview-client.md)
- [Preview](./resources/admin-preview.md)
- [Versions Overview](./resources/versions-overview.md)
- [Drafts](./resources/versions-drafts.md)
- [Autosave](./resources/versions-autosave.md)
- [Trash (Soft Delete)](./resources/trash-overview.md)
- [Document Locking](./resources/admin-locked-documents.md)
- [Accessibility](./resources/admin-accessibility.md)
- [React Hooks](./resources/admin-react-hooks.md)
- [Customizing CSS](./resources/admin-css.md)
- [User Preferences](./resources/admin-preferences.md)
- [Page Metadata](./resources/admin-metadata.md)
- [Custom Components Overview](./resources/custom-components-overview.md)
- [Root Components](./resources/custom-components-root.md)
- [Custom Providers](./resources/custom-components-providers.md)
- [Custom Views](./resources/custom-components-views.md)
- [Dashboard Widgets](./resources/custom-components-dashboard.md)
- [Document Views](./resources/custom-components-document-views.md)
- [Edit View](./resources/custom-components-edit-view.md)
- [List View](./resources/custom-components-list-view.md)
- [Querying Overview](./resources/queries-overview.md)
- [Sort](./resources/queries-sort.md)
- [Select](./resources/queries-select.md)
- [Depth](./resources/queries-depth.md)
- [Pagination](./resources/queries-pagination.md)
- [Generating TypeScript Types](./resources/typescript-generating-types.md)
- [Troubleshooting](./resources/troubleshooting.md)
- [Plugins Overview](./resources/plugins-overview.md)
- [Building Your Own Plugin](./resources/plugins-build-your-own.md)
- [Plugin: Form Builder](./resources/plugin-form-builder.md)
- [Plugin: Import Export](./resources/plugin-import-export.md)
- [Plugin: Multi-Tenant](./resources/plugin-multi-tenant.md)
- [Plugin: Nested Docs](./resources/plugin-nested-docs.md)
- [Plugin: Redirects](./resources/plugin-redirects.md)
- [Plugin: Search](./resources/plugin-search.md)
- [Plugin: Sentry](./resources/plugin-sentry.md)
- [Plugin: SEO](./resources/plugin-seo.md)
- [Plugin: Stripe](./resources/plugin-stripe.md)
- [Building Without a DB Connection](./resources/production-no-db-build.md)
- [Production Deployment](./resources/production-deployment.md)
- [Preventing API Abuse](./resources/production-preventing-abuse.md)
- [Performance Overview](./resources/performance-overview.md)
- [Media Compression & Optimization](./resources/media-compression.md)

## Quick Reference: Configuration

Payload config is defined in `payload.config.ts`.

### Basic Structure

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  // Server options
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  secret: process.env.PAYLOAD_SECRET,

  // Database
  db: mongooseAdapter({ url: process.env.DATABASE_URL }),

  // Content
  collections: [],
  globals: [],

  // Admin UI
  admin: {},

  // Editor
  editor: lexicalEditor({}),
})
```
