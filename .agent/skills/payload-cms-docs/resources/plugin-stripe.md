# Stripe Plugin

The Stripe plugin provides a two-way communication channel between Payload and Stripe. It allows you to sync data (like Customers or Products), proxy the Stripe REST API through Payload's Access Control, and handle webhooks seamlessly.

## Installation

```bash
pnpm add @payloadcms/plugin-stripe
```

## Basic Usage

Add the plugin to your `payload.config.ts`:

```typescript
import { buildConfig } from 'payload'
import { stripePlugin } from '@payloadcms/plugin-stripe'

export default buildConfig({
  plugins: [
    stripePlugin({
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
      stripeWebhooksEndpointSecret: process.env.STRIPE_WEBHOOKS_ENDPOINT_SECRET,
    }),
  ],
})
```

## Core Features
- **Data Syncing**: Automatically map Payload collection fields to Stripe resource properties.
- **Webhook Handlers**: Easily react to Stripe events like `customer.subscription.updated`.
- **REST Proxy**: Securely call the Stripe API from your frontend via a Payload endpoint.
- **Stripe ID Management**: Automatically maintains a `stripeID` field for cross-referencing.

## Syncing Data

The `sync` option automates field mapping. As documents are changed in either platform, the changes are reflected on the other side.

```typescript
stripePlugin({
  sync: [
    {
      collection: 'customers',
      stripeResourceType: 'customers',
      stripeResourceTypeSingular: 'customer',
      fields: [
        {
          fieldPath: 'name', // Field in Payload
          stripeProperty: 'name', // Property in Stripe
        },
      ],
    },
  ],
})
```

## Webhooks

To handle events sent from Stripe to your application:

1. **Development**: Use the Stripe CLI to listen: `stripe listen --forward-to localhost:3000/api/stripe/webhooks`.
2. **Configuration**: Define handlers for specific events:

```typescript
stripePlugin({
  webhooks: {
    'customer.subscription.updated': async ({ event, stripe }) => {
      // Handle the subscription update
    },
  },
})
```

## REST Proxy

The plugin opens a `/api/stripe/rest` endpoint. This allows you to call Stripe methods from the client without exposing your secret key.

> **Warning**: The guest REST proxy should only be used in development. In production, use the `stripeProxy` function within your own secure server-side endpoints.

### Client-side Example
```javascript
const res = await fetch('/api/stripe/rest', {
  method: 'POST',
  body: JSON.stringify({
    stripeMethod: 'customers.create',
    stripeArgs: [{ email: 'user@example.com' }],
  }),
})
```

### Server-side Example
```typescript
import { stripeProxy } from '@payloadcms/plugin-stripe'

const customer = await stripeProxy({
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripeMethod: 'customers.create',
  stripeArgs: [{ email: 'user@example.com' }],
})
```

## Security Note
Ensure that your `stripeSecretKey` and `stripeWebhooksEndpointSecret` are stored securely in your environment variables and never committed to version control.
