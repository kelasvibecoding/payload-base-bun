# Custom Components Overview

The Payload Admin Panel allows you to swap in your own React components for nearly every part of the UI. All Custom Components are **React Server Components (RSC)** by default, but Client Components are fully supported via the `'use client'` directive.

## Defining Custom Components

Custom Components are defined in your Payload Config using **Component Paths**. This keeps the config lightweight and Node-compatible.

```typescript
import { buildConfig } from 'payload'

const config = buildConfig({
  admin: {
    components: {
      logout: {
        Button: '/src/components/MyLogoutButton#MyComponent', // Named export
      },
    },
  },
})
```

### Component Path Syntax
- **Default Export**: `'/path/to/Component'`
- **Named Export**: `'/path/to/Component#ExportName'`
- **Object Syntax**:
  ```typescript
  Button: {
    path: '/path/to/Component',
    exportName: 'MyComponent',
    clientProps: { someProp: 'value' },
  }
  ```

## Import Map

Payload automatically generates an **Import Map** (at `admin/importMap.js`) to resolve these paths. It regenerates on startup or HMR. You can manually generate it with:
```bash
npx payload generate:importmap
```

## Building Custom Components

### Server Components (Default)
Server Components can use the Local API directly and receive `payload`, `i18n`, and `locale` as props.

```typescript
async function MyServerComponent({ payload, i18n, locale }) {
  const data = await payload.find({ collection: 'posts', locale })
  return <div>{data.totalDocs} posts found</div>
}
```

### Client Components
Add `'use client'` to use hooks like `useState`, `useEffect`, or Payload's UI hooks. Non-serializable props (like the full Payload class) are removed before being passed to Client Components.

## Essential Props & Hooks

### Accessing Config
- **Server**: Access via the `payload` prop: `payload.config`.
- **Client**: Use the `useConfig` hook:
  ```typescript
  const { config } = useConfig()
  ```

### Field Config
- **Server**: Received as `field` prop.
- **Client**: Received as `clientField` (serializable version).

### Translations & Locales
- **Server**: Use the `i18n` prop and `getTranslation`.
- **Client**: Use `useTranslation` and `useLocale` hooks.

## Styling
Import `.css` or `.scss` files directly into your components. Payload's BEM classes and CSS variables are available for consistent styling.

```scss
@import '~@payloadcms/ui/scss';
.my-custom-comp {
  background: var(--theme-elevation-100);
}
```

## Performance Best Practices
1. **Prefer Server Components**: Direct DB access and smaller client bundles.
2. **Selective Renders**: In Client Components, use `useFormFields` with a selector instead of `useAllFormFields` to prevent global re-renders.
3. **Implicit Boundaries**: Be mindful of what props are passed across the server/client boundary.
4. **Import Context**: 
   - Within Admin Panel: Import from `@payloadcms/ui`.
   - Within Frontend: Import from `@payloadcms/ui/path/to` for effective tree-shaking.
