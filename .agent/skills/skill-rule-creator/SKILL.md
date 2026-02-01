---
name: skill-rule-creator
description: Toolkit for creating and extending Agent capabilities through new Skills and Global Rules. Use this when instructed to "create a new skill", "add a new rule", or when you identify a recurring pattern that should be codified into the agent's knowledge base.
---

# Skill & Rule Creator

This skill enables the extension of the Agent's capabilities by creating specialized **Skills** and **Global Rules**.

## When to Create a Skill vs. a Rule

| Feature | Skill | Global Rule |
| :--- | :--- | :--- |
| **Location** | `.agent/skills/[name]/SKILL.md` | `.agent/rules/[name].md` |
| **Trigger** | Context-dependent (name/description in frontmatter) | Always on (via `trigger: always_on`) |
| **Scope** | Procedural knowledge for specific tasks/domains. | Broad architectural or style constraints. |
| **Contents** | SKILL.md + references/ + assets/ + scripts/ | Single markdown file with frontmatter. |

## 1. Creating a New Skill

Skills are modular packages of specialized knowledge.

### Workflow:
1. **Directory Structure**: Create `.agent/skills/[skill-name]/`.
2. **SKILL.md**: Create the primary instruction file with the following frontmatter:
   ```yaml
   ---
   name: skill-name
   description: Detailed description of when this skill should trigger.
   ---
   ```
3. **Internal Organization**:
   - `references/`: Store larger documentation, schemas, or complex patterns.
   - `assets/`: Store boilerplate code, templates, or binary files.
   - `scripts/`: Store automation scripts (Python/JS) to perform repetitive tasks.
4. **Referencing**: Use relative paths from `SKILL.md` to reference internal files.

## 2. Creating a New Rule

Global Rules are "always on" constraints that guide the Agent's behavior across the entire project.

### Workflow:
1. **File Location**: Create `.agent/rules/[rule-name].md`.
2. **Frontmatter**: Every rule MUST have this frontmatter to be correctly registered:
   ```yaml
   ---
   trigger: always_on
   glob: "**/*"
   ---
   ```
3. **Body**: Use a clear `# Title` and structured Markdown (H2s) to define the constraints.

## Reference Files & Templates
- [Advanced Concepts](./references/concepts.md): Design patterns for context optimization and workflows.
- [Skill Template](./references/skill-template.md): Boilerplate for new skills.
- [Rule Template](./references/rule-template.md): Boilerplate for new global rules.

## Best Practices
- **Concise**: Only add context the agent doesn't already possess.
- **Actionable**: Focus on "How to do" rather than "What it is".
- **Self-Documenting**: Use descriptive names for variables and functions in bundled scripts.
- **Single Source of Truth**: Don't duplicate information between a Skill and a Rule.
