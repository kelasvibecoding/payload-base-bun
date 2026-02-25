---
trigger: always_on
glob: "**/*"
---

# FBA-SOLID-SSOT Architecture Enforcement

This rule enforces the trinity of architectural principles across the entire codebase: **Feature-Based Architecture (FBA)**, **SOLID Principles**, and **Single Source of Truth (SSOT)**.

## 1. Single Source of Truth (SSOT) Enforcement

### Rule: No Duplicate Constants
**NEVER** define the same options, configuration, or business logic in multiple places.

#### ❌ FORBIDDEN Patterns:
```typescript
// Defining options in Collection AND Frontend separately
// src/collections/Posts.ts
{ name: 'status', type: 'select', options: ['draft', 'published'] }

// src/app/components/PostForm.tsx
const statuses = ['draft', 'published']

// Hardcoded magic numbers in multiple files
const MAX_SIZE = 5 * 1024 * 1024 // In upload.ts
const FILE_LIMIT = 5242880 // In validation.ts
```

#### ✅ REQUIRED Pattern:
```typescript
// src/features/posts/constants.ts (SSOT)
export const POST_STATUS_OPTIONS = [
  { label: 'Draft', value: 'draft' },
  { label: 'Published', value: 'published' }
] as const satisfies readonly Option<PostStatus>[]

export const POST_STATUS_VALUES = extractValues(POST_STATUS_OPTIONS)

// src/collections/Posts.ts (Import from SSOT)
import { POST_STATUS_OPTIONS } from '@/features/posts/constants'
{ name: 'status', type: 'select', options: [...POST_STATUS_OPTIONS] }

// src/features/posts/components/post-form.tsx (Import from SSOT)
import { POST_STATUS_OPTIONS } from '../constants'
<Select options={[...POST_STATUS_OPTIONS]} />

// src/features/posts/schemas.ts (Import from SSOT)
import { POST_STATUS_VALUES } from './constants'
const schema = z.object({ status: z.enum(POST_STATUS_VALUES) })
```

### Rule: Business Logic SSOT
**Business logic must live in ONE place** (typically `src/features/[name]/services/`).

#### ❌ FORBIDDEN:
```typescript
// Same logic in hook and frontend
// In hook:
if (data.type === 'premium' && !user.isPremium) throw new Error('Unauthorized')

// In frontend:
if (post.type === 'premium' && !currentUser.isPremium) return null
```

#### ✅ REQUIRED:
```typescript
// src/features/posts/services/access.ts (SSOT for business logic)
export function canAccessPost(post: Post, user?: User): boolean {
  if (post.type === 'premium') return user?.isPremium ?? false
  return true
}

// In hook:
if (!canAccessPost(doc, req.user)) throw new APIError('Unauthorized', 403)

// In frontend:
if (!canAccessPost(post, currentUser)) return null
```

---

## 2. Feature-Based Architecture (FBA) Enforcement

### Core Philosophy
Group code by **Feature Domain** (e.g., Auth, Blog, Shop, Contact) rather than **File Type** (e.g., Components, Utils, Hooks). This makes the codebase scalable, maintainable, and easier to navigate.

### The SOLID Connection
Feature-Based Architecture is the **structural foundation** for **SOLID Principles**:
- **SRP**: Each feature folder (`src/features/xyz`) has one responsibility.
- **OCP**: Features isolate change; you can add a new `src/features/audit-logs` without touching `src/features/posts`.
- **DIP**: Collections (`src/collections`) depend on Feature Interfaces (Hooks/Services), not implementation details.

### Rule: Feature Organization
**All feature-related code MUST live in `src/features/[feature-name]/`.**

#### Required Directory Structure:
```
src/features/[feature-name]/
├── components/         # Feature-specific UI (REQUIRED if has UI)
├── services/           # Business logic & API calls (REQUIRED if has server logic)
├── hooks/              # Custom hooks (OPTIONAL)
├── utils/              # Helper functions (OPTIONAL)
├── types/              # Local types (OPTIONAL)
├── constants.ts        # SSOT for this feature (REQUIRED if has options/config)
├── schemas.ts          # Zod validation (REQUIRED if has forms)
└── actions.ts          # Server Actions (OPTIONAL)
```

### Rule: Naming Conventions (MANDATORY)

#### Directories:
- **MUST** use `kebab-case`: `src/features/user-profile/`, `src/features/blog-posts/`
- **FORBIDDEN**: `camelCase`, `PascalCase`, `snake_case`

