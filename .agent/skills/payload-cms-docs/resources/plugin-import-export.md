# Import Export Plugin

The Import Export plugin adds features to download, create, and manage data exports as well as import data back into your Payload collections using CSV or JSON formats.

> **Note**: This plugin is currently in **beta**.

## Installation

```bash
pnpm add @payloadcms/plugin-import-export
```

## Basic Usage

Add the plugin to your `payload.config.ts`:

```typescript
import { buildConfig } from 'payload'
import { importExportPlugin } from '@payloadcms/plugin-import-export'

export default buildConfig({
  plugins: [
    importExportPlugin({
      collections: ['posts', 'pages'], // Collections to enable
    }),
  ],
})
```

## Global Options

| Option | Description |
| :--- | :--- |
| **`collections`** | Array of collection slugs or configurations to enable. |
| **`overrideExportCollection`** | Function to modify the default `exports` upload collection. |
| **`overrideImportCollection`** | Function to modify the default `imports` upload collection. |

## Per-Collection Configuration

You can customize the export/import behavior for specific collections:

```typescript
importExportPlugin({
  collections: [
    {
      slug: 'pages',
      export: {
        format: 'csv',
        disableDownload: true, // Only allow saving to the exports collection
      },
      import: {
        defaultVersionStatus: 'draft',
      },
    },
  ],
})
```

## Field-Level Customization

Use the `custom['plugin-import-export']` property on any field to control its visibility and transformation.

```typescript
{
  name: 'author',
  type: 'relationship',
  relationTo: 'users',
  custom: {
    'plugin-import-export': {
      // Exclude from import/export
      disabled: false,
      // Transform data for CSV export
      toCSV: ({ value, columnName, row }) => {
        if (value && typeof value === 'object') {
          row[`${columnName}_id`] = value.id
          row[`${columnName}_email`] = value.email
        }
      },
      // Transform incoming CSV data for import
      fromCSV: ({ data, columnName }) => {
        return data[`${columnName}_id`]
      },
    },
  },
}
```

## Import Modes

When importing data, you can choose between three modes:
- **`create`**: Only creates new documents. Fails if an ID already exists.
- **`update`**: Only updates existing documents (requires `id` column).
- **`upsert`**: Updates existing documents or creates new ones if they don't exist.

## CSV Naming Convention
- **Nested Fields**: Use underscores (e.g., `group_subfield`).
- **Arrays**: Use numeric suffixes (e.g., `array_0_field`, `array_1_field`).
- **Localized Fields**: Use locale suffixes (e.g., `title_en`, `title_es`).

## Running Large Jobs
For large datasets, Payload uses the [Jobs Queue](./jobs-queue.md) to process imports and exports asynchronously, preventing timeouts and ensuring reliable completions.
