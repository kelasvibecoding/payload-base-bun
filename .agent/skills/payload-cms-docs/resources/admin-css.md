# Customizing CSS & SCSS

Customizing the Payload Admin Panel through CSS is one of the easiest ways to white-label the dashboard and tailor its look and feel. Payload uses **BEM naming conventions** and **CSS Layers** to make overrides predictable and powerful.

## Global CSS

Global styles are managed via the `custom.scss` file in the root of your app (typically within the `(payload)` directory). This file is injected into the root of the Admin Panel.

```scss
// custom.scss
.dashboard {
  background-color: var(--theme-elevation-50);
}
```

> **Note**: For Custom Components, it is better to import scoped stylesheets directly into the component rather than relying on the global stylesheet.

## Specificity & CSS Layers

Payload encapsulates its styles within the `@layer payload-default` CSS layer. This ensures that any custom CSS you write outside of a layer will have higher specificity by default.

If you want to use layers yourself, you can use the `@layer payload` to ensure your styles are applied after Payload's defaults.

```css
/* Respecting internal specificity */
@layer payload-default {
  .my-override {
    color: red;
  }
}
```

## Re-using Variables and Utilities

You can import Payload's SCSS variables and mixins directly into your own stylesheets:

```scss
@import '~@payloadcms/ui/scss';

.my-custom-component {
  padding: $gutter-h;
  color: $success-500;
}
```

## CSS Variables

Payload defines a wide range of CSS variables that you can override to change the theme globally. These include:

- **Colors**: Base shades, success/warning/error colors.
- **Elevation**: `--theme-elevation-0` to `--theme-elevation-1000` (used for surface "brightness").
- **Theme**: `--theme-bg`, `--theme-text`, `--theme-input-bg`.
- **Layout**: Breakpoints, horizontal gutter, font sizes, transition speeds.

### Dark Mode
Payload automatically adapts variables for Dark Mode. By default, it inverts elevation colors and updates base theme variables (`--theme-bg`, etc.). Ensure your overrides consider both light and dark themes.
