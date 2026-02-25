---
trigger: always_on
glob: "**/*"
description: Guidelines for strategic planning and structured implementation using chunks.
---

# Planning and Workflow Guidelines

Maintain a structured approach to development by planning first and implementing in testable chunks.

## 1. Planning First Approach
- **ALWAYS provide a strategy plan** before implementing any feature.
- **NEVER start coding** without understanding the full scope.
- **ALWAYS ask clarifying questions** if requirements are unclear.
- **ALWAYS ask clarifying questions** if requirements are unclear.
- **DON'T proceed with vague or incomplete instructions**.

## 2. Strategic Plan Documentation
- **CHECK if `plans/` folder exists** before creating it.
- **CREATE `plans/` folder** only if it doesn't exist.
- **ORGANIZE all plans** in the `plans/` folder.
- **ASK user** if the strategic plan is final before implementation.
- **REQUEST permission** to write finalized plans to markdown.
- **USE filename format** `feature-scope.md` for strategic plans.
- **DOCUMENT completed plans** to avoid re-planning the same features.
- **REFERENCE existing plans** when similar features are requested.
- **UPDATE plans** only when user explicitly requests changes.
- **MAINTAIN organized structure** in the plans folder.

## 3. Strategy Planning Template
When starting a new feature, use the following structure:

### 📋 Strategy Plan
- **🎯 Objective**: [Clear description of goals]
- **🔍 Analysis**: [Current state and requirements]
- [If over-engineered] "The core requirement can be met with..."

### 🏗️ Architectural Alignment (FBA-SOLID-SSOT)

**Evaluate the design against the project's core architectural principles:**

- **FBA Alignment**: Does this follow Feature-Based Architecture? (Logic in `src/features/[name]`, modular folder structure).
- **SOLID Compliance**: Does the design respect SRP (Single Responsibility) and DIP (Dependency Inversion)?
- **SSOT Integrity**: Are we avoiding duplicate constants/logic? Are we using existing services/constants where possible?
- **Naming & Co-location**: Are we using `kebab-case` for files and co-locating schemas with forms?

### 🏗️ Architecture Approach
- [Integration with existing system]
- **📝 Options**: [HILE vs. Comprehensive options]
- **🚀 Implementation Order**: [Recommended part to implement first + justification]
- **🧪 Testing**: [How to verify]
- **📊 Success Criteria**: [Definition of done]

## 3. Chunked Implementation Strategy
- **BREAK DOWN** large features into small, testable chunks.
- **IMPLEMENT** one chunk at a time — never everything at once.
- **ENSURE** each chunk works and is approved before moving to the next.
- **MAINTAIN** a working state in the `dev` environment at all times.

## 4. TODO Planning Template
Use a structured checklist for progress tracking:
- [ ] **Chunk 1: [Name]** - READY TO IMPLEMENT
  - [ ] Specific testable task
  - **Test Instructions**: [How to verify]
- [ ] **Chunk 2: [Name]** - WAITING FOR CHUNK 1
  - [ ] Specific testable task

## 5. Mandatory Feature Lifecycle
This section defines the core objective and goal for any feature development in this project.

### The Objective
Transform every user feature request into a production-grade implementation through a disciplined, user-driven workflow.

### The Lifecycle (PLAN -> SELECT -> EXECUTE -> UPDATE)
1. **PLAN**: Any user input for a new feature or complex change MUST first be converted into a **Strategy Plan** (via `/plan`) and a **TODO list** (in `task.md`).
2. **SELECT**: Present implementation options and recommendations to the user. The user will instruct which part or chunk to implement first.
3. **EXECUTE**: Implement ONLY the selected chunk.
4. **UPDATE**: After each implementation step, you MUST update the `task.md` (or the status in the current task view) to reflect progress before moving to the next part.
