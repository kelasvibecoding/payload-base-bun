---
description: Generate a detailed strategic plan for a new feature or complex task.
---

# /plan Workflow

Use this workflow to create a comprehensive strategy plan before starting any implementation.

1. **Analysis Phase**
   - Review current codebase and requirements.
   - Identify potential HILE (High Impact, Low Effort) solutions.
   - List clarifying questions for the user if any scope is ambiguous.

2. **Architectural Review (FBA-SOLID-SSOT)**
   - Determine which feature domain(s) this belongs to.
   - Verify alignment with Feature-Based Architecture (FBA).
   - Ensure the plan follows SOLID principles (especially SRP and DIP).
   - Check for Single Source of Truth (SSOT) compliance.

3. **Drafting Strategy Plan**
   - Use the `Strategy Planning Template` from `planning-and-workflow.md`.
   - Provide implementation options (HILE vs. Full).
   - **Component Sourcing**: Search and specify which `.agent/skills/vibe-blocks` components will be used to accelerate UI development.
   - **MANDATORY**: Recommend which part or feature to implement first based on dependencies and impact.
   - Document logic, architecture, and testing strategy.

3. **Approval Phase**
   - Present the plan to the user.
   - **WAIT** for the user to select an option and approve the plan.
   - **ASK** user if the strategic plan is final before implementation.
   - **REQUEST permission** to write the finalized plan to `docs/design/feature-scope.md`.

4. **Chunking phase**
   - Once approved, break the selected option into small, testable implementation chunks.
   - Create or update the `task.md` with these chunks.

// turbo
5. **Ready to Execute**
   - Start implementation of the first chunk only after user confirmation.
