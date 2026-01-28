# Edit View

The Edit View is where users interact with individual Collection and Global Documents. It contains the form for submitting data, along with controls for saving, publishing, and previewing content.

You can either replace the entire Edit View with a **Custom View** or inject **Custom Components** into specific parts of the existing layout.

## Replacing the Entire Edit View

To swap out the entire Edit View, use the `views.edit.default` property in your Collection or Global Config.

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  admin: {
    components: {
      views: {
        edit: {
          default: {
            Component: '/path/to/MyCustomEditView',
          },
        },
      },
    },
  },
})
```

## Overriding Individual Components

You can override specific UI elements within the default Edit View. The configuration key differs slightly between Collections and Globals:

- **Collections**: `admin.components.edit`
- **Globals**: `admin.components.elements`

### Available Component Overrides

| Option | Description |
| :--- | :--- |
| **beforeDocumentControls** | Injected before the Save/Publish/Preview buttons. |
| **editMenuItems** | Injected into the 3-dot (kebab) menu dropdown. |
| **SaveButton** | Replaces the default Save button. |
| **SaveDraftButton** | Replaces the default Save Draft button. |
| **PublishButton** | Replaces the default Publish button. |
| **PreviewButton** | Replaces the default Preview button. |
| **Description** | Custom description displayed below the title. |
| **Status** | Component representing the document's status. |
| **Upload** | Custom file upload interface (upload-enabled collections only). |

---

## Component Details

### Before Document Controls
Use this to add custom buttons or status indicators next to the primary document actions.

```tsx
export function MyCustomAction({ id }) {
  return <button type="button">Custom Action for {id}</button>
}
```

### Edit Menu Items
Items added here appear at the bottom of the 3-dot dropdown menu. Use Payload's `PopupList.Button` for consistent styling.

```tsx
'use client'
import { PopupList } from '@payloadcms/ui'

export const MyMenuItem = () => (
  <PopupList.ButtonGroup>
    <PopupList.Button onClick={() => console.log('Clicked!')}>
      Custom Menu Item
    </PopupList.Button>
  </PopupList.ButtonGroup>
)
```

### Save / Publish Buttons
You can replace these buttons while still leveraging Payload's internal logic by importing the original components from `@payloadcms/ui`.

```tsx
import { SaveButton } from '@payloadcms/ui'

export function CustomSaveButton(props) {
  return <SaveButton label="Done" />
}
```

### Description
The Description component is shared between the Edit View and the List View.

```typescript
export const MyCollection: CollectionConfig = {
  admin: {
    components: {
      edit: {
        Description: '/components/MyCustomDescription',
      },
    },
  },
}
```

### Uploads
Custom upload components must integrate with Payload's form system. It is recommended to use the built-in `Upload` component from `@payloadcms/ui` and wrap it with your custom logic.

```tsx
'use client'
import { Upload, useDocumentInfo } from '@payloadcms/ui'

export const MyCustomUpload = () => {
  const { collectionSlug, docConfig, initialState } = useDocumentInfo()
  return (
    <Upload
      collectionSlug={collectionSlug}
      initialState={initialState}
      uploadConfig={'upload' in docConfig ? docConfig.upload : undefined}
    />
  )
}
```
