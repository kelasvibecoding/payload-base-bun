---
name: Vibe Blocks Skill
description: "A comprehensive library of 2,000+ UI components and layout patterns spanning two curated sources: Relume Library (rl) and Custom/Shadcn (cn), structured for Payload CMS 3.0, Next.js, and Shadcn UI."
---

# Vibe Blocks Skill

A comprehensive library of **2,000+ UI components** from two curated sources, searchable from a single unified interface.

---

## Library Sources

The `library/` directory contains **two independent sub-libraries**, each with its own design language and category system:

| Source Key | Directory | Origin | Style | Components |
| :--- | :--- | :--- | :--- | :--- |
| **`rl`** | `library/rl/` | Relume Library | Semantic, prop-driven, clean composition | ~1,500 |
| **`cn`** | `library/cn/` | Custom / Shadcn | Visual-heavy, animation-rich, aceternity + magicui | ~1,388 |

> **Choose based on intent:**
> - Use **`rl`** for structured, semantic, CMS-driven UI (headers, footers, layouts, pricing).
> - Use **`cn`** for animation-first, visually rich UI (heroes, features, interactive showcases, aceternity components).

---

## Component Search (Token Optimized)

**ALWAYS** use the search script before reading files. This saves significant context window tokens.

### Search Across Both Sources (Default)
```bash
python .agent/skills/vibe-blocks/scripts/search.py "query string"
```

### Search Within a Specific Source
```bash
# Relume library only
python .agent/skills/vibe-blocks/scripts/search.py "query string" --source rl

# Custom/Shadcn library only
python .agent/skills/vibe-blocks/scripts/search.py "query string" --source cn
```

### Control Results Count
```bash
python .agent/skills/vibe-blocks/scripts/search.py "query string" --max-results 5
```

### List All Categories
```bash
# All sources
python .agent/skills/vibe-blocks/scripts/search.py --list-categories

# Specific source
python .agent/skills/vibe-blocks/scripts/search.py --list-categories --source rl
python .agent/skills/vibe-blocks/scripts/search.py --list-categories --source cn
```

---

## Category Index

### `rl` — Relume Library
Organized by functional role, intended for structured marketing and dashboard pages.

| Category | Description |
| :--- | :--- |
| **application-shell** | Main layout containers with sidebars and headers. |
| **banner** | Global notification or promotional bars. |
| **blog** | Post listings, cards, and grid layouts. |
| **blog-post-header** | Hero sections specifically for articles. |
| **career** | Job listings, details, and application sections. |
| **comparison** | Detailed feature matrices and product tables. |
| **contact** | Contact sections with maps, info, and links. |
| **content** | Informational text sections and narratives. |
| **cookie-consent** | Legal compliance popups and link bars. |
| **cta** | High-conversion call-to-action sections. |
| **event** | Event listings, cards, and detail sections. |
| **faq** | Frequently asked questions with accordions. |
| **filters** | Search and sorting controls for lists. |
| **footer** | Global site footers with varied navigation. |
| **form** | Authentication, contact, and data inputs. |
| **gallery** | Image and video showcase grids. |
| **grid-list** | General-purpose listing grids. |
| **header** | Main hero sections (150+ variations). |
| **layout** | Core structural sections (500+ variations). |
| **links** | Resource directories and link pages. |
| **loader** | Visual loading indicators for transitions. |
| **logo** | Client, partner, and tech trust bars. |
| **multi-form** | Step-based onboarding and complex inputs. |
| **navbar** | Main site navigation and branding headers. |
| **onboarding** | Sequential user setup flows. |
| **portfolio** | Creative work and project showcases. |
| **pricing** | Tiered subscription and product tables. |
| **product** | E-commerce listings and headers. |
| **section-header** | Contextual titles for page modules. |
| **sidebar** | Application side navigation systems. |
| **stat-card** | Dashboard KPI and metric indicators. |
| **stats** | Data visualization and growth highlights. |
| **table** | High-density data organization. |
| **team** | Member profiles and contributor grids. |
| **testimonial** | Customer feedback and trust signals. |
| **timeline** | Company history and product roadmaps. |
| **topbar** | Utility headers for app dashboards. |

### `cn` — Custom / Shadcn Library
Organized by UI domain, intended for visually premium and animation-rich experiences.

