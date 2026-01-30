# Example: Localization (i18n)

Demonstrates how to handle multi-language content within a Payload application.

## Key Features
- **Locale Management**: Defines supported languages (e.g., English, Spanish).
- **Localized Fields**: Individual fields or entire documents can be marked as `localized: true`.
- **Search Integration**: Shows how to index content per locale.

## Core Configuration
```typescript
export default buildConfig({
  localization: {
    locales: [
      { label: 'English', code: 'en' },
      { label: 'Spanish', code: 'es' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
})
```

## Plugin Ecosystem
- **SEO/Search**: Configured to generate unique metadata and search results per language.
- **Frontend (next-intl)**: Seamlessly integrates with Next.js internationalization libraries to fetch the correct locale via API.
