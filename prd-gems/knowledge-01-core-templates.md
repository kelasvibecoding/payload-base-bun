# Core Artifact Templates

When a user approves of your brainstorming and the feature direction is locked in, you **MUST** generate outputs exactly according to the markdown templates below. 
Because this project strictly follows **Feature-Based Architecture (FBA)**, we do not write massive, monolithic PRDs. We create a master PRD folder, and child PRD files for each feature.

**[CRITICAL INSTRUCTION]:** Variables wrapped in brackets like `[Feature Name]` or `[Problem]` are placeholders. You MUST replace them with dynamic, context-specific information derived from the interview phase.

---

## Artifact 1: Master Blueprint & Folder Manifest 

Start by outputting a Code Block representing the FBA PRD Folder tree, then output the Master Document.

```text
docs/
└── prd/
    └── [project-name-kebab-case]/
        ├── 00-master-overview.md
        ├── features/
        │   ├── 01-[feature-one].md
        │   ├── 02-[feature-two].md
        │   └── 03-[feature-three].md
        ├── Task-List.md
        └── Design-Brief.md
```

### 1B: The Master Overview (`00-master-overview.md`)

```markdown
# Master PRD: [Project Name]

**Date:** [YYYY-MM-DD]
**Status:** [Draft / Approved / In Progress]
**Target Audience:** [Roles, e.g., Admin, Customer, Public]

## 0. Version History & Changelog
| Date | Version | Author | Changes/Notes |
|---|---|---|---|
| [Date] | 1.0 | [Name] | Initial Meta-PRD Creation |

## 1. Executive Summary
- **Objective**: What are we building and why? Let's solve [Problem].
- **Success Metrics**: How do we know this system is successful globally? (e.g., Conversion up 20%, Server Cost reduced).

## 2. Global Constraints & Standards
- **Technical Requirements**: Platform, performance (Lighthouse 100/100), Zero-JS app shell, scaling needs (10k vs 10M records).
- **Compliance/Security**: Data privacy, universal access control rules, Multi-tenancy isolation.
- **Data Migration & Initialization**: Strategy for migrating old data to the new schema or initializing default states.

## 3. FBA Feature Index
*The following features are broken down in the `features/` directory.*
- [ ] `01-[Feature Name]`
- [ ] `02-[Feature Name]`
- [ ] `03-[Feature Name]`
```

---

## Artifact 2: The First Feature PRD (`features/01-[feature].md`)

*Generate the template for the **first** feature ONLY to save tokens. Ask the user if they want the others.*

```markdown
# Feature PRD: [Feature Name]

## 1. Feature Goal & Metrics
- **Objective**: What problem does *this specific feature* solve?
- **KPI**: Specific success metric (e.g., 0 hydration errors, 90% form completion).

## 2. Feature Brainstorm & Prioritization (MoSCoW)

### 🔴 Must Have (MVP Core)
- **[Requirement 1 Name]**: Detailed explanation.
  - *Acceptance Criteria*: User can do X, data is saved, Y is triggered.

### 🟡 Should Have (Fast-Follows)
- **[Requirement 2 Name]**: High business value but not blocking the MVP launch.

### 🟢 Could Have (Nice to Have)
- **[Requirement 3 Name]**: UX polish or non-critical integrations.

### 🚫 Won't Have (Out of Scope for now)
- **[Requirement 4 Name]**: Explicitly excluded to prevent scope creep.

## 3. User Flow
1. **Entry Point**: Where does the user start?
2. **Core Loop**: What steps do they take?
3. **Exit Point**: Where are they redirected after success?
4. **Error Path**: What happens if validation fails?

**Flowchart Diagram**: 
\`\`\`mermaid
flowchart TD
  %% Replace with actual feature flow
  A[Start] --> B(Action)
\`\`\`

## 4. Architecture & Data Scale
- **Data Volume Expectation**: Define if this feature handles 100 rows, 10,000 rows, or 10M+ rows (impacts pagination & transaction limits).
- **Frontend Components**: Server Components vs Client Components mapping.
- **Backend/Payload CMS**: Impacted collections, globals, or payload hooks context.

**Database ERD**: 
\`\`\`mermaid
erDiagram
  %% Replace with actual ERD mapping
  COLLECTION {
    string field
  }
\`\`\`

**Sequence Diagram**: 
\`\`\`mermaid
sequenceDiagram
  %% Replace with actual sequence
  User->>Frontend: Action
\`\`\`
```

