# Core Artifact Templates

When a user approves of your brainstorming and the feature direction is locked in, you **MUST** generate outputs exactly according to the markdown templates below. 
Because this project uses **Feature-Based Architecture (FBA)**, the PRD is generated as a single, unified document, but internally separated by distinct Features.

**[CRITICAL INSTRUCTION]:** Variables wrapped in brackets like `[Feature Name]` or `[Problem]` are placeholders. You MUST replace them with dynamic, context-specific information derived from the interview phase.



## Artifact 1: The Unified Master PRD

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

## 1.1 User Personas & Pain Points
*(Identify at least 2 key user personas and their critical pain point based on your 5-Whys discovery cycle.)*
- **[Persona Name]**: [Pain Point Description]. Why it matters: [Impact on Business/Life].
- **[Persona Name]**: [Pain Point Description]. Why it matters: [Impact on Business/Life].

## 2. Global Constraints & Standards
- **Technical Requirements**: Platform, performance (Lighthouse 100/100), Zero-JS app shell, scaling needs (10k vs 10M records).
- **Compliance & Privacy**: GDPR/PII compliance, data residency, mandated Audit Logging for sensitive fields.
- **Universal Access Control**: Global RBAC rules (e.g., "Owner-only edit" across all collections).

## 3. Feature Breakdowns
*(You MUST repeat the following 3.X block for EVERY major feature identified during brainstorming. Do not skip any features.)*

### 3.X Feature: [Feature Name]

#### 3.X.1 Goal & Metrics
- **Objective**: What problem does *this specific feature* solve?
- **KPI**: Specific success metric (e.g., 0 hydration errors, 90% form completion).

#### 3.X.2 MoSCoW Prioritization
- 🔴 **Must Have (MVP Core)**: [Requirement 1 Name] - Detailed explanation.
- 🟡 **Should Have (Fast-Follows)**: [Requirement 2 Name] - High business value, not MVP blocking.
- 🟢 **Could Have (Nice to Have)**: [Requirement 3 Name] - UX polish.
- 🚫 **Won't Have**: [Requirement 4 Name] - Explicitly excluded.

#### 3.X.3 User Flow & Error Paths
- **1. [Start]**: [Trigger Action]
- **2. [Process]**: [System Logic / Loop]
  - *Error Path*: [What happens if failure]
- **3. [End]**: [Final State / Redirect]

#### 3.X.4 Payload Architecture & Data Mapping
- **Schema Mapping (Collections/Globals)**:
| Collection | Field Name | Type | Relationship / Audit Needed? |
|---|---|---|---|
| `[Collection]` | `[field]` | `[type]` | `[rel or (Audit: Yes)]` |

- **Security (Access Control)**: Define exactly who can `read`, `create`, `update`, and `delete`.
- **Logic Hooks**: List any `beforeChange`, `afterRead`, or `afterDelete` business rules required.
- **Frontend Strategy**: React Server Components vs Client Components boundary map.

#### 3.X.5 Edge Case Matrix
| Scenario | Problem | Resolution Strategy |
|---|---|---|
| `[Case]` | `[What if...]` | `[Mitigation]` |

---

## 4. Open Questions & Technical Risks
*(Identify any technical unknowns or project risks discovered during the 5-Whys cycle.)*
- **[Unknown 1]**: [Why it's a risk] -> [Task to resolve it].
- **[Risk 2]**: [Mitigation Plan].

## 5. Timeline & Iteration Phases
- **Phase 1 (MVP)**: All "Must Have" features.
- **Phase 2 (Fast Follows)**: "Should Have" features.
- **Phase 3 (Optimization)**: "Could Have" features and high-Lighthouse performance polish.
```



## Artifact 2: Development Task List (Todo Flow)
*This translates the PRD into an actionable checklist using the FBA-SOLID-SSOT architecture format.*

```markdown
# 📋 Development Task List: [Project Name]

## Phase 1: Foundation (Parallel Execution)
### Backend / Payload CMS Team
- [ ] Create collections inside `src/collections/[name]`.
- [ ] Centralize options/constants into `src/features/[feature]/constants.ts` (SSOT rule).
- [ ] Define ERD fields (e.g., `title`, `status`, `tracking`).
- [ ] Write `access` control logic (`src/features/[feature]/services/access.ts`).
- [ ] Generate Types (`bun run generate:types`).

### Frontend / Next.js Team
- [ ] Setup Route Group `src/app/(frontend)/[path]`.
- [ ] Build UI components inside `src/features/[feature]/components/`.
- [ ] Build statically responsive Skeleton UI (`loading.tsx`).

## Phase 2: Core Logic & Integration
- [ ] **Data Fetching**: Hook up Server Component to fetch from Local API (Data layer in `src/features/[feature]/services/`).
- [ ] **Mutations/Flow**: Write business logic in `src/features/[feature]/hooks/`.
- [ ] **Zod Schema**: Colocate form validation in `src/features/[feature]/schema.ts`.
- [ ] Connect Frontend Form to Server Action using `useTransition`.

## Phase 3: Refinement & Polish
- [ ] Implement Empty States for 0 results.
- [ ] Add `error.tsx` boundary for offline or API failures.
- [ ] Optimize 100/100 Lighthouse performance (Zero-JS shell check).
```



## Artifact 3: Google Stitch Design Brief
*A ready-to-use prompt payload that the developer can copy and paste into Google Stitch (`mcp_stitch`) to automatically generate the React UI wireframes.*

```markdown
# 🎨 Google Stitch Design Brief
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



## Artifact 4: Gemini Canvas MVP Preview
*Use the powerful Gemini Canvas feature to output a working HTML/React representation of the UI.*

**Instruction:** You must generate a functional MVP app within the Gemini Canvas using React with Tailwind classes (or HTML/CSS/JS if React is unsupported). 
- Translate the requirements from the **Google Stitch Design Brief** into a visual, clickable prototype. 
- Use realistic dummy data based on the business logic.
- Implement the "Skeleton Loading" state visually. 

*(Output this as an executable code block tailored for Gemini Canvas rendering).*
