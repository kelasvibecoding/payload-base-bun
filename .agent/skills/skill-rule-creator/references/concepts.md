# Advanced Skill Design Concepts

## 1. Context Optimization
The context window is a limited resource. When designing a skill:
- **Assume Intelligence**: Don't explain basic concepts (e.g., how a `for` loop works).
- **Progressive Disclosure**: Use the `references/` directory for detailed documentation. Only load it when the task requires specifically that detail.
- **Terse Instructions**: Prefer bullet points and code blocks over long prose.

## 2. Workflow Patterns

### Sequential Steps
For multi-step processes, provide a clear, numbered list.
```markdown
1. Setup the environment.
2. Run the migration script.
3. Validate the results.
```

### Conditional Logic
Use bolding to highlight decision points.
```markdown
- **IF** the user is an Admin: [Detailed steps]
- **ELSE**: [Restricted steps]
```

## 3. Tool Selection
- **Python Scripts**: Use when deterministic reliability or heavy computation is needed.
- **Bash Commands**: Use for simple file operations or environment checks.
- **Markdown Templates**: Use for recurring documentation or repetitive coding patterns.
