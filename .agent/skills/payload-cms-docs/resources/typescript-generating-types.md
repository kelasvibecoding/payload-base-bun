# Generating TypeScript Types

Payload allows you to generate TypeScript interfaces directly from your Payload Config. This ensures that your Local API calls, hooks, and frontend code remain fully type-safe and in sync with your database schema.

## Types Generation Script

Run the following command in your project to generate types:

```bash
npx payload generate:types
```

We recommend adding this to your `package.json` scripts:

```json
{
  "scripts": {
    "generate:types": "payload generate:types"
  }
}
```

## Configuration

You can customize how types are generated in your `payload.config.ts`.

```typescript
import path from 'path'
import { buildConfig } from 'payload'

export default buildConfig({
  typescript: {
    // Custom output path (defaults to ./payload-types.ts)
    outputFile: path.resolve(__dirname, './payload-types.ts'),
    
    // Controls if 'declare module 'payload' {}' is added (defaults to true)
    // Disable this if you intend to export these types to other repositories.
    declare: true,
    
    // Extend the underlying JSON schema for custom types or plugins
    schema: [
      ({ jsonSchema }) => {
        jsonSchema.definitions.CustomType = {
          type: 'object',
          properties: {
             source: { type: 'string' }
          }
        }
        return jsonSchema
      }
    ]
  },
})
```

## Manual Declaration

If you set `declare: false`, you must manually tell Payload about your generated types in your config file to enable inference in the Local API:

```typescript
import { Config } from './payload-types'

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
```

## Reusable Field Interfaces (`interfaceName`)

By default, sub-fields (like those in a Group, Array, or Block) are defined inline within the collection interface. You can extract them into top-level reusable interfaces using `interfaceName`.

```typescript
{
  name: 'meta',
  type: 'group',
  interfaceName: 'SharedMeta', // This creates a top-level 'SharedMeta' interface
  fields: [
    { name: 'title', type: 'text' },
  ],
}
```

**Generated output:**
```typescript
export interface SharedMeta {
  title?: string
}

export interface Post {
  meta?: SharedMeta
}
```

## Naming Collisions
Since `interfaceName` hoists types to the top level, ensure you don't have collisions (e.g., a collection named `Meta` and a field interface named `Meta`). Best practice is to append the field type, such as `MetaGroup`.

## Using Types in the Frontend
Payload is designed to be head-less. To use these types in a separate frontend repository, simply generate them in your Payload project and copy the resulting `payload-types.ts` file over to your frontend.
