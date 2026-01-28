# Preventing API Abuse

Payload includes built-in security features to protect your application from malicious activity and resource exhaustion.

## Authentication Security

### Limit Failed Login Attempts
To prevent brute-force attacks, you can limit how many times a user can fail to log in before their account is temporarily locked.

```typescript
// collection-config.ts
export const Users = {
  slug: 'users',
  auth: {
    maxLoginAttempts: 5, // Lock after 5 failed attempts
    lockTime: 600000, // Lock for 10 minutes (in milliseconds)
  },
  fields: [],
}
```

## Resource Management

### Max Depth
Large `depth` values in queries can cause performance issues or infinite loops in circular relationships. You can set a global `maxDepth` in your Payload Config.

```typescript
// payload.config.ts
export default buildConfig({
  // ...
  maxDepth: 10, // Defaults to 10
})
```

### GraphQL Complexity
Maliciously complex GraphQL queries can bog down your server. Payload allows you to set a `maxComplexity` limit.

- **Default field complexity**: 1
- **Relationship/Upload complexity**: 10

```typescript
// payload.config.ts
export default buildConfig({
  graphQL: {
    maxComplexity: 1000,
    // disable: true, // Recommended if you are not using GraphQL
  },
})
```

## Request Security

### CSRF & CORS
- **CSRF**: Verifies the authenticity of requests to prevent unauthorized actions from other sites.
- **CORS**: Defines which origins are allowed to interact with your API.

Configured via the main `buildConfig` object.

## Malicious File Uploads

If your application allows public uploads, consider these mitigations:
1. **Email Verification**: Require users to verify their email before they can upload files.
2. **Restrictive Access Control**: Ensure `create` and `update` permissions on upload collections are as tight as possible.
3. **Scan for Viruses**: Use a 3rd party scanning library within a `beforeChange` hook to inspect uploaded files.
4. **Content Security Policy (CSP)**: Implement strict CSP headers to prevent execution of certain file types.
