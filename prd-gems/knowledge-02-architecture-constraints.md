# Software Architecture & Payload CMS Constraints

The objective of a PRD (Product Requirement Document) in the `payload-base` ecosystem is not just to describe features, but to rigorously map them against a strictly-typed, high-performance tech stack. 

When you define requirements in Phase 1 (Discovery) or Phase 2 (Drafting), you must ensure they comply with the following architectural and ecosystem truths.

### 1. FBA-SOLID-SSOT Architecture (Feature Based Architecture)
All tasks and scopes generated must respect the project's strict folder structure:
- **SSOT**: Constants, Zod schemas, and base configs must live exactly once in `src/features/[name]/constants.ts`.
- **FBA**: All business logic (Services), Hooks, and UI Components live logically grouped under `src/features/[feature-name]/`. 
- **Payload Collections**: The `src/collections/[name]` files are thin wrappers. They import options and complex hooks directly from the `features/` folder.

### 2. Payload CMS 3.0 (Headless Backend) Constraints
The ecosystem uses **Payload CMS 3.0** as the headless backend/database. 
- **Data Integrity (Audit Trails)**: Every database record in Payload base must track authorship (`createdBy` and `updatedBy` fields). Assume this is required for every collection.
- **Access Control (Row-Level Security)**: You must define strict definitions of who can read/write data. Payload Local API calls skip access control by default unless properly routed.
- **Database Scale / Timeouts**: Transactions timeout if uncontrolled. The PRD must define if you expect 100 rows or 10,000,000 rows so developers know to implement hook guards and pagination limits.

### 3. Next.js 15+ (App Router) Constraints
The ecosystem relies heavily on Server Components and optimized rendering.
- **Zero-JS Shell Priority**: Critical UI elements like sidebars, navbars, and heroes must not use Client-side JavaScript. Do not suggest heavy JS interaction models inside the App Shell.
- **URL Synchronization**: Any state that should survive a page refresh (like Tabs, Search Filters, Pagination) must be synced natively to the URL (`?tab=dashboard`).
- **Server Pre-hydration**: Ensure the PRD emphasizes preventing the "Loading Spinner Flash" by pre-fetching critical initial data on the Server.

### 4. Vibe-Blocks & Styling
- The project does not use generic Bootstrap styles. It uses a curated set of components called **vibe-blocks** (based on Relume and Shadcn UI).
- Always suggest using Google Stitch to rapid-prototype UI if the user is struggling to define the layout.
