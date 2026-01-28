# Email Functionality

Payload uses email adapters to handle all outgoing mail, including authentication emails (password resets, verification) and custom emails triggered by your application logic.

## Official Adapters

| Adapter | Package | Description |
| :--- | :--- | :--- |
| **Nodemailer** | `@payloadcms/email-nodemailer` | Supports SMTP, SendGrid, and any standard Nodemailer transport. |
| **Resend** | `@payloadcms/email-resend` | Preferred for serverless environments (e.g., Vercel) as it uses a lightweight REST API. |

## Configuration

Adapters are configured in the `email` property of your root Payload config.

### Nodemailer (SMTP)
```typescript
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

export default buildConfig({
  email: nodemailerAdapter({
    defaultFromAddress: 'info@payloadcms.com',
    defaultFromName: 'Payload',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
})
```

### Resend
```typescript
import { resendAdapter } from '@payloadcms/email-resend'

export default buildConfig({
  email: resendAdapter({
    defaultFromAddress: 'dev@payloadcms.com',
    defaultFromName: 'Payload CMS',
    apiKey: process.env.RESEND_API_KEY,
  }),
})
```

## Sending Emails
You can send emails from anywhere you have access to the `payload` object.

```typescript
const email = await payload.sendEmail({
  to: 'test@example.com',
  subject: 'Hello from Payload',
  html: '<p>This is a <strong>test</strong> email.</p>',
})
```

## Attachments

### With Nodemailer
Nodemailer accepts file paths, buffers, or streams.

```typescript
await payload.sendEmail({
  to: 'user@example.com',
  subject: 'Your Report',
  attachments: [
    {
      filename: 'report.pdf',
      path: '/path/to/local/file.pdf',
    },
    {
      filename: 'data.csv',
      content: Buffer.from('id,name\n1,Test'),
    }
  ]
})
```

### With Resend
Resend expects remote URLs or Base64 encoded strings for content.

```typescript
await payload.sendEmail({
  to: 'user@example.com',
  subject: 'Invoice',
  attachments: [
    {
      path: 'https://example.com/invoice-123.pdf',
      filename: 'invoice.pdf',
    },
    {
      filename: 'note.txt',
      content: Buffer.from('Some text').toString('base64'),
    }
  ]
})
```

## Development (Ethereal Email)
If you use `nodemailerAdapter()` without arguments during development, Payload will automatically generate a test account on [Ethereal.email](https://ethereal.email) and log the credentials/preview link to your console.