#### Component Files:
- **MUST** use `kebab-case.tsx`: `post-card.tsx`, `event-form.tsx`
- **MUST** export `PascalCase`: `export function PostCard() { ... }`
- **FORBIDDEN**: Default exports (use named exports)

#### Hooks:
- **MUST** use `kebab-case.ts`: `use-auth.ts`, `use-post-query.ts`
- **MUST** export `camelCase`: `export function useAuth() { ... }`

#### Services/Utils:
- **MUST** use `kebab-case.ts`: `post-service.ts`, `date-utils.ts`

### Rule: Import Paths
**MUST** use absolute imports for features.

#### ✅ CORRECT:
```typescript
import { POST_STATUS_OPTIONS } from '@/features/posts/constants'
import { EventCard } from '@/features/events/components/event-card'
import { useAuth } from '@/features/auth/hooks/use-auth'
```

#### ❌ FORBIDDEN:
```typescript
import { POST_STATUS_OPTIONS } from '../../../features/posts/constants'
import { EventCard } from '../../events/components/event-card'
```

### Rule: Global vs Feature Components
- **Global** (`src/components/ui/`): Generic UI components (Button, Input, Card) from Shadcn
- **Feature** (`src/features/[name]/components/`): Domain-specific UI (PostCard, EventForm)

#### ❌ FORBIDDEN:
```typescript
// Putting domain-specific component in global /components
src/components/PostCard.tsx
src/components/EventForm.tsx
```

#### ✅ REQUIRED:
```typescript
// Domain-specific components in feature folder
src/features/posts/components/post-card.tsx
src/features/events/components/event-form.tsx

// Only generic UI in global /components
src/components/ui/button.tsx
src/components/ui/input.tsx
```

### Rule: Shared/Global Placement
For code that is NOT specific to a single feature and needs to be shared globally:

- **Server-side functions (Shared)** → `src/utilities/`
- **Client-side hooks (Shared)** → `src/hooks/`
- **API endpoints** → `src/app/(payload)/api/`
- **Components (Shared/Generic)** → `src/components/`

> [!IMPORTANT]
> Always prefer placing code in `src/features/[name]/` first. Only use these shared directories for truly generic logic used by 3+ features.

---

## 3. SOLID Principles Enforcement

### Synergy: FBA + SOLID + SSOT
**These principles are highly complementary and work together:**
- **FBA** provides the *structural boundaries* that make implementing SOLID easier
- **SSOT** ensures abstractions have a single authoritative source
- **SOLID** defines *how to build* within those boundaries

**How they collaborate:**
- **SRP + FBA**: Each feature folder (`src/features/xyz`) has one domain responsibility
- **OCP + FBA**: Features isolate change; add new features without modifying existing ones
- **DIP + FBA**: Collections import from feature services (abstraction), not implementation details
- **SSOT + DIP**: Interfaces and contracts defined once, used everywhere

### S - Single Responsibility Principle (SRP)

**Each function/class MUST have ONE reason to change.**

#### ❌ FORBIDDEN (God Functions):
```typescript
async function handleUserRegistration(data: UserInput) {
  // Validation + Business Logic + DB + Email + Logging = 5 responsibilities
  if (!data.email) throw new Error('Email required')
  const hashedPassword = await bcrypt.hash(data.password, 10)
  const user = await db.create({ ...data, password: hashedPassword })
  await sendWelcomeEmail(user.email)
  logger.info(`New user: ${user.id}`)
  return user
}
```

#### ✅ REQUIRED (Separated Responsibilities):
```typescript
// src/features/auth/services/registration.ts
export async function registerUser(data: UserInput): Promise<User> {
  validateUserInput(data)               // 1. Validation
  const hashedPassword = await hashPassword(data.password) // 2. Business logic
  const user = await createUser({ ...data, password: hashedPassword }) // 3. DB
  await notifyUserRegistration(user)    // 4. Side effects
  return user
}

function validateUserInput(data: UserInput): void { ... }
async function hashPassword(password: string): Promise<string> { ... }
async function createUser(data: UserData): Promise<User> { ... }
async function notifyUserRegistration(user: User): Promise<void> { ... }
```

#### Payload-Specific SRP:
- **Hooks**: One hook = one task (e.g., `sendEmailNotification`, not a chain of unrelated side effects)
  - ❌ BAD: `afterChange` hook that sends emails, updates analytics, AND syncs to Stripe
  - ✅ GOOD: Three separate hooks: `sendEmail`, `updateAnalytics`, `syncToStripe`
  
