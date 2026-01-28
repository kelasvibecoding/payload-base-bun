# Cookie Strategy

The primary authentication strategy for the Payload Admin Panel is the use of **HTTP-only cookies**. These cookies are secure, protected from XSS attacks, and are automatically included in requests by modern browsers.

## Using Cookies in External Apps

When using `fetch` or other APIs to communicate with Payload from your own frontend, you must explicitly enable credential sharing to include the authentication cookies.

```javascript
// Fetch example including cookies
const res = await fetch('https://your-api.com/api/posts', {
  credentials: 'include',
})
```

## Security & CSRF Prevention

Because browsers automatically attach cookies to requests to a matching domain, apps using cookie-based auth are vulnerable to **Cross-Site Request Forgery (CSRF)**.

### Whitelisting Domains
To prevent CSRF, use the `csrf` property in your Payload Config to whitelist trusted domains. If a request comes from an origin not in this list, cookie-based authentication will be ignored.

```typescript
// payload.config.ts
export default buildConfig({
  csrf: [
    'https://my-frontend-app.com',
    'https://another-trusted-site.com',
  ],
})
```

## Cross-Domain Authentication

By default, browsers block "third-party" cookies. If your frontend and API are on different top-level domains, you have two main solutions:

### 1. Same-Domain (Subdomains)
Use subdomains to avoid third-party cookie restrictions.
- API: `api.example.com`
- Frontend: `app.example.com`

### 2. Manual Cookie Configuration
If you must use different domains, you can allow cross-site cookies by setting `sameSite: 'None'` and `secure: true`.

```typescript
// Collection Config
export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    cookies: {
      sameSite: 'None', // Required for cross-domain
      secure: process.env.NODE_ENV === 'production', // Must be true for 'None'
      domain: '.example.com', // Optional: share across subdomains
    },
  },
}
```

> **Important**: When using `sameSite: 'None'`, the `secure` flag **must** be `true`, which requires an HTTPS connection. For local development on HTTP, you should conditionally disable these settings.
