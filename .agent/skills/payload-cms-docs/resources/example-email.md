# Example: Email Integration

Shows how to configure Payload to send emails for authentication and custom hooks.

## Key Features
- **Adapters**: Uses `@payloadcms/email-nodemailer` for SMTP/SendGrid/etc.
- **Mocking**: Defaults to `ethereal.email` for zero-config development.
- **Templates**: Shows how to generate HTML emails with custom templates.

## Implementation Samples

### 1. Triggering Emails via Hooks
Automatically send a welcome email when a user joins the newsletter.
```typescript
// collections/Newsletter.ts
hooks: {
  afterChange: [
    async ({ doc, operation, req }) => {
      if (operation === 'create') {
        await req.payload.sendEmail({
          to: doc.email,
          subject: 'Thanks for signing up!',
          html: await generateEmailHTML({
            headline: 'Welcome!',
            content: `<p>Hi ${doc.name}, we'll be in touch soon...</p>`,
          }),
        })
      }
    },
  ],
}
```

### 2. Custom HTML Template Generation
Using EJS and Juice to create responsive, inlined HTML emails.
```typescript
// email/generateEmailHTML.ts
import ejs from 'ejs'
import juice from 'juice'

export const generateEmailHTML = async (data: any): Promise<string> => {
  const templateStr = fs.readFileSync('src/email/template.ejs', 'utf8')
  const html = ejs.render(templateStr, data)
  return juice(html) // Inline CSS for email client compatibility
}
```

## Use Cases
1. **Auth Emails**: Automatically sends "Forgot Password" and "User Verification" emails via the `auth` config.
2. **Newsletter Signups**: Real-time notifications for marketing collections.
3. **Workflow Alerts**: Informing admins when a document enters a specific state (e.g., "Ready for Review").
