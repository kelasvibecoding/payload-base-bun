import { getPayload } from 'payload'
import config from '../src/payload.config'

async function init() {
  console.log('Starting Payload to initialize DB...')
  const payload = await getPayload({ config })
  console.log('Payload initialized. Checking collections...')
  const { totalDocs } = await payload.count({ collection: 'users' })
  console.log(`Connection successful. User count: ${totalDocs}`)
  process.exit(0)
}

init().catch((e) => {
  console.error(e)
  process.exit(1)
})
