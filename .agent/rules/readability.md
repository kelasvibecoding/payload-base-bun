# Coding Standards: Readability & Naming

Apply these rules strictly when generating or modifying code to ensure high maintainability and clarity.

## 1. Line Length & Readability
- Avoid excessively long lines of code. 
- Prefer wrapping lines or breaking down complex expressions into intermediate variables.
- Aim for a visual balance that allows the code to be read without horizontal scrolling in standard editor widths.

## 2. Code Splitting & Modularization
- **Split Large Functions**: If a function or component grows too large, split it into smaller, focused sub-functions or sub-components.
- **Single Responsibility**: Each piece of code should do one thing well.
- **Functional Composition**: Prefer composing small, pure functions over large monolithic blocks.

## 3. Naming Conventions
- **Functional Naming**: Use descriptive names that reflect the *intent* or *result* of the function (e.g., `calculateTotal` instead of `doMath`).
- **Forbidden Suffixes/Keywords**:
    - **DO NOT** use the words `extended` or `extend` in naming (e.g., avoid `ButtonExtended`, `UserExtend`).
    - Use more specific, functional names instead (e.g., `PrimaryButton`, `AdminUser`, or use composition).
- **Conciseness vs. Clarity**: Be descriptive but avoid "extended" naming patterns that just append generic words.
