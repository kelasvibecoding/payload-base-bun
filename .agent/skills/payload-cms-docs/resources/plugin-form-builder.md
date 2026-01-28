# Form Builder Plugin

The Form Builder plugin allows you to build and manage custom forms directly within the Payload Admin Panel. It stores submissions in your database and can trigger personalized emails upon submission.

## Installation

```bash
pnpm add @payloadcms/plugin-form-builder
```

## Basic Usage

Add the plugin to your `payload.config.ts`:

```typescript
import { buildConfig } from 'payload'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'

export default buildConfig({
  plugins: [
    formBuilderPlugin({
      fields: {
        text: true,
        textarea: true,
        select: true,
        email: true,
        checkbox: true,
      },
      redirectRelationships: ['pages'],
    }),
  ],
})
```

## Options

| Option | Description |
| :--- | :--- |
| **`fields`** | Specify which field types (Text, Checkbox, etc.) are available to editors. |
| **`formOverrides`** | Override the `forms` collection config. |
| **`formSubmissionOverrides`**| Override the `form-submissions` collection config. |
| **`beforeEmail`** | A hook to modify emails (e.g., adding custom HTML wrappers) before they are sent. |
| **`handlePayment`** | A hook to integrate with payment processors like Stripe when a form is submitted. |

## Dynamic Emails

The plugin supports dynamic, personalized emails using data from the form submission.
- Use `{{field_name}}` to insert a specific field's value.
- Use `{{*}}` to output all data as key-value pairs.
- Use `{{*:table}}` to output all data in an HTML table.

### Example: `beforeEmail` hook
```typescript
formBuilderPlugin({
  beforeEmail: (emails) => {
    return emails.map((email) => ({
      ...email,
      html: `<html><body>${email.html}</body></html>`,
    }))
  },
})
```

## Payment Processing

If you enable the `payment` field, you can calculate totals based on user input:

```typescript
import { getPaymentTotal } from '@payloadcms/plugin-form-builder'

formBuilderPlugin({
  handlePayment: async ({ form, submissionData }) => {
    const paymentField = form.fields.find(f => f.blockType === 'payment')
    const total = getPaymentTotal({
      basePrice: paymentField.basePrice,
      priceConditions: paymentField.priceConditions,
      fieldValues: submissionData,
    })
    // Now trigger Stripe/etc with 'total'
  },
})
```

## GraphQL Collisions
If your project already has a block or collection named `Country`, the plugin's `country` field might collide. Fix this by providing an `interfaceName`:

```typescript
formBuilderPlugin({
  fields: {
    country: {
      interfaceName: 'FormCountryBlock',
    },
  },
})
```

## Security Note
By default, the `forms` collection is public so that your frontend can fetch the schema to render inputs. However, the `emails` field within forms is restricted to authenticated users. Always review your `formOverrides.access` to ensure you aren't leaking contact data.
