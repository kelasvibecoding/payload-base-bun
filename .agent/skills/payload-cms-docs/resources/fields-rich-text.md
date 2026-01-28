# Rich Text Field

The Rich Text Field lets editors write and format dynamic content in a familiar interface. The content is saved as JSON in the database and can be converted to HTML or any other format needed.

Consistent with Payload's goal of making you learn as little of Payload as possible, customizing and using the Rich Text Editor does not involve learning how to develop for a Payload rich text editor. Instead, you can invest your time and effort into learning the underlying open-source tools that will allow you to apply your learnings elsewhere as well.

## Config Options

| Option | Description |
| :--- | :--- |
| **name \*** | To be used as the property name when stored and retrieved from the database. |
| **label** | Text used as a field label in the Admin Panel or an object with keys for each language. |
| **validate** | Provide a custom validation function that will be executed on both the Admin Panel and the backend. |
| **saveToJWT** | If this field is top-level and nested in a config supporting Authentication, include its data in the user JWT. |
| **hooks** | Provide Field Hooks to control logic for this field. |
| **access** | Provide Field Access Control to denote what users can see and do with this field's data. |
| **hidden** | Restrict this field's visibility from all APIs entirely. Will still be saved to the database, but will not appear in any API or the Admin Panel. |
| **defaultValue** | Provide data to be used for this field's default value. |
| **localized** | Enable localization for this field. Requires localization to be enabled in the Base config. |
| **required** | Require this field to have a value. |
| **admin** | Admin-specific configuration. |
| **editor** | Customize or override the rich text editor. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |
| **typescriptSchema** | Override field type generation with providing a JSON schema |
| **virtual** | Provide true to disable field in the database, or provide a string path to link the field with a relationship. See Virtual Fields |

> `*` An asterisk denotes that a property is required.

### Admin Options

To customize the appearance and behavior of the Rich Text Field in the Admin Panel, you can use the `admin` option. The Rich Text Field inherits all the default options from the base Field Admin Config.

```typescript
import type { Field } from 'payload'

export const MyRichTextField: Field = {
  // ...
  admin: {
    
    // ...
  },
}
```

Further customization can be done with editor-specific options.

### Editor-specific Options

For a ton more editor-specific options, including how to build custom rich text elements directly into your editor, take a look at the rich text editor documentation.
