# Global Configs

Globals are in many ways similar to Collections, except that they correspond to only a single Document. You can define as many Globals as your application needs. Each Global Document is stored in the Database based on the Fields that you define, and automatically generates a Local API, REST API, and GraphQL API used to manage your Documents.

Globals are the primary way to structure singletons in Payload, such as a header navigation, site-wide banner alerts, or app-wide localized strings. Each Global can have its own unique Access Control, Hooks, Admin Options, and more.

To define a Global Config, use the `globals` property in your Payload Config:

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  // ...
  globals: [
    
    // Your Globals go here
  ],
})
```

> **Tip**: If you have more than one Global that share the same structure, consider using a Collection instead.

## Config Options

It's often best practice to write your Globals in separate files and then import them into the main Payload Config.

Here is what a simple Global Config might look like:

```typescript
import { GlobalConfig } from 'payload'

export const Nav: GlobalConfig = {
  slug: 'nav',
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 8,
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages', // "pages" is the slug of an existing collection
          required: true,
        },
      ],
    },
  ],
}
```

> **Reminder**: For more complex examples, see the Templates and Examples directories in the Payload repository.

The following options are available:

| Option | Description |
| :--- | :--- |
| **access** | Provide Access Control functions to define exactly who should be able to do what with this Global. |
| **admin** | The configuration options for the Admin Panel. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |
| **dbName** | Custom table or collection name for this Global depending on the Database Adapter. Auto-generated from slug if not defined. |
| **description** | Text or React component to display below the Global header to give editors more information. |
| **endpoints** | Add custom routes to the REST API. |
| **fields \*** | Array of field types that will determine the structure and functionality of the data stored within this Global. |
| **graphQL** | Manage GraphQL-related properties related to this global. |
| **hooks** | Entry point for Hooks. |
| **label** | Text for the name in the Admin Panel or an object with keys for each language. Auto-generated from slug if not defined. |
| **lockDocuments** | Enables or disables document locking. By default, document locking is enabled. Set to an object to configure, or set to false to disable locking. |
| **slug \*** | Unique, URL-friendly string that will act as an identifier for this Global. |
| **typescript** | An object with property interface as the text used in schema generation. Auto-generated from slug if not defined. |
| **versions** | Set to true to enable default options, or configure with object properties. |
| **forceSelect** | Specify which fields should be selected always, regardless of the select query which can be useful that the field exists for access control / hooks. |

> `*` An asterisk denotes that a property is required.

## Fields

Fields define the schema of the Global. To learn more, go to the Fields documentation.

## Access Control

Global Access Control determines what a user can and cannot do with any given Global Document. To learn more, go to the Access Control documentation.

## Hooks

Global Hooks allow you to tie into the lifecycle of your Documents so you can execute your own logic during specific events. To learn more, go to the Hooks documentation.

## Admin Options

The behavior of Globals within the Admin Panel can be fully customized to fit the needs of your application. This includes grouping or hiding their navigation links, adding Custom Components, setting page metadata, and more.

To configure Admin Options for Globals, use the `admin` property in your Global Config:

```typescript
import { GlobalConfig } from 'payload'

export const MyGlobal: GlobalConfig = {
  // ...
  admin: {
    
    // ...
  },
}
```

The following options are available:

| Option | Description |
| :--- | :--- |
| **group** | Text or localization object used to group Collection and Global links in the admin navigation. Set to `false` to hide the link from the navigation while keeping its routes accessible. |
| **hidden** | Set to `true` or a function, called with the current user, returning `true` to exclude this Global from navigation and admin routing. |
| **components** | Swap in your own React components to be used within this Global. |
| **preview** | Function to generate a preview URL within the Admin Panel for this Global that can point to your app. |
| **livePreview** | Enable real-time editing for instant visual feedback of your front-end application. |
| **hideAPIURL** | Hides the "API URL" meta field while editing documents within this collection. |
| **meta** | Page metadata overrides to apply to this Global within the Admin Panel. |

### Custom Components

Globals can set their own Custom Components which only apply to Global-specific UI within the Admin Panel. This includes elements such as the Save Button, or entire layouts such as the Edit View.

To override Global Components, use the `admin.components` property in your Global Config:

```typescript
import type { SanitizedGlobalConfig } from 'payload'

export const MyGlobal: SanitizedGlobalConfig = {
  // ...
  admin: {
    components: {
      
      // ...
    },
  },
}
```

The following options are available:

### General

| Option | Description |
| :--- | :--- |
| **elements** | Override or create new elements within the Edit View. |
| **views** | Override or create new views within the Admin Panel. |

### Edit View Options

```typescript
import type { SanitizedGlobalConfig } from 'payload'

export const MyGlobal: SanitizedGlobalConfig = {
  // ...
  admin: {
    components: {
      elements: {
        
        // ...
      },
    },
  },
}
```

The following options are available:

| Option | Description |
| :--- | :--- |
| **beforeDocumentControls** | Inject custom components before the Save button. |
| **Description** | A component to render below the Global label in the Edit View. |
| **SaveButton** | Replace the default Save Button with a Custom Component. Drafts must be disabled. |
| **SaveDraftButton** | Replace the default Save Draft Button with a Custom Component. Drafts must be enabled and autosave must be disabled. |
| **PublishButton** | Replace the default Publish Button with a Custom Component. Drafts must be enabled. |
| **PreviewButton** | Replace the default Preview Button with a Custom Component. Preview must be enabled. |
| **Status** | Replace the default Status component with a Custom Component. Drafts must be enabled. |

> **Note**: For details on how to build Custom Components, see Building Custom Components.

## GraphQL

You can completely disable GraphQL for this global by passing `graphQL: false` to your global config. This will completely disable all queries, mutations, and types from appearing in your GraphQL schema.

You can also pass an object to the global's `graphQL` property, which allows you to define the following properties:

| Option | Description |
| :--- | :--- |
| **name** | Override the name that will be used in GraphQL schema generation. |
| **disableQueries** | Disable all GraphQL queries that correspond to this global by passing true. |
| **disableMutations** | Disable all GraphQL mutations that correspond to this global by passing true. |

## TypeScript

You can import types from Payload to help make writing your Global configs easier and type-safe. There are two main types that represent the Global Config, `GlobalConfig` and `SanitizedGlobalConfig`.

The `GlobalConfig` type represents a raw Global Config in its full form, where only the bare minimum properties are marked as required. The `SanitizedGlobalConfig` type represents a Global Config after it has been fully sanitized. Generally, this is only used internally by Payload.

```typescript
import type { GlobalConfig, SanitizedGlobalConfig } from 'payload'
```
