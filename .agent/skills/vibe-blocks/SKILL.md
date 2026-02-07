---
name: Vibe Blocks Skill
description: "A comprehensive library of 1,000+ UI components and layout patterns structured for Payload CMS 3.0, Next.js, and Shadcn UI."
---

# Vibe Blocks Skill

A comprehensive library of 1,000+ UI components and layout patterns structured for Payload CMS 3.0, Next.js, and Shadcn UI.

## Component Search (Token Optimized)

**ALWAYS** use the search script to find components before reading files. This saves context window tokens.

Run the search using `python`:
```bash
python .agent/skills/vibe-blocks/scripts/search.py "query string"
```

## Component Index

The library is organized into the following categories:

| Category | Description |
| :--- | :--- |
| **application-shell** | Main layout containers with sidebars and headers. |
| **banner** | Global notification or promotional bars. |
| **blog** | Post listings, cards, and grid layouts. |
| **blog-post-header** | Hero sections specifically for articles. |
| **card-header** | Component-level headers for dashboard widgets. |
| **career** | Job listings, details, and application sections. |
| **comparison** | Detailed feature matrices and product tables. |
| **contact** | Contact sections with maps, info, and links. |
| **content** | Informational text sections and narratives. |
| **cookie-consent** | Legal compliance popups and link bars. |
| **cta** | High-conversion call-to-action sections. |
| **description-list** | Structured data value pairs (metadata). |
| **event** | Event listings, cards, and detail sections. |
| **faq** | Frequently asked questions with accordions. |
| **filters** | Search and sorting controls for lists. |
| **footer** | Global site footers with varied navigation. |
| **form** | Authentication, contact, and data inputs. |
| **gallery** | Image and video showcase grids. |
| **grid-list** | General-purpose listing grids. |
| **header** | Main hero sections (over 150 variations). |
| **layout** | Core structural sections (over 500 variations). |
| **links** | Resource directories and link pages. |
| **loader** | Visual loading indicators for transitions. |
| **logo** | Client, partner, and tech trust bars. |
| **multi-form** | Step-based onboarding and complex inputs. |
| **navbar** | Main site navigation and branding headers. |
| **onboarding** | Sequential user setup flows. |
| **page-header** | Breadcrumb enabled site headers. |
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

## Usage Guidelines

1. **Search First**: Query for specific features (e.g., "login modal with google") using the search script.
2. **Review Metadata**: Each search result provides Objective, Use Case, and Visual Style.
3. **Verify Constraints**: Check `Interactivity` notes for Framer Motion or React Hook Form requirements.
4. **Implementation**: Ensure components are placed in appropriate feature folders as per Feature-Based Architecture.


## Core Principles
1. **Reference, Not Gospel**: The source code provided in the library is a *structural foundation*. It MUST be polished to meet production standards.
2. **Objective-Driven**: Choose components based on user goals (Conversion, Awareness, Engagement).
3. **Aesthetic Excellence**: Follow the [Frontend Design Guidelines](../../../MEMORY/frontend-design.md). Avoid generic "bootstrap" looks.
4. **Typography Mastery**:
   - **Headings**: Always apply `tracking-tight` to headings `text-4xl` and larger.
   - **Body**: Use `leading-relaxed` for readability on long-form text.
   - **Hierarchy**: Ensure clear contrast between H1, H2, and body text using weight and color (e.g., `text-muted-foreground` for subtitles).
5. **Spacing & Breath**:
   - **Padding**: Increase standard padding (`py-16` -> `py-24` or `py-32`) for hero sections to create premium whitespace.
   - **Gaps**: Review grid gaps to ensure content isn't cramped.
6. **Motion-Enhanced**: Leverage Framer Motion for staggered reveals and smooth transitions.
7. **Responsive Integrity**: Ensure all patterns work from 320px to 1440px+.

## How to Implement
1. **Search**: Find the pattern you need using the search script.
2. **Review**: Check the metadata for Objective and Use Case suitability.
3. **Adapt (Source as Reference)**:
   - Copy the code from `## Source Code`.
   - **Immediately Refactor**: Replace generic imports with project-specific path aliases (`@/components/ui`).
   - **Update Props**: Ensure props match the actual data shape of your Payload collections.
4. **Polish (Mandatory)**:
   - **Typography**: Fix line-heights and letter-spacing.
   - **Colors**: Replace hardcoded hex/utility colors with CSS variables (e.g., `bg-background`, `text-foreground`).
   - **Textures**: Add grain, gradients, or subtle borders to lift the design.
   - **Safe Class Merging**: Always use the `cn` utility (from `@/components/lib/utils`) when merging classes or handling conditional logic in components.
   - **Micro-Interactions**: Add hover states to buttons and cards.
5. **Final Review**: Does it look "premium"? If it looks basic, it is not finished.