- **React Components**: Split large components
  - ❌ BAD: `ProductCard` handles display, filtering logic, AND data fetching
  - ✅ GOOD: `ProductCard` displays data only; lift state up or use hooks for logic

### O - Open/Closed Principle (OCP)

**Extend via interfaces, NOT by modifying existing code.**

#### ❌ FORBIDDEN (Modifying existing code for new features):
```typescript
class PaymentProcessor {
  process(method: string, amount: number) {
    if (method === 'stripe') { /* Stripe */ }
    else if (method === 'paypal') { /* PayPal */ }
    // Adding crypto payment requires MODIFYING this function
  }
}
```

#### ✅ REQUIRED (Extension via interfaces):
```typescript
interface PaymentProcessor {
  process(amount: number): Promise<PaymentResult>
}

class StripeProcessor implements PaymentProcessor { ... }
class PayPalProcessor implements PaymentProcessor { ... }
class CryptoProcessor implements PaymentProcessor { ... } // NEW, no modification

const processors: Record<PaymentMethod, PaymentProcessor> = {
  stripe: new StripeProcessor(),
  paypal: new PayPalProcessor(),
  crypto: new CryptoProcessor(), // NEW, no modification
}
```

#### Payload-Specific OCP:
- **Payload Config**: Use Plugins and reusable Features to extend functionality without modifying core `payload.config.ts`
- **React Components**: Use `children` props and compositional patterns
  - ✅ GOOD: `<Modal trigger={...} content={...} />` is open for extension (any content) but closed for modification

### L - Liskov Substitution Principle (LSP)

**Subtypes must be substitutable for their base types.**

#### TypeScript Enforcement:
- Ensure subtypes strictly adhere to the interface contract
- **Component variants**: If `SubmitButton` extends `BaseButton`, it should work anywhere `BaseButton` is expected
- **Service Interfaces**: Switching from `StripePaymentProvider` to `PayPalPaymentProvider` shouldn't break calling code

### I - Interface Segregation Principle (ISP)

**Clients shouldn't depend on interfaces they don't use.**

#### React-Specific ISP:
- **Props**: Avoid passing entire objects when only a few fields are needed
  - ❌ BAD: Passing entire `User` object to a component that only needs `avatarUrl`
  - ✅ GOOD: Define specific interface: `AvatarProps { url: string }`
  
#### Payload-Specific ISP:
- **Access Control**: Create focused functions (`canReadPosts`) rather than giant `checkPermissions(user, 'read', 'posts')`

### D - Dependency Inversion Principle (DIP)

**Depend on abstractions (interfaces), NOT concretions (classes).**

#### ❌ FORBIDDEN (Concrete dependencies):
```typescript
import { EmailService } from '@/lib/email' // Concrete

class NotificationService {
  constructor(private emailService: EmailService) {} // Tightly coupled
}
```

#### ✅ REQUIRED (Abstract dependencies):
```typescript
// Define interface
interface NotificationChannel {
  send(recipient: string, message: string): Promise<void>
}

// Depend on abstraction
class NotificationService {
  constructor(private channel: NotificationChannel) {} // Loose coupling
}

// Implementations
class EmailChannel implements NotificationChannel { ... }
class SMSChannel implements NotificationChannel { ... }

// Inject dependency
const notifier = new NotificationService(new EmailChannel())
```

#### Payload-Specific DIP:
- **Hooks**: Call service functions (abstraction), not direct implementations
  - ❌ BAD: Hook implements business logic directly
  - ✅ GOOD: Hook calls `await notificationService.send(...)`
  
- **React Data Fetching**: Use custom hooks (`useProducts()`) instead of direct `fetch()` calls
  - Allows switching between SWR, React Query, or Server Actions without breaking UI

---

## 4. Co-location Principle

**Code that changes together MUST live together.**

### Rule: Form + Schema Co-location
**Forms and their validation schemas MUST be in the same feature folder.**

#### ❌ FORBIDDEN:
```typescript
// Scattered
src/schemas/contact.ts           // contactSchema
src/components/forms/ContactForm.tsx
```

#### ✅ REQUIRED:
```typescript
// Co-located
src/features/contact/
├── components/
│   └── contact-form.tsx        # Uses contactSchema
└── schemas.ts                  # contactSchema
```