| Category | Description |
| :--- | :--- |
| **hero** | Above-the-fold landing sections (175+ variations). |
| **feature** | Product capability showcase grids (270+ variations). |
| **aceternity** | Framer Motion / Aceternity-powered interactive WOW components. |
| **magicui** | Magic UI (Safari mockups, animated borders, etc.). |
| **background-pattern** | Decorative CSS/SVG background sections. |
| **shader** | GPU-accelerated WebGL/shader visual effects. |
| **navbar** | Navigation bars with mobile drawers. |
| **footer** | Standard and e-commerce footers. |
| **pricing** | Tier-based subscription cards. |
| **testimonial** | Customer quote cards and carousels. |
| **stats / stats-card** | KPI metric sections. |
| **cta** | Call-to-action conversion sections. |
| **faq** | Accordion-based FAQ sections. |
| **blog** | Blog post grid and listing layouts. |
| **gallery** | Image showcase and portfolio grids. |
| **timeline** | Roadmap and history sections. |
| **team** | Team member profile grids. |
| **contact** | Contact forms and info sections. |
| **login / signup** | Authentication flow forms. |
| **sidebar** | Dashboard side navigation. |
| **chart-card / chart-group** | Analytics and charting panels. |
| **data-table** | Interactive data grid components. |
| **project / projects** | Portfolio or task management displays. |
| **product-*** | E-commerce product pages, cards, and galleries. |
| **settings-*** | Application settings panels (profile, billing, integrations). |
| **onboarding** | Step-based user onboarding. |
| **community** | User community and collaboration sections. |
| **changelog** | Product update and version history. |
| **compliance** | Legal and privacy-focused sections. |
| **integration** | Third-party service connection panels. |

---

## Usage Guidelines

1. **Search First**: Use the search script. Never browse files manually.
2. **Pick the Right Source**: Use `--source rl` for semantic/structural needs, `--source cn` for animation/wow-factor.
3. **Review Metadata**: Each result shows Category, Objective, Use Case, and Visual Style.
4. **Check Constraints**: Look for `framer-motion`, `aceternity`, or `magicui` dependencies in `cn` results — these require extra packages.
5. **Implementation**: Place components in appropriate feature folders per Feature-Based Architecture.

---

## Core Principles

1. **Reference, Not Gospel**: Source code is a *structural foundation*. Polish and adapt it to production standards.
2. **Objective-Driven**: Choose components based on user goals (Conversion, Awareness, Engagement).
3. **Aesthetic Excellence**: Follow the [Frontend Design Guidelines](../../rules/frontend-design.md). Avoid generic looks.
4. **Typography Mastery**:
   - **Headings**: Always apply `tracking-tight` to headings `text-4xl` and larger.
   - **Body**: Use `leading-relaxed` for readability on long-form text.
   - **Hierarchy**: Ensure clear contrast between H1, H2, and body text.
5. **Spacing & Breath**:
   - Increase padding (`py-16` → `py-24` or `py-32`) for hero sections.
   - Review grid gaps to ensure content isn't cramped.
6. **Motion-Enhanced**: Leverage Framer Motion for staggered reveals and smooth transitions.
7. **Responsive Integrity**: Ensure all patterns work from 320px to 1440px+.

---

## Implementation Workflow

1. **Search**: Find the pattern using the search script (both sources by default).
2. **Review**: Evaluate Category, Objective, Use Case suitability.
3. **Adapt (Source as Reference)**:
   - Copy the source code from `## Source Code`.
   - **Refactor Imports**: Replace generic imports with project-specific aliases (`@/components/ui`).
   - **Update Props**: Match actual data shape from Payload CMS collections.
4. **Polish (Mandatory)**:
   - **Typography**: Fix line-heights and letter-spacing.
   - **Colors**: Replace hardcoded colors with CSS variables (`bg-background`, `text-foreground`).
   - **Textures**: Add grain, gradients, or subtle borders.
   - **Safe Class Merging**: Always use the `cn` utility from `@/lib/utils`.
   - **Micro-Interactions**: Add hover states to all buttons and cards.
5. **Final Review**: Does it look **premium**? If it looks basic or generic, it is **not finished**.

---

## Source-Specific Notes

### Relume (`rl`) — Structural Patterns
- Uses a `Props` + `Defaults` pattern for typed, reusable components.
- Imports from `@/components/ui` (Shadcn primitives).
- No animation dependencies by default.
- Best for: semantic HTML structure, content-driven marketing pages.

### Custom/Shadcn (`cn`) — Visual Premium
- Uses `interface ComponentProps` with `className?: string` (cn-utility compatible).
- May depend on: `framer-motion`, `motion/react`, `@/components/aceternity/*`, `@/components/magicui/*`.
- Heavily uses `useScroll`, `useTransform`, `AnimatePresence` for scroll-driven animations.
- Best for: landing pages, interactive showcases, wow-factor sections.
