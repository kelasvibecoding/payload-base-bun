# GraphQL Schema

In Payload, the GraphQL schema is controlled by your Collections and Globals. You can generate a static representation of your schema using the CLI.

## Schema Generation Script

To generate your schema, you'll need the `@payloadcms/graphql` package installed as a dev dependency:

```bash
pnpm add @payloadcms/graphql -D
```

Then run the following command to generate the `schema.graphql` file:

```bash
pnpm payload-graphql generate:schema
```

The default output location is `schema.graphql` in your root directory. You can specify a different path in your Payload config.

## Custom Field Schemas

For **Array**, **Block**, **Group**, and **Named Tab** fields, you can generate top-level reusable interfaces by providing an `interfaceName`.

### Example

```typescript
{
  type: 'group',
  name: 'meta',
  interfaceName: 'SharedMeta', // This generates a top-level type
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
}
```

**Generated Result:**

```graphql
# A top-level reusable type is generated
type SharedMeta {
  title: String
  description: String
}

# Referenced inside the collection type
type Collection1 {
  meta: SharedMeta
}
```

## Adding an npm Script

Payload needs to find your config to generate the schema. If your config is not in the root directory (e.g., in `src/`), you should use an environment variable.

Add a script to your `package.json` for convenience:

```json
{
  "scripts": {
    "generate:graphQLSchema": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload-graphql generate:schema"
  }
}
```

Now you can run `pnpm generate:graphQLSchema` to regenerate your schema file whenever your config changes.
