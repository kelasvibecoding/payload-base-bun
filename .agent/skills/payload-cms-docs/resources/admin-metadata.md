# Page Metadata

The Payload Admin Panel automatically generates dynamic metadata for its pages (titles, descriptions, Open Graph data, etc.). This metadata is fully configurable and cascades from the root level down to individual collections, globals, and custom views.

Payload uses Next.js' `generateMetadata` function internally, so all standard [Next.js Metadata options](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) are available.

## Metadata Scopes

Metadata is applied in a cascading fashion:
1. **Root Metadata**: Sets defaults for the entire Admin Panel.
2. **Collection Metadata**: Applied to all views within a specific collection.
3. **Global Metadata**: Applied to all views within a specific global.
4. **View Metadata**: Applied to individual custom views (overrides everything else).

---

## Root Metadata

Configure base metadata in the `admin.meta` property of your Payload Config:

```typescript
export default buildConfig({
  admin: {
    meta: {
      title: 'My Admin Panel',
      description: 'Custom description for the dashboard',
      titleSuffix: '- My Brand', // Appended to every page title
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/favicon.png',
        },
      ],
    },
  },
})
```

### Key Options

| Option | Type | Description |
| :--- | :--- | :--- |
| **titleSuffix** | string | Suffix appended to the end of every page title (Default: "- Payload"). |
| **defaultOGImageType** | string | Options: `dynamic` (Next.js generated), `static`, or `off`. |
| **icons** | array | Configuration for `<link>` tags (favicons, apple-touch-icons, etc.). |
| **openGraph** | object | Standard Open Graph tags for social sharing. |
| **robots** | string | Controls the robots meta tag (Default: "noindex, nofollow"). |

---

## Icons

Define multiple icons in the `icons` array:

```typescript
meta: {
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-icon.png' },
  ]
}
```

## Open Graph

Customize how your Admin Panel looks when shared:

```typescript
meta: {
  openGraph: {
    title: 'Management Dashboard',
    siteName: 'My Project',
    images: [{ url: '/og-image.jpg' }],
  }
}
```

---

## Preventing Crawling

By default, Payload sets `robots: 'noindex, nofollow'`. To completely prevent search engines from crawling the admin path, add a `robots.txt` file to your root directory:

```text
User-agent: *
Disallow: /admin/
```

---

## Collection & Global Metadata

You can override root metadata for specific Collections or Globals:

```typescript
// Collection Config
export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    meta: {
      title: 'Blog Management',
      description: 'Editing and viewing all blog posts',
    },
  },
}

// Global Config
export const Settings: GlobalConfig = {
  slug: 'settings',
  admin: {
    meta: {
      title: 'Site Settings',
    },
  },
}
```

## View Metadata

Metadata can be set on individual custom views:

```typescript
admin: {
  views: {
    dashboard: {
      meta: {
        title: 'Overview',
      }
    },
  },
}
```
