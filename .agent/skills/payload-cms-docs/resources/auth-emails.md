# Authentication Emails

Payload's authentication system integrates with its email functionality to handle user verification and password resets. You can customize the email templates, subjects, and behaviors to match your brand.

## Email Verification

Email verification requires users to prove access to their email address before they can authenticate. To enable it, set `auth.verify: true`.

```typescript
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ req, token, user }) => {
        const url = `https://your-app.com/verify?token=${token}`
        return `Hello ${user.email}, verify your account here: ${url}`
      },
      generateEmailSubject: ({ user }) => 'Verify your account',
    },
  },
}
```

### Verification Options

| Field | Description |
| :--- | :--- |
| **generateEmailHTML** | Function that returns the HTML string for the verification email. |
| **generateEmailSubject** | Function that returns the subject line for the verification email. |

---

## Forgot Password

You can customize the "Forgot Password" workflow via the `auth.forgotPassword` property.

```typescript
export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    forgotPassword: {
      expiration: 3600000, // Token valid for 1 hour (in ms)
      generateEmailHTML: ({ req, token, user }) => {
        const resetURL = `https://your-app.com/reset-password?token=${token}`
        return `Click here to reset your password: ${resetURL}`
      },
      generateEmailSubject: () => 'Reset your password',
    },
  },
}
```

### Forgot Password Options

| Field | Description |
| :--- | :--- |
| **expiration** | How long the reset token remains valid (in milliseconds). |
| **generateEmailHTML** | Function to return the HTML content of the reset email. |
| **generateEmailSubject** | Function to return the subject of the reset email. |

---

## Custom Frontend Integration

If you send users to a custom frontend (outside the Payload Admin Panel) for verification or password resets:

1.  **Verification**: Your frontend must capture the `token` from the URL and call the Payload `verify` operation (REST or GraphQL) to programmatically activate the user.
2.  **Reset Password**: Your frontend must capture the `token` and new `password`, then call the Payload `reset-password` operation.

### Default Admin Links
If you just want to use the built-in Admin Panel pages:
- **Reset**: `${serverURL}/admin/reset/${token}`
- **Verify**: (Handled automatically if `verify: true` and no custom HTML is provided)

> **Tip**: You can use any HTML templating engine (like EJS or Handlebars) inside `generateEmailHTML` to create complex, reusable email layouts.
