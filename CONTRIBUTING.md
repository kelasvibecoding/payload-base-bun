# Contributing to Antigravity × PayloadCMS Boilerplate

Thank you for your interest in improving this boilerplate!

## What to Contribute

| Area            | Examples                                              |
| --------------- | ----------------------------------------------------- |
| **Agent Rules** | New `.agent/rules/*.md` patterns for Payload features |
| **Workflows**   | New slash commands for common development tasks       |
| **Skills**      | New AI skills for libraries (e.g., Stripe, Resend)    |
| **Collections** | Example Payload collection configs                    |
| **Components**  | Reusable Shadcn UI components for Payload patterns    |

## Guidelines

### Architecture

All contributions must follow **FBA-SOLID-SSOT**:

- Feature code in `src/features/[name]/` with correct sub-structure
- No duplicate constants — use `constants.ts` as SSOT
- Functions under 50 lines, single responsibility

### Code Quality

Before submitting a PR, ensure:

```bash
bun run lint:fix       # Fix lint issues
bun run typecheck      # No TypeScript errors
```

### Agent Rules & Workflows

- Rules go in `.agent/rules/` as `.md` files
- Workflows go in `.agent/workflows/` as `.md` files
- Follow the existing format with YAML frontmatter

### Commit Style

```
feat: add [description]
fix: resolve [description]
docs: update [description]
chore: [description]
```

## Pull Request Process

1. Fork the repository
2. Create a branch: `feat/your-feature-name`
3. Make your changes following the guidelines above
4. Run lint + typecheck
5. Open a PR with a clear description of what was added and why

## Reporting Issues

Include:

- Steps to reproduce
- Expected vs actual behavior
- Environment (OS, Node, Bun version)
