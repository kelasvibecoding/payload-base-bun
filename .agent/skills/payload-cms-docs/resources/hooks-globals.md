# Global Hooks

Global Hooks are Hooks that run on Global Documents. They allow you to execute your own logic during specific events of the Document lifecycle.

To add Hooks to a Global, use the `hooks` property in your Global Config:

```typescript
import type { GlobalConfig } from 'payload'

export const GlobalWithHooks: GlobalConfig = {
  // ...
  hooks: {
    beforeOperation: [(args) => {...}],
    beforeValidate: [(args) => {...}],
    beforeChange: [(args) => {...}],
    beforeRead: [(args) => {...}],
    afterChange: [(args) => {...}],
    afterRead: [(args) => {...}],
  }
}
```

> **Tip**: You can also set hooks on the field-level to isolate hook logic to specific fields.

## Config Options

All Global Hooks accept an array of synchronous or asynchronous functions. Each Global Hook receives specific arguments based on its own type, and has the ability to modify specific outputs.

## beforeOperation

The `beforeOperation` hook can be used to modify the arguments that operations accept or execute side-effects that run before an operation begins.

```typescript
import type { GlobalBeforeOperationHook } from 'payload'

const beforeOperationHook: GlobalBeforeOperationHook = async ({
  args,
  operation,
  req,
}) => {
  return args // return modified operation arguments as necessary
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **global** | The Global in which this Hook is running against. Available operation include: countVersions, read, restoreVersion, and update. |
| **context** | Custom context passed between Hooks. |
| **operation** | The name of the operation that this hook is running within. |
| **req** | The Web Request object. This is mocked for Local API operations. |

## beforeValidate

Runs during the update operation. This hook allows you to add or format data before the incoming data is validated server-side.

```typescript
import type { GlobalBeforeValidateHook } from 'payload'
import type { SiteSettings } from '@/payload-types'

const beforeValidateHook: GlobalBeforeValidateHook<SiteSettings> = async ({
  data, // Typed as Partial<SiteSettings>
  req,
  originalDoc, // Typed as SiteSettings
}) => {
  return data
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **global** | The Global in which this Hook is running against. |
| **context** | Custom context passed between Hooks. |
| **data** | The incoming data passed through the operation. |
| **originalDoc** | The Document before changes are applied. |
| **req** | The Web Request object. This is mocked for Local API operations. |

## beforeChange

Immediately following validation, `beforeChange` hooks will run within the update operation. At this stage, you can be confident that the data that will be saved to the document is valid in accordance to your field validations.

```typescript
import type { GlobalBeforeChangeHook } from 'payload'
import type { SiteSettings } from '@/payload-types'

const beforeChangeHook: GlobalBeforeChangeHook<SiteSettings> = async ({
  data, // Typed as Partial<SiteSettings>
  req,
  originalDoc, // Typed as SiteSettings
}) => {
  return data
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **global** | The Global in which this Hook is running against. |
| **context** | Custom context passed between hooks. |
| **data** | The incoming data passed through the operation. |
| **originalDoc** | The Document before changes are applied. |
| **req** | The Web Request object. This is mocked for Local API operations. |

## afterChange

After a global is updated, the `afterChange` hook runs. Use this hook to purge caches of your applications, sync site data to CRMs, and more.

```typescript
import type { GlobalAfterChangeHook } from 'payload'
import type { SiteSettings } from '@/payload-types'

const afterChangeHook: GlobalAfterChangeHook<SiteSettings> = async ({
  doc, // Typed as SiteSettings
  previousDoc, // Typed as SiteSettings
  req,
}) => {
  return doc
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **global** | The Global in which this Hook is running against. |
| **context** | Custom context passed between hooks. |
| **data** | The incoming data passed through the operation. |
| **doc** | The resulting Document after changes are applied. |
| **previousDoc** | The Document before changes were applied. |
| **req** | The Web Request object. This is mocked for Local API operations. |

## beforeRead

Runs before findOne global operation is transformed for output by afterRead. This hook fires before hidden fields are removed and before localized fields are flattened into the requested locale.

```typescript
import type { GlobalBeforeReadHook } from 'payload'

const beforeReadHook: GlobalBeforeReadHook = async ({
  doc,
  req,
}) => {...}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **global** | The Global in which this Hook is running against. |
| **context** | Custom context passed between hooks. |
| **doc** | The resulting Document after changes are applied. |
| **req** | The Web Request object. This is mocked for Local API operations. |

## afterRead

Runs as the last step before a global is returned. Flattens locales, hides protected fields, and removes fields that users do not have access to.

```typescript
import type { GlobalAfterReadHook } from 'payload'
import type { SiteSettings } from '@/payload-types'

const afterReadHook: GlobalAfterReadHook<SiteSettings> = async ({
  doc, // Typed as SiteSettings
  req,
  findMany,
}) => {
  return doc
}
```

**Arguments:**

| Option | Description |
| :--- | :--- |
| **global** | The Global in which this Hook is running against. |
| **context** | Custom context passed between hooks. |
| **findMany** | Boolean to denote if this hook is running against finding one, or finding many (useful in versions). |
| **doc** | The resulting Document after changes are applied. |
| **query** | The Query of the request. |
| **req** | The Web Request object. This is mocked for Local API operations. |

## TypeScript

Payload exports a type for each Global hook:

```typescript
import type {
  GlobalBeforeValidateHook,
  GlobalBeforeChangeHook,
  GlobalAfterChangeHook,
  GlobalBeforeReadHook,
  GlobalAfterReadHook,
} from 'payload'
```

You can also pass a generic type to each hook for strongly-typed `doc`, `previousDoc`, and `data` properties:

```typescript
import type { GlobalAfterChangeHook } from 'payload'
import type { SiteSettings } from '@/payload-types'

const afterChangeHook: GlobalAfterChangeHook<SiteSettings> = async ({
  doc, // Typed as SiteSettings
  previousDoc, // Typed as SiteSettings
}) => {
  return doc
}
```
