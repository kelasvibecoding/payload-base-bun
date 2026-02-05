---
name: code-intelligence
description: Advanced code searching and refactoring using structural search (ast-grep) and efficient searching (mgrep) patterns.
---

# Code Intelligence Skill

This skill provides methodologies for structural code search and replace (SSR) and efficient multi-pattern searching. It is optimized for large-scale refactoring and identifying architectural patterns in a Payload CMS / Next.js codebase.

## 1. Structural Search (ast-grep)

Structural search understands the syntax tree (AST) of the code, allowing you to find patterns regardless of whitespace, comments, or formatting.

### Pattern Variables
- `$VAR`: Matches a single AST node.
- `$$$ARGS`: Matches multiple siblings (e.g., all arguments in a function call).

### Use Cases in Payload CMS
- **Find all Collections**:
  ```yaml
  rule:
    pattern: "export const $COLLECTION: CollectionConfig = { $$$PROPS }"
  ```
- **Identify missing Access Control**:
  Find collections that don't have a `read` access property.
- **Refactor Hook signatures**:
  Change `({ data, req })` to `({ data, req, operation })` across all hooks safely.

### Execution
On Windows or if the binaries are not globally installed, use `npx`:

#### ast-grep
```bash
# General usage
npx @ast-grep/cli scan
# Using the 'sg' alias (if available via npx)
npx @ast-grep/cli run -p '$PATTERN' -r '$REPLACEMENT'
```

#### mgrep
```bash
npx @mixedbread/mgrep search "your query"
```

## 2. Multi-Pattern & Semantic Search (mgrep)

`mgrep` provides a "semantic layer" over your code. It's best used when you are looking for the *functionality* rather than the specific syntax.

### Semantic Search Tips
- **Be Descriptive**: instead of "login", use "function that handles user login and session creation".
- **Search for Intent**: "where is the database connection initialized?"
- **Discovery**: Use `mgrep` to find the *entry point* of a feature, then switch to `ast-grep` for structural analysis.

## 3. Integrated Intelligence Workflow

For any complex task, follow this **Search-to-Solution** pipeline:

1.  **Discovery (mgrep)**:
    - `npx -y @mixedbread/mgrep search "conceptual query"`
    - Use this to identify the *area* of the code responsible for a feature.
2.  **Mapping (ripgrep / grep_search)**:
    - Quickly find all literal occurrences of terms identified in step 1.
3.  **Structural Analysis (ast-grep)**:
    - `npx @ast-grep/cli run --pattern "$PATTERN"`
    - Use this to understand the *usage patterns* (e.g., "how are hooks called here?").
4.  **Transformation (ast-grep rewrite)**:
    - Perform surgical refactors across multiple files safely.

## 4. Execution Strategies (Zero-Installation)

Always use the `-y` flag with `npx` to avoid interactive prompts in the terminal:

- **ast-grep (Search)**: `npx -y @ast-grep/cli run --pattern '$P'`
- **ast-grep (Rewrite)**: `npx -y @ast-grep/cli run --pattern '$P' --rewrite '$R' -i`
- **mgrep**: `npx -y @mixedbread/mgrep search "$QUERY"`

## 5. When to use these tools

| Scenario | Tool | Why |
| :--- | :--- | :--- |
| Literal text search | `ripgrep` | Performance for simple strings. |
| Complex refactoring | `ast-grep` | Avoids regex "brittleness" with nesting and formatting. |
| Library migration | `ast-grep` | Structural changes (e.g., changing props in a Component). |
| Identifying side-effects | `mgrep` | Searching for multiple state-changing patterns at once. |

## 4. Best Practices
1. **Test Patterns**: Always run a dry-run search before applying a structural replacement.
2. **Use Context**: Leverages AST hierarchy to only match patterns inside specific functions or classes (e.g., only match `update` inside a `CollectionConfig`).
3. **Draft Rules**: For recurring linting needs, document the `ast-grep` rule in the project's `references/` directory.
