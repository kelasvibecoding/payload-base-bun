# Collection Configs

A Collection is a group of records, called Documents, that all share a common schema. You can define as many Collections as your application needs. Each Document in a Collection is stored in the Database based on the Fields that you define, and automatically generates a Local API, REST API, and GraphQL API used to manage your Documents.

Collections are also used to achieve Authentication in Payload. By defining a Collection with `auth` options, that Collection receives additional operations to support user authentication.

Collections are the primary way to structure recurring data in your application, such as users, products, pages, posts, and other types of content that you might want to manage. Each Collection can have its own unique Access Control, Hooks, Admin Options, and more.

To define a Collection Config, use the `collections` property in your Payload Config:

```typescript
import { buildConfig } from 'payload'

export default buildConfig({
  // ...
  collections: [
    
    // Your Collections go here
  ],
})
```

> **Tip**: If your Collection is only ever meant to contain a single Document, consider using a Global instead.

## Config Options

It's often best practice to write your Collections in separate files and then import them into the main Payload Config.

Here is what a simple Collection Config might look like:

```typescript
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
```

> **Reminder**: For more complex examples, see the Templates and Examples directories in the Payload repository.

The following options are available:

| Option | Description |
| :--- | :--- |
| **admin** | The configuration options for the Admin Panel. |
| **access** | Provide Access Control functions to define exactly who should be able to do what with Documents in this Collection. |
| **auth** | Specify options if you would like this Collection to feature authentication. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |
| **disableDuplicate** | When true, do not show the "Duplicate" button while editing documents within this Collection and prevent duplicate from all APIs. |
| **defaultSort** | Pass a top-level field to sort by default in the Collection List View. Prefix the name of the field with a minus symbol ("-") to sort in descending order. Multiple fields can be specified by using a string array. |
| **dbName** | Custom table or Collection name depending on the Database Adapter. Auto-generated from slug if not defined. |
| **endpoints** | Add custom routes to the REST API. Set to false to disable routes. |
| **fields \*** | Array of field types that will determine the structure and functionality of the data stored within this Collection. |
| **graphQL** | Manage GraphQL-related properties for this collection. |
| **hooks** | Entry point for Hooks. |
| **orderable** | If true, enables custom ordering for the collection, and documents can be reordered via drag and drop. Uses orderable for efficient reordering. |
| **labels** | Singular and plural labels for use in identifying this Collection throughout Payload. Auto-generated from slug if not defined. |
| **enableQueryPresets** | Enable query presets for this Collection. |
| **lockDocuments** | Enables or disables document locking. By default, document locking is enabled. Set to an object to configure, or set to false to disable locking. |
| **slug \*** | Unique, URL-friendly string that will act as an identifier for this Collection. |
| **timestamps** | Set to false to disable documents' automatically generated createdAt and updatedAt timestamps. |
| **trash** | A boolean to enable soft deletes for this collection. Defaults to false. |
| **typescript** | An object with property interface as the text used in schema generation. Auto-generated from slug if not defined. |
| **upload** | Specify options if you would like this Collection to support file uploads. For more, consult the Uploads documentation. |
| **versions** | Set to true to enable default options, or configure with object properties. |
| **defaultPopulate** | Specify which fields to select when this Collection is populated from another document. |
| **indexes** | Define compound indexes for this collection. This can be used to either speed up querying/sorting by 2 or more fields at the same time or to ensure uniqueness between several fields. |
| **forceSelect** | Specify which fields should be selected always, regardless of the select query which can be useful that the field exists for access control / hooks. |
| **disableBulkEdit** | Disable the bulk edit operation for the collection in the admin panel and the REST API |

> `*` An asterisk denotes that a property is required.

## Fields

Fields define the schema of the Documents within a Collection. To learn more, go to the Fields documentation.

## Access Control

Collection Access Control determines what a user can and cannot do with any given Document within a Collection. To learn more, go to the Access Control documentation.

## Hooks

Collection Hooks allow you to tie into the lifecycle of your Documents so you can execute your own logic during specific events. To learn more, go to the Hooks documentation.

## Orderable

When `orderable` is enabled, Payload uses fractional indexing to efficiently manage document order. When enabled on collections, this allows you to manually drag and drop documents in the Admin Panel to reorder them, as well as programmatically set the order of documents via the Local API, REST API, or GraphQL API.

Orderable can also be added to joins fields.

### Fractional indexing

If you need to generate order keys programmatically (e.g., when creating documents via the Local API with a specific order), you can import the utilities directly:

```typescript
import { generateKeyBetween, generateNKeysBetween } from 'payload/shared'

// Generate a key between two existing keys (or null for start/end)
const newKey = generateKeyBetween('a0', 'a1')

// Generate a key at the start (before 'a0')
const startKey = generateKeyBetween(null, 'a0')

// Generate a key at the end (after 'a1')
const endKey = generateKeyBetween('a1', null)

// Generate multiple keys between two existing keys
const keys = generateNKeysBetween('a0', 'a1', 5)
```

These utilities are useful when you need fine-grained control over document ordering, such as inserting documents at specific positions or batch-creating documents with predetermined order.

## Admin Options

