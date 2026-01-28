# Join Field

The Join Field is used to make Relationship and Upload fields available in the opposite direction. With a Join you can edit and view collections having reference to a specific collection document. The field itself acts as a virtual field, in that no new data is stored on the collection with a Join field. Instead, the Admin UI surfaces the related documents for a better editing experience and is surfaced by Payload's APIs.

With the Join field, you only need to store the relationship on one side (e.g. `category_id` on the post), and Payload will automatically join in related posts for you when you query for categories.

To add a Join Field, set the type to `join` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyJoinField: Field = {
  name: 'relatedPosts',
  type: 'join',
  collection: 'posts',
  on: 'category',
}

// relationship field in another collection:
export const MyRelationshipField: Field = {
  name: 'category',
  type: 'relationship',
  relationTo: 'categories',
}
```

> **Important**: The Join Field comes with performance considerations. It is extremely performant until you add depth of 1 or above. It is not supported in DocumentDB and Azure Cosmos DB.

## Config Options

| Option | Description |
| :--- | :--- |
| **name \*** | To be used as the property name when retrieved from the database. |
| **collection \*** | The slugs having the relationship field or an array of collection slugs. |
| **on \*** | The name of the relationship or upload field that relates to the collection document. Use dot notation for nested paths, like 'myGroup.relationName'. If collection is an array, this field must exist for all specified collections |
| **orderable** | If true, enables custom ordering and joined documents can be reordered via drag and drop. |
| **where** | A Where query to hide related documents from appearing. Will be merged with any where specified in the request. |
| **maxDepth** | Default is 1, Sets a maximum population depth for this field, regardless of the remaining depth when this field is reached. |
| **label** | Text used as a field label in the Admin Panel or an object with keys for each language. |
| **hooks** | Provide Field Hooks to control logic for this field. |
| **access** | Provide Field Access Control to denote what users can see and do with this field's data. |
| **defaultLimit** | The number of documents to return. Set to 0 to return all related documents. |
| **defaultSort** | The field name used to specify the order the joined documents are returned. |
| **admin** | Admin-specific configuration. More details. |
| **custom** | Extension point for adding custom data (e.g. for plugins). |
| **typescriptSchema** | Override field type generation with providing a JSON schema. |
| **graphQL** | Custom graphQL configuration for the field. |

> `*` An asterisk denotes that a property is required.

### Admin Options

| Option | Description |
| :--- | :--- |
| **defaultColumns** | Array of field names that correspond to which columns to show in the relationship table. Default is the collection config. |
| **allowCreate** | Set to false to remove the controls for making new related documents from this field. |
| **components.Label** | Override the default Label of the Field Component. |
| **disableRowTypes** | Set to false to render row types, and true to hide them. Defaults to false for join fields with a singular relationTo, and true for join fields where relationTo is an array. |

## Query Options

The Join Field supports custom queries to filter, sort, and limit the related documents that will be returned.

| Property | Description |
| :--- | :--- |
| **limit** | The maximum related documents to be returned, default is 10. |
| **where** | An optional Where query to filter joined documents. Will be merged with the field where object. |
| **sort** | A string used to order related results |
| **count** | Whether include the count of related documents or not. Not included by default |

### Local API Example

```typescript
const result = await payload.find({
  collection: 'categories',
  where: {
    title: {
      equals: 'My Category',
    },
  },
  joins: {
    relatedPosts: {
      limit: 5,
      where: {
        title: {
          equals: 'My Post',
        },
      },
      sort: 'title',
    },
  },
})
```

### GraphQL Example

```graphql
query {
  Categories {
    docs {
      relatedPosts(
        sort: "createdAt"
        limit: 5
        where: { author: { equals: "66e3431a3f23e684075aaeb9" } }
        count: true
      ) {
        docs {
          title
        }
        hasNextPage
        totalDocs
      }
    }
  }
}
```