### Rule: Component + Hook Co-location
**Custom hooks specific to a component MUST be in the same feature folder.**

#### ✅ REQUIRED:
```typescript
src/features/posts/
├── components/
│   └── post-editor.tsx         # Uses usePostEditor
└── hooks/
    └── use-post-editor.ts      # Hook for PostEditor
```

---

## 5. Payload CMS Integration

### Rule: Collections Import from Features
**Payload Collections MUST import constants from feature folders (SSOT).**

#### ✅ REQUIRED:
```typescript
// src/collections/Posts.ts
import { POST_STATUS_OPTIONS, POST_CATEGORY_OPTIONS } from '@/features/posts/constants'

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'status',
      type: 'select',
      options: [...POST_STATUS_OPTIONS], // Import from SSOT
    },
    {
      name: 'categories',
      type: 'select',
      hasMany: true,
      options: [...POST_CATEGORY_OPTIONS], // Import from SSOT
    },
  ],
}
```

### Rule: Complex Logic in Features
**Complex hooks, access control, and business logic MUST be extracted to feature folders.**

#### ❌ FORBIDDEN (Complex logic directly in collection):
```typescript
// src/collections/Posts.ts
export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: async ({ req }) => {
      // 50 lines of complex logic here
    },
  },
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        // 100 lines of business logic here
      },
    ],
  },
}
```

#### ✅ REQUIRED (Extract to feature services):
```typescript
// src/features/posts/services/access.ts
export const postsReadAccess: Access = async ({ req }) => {
  // Complex logic here
}

// src/features/posts/hooks/before-change.ts
export const postsBeforeChange: CollectionBeforeChangeHook = async ({ data, req }) => {
  // Business logic here
}

// src/collections/Posts.ts (Clean)
import { postsReadAccess } from '@/features/posts/services/access'
import { postsBeforeChange } from '@/features/posts/hooks/before-change'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: { read: postsReadAccess },
  hooks: { beforeChange: [postsBeforeChange] },
}
```

---

## Enforcement Checklist (Before Committing)

When creating or modifying code, verify:

### SSOT:
- [ ] No duplicate option arrays (Payload + Frontend + Zod)
- [ ] No duplicate validation logic
- [ ] No duplicate business rules
- [ ] No hardcoded magic numbers/strings
- [ ] Configuration centralized in `constants.ts`

### FBA:
- [ ] Feature code in `src/features/[feature-name]/`
- [ ] Directories use `kebab-case`
- [ ] Component files use `kebab-case.tsx`, export `PascalCase`
- [ ] Imports use `@/features/` absolute paths
- [ ] Related code is co-located

### SOLID:
- [ ] Functions have single responsibility (SRP)
- [ ] New features extend via interfaces (OCP)
- [ ] Dependencies are injected (DIP)
- [ ] Interfaces are focused (ISP)

---

## Migration Steps (Refactoring Existing Code)

### Step 1: Identify SSOT Violations
Search for duplicate constants:
```bash
# Find duplicate option arrays
grep -r "options: \[" src/collections/
grep -r "const.*OPTIONS" src/

# Find duplicate validation
grep -r "validate:" src/
```

### Step 2: Extract to Feature Constants
```typescript
// Create src/features/[name]/constants.ts
export const OPTIONS = [ ... ] as const satisfies readonly Option<Type>[]
export const VALUES = extractValues(OPTIONS)
```

### Step 3: Update Imports
Replace all duplicates with imports from the new SSOT.

### Step 4: Apply FBA Structure
```bash
mkdir -p src/features/[name]/{components,services,hooks}
mv src/components/FeatureComponent.tsx src/features/[name]/components/feature-component.tsx
```

### Step 5: Refactor to SOLID
Extract God functions into focused, single-responsibility functions.

---

## Benefits Summary

### SSOT:
- ✅ No sync errors between frontend/backend
- ✅ Single place to update
- ✅ Type safety across stack

### FBA:
- ✅ Easy to locate code
- ✅ Clear boundaries
- ✅ Scalable architecture

### SOLID:
- ✅ Easy to test
- ✅ Easy to extend
- ✅ Reduced coupling

---

## Final Note

These rules are **MANDATORY** for all code in this project. When in doubt, refer to the [FBA-SOLID-SSOT Skill](../.agent/skills/fba-solid-ssot/SKILL.md) for detailed examples and patterns.