The behavior of Collections within the Admin Panel can be fully customized to fit the needs of your application. This includes grouping or hiding their navigation links, adding Custom Components, selecting which fields to display in the List View, and more.

To configure Admin Options for Collections, use the `admin` property in your Collection Config:

```typescript
import type { CollectionConfig } from 'payload'

export const MyCollection: CollectionConfig = {
  // ...
  admin: {
    
    // ...
  },
}
```

The following options are available:

| Option | Description |
| :--- | :--- |
| **group** | Text or localization object used to group Collection and Global links in the admin navigation. Set to false to hide the link from the navigation while keeping its routes accessible. |
| **hidden** | Set to true or a function, called with the current user, returning true to exclude this Collection from navigation and admin routing. |
| **hooks** | Admin-specific hooks for this Collection. |
| **useAsTitle** | Specify a top-level field to use for a document title throughout the Admin Panel. If no field is defined, the ID of the document is used as the title. |
| **description** | Text to display below the Collection label in the List View to give editors more information. Alternatively, you can use the admin.components.Description to render a React component. |
| **defaultColumns** | Array of field names that correspond to which columns to show by default in this Collection's List View. |
| **disableCopyToLocale** | Disables the "Copy to Locale" button while editing documents within this Collection. Only applicable when localization is enabled. |
| **groupBy** | Beta. Enable grouping by a field in the list view. |
| **hideAPIURL** | Hides the "API URL" meta field while editing documents within this Collection. |
| **enableRichTextLink** | The Rich Text field features a Link element which allows for users to automatically reference related documents within their rich text. Set to true by default. |
| **enableRichTextRelationship** | The Rich Text field features a Relationship element which allows for users to automatically reference related documents within their rich text. Set to true by default. |
| **folders** | A boolean to enable folders for a given collection. Defaults to false. |
| **formatDocURL** | Function to customize document links in the List View. Return null to disable linking, or a string for custom URLs. |
| **meta** | Page metadata overrides to apply to this Collection within the Admin Panel. |
| **preview** | Function to generate preview URLs within the Admin Panel that can point to your app. |
| **livePreview** | Enable real-time editing for instant visual feedback of your front-end application. |
| **components** | Swap in your own React components to be used within this Collection. |
| **listSearchableFields** | Specify which fields should be searched in the List search view. |
| **enableListViewSelectAPI** | Performance opt-in. When true, uses the Select API in the List View to query only the active columns as opposed to entire documents. |
| **pagination** | Set pagination-specific options for this Collection in the List View. |
| **baseFilter** | Defines a default base filter which will be applied to the List View (along with any other filters applied by the user) and internal links in Lexical Editor, |

> **Note**: If you set `useAsTitle` to a relationship or join field, it will use only the ID of the related document(s) as the title. To display a specific field (i.e. title) from the related document instead, create a virtual field that extracts the desired data, and set `useAsTitle` to that virtual field.

### Custom Components

Collections can set their own Custom Components which only apply to Collection-specific UI within the Admin Panel. This includes elements such as the Save Button, or entire layouts such as the Edit View.

To override Collection Components, use the `admin.components` property in your Collection Config:

```typescript
import type { CollectionConfig } from 'payload'

export const MyCollection: CollectionConfig = {
  // ...
  admin: {
    components: {
      
      // ...
    },
  },
}
```

The following options are available:

| Option | Description |
| :--- | :--- |
| **afterList** | An array of components to inject after the built-in List View. |
| **afterListTable** | An array of components to inject after the built-in List View's table. |
| **beforeList** | An array of components to inject before the built-in List View. |
| **beforeListTable** | An array of components to inject before the built-in List View's table. |
| **listMenuItems** | An array of components to render within a menu next to the List Controls (after the Columns and Filters options) |
| **Description** | A component to render below the Collection label in the List View. An alternative to the admin.description property. |
| **edit** | Override specific components within the Edit View. |
| **views** | Override or create new views within the Admin Panel. |

### Edit View Options

```typescript
import type { CollectionConfig } from 'payload'

export const MyCollection: CollectionConfig = {
  // ...
  admin: {
    components: {
      edit: {
        
        // ...
      },
    },
  },
}
```

The following options are available:

| Option | Description |
| :--- | :--- |
| **beforeDocumentControls** | Inject custom components before the Save / Publish buttons. |
| **editMenuItems** | Inject custom components within the 3-dot menu dropdown located in the document controls bar. |
| **SaveButton** | Replace the default Save Button within the Edit View. |
| **SaveDraftButton** | Replace the default Save Draft Button within the Edit View. |
| **Status** | Replace the default Status component within the Edit View. |
| **PublishButton** | Replace the default Publish Button within the Edit View. |
| **PreviewButton** | Replace the default Preview Button within the Edit View. |
| **Upload** | Replace the default Upload component within the Edit View. |

> **Note**: For details on how to build Custom Components, see Building Custom Components.

### Pagination

All Collections receive their own List View which displays a paginated list of documents that can be sorted and filtered. The pagination behavior of the List View can be customized on a per-Collection basis, and uses the same Pagination API that Payload provides.

To configure pagination options, use the `admin.pagination` property in your Collection Config:

