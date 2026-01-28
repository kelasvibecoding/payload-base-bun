# Extending GraphQL

You can add your own GraphQL queries and mutations to Payload, making use of all the types that Payload has defined for you.

To do so, add your queries and mutations to the main Payload Config:

| Config Path | Description |
| :--- | :--- |
| **graphQL.queries** | Function that returns an object containing keys to custom GraphQL queries |
| **graphQL.mutations** | Function that returns an object containing keys to custom GraphQL mutations |

The above properties each receive a function defined with the following arguments:

- **GraphQL**: This is Payload's GraphQL dependency. Use this provided copy instead of installing your own to avoid schema conflicts.
- **payload**: The currently running Payload instance, providing access to existing types for all Collections and Globals.

## Example

```typescript
import { buildConfig } from 'payload'
import myCustomQueryResolver from './graphQL/resolvers/myCustomQueryResolver'

export default buildConfig({
  graphQL: {
    queries: (GraphQL, payload) => {
      return {
        MyCustomQuery: {
          type: new GraphQL.GraphQLObjectType({
            name: 'MyCustomQuery',
            fields: {
              text: {
                type: GraphQL.GraphQLString,
              },
              someNumberField: {
                type: GraphQL.GraphQLFloat,
              },
            },
          }),
          args: {
            argNameHere: {
              type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLString),
            },
          },
          resolve: myCustomQueryResolver,
        },
      }
    },
  },
})
```

## Resolver Function

In your resolver, set `depth: 0` if returning data directly from the Local API so that GraphQL can correctly resolve queries to nested values such as relationship data.

A resolver receives four arguments: `(obj, args, context, info)`

- **obj**: The previous object (usually discarded).
- **args**: The available arguments from your query or mutation.
- **context**: An object containing the `req` and `res` objects (provides `payload`, `user`, etc.).
- **info**: Contextual information about the currently running GraphQL operation and schema.

## Types and Utilities

### GraphQLJSON & GraphQLJSONObject

```typescript
import { GraphQLJSON, GraphQLJSONObject } from '@payloadcms/graphql/types'
```

### buildPaginatedListType

Builds a new GraphQL type for a paginated result similar to Payload's generated schema.

```typescript
import { buildPaginatedListType } from '@payloadcms/graphql/types'

export const getMyPosts = (GraphQL, payload) => {
  return {
    args: {},
    resolve: Resolver,
    type: buildPaginatedListType(
      'AuthorPosts',
      payload.collections['posts'].graphQL?.type,
    ),
  }
}
```

### Collection GraphQL Types

The `graphQL` object on your collection slug contains types to help you reuse code:

```typescript
// payload.collections[slug].graphQL
{
  type: GraphQLObjectType
  paginatedType: GraphQLObjectType
  JWT: GraphQLObjectType
  versionType: GraphQLObjectType
  whereInputType: GraphQLInputObjectType
  mutationInputType: GraphQLNonNull<any>
  updateMutationInputType: GraphQLNonNull<any>
}
```

## Best Practices

Use a dedicated `graphql` directory to keep logic organized:

```
src/graphql/
  queries/
    myCustomQuery/
      index.ts
      resolver.ts
  mutations/
```
