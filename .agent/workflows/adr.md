---
description: Document an Architecture Decision Record (ADR) for an irreversible or significant architecture choice.
---

# /adr Workflow

Use this workflow to capture a decision that is hard to reverse (e.g., database adapter, plugin adoption, authentication strategy).

1. **Identify the decision**
   - What is the specific decision being made?
   - What are the alternatives that were considered?

2. **Document trade-offs**
   - Why was this option chosen?
   - What are the known trade-offs or limitations?

3. **Write the ADR**
   - Save to `docs/adr/YYYYMMDD-[short-title].md`
   - Use this format:
   ```markdown
   # ADR-YYYYMMDD: [Title]

   ## Status
   Accepted

   ## Context
   [What problem forced this decision?]

   ## Decision
   [What was decided?]

   ## Consequences
   [What becomes easier or harder because of this decision?]
   ```

// turbo
4. **Confirm with user**
   - Present the ADR to the user before saving.
   - Get explicit approval before finalizing.