```typescript
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  // ...
  admin: {
    pagination: {
      defaultLimit: 10,
      limits: [10, 20, 50],
    },
  },
}
```

The following options are available:

| Option | Description |
| :--- | :--- |
| **defaultLimit** | Integer that specifies the default per-page limit that should be used. Defaults to 10. |
| **limits** | Provide an array of integers to use as per-page options for admins to choose from in the List View. |

### List Searchable Fields

In the List View, there is a "search" box that allows you to quickly find a document through a simple text search. By default, it searches on the ID field. If defined, the `admin.useAsTitle` field is used. Or, you can explicitly define which fields to search based on the needs of your application.

To define which fields should be searched, use the `admin.listSearchableFields` property in your Collection Config:

```typescript
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  // ...
  admin: {
    listSearchableFields: ['title', 'slug'],
  },
}
```

> **Tip**: If you are adding `listSearchableFields`, make sure you index each of these fields so your admin queries can remain performant.

### Enable List View Select API

When true, the List View will use the Select API to query only the active columns as opposed to entire documents. This can greatly improve performance, especially for collections with large documents or many fields.

To enable this, set `enableListViewSelectAPI: true` in your Collection Config:

```typescript
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  // ...
  admin: {
    // ...
    enableListViewSelectAPI: true,
  },
}
```

> **Note**: The `enableListViewSelectAPI` property is labeled as experimental, as it will likely become the default behavior in v4 and be deprecated.
>
> Enabling this feature may cause unexpected behavior in some cases, however, such as when using hooks that rely on the full document data.

For example, if your component relies on a "title" field, this field will no longer be populated if the column is inactive:

```typescript
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  // ...
  fields: [
    // ...
    {
      name: 'myField',
      type: 'text',
      hooks: {
        afterRead: [
          ({ doc }) => doc.title, // The `title` field will no longer be populated by default, unless the column is active
        ],
      },
    },
  ],
}
```

To ensure title is always present, you will need to add that field to the `forceSelect` property in your Collection Config:

```typescript
export const Posts: CollectionConfig = {
  // ...
  forceSelect: {
    title: true,
  },
}
```

### Format Document URLs

The `formatDocURL` function allows you to customize how document links are generated in the List View. This is useful for disabling links for certain documents, redirecting to custom destinations, or modifying URLs based on user context or document state.

To define a custom document URL formatter, use the `admin.formatDocURL` property in your Collection Config:

```typescript
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  // ...
  admin: {
    formatDocURL: ({ doc, defaultURL, req, collectionSlug, viewType }) => {
      // Disable linking for documents with specific status
      if (doc.status === 'private') {
        return null
      }

      // Custom destination for featured posts
      if (doc.featured) {
        return '/admin/featured-posts'
      }

      // Add query parameters based on user role
      if (req.user?.role === 'admin') {
        return defaultURL + '?admin=true'
      }

      // Use default URL for all other cases
      return defaultURL
    },
  },
}
```

The `formatDocURL` function receives the following arguments:

| Argument | Description |
| :--- | :--- |
| **doc** | The document data for the current row |
| **defaultURL** | The default URL that Payload would normally generate for this document. You can return this as-is, modify it, or replace it entirely. |
| **req** | The full PayloadRequest object, providing access to user context, payload instance, and other request data |
| **collectionSlug** | The slug of the current collection |
| **viewType** | The current view context ('list', 'trash', etc.) where the link is being generated |

The function should return:
- `null` to disable the link entirely (no link will be rendered)
- A string containing the custom URL to use for the link
- The `defaultURL` parameter to use Payload's default linking behavior

> **Tip**: The `defaultURL` parameter saves you from having to reconstruct URLs manually. You can modify it by appending query parameters or use it as a fallback for your custom logic.

**Examples**

Disable linking for certain users:

```typescript
formatDocURL: ({ defaultURL, req }) => {
  if (req.user?.role === 'editor') {
    return null // No link rendered
  }
  return defaultURL
}
```

## GraphQL

You can completely disable GraphQL for this collection by passing `graphQL: false` to your collection config. This will completely disable all queries, mutations, and types from appearing in your GraphQL schema.

You can also pass an object to the collection's `graphQL` property, which allows you to define the following properties:

| Option | Description |
| :--- | :--- |
| **singularName** | Override the "singular" name that will be used in GraphQL schema generation. |
| **pluralName** | Override the "plural" name that will be used in GraphQL schema generation. |
| **disableQueries** | Disable all GraphQL queries that correspond to this collection by passing true. |
| **disableMutations** | Disable all GraphQL mutations that correspond to this collection by passing true. |

## TypeScript

You can import types from Payload to help make writing your Collection configs easier and type-safe. There are two main types that represent the Collection Config, `CollectionConfig` and `SanitizedCollectionConfig`.

The `CollectionConfig` type represents a raw Collection Config in its full form, where only the bare minimum properties are marked as required. The `SanitizedCollectionConfig` type represents a Collection Config after it has been fully sanitized. Generally, this is only used internally by Payload.

```typescript
import type { CollectionConfig, SanitizedCollectionConfig } from 'payload'
```
