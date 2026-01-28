# React Hooks

Payload provides a variety of powerful React Hooks for use within Custom Components (e.g., Custom Fields, Custom Views). These hooks allow you to interface with the Admin Panel's state and logic.

> **Important**: Payload components are React Server Components (RSC) by default. Hooks can only be used in **Client Components**. Add `'use client'` at the top of your file to use hooks.

## Field & Form Hooks

### useField
Used to manage a field's state and its connection to the parent form.

```typescript
'use client'
import { useField } from '@payloadcms/ui'

const CustomField = ({ path }) => {
  const { value, setValue, showError, errorMessage } = useField({ path })

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {showError && <p>{errorMessage}</p>}
    </div>
  )
}
```

### useFormFields
A performant way to retrieve specific fields from the form state using a selector. Components only re-render when the selected fields change.

```typescript
'use client'
import { useFormFields } from '@payloadcms/ui'

const MyComponent = () => {
  const amount = useFormFields(([fields, dispatch]) => fields.amount)
  return <span>Value: {amount?.value}</span>
}
```

### useAllFormFields
Retrieves the entire form state. Returns `[fields, dispatchFields]`.
*Warning: Causes re-renders on any field change.*

### useForm
Interacts with the form itself (submit, validate, reset, etc.). Optimized to avoid re-renders.

### useDocumentForm
Provides access to the top-level Form of a document. Useful when working within nested forms (like Lexical blocks).

---

## Document & UI Hooks

### useDocumentInfo
Provides comprehensive metadata about the document being edited.

| Property | Description |
| :--- | :--- |
| **id** | The ID of the document. |
| **collectionSlug** | The slug of the collection. |
| **docPermissions** | Current user permissions for this document. |
| **initialData** | The data the form was initialized with. |
| **isEditing** | Boolean: true if editing existing, false if creating. |

### useListQuery
Subscribe to data and query state within the **List View**.

### useSelection
Manage row selection in the List View (count, selectAll, toggleAll).

### useCollapsible
Control and track the state of parent collapsible elements.

---

## Utility & Auth Hooks

### useAuth
Access the currently logged-in user, their token, and auth methods.

```typescript
'use client'
import { useAuth } from '@payloadcms/ui'

const Greeting = () => {
  const { user, logOut } = useAuth()
  return <div>Hello, {user?.email} <button onClick={logOut}>Logout</button></div>
}
```

### useConfig
Retrieve the Payload Client Config or a specific entity config via `getEntityConfig`.

### useLocale
Get the current selected locale object (`label`, `code`, `rtl`).

### useTheme
Manage the Admin Panel theme (`light`, `dark`, `auto`).

### usePayloadAPI
A reactive utility for making REST API requests to Payload.

```typescript
const [{ data, isLoading }, { setParams }] = usePayloadAPI('/api/posts', {
  initialParams: { depth: 1 },
})
```

### useStepNav
Programmatically update the breadcrumb links in the app header.

### useTableColumns
Manipulate table columns in the List View (move, toggle, reset).

### useDocumentEvents
Subscribe to document lifecycle events (updates outside the current scope).

### useRouteTransition
Trigger or subscribe to the Admin Panel's page transition state.
