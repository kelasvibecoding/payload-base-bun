# Example: Custom Server (Express)

Demonstrates running Payload 3 with a custom Express server instead of the default Next.js server.

## Architecture
- **Next.js Custom Server**: Uses `next()` and `nextApp.getRequestHandler()` to bridge Express and Next.js.
- **Payload Initialization**: Uses `getPayload({ config })` within the server bootstrap.

## Bootstrap Sequence (`server.js`)
```javascript
import express from 'express'
import next from 'next'
import { getPayload } from 'payload'

const app = express()
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const payload = await getPayload({ config })
app.use(payload.authenticate)

app.all('*', (req, res) => nextHandler(req, res))

app.listen(3000)
```

## Use Cases
- When you need low-level middleware (e.g., custom proxying, legacy API support).
- When integrating with existing Express/Node.js ecosystems that require shared process space.
