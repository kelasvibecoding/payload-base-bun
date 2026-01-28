# Building Your Own Plugin

Building a Payload Plugin is the best way to share functionality across projects or with the community. A plugin is essentially a "higher-order" function that takes a Payload config and returns a modified version of it.

## Quick Start (Template)

The fastest way to start is by using the official Plugin Template:

```bash
npx create-payload-app@latest --template plugin
```

This template provides:
- A standardized `/src` directory for your plugin logic.
- A `/dev` directory containing a pre-configured Payload project for live testing.
- A pre-configured test suite using Jest.

## Plugin Structure

A typical plugin follows this functional pattern:

```typescript
import type { Config, Plugin } from 'payload'

export interface MyPluginOptions {
  enabled?: boolean
  apiKey: string
}

export const myPlugin = (options: MyPluginOptions): Plugin => {
  return (incomingConfig: Config): Config => {
    // 1. Check if disabled
    if (options.enabled === false) return incomingConfig

    // 2. Create a shallow copy of the config
    let config = { ...incomingConfig }

    // 3. Inject collections, globals, or fields
    config.collections = [
      ...(config.collections || []),
      {
         slug: 'plugin-collection',
         fields: [{ name: 'title', type: 'text' }]
      }
    ]

    // 4. Return the modified config
    return config
  }
}
```

## Developing and Testing

### The `/dev` Folder
The template includes a `dev` folder which is a standalone Payload project.
- Use `cd dev` and `pnpm dev` to start a local server.
- The plugin is imported into `dev/payload.config.ts` so you can see changes in real-time.

### Seeding Data
To test your plugin effectively, you should seed data. In the template, update `dev/src/seed.ts` to create the documents your plugin interacts with.

### Writing Tests
Payload uses Jest for testing. You can find a stubbed-out test file at `dev/plugin.spec.ts`.

```typescript
describe('My Plugin', () => {
  it('adds the expected collection', async () => {
    const collections = payload.config.collections
    expect(collections.find(c => c.slug === 'plugin-collection')).toBeDefined()
  })
})
```

## Best Practices

### Use Spread Syntax Correctly
Always spread existing arrays (collections, globals, hooks) to ensure you don't overwrite the user's configuration or other plugins.

```typescript
// Good
config.collections = [...(config.collections || []), myNewCollection]

// Bad - overwrites everyone else
config.collections = [myNewCollection] 
```

### Extending Functions
Functions (like `onInit`) cannot be spread. You must wrap the existing function and call it manually:

```typescript
config.onInit = async (payload) => {
  if (incomingConfig.onInit) await incomingConfig.onInit(payload)
  // Your custom initialization logic here
}
```

### Type Safety
Provide a clear `PluginOptions` interface and use JSDoc comments so developers get helpful tooltips in their IDEs.

### Compatibility & Sharing
- **Semantic Versioning**: Use SemVer and note which Payload versions are supported.
- **GitHub Tags**: Add the `payload-plugin` topic to your repository to help others find it.
- **Enabled Option**: Always provide an `enabled` toggle so developers can turn off the plugin without uninstalling the package.