---

## Artifact 3: Development Task List (Todo Flow)
*This translates the PRD into an actionable checklist using the FBA-SOLID-SSOT architecture format.*

```markdown
# 📋 Development Task List: [Feature Name]

## Phase 1: Foundation (Parallel Execution)
### Backend / Payload CMS Team
- [ ] Create `[collection-name]` collection inside `src/collections/[name]`.
- [ ] Centralize options/constants into `src/features/[feature]/constants.ts` (SSOT rule).
- [ ] Define ERD fields (e.g., `title`, `status`, `tracking`).
- [ ] Write `access` control logic (`src/features/[feature]/services/access.ts`).
- [ ] Generate Types (`bun run generate:types`).

### Frontend / Next.js Team
- [ ] Setup Route Group `src/app/(frontend)/[path]`.
- [ ] Build UI components inside `src/features/[feature]/components/`.
- [ ] Build statically responsive Skeleton UI (`loading.tsx`).

## Phase 2: Core Logic & Integration
- [ ] **Data Fetching**: Hook up Server Component to fetch from Local API. Handle data layer in `src/features/[feature]/services/`.
- [ ] **Mutations/Flow**: Write business logic in `src/features/[feature]/hooks/`.
- [ ] **Zod Schema**: Colocate form validation in `src/features/[feature]/schema.ts`.
- [ ] Connect Frontend Form to Server Action using `useTransition`.

## Phase 3: Refinement & Polish
- [ ] Implement Empty States for 0 results.
- [ ] Add `error.tsx` boundary for offline or API failures.
- [ ] Optimize 100/100 Lighthouse performance (Zero-JS shell check).
```

---

## Artifact 4: Google Stitch Design Brief
*A ready-to-use prompt payload that the developer can copy and paste into Google Stitch (`mcp_stitch`) to automatically generate the React UI wireframes.*

```markdown
# 🎨 Google Stitch Design Brief: [Feature Name]
*Copy and paste the prompt below into Google Stitch.*

**Suggested Device Type**: [Desktop / Mobile / Responsive]
**Design Archetype**: [e.g., Nordic Frost (clean SaaS), Brutalist, Dark Mode Luxury]

**Google Stitch Prompt**:
Design a stunning, responsive [Page Type, e.g., Dashboard Overview / Data Table / Config Form] for a [Feature Context].

**The layout must strictly include the following sections:**
1. A top header/hero section with the title "[Feature Name]" and a primary call-to-action button.
2. A main content area featuring:
   - [Core Feature 1 details]
   - [Core Feature 2 details]
3. A clear visual hierarchy prioritizing the [Most Important Data Point].

**Aesthetic Constraints:**
- Use a [Color Vibe, e.g., earthy, slate, deep blue] aesthetic.
- Avoid generic solid backgrounds; use subtle grain overlays or soft shadows.
- Ensure the state includes a visual representation of an "Empty State" or "Skeleton Loading" pattern.
```

---

## Artifact 5: Gemini Canvas MVP Preview
*Use the powerful Gemini Canvas feature to output a working HTML/React representation of the UI.*

**Instruction:** You must generate a functional MVP app within the Gemini Canvas using React with Tailwind classes (or HTML/CSS/JS if React is unsupported). 
- Translate the requirements from the **Google Stitch Design Brief** into a visual, clickable prototype. 
- Use realistic dummy data based on the business logic.
- Implement the "Skeleton Loading" state visually. 

*(Output this as an executable code block tailored for Gemini Canvas rendering).*
