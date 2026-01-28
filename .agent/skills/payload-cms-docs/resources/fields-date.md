# Date Field

The Date Field saves a Date in the database and provides the Admin Panel with a customizable time picker interface.

To add a Date Field, set the type to `date` in your Field Config:

```typescript
import type { Field } from 'payload'

export const MyDateField: Field = {
  // ...
  type: 'date', 
}
```

## Config Options

| Option | Description |
| :--- | :--- |
| **name \*** | To be used as the property name when stored and retrieved from the database. |
| **label** | Text used as a field label in the Admin Panel or an object with keys for each language. |
| **index** | Build an index for this field to produce faster queries. Set this field to true if your users will perform queries on this field's data often. |
| **validate** | Provide a custom validation function that will be executed on both the Admin Panel and the backend. |
| **saveToJWT** | If this field is top-level and nested in a config supporting Authentication, include its data in the user JWT. |
| **hooks** | Provide Field Hooks to control logic for this field. |
| **access** | Provide Field Access Control to denote what users can see and do with this field's data. |
| **hidden** | Restrict this field's visibility from all APIs entirely. Will still be saved to the database, but will not appear in any API or the Admin Panel. |
| **defaultValue** | Provide data to be used for this field's default value. |
| **localized** | Enable localization for this field. Requires localization to be enabled in the Base config. |
| **required** | Require this field to have a value. |
| **admin** | Admin-specific configuration. More details. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |
| **timezone \*** | Set to `true` to enable timezone selection on this field. |
| **typescriptSchema** | Override field type generation with providing a JSON schema |
| **virtual** | Provide true to disable field in the database, or provide a string path to link the field with a relationship. See Virtual Fields |

> `*` An asterisk denotes that a property is required.

### Admin Options

To customize the appearance and behavior of the Date Field in the Admin Panel, you can use the `admin` option:

```typescript
import type { Field } from 'payload'

export const MyDateField: Field = {
  // ...
  admin: {
    
    // ...
  },
}
```

The Date Field inherits all of the default admin options from the base Field Admin Config, plus the following additional options:

| Property | Description |
| :--- | :--- |
| **placeholder** | Placeholder text for the field. |
| **date** | Pass options to customize date field appearance. |
| **date.displayFormat** | Format date to be shown in field cell. |
| **date.pickerAppearance \*** | Determines the appearance of the datepicker: dayAndTime timeOnly dayOnly monthOnly. |
| **date.monthsToShow \*** | Number of months to display max is 2. Defaults to 1. |
| **date.minDate \*** | Min date value to allow. |
| **date.maxDate \*** | Max date value to allow. |
| **date.minTime \*** | Min time value to allow. |
| **date.maxTime \*** | Max date value to allow. |
| **date.overrides \*** | Pass any valid props directly to the react-datepicker |
| **date.timeIntervals \*** | Time intervals to display. Defaults to 30 minutes. |
| **date.timeFormat \*** | Determines time format. Defaults to 'h:mm aa'. |

> `*` This property is passed directly to react-datepicker.

#### Display Format and Picker Appearance

These properties only affect how the date is displayed in the UI. The full date is always stored in the format `YYYY-MM-DDTHH:mm:ss.SSSZ`.

`displayFormat` determines how the date is presented in the field cell, you can pass any valid unicode date format.

`pickerAppearance` sets the appearance of the react datepicker, the options available are `dayAndTime`, `dayOnly`, `timeOnly`, and `monthOnly`. By default, the datepicker will display `dayOnly`.

## Timezones

To enable timezone selection on a Date field, set the `timezone` property to `true`:

```typescript
{
  name: 'date',
  type: 'date',
  timezone: true,
}
```

This will add a dropdown to the date picker that allows users to select a timezone. The selected timezone will be saved in the database along with the date in a new column named `date_tz`.

You can customise the available list of timezones in the global admin config or on the field config itself which accepts the following config as well:

| Property | Description |
| :--- | :--- |
| **defaultTimezone** | A value for the default timezone to be set. |
| **supportedTimezones** | An array of supported timezones with label and value object. |
| **required** | If true, the timezone selection will be required even if the date is not. |
| **override** | A function to customize the generated timezone field. |
| **custom** | Extension point for adding custom data (e.g. for plugins) |

```typescript
{
  name: 'date',
  type: 'date',
  timezone: {
    defaultTimezone: 'America/New_York',
    supportedTimezones: [
      { label: 'New York', value: 'America/New_York' },
      { label: 'Los Angeles', value: 'America/Los_Angeles' },
      { label: 'London', value: 'Europe/London' },
    ],
  },
}
```

> **Good to know**: The date itself will be stored in UTC so it's up to you to handle the conversion to the user's timezone when displaying the date in your frontend. Dates without a specific time are normalised to 12:00 in the selected timezone.

### Timezone Override

The override function allows you to customize the auto-generated timezone select field at a granular level. This is useful when you need to modify admin options like visibility, descriptions, or other field properties.

```typescript
{
  name: 'publishedAt',
  type: 'date',
  label: 'Published At',
  timezone: {
    override: ({ baseField }) => ({
      ...baseField,
      admin: {
        ...baseField.admin,
        disableListColumn: true, // Hide from list view columns
      },
    }),
  },
}
```

### Custom UTC Offsets

In addition to IANA timezone names (like America/New_York), you can also use fixed UTC offsets in the ±HH:mm format:

```typescript
{
  name: 'eventTime',
  type: 'date',
  timezone: {
    supportedTimezones: [
      { label: 'UTC+5:30 (India)', value: '+05:30' },
      { label: 'UTC-8 (Pacific)', value: '-08:00' },
      { label: 'UTC+0', value: '+00:00' },
    ],
  },
}
```

## Example

```typescript
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      name: 'dateOnly',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'timeOnly',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
          displayFormat: 'h:mm:ss a',
        },
      },
    },
    {
      name: 'monthOnly',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
          displayFormat: 'MMMM yyyy',
        },
      },
    },
  ],
}
```

## Custom Components

### Field

**Server Component**:
```tsx
import type React from 'react'
import { DateTimeField } from '@payloadcms/ui'
import type { DateFieldServerComponent } from 'payload'

export const CustomDateFieldServer: DateFieldServerComponent = ({
  clientField,
  path,
  schemaPath,
  permissions,
}) => {
  return (
    <DateTimeField
      field={clientField}
      path={path}
      schemaPath={schemaPath}
      permissions={permissions}
    />
  )
}
```

**Client Component**:
```tsx
'use client'
import React from 'react'
import { DateTimeField } from '@payloadcms/ui'
import type { DateFieldClientComponent } from 'payload'

export const CustomDateFieldClient: DateFieldClientComponent = (props) => {
  return <DateTimeField {...props} />
}
```

### Label

**Server Component**:
```tsx
import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { DateFieldLabelServerComponent } from 'payload'

export const CustomDateFieldLabelServer: DateFieldLabelServerComponent = ({
  clientField,
  path,
}) => {
  return (
    <FieldLabel
      label={clientField?.label || clientField?.name}
      path={path}
      required={clientField?.required}
    />
  )
}
```

**Client Component**:
```tsx
'use client'
import React from 'react'
import { FieldLabel } from '@payloadcms/ui'
import type { DateFieldLabelClientComponent } from 'payload'

export const CustomDateFieldLabelClient: DateFieldLabelClientComponent = ({
  field,
  path,
}) => {
  return (
    <FieldLabel
      label={field?.label || field?.name}
      path={path}
      required={field?.required}
    />
  )
}
```
