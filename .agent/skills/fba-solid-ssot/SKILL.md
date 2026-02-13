---
name: fba-solid-ssot
description: Comprehensive architectural framework combining Feature-Based Architecture (FBA), SOLID Principles, and Single Source of Truth (SSOT) for building scalable, maintainable Payload CMS applications. Use when designing new features, refactoring existing code, or making architectural decisions. Triggers on architecture design, feature planning, code organization, refactoring, and system design discussions.
---

# FBA + SOLID + SSOT Architecture Framework

This skill combines three foundational architectural principles to create a robust, scalable codebase for Payload CMS and Next.js applications.

## The Trinity of Architecture

```
┌─────────────────┐
│      SSOT       │ ← Single Source of Truth
│  (What & Where) │    Every piece of data/logic has ONE authoritative location
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│       FBA       │ ← Feature-Based Architecture
│  (Organization) │    Code grouped by business domain, not file type
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│      SOLID      │ ← SOLID Principles
│  (How to Build) │    Design patterns for maintainable, extensible code
└─────────────────┘
```

## 1. Single Source of Truth (SSOT)

### Core Principle
**Every piece of data, configuration, or business logic must have exactly ONE authoritative source.**

### SSOT Rules

#### Rule 1: Constants & Options
```typescript
// ❌ BAD: Options defined in multiple places
// In Collection:
{ name: 'status', type: 'select', options: ['draft', 'published'] }

// In Frontend:
const statuses = [
  { label: 'Draft', value: 'draft' },
  { label: 'Published', value: 'published' }
]

// ✅ GOOD: Single Source of Truth
// src/features/posts/constants.ts
export const POST_STATUS_OPTIONS = [
  { label: 'Draft', value: 'draft' },
  { label: 'Published', value: 'published' }
] as const satisfies readonly Option<PostStatus>[]

export const POST_STATUS_VALUES = extractValues(POST_STATUS_OPTIONS)

// In Collection:
{ name: 'status', type: 'select', options: [...POST_STATUS_OPTIONS] }

// In Frontend:
<Select options={[...POST_STATUS_OPTIONS]} />

// In Zod:
const schema = z.object({ status: z.enum(POST_STATUS_VALUES) })
```

#### Rule 2: Business Logic
```typescript
// ❌ BAD: Business logic duplicated
// In hook:
if (data.type === 'premium' && !user.isPremium) throw new Error('Unauthorized')

// In frontend:
if (post.type === 'premium' && !currentUser.isPremium) return null

// ✅ GOOD: Centralized business logic
// src/features/posts/services/access.ts
export function canAccessPost(post: Post, user?: User): boolean {
  if (post.type === 'premium') {
    return user?.isPremium ?? false
  }
  return true
}

// In hook:
if (!canAccessPost(doc, req.user)) throw new APIError('Unauthorized', 403)

// In frontend:
if (!canAccessPost(post, currentUser)) return null
```

#### Rule 3: Configuration
```typescript
// ❌ BAD: Configuration scattered
const MAX_UPLOAD_SIZE = 5 * 1024 * 1024 // In upload.ts
const FILE_SIZE_LIMIT = 5242880 // In validation.ts

// ✅ GOOD: Centralized configuration
// src/config/constants.ts
export const UPLOAD_CONFIG = {
  MAX_SIZE: 5 * 1024 * 1024,
  ALLOWED_TYPES: ['image/jpeg', 'image/png'],
  MAX_DIMENSION: 4096,
} as const
```

### SSOT Checklist
- [ ] No duplicate option arrays (Payload + Frontend + Zod)
- [ ] No duplicate validation logic (Backend + Frontend)
- [ ] No duplicate business rules (Hooks + Access + Frontend)
- [ ] No hardcoded magic numbers or strings
- [ ] Configuration lives in one place (`src/config/` or feature `constants.ts`)

---

## 2. Feature-Based Architecture (FBA)

### Core Principle
**Group code by business domain (feature), not by file type.**

### Directory Structure

```
src/
├── features/                    # Feature domains
│   ├── [feature-name]/         # kebab-case (e.g., user-profile, blog-posts)
│   │   ├── components/         # Feature-specific UI components
│   │   ├── hooks/              # Feature-specific hooks
│   │   ├── services/           # API calls / Business logic
│   │   ├── types/              # Local types
│   │   ├── utils/              # Helper functions
│   │   ├── constants.ts        # SSOT for feature options/config
│   │   ├── schemas.ts          # Zod validation schemas
│   │   └── actions.ts          # Server Actions
│   │
│   ├── auth/                   # Authentication feature
│   │   ├── components/         # LoginForm, SignUpForm
│   │   ├── services/           # authService.ts
│   │   ├── hooks/              # useAuth.ts
│   │   ├── constants.ts        # AUTH_PROVIDERS, ROLES
│   │   └── schemas.ts          # loginSchema, signupSchema
│   │
│   └── posts/                  # Blog posts feature
│       ├── components/         # PostCard, PostEditor
│       ├── services/           # postService.ts
│       ├── constants.ts        # POST_STATUS_OPTIONS, CATEGORIES
│       └── schemas.ts          # postSchema
│
├── collections/                # Payload Collections
│   └── Posts.ts                # Imports from src/features/posts/constants.ts
│
├── components/                 # Global/shared UI components
│   └── ui/                     # Shadcn components (Button, Input, etc.)
│
└── lib/                        # Global utilities
    └── utils.ts                # cn(), etc.
```

### FBA Rules

#### Rule 1: Feature Boundaries
```typescript
// ✅ GOOD: Feature is self-contained
src/features/events/
├── components/
│   ├── event-card.tsx          # Exports EventCard
│   ├── event-list.tsx          # Exports EventList
│   └── event-form.tsx          # Exports EventForm
├── services/
│   └── event-service.ts        # API calls for events
├── constants.ts                # EVENT_TYPES, EVENT_STATUS
└── schemas.ts                  # eventSchema

// Other features reference via imports:
import { EVENT_TYPES } from '@/features/events/constants'
import { EventCard } from '@/features/events/components/event-card'
```

#### Rule 2: Naming Conventions
- **Directories**: Always `kebab-case` (e.g., `user-profile`, `landing-page`)
- **Components**: Files in `kebab-case.tsx`, exports in `PascalCase`
- **Utilities/Hooks**: Files in `kebab-case.ts`
- **Exports**: Prefer named exports over default exports

```typescript
// ✅ GOOD
// src/features/posts/components/post-card.tsx
export function PostCard({ post }: PostCardProps) { ... }

// ❌ BAD
// src/features/posts/components/PostCard.tsx
export default function PostCard({ post }: PostCardProps) { ... }
```

#### Rule 3: Co-location
**Code that changes together should live together.**

```typescript
// ✅ GOOD: Form + validation schema co-located
src/features/contact/
├── components/
│   └── contact-form.tsx        # Uses contactSchema
└── schemas.ts                  # contactSchema

// ❌ BAD: Scattered
src/schemas/contact.ts           # contactSchema
src/components/forms/ContactForm.tsx
```

### FBA Checklist
- [ ] Features are organized in `src/features/[feature-name]/`
- [ ] Feature folders use `kebab-case`
- [ ] Components use `kebab-case.tsx` files, `PascalCase` exports
- [ ] Related code is co-located (form + schema, component + hook)
- [ ] Global components live in `src/components/ui/`
- [ ] Feature imports use absolute paths: `@/features/auth/constants`

---

## 3. SOLID Principles

### S - Single Responsibility Principle (SRP)

**Each module/class/function should have one reason to change.**

```typescript
// ❌ BAD: Multiple responsibilities
async function handleUserRegistration(data: UserInput) {
  // Validation
  if (!data.email) throw new Error('Email required')
  
  // Business logic
  const hashedPassword = await bcrypt.hash(data.password, 10)
  
  // Database operation
  const user = await db.create({ ...data, password: hashedPassword })
  
  // Email notification
  await sendWelcomeEmail(user.email)
  
  // Logging
  logger.info(`New user: ${user.id}`)
  
  return user
}

// ✅ GOOD: Separated responsibilities
// src/features/auth/services/registration.ts
export async function registerUser(data: UserInput): Promise<User> {
  validateUserInput(data)               // Validation
  const hashedPassword = await hashPassword(data.password) // Business logic
  const user = await createUser({ ...data, password: hashedPassword }) // DB
  await notifyUserRegistration(user)    // Side effects
  return user
}

function validateUserInput(data: UserInput): void { ... }
async function hashPassword(password: string): Promise<string> { ... }
async function createUser(data: UserData): Promise<User> { ... }
async function notifyUserRegistration(user: User): Promise<void> {
  await sendWelcomeEmail(user.email)
  logger.info(`New user: ${user.id}`)
}
```

### O - Open/Closed Principle (OCP)

**Open for extension, closed for modification.**

```typescript
// ❌ BAD: Must modify class to add new payment methods
class PaymentProcessor {
  process(method: string, amount: number) {
    if (method === 'stripe') {
      // Stripe logic
    } else if (method === 'paypal') {
      // PayPal logic
    }
    // Adding new method requires modifying this function
  }
}

// ✅ GOOD: Extensible via strategy pattern
// src/features/payments/services/processors.ts
interface PaymentProcessor {
  process(amount: number): Promise<PaymentResult>
}

class StripeProcessor implements PaymentProcessor {
  async process(amount: number): Promise<PaymentResult> { ... }
}

class PayPalProcessor implements PaymentProcessor {
  async process(amount: number): Promise<PaymentResult> { ... }
}

// Adding new processor doesn't modify existing code
class CryptoProcessor implements PaymentProcessor {
  async process(amount: number): Promise<PaymentResult> { ... }
}

// Factory
const processors: Record<PaymentMethod, PaymentProcessor> = {
  stripe: new StripeProcessor(),
  paypal: new PayPalProcessor(),
  crypto: new CryptoProcessor(),
}

export async function processPayment(method: PaymentMethod, amount: number) {
  return processors[method].process(amount)
}
```

### L - Liskov Substitution Principle (LSP)

**Subtypes must be substitutable for their base types.**

```typescript
// ❌ BAD: Square violates Rectangle contract
class Rectangle {
  constructor(protected width: number, protected height: number) {}
  setWidth(w: number) { this.width = w }
  setHeight(h: number) { this.height = h }
  area() { return this.width * this.height }
}

class Square extends Rectangle {
  setWidth(w: number) { this.width = this.height = w } // Violates LSP
  setHeight(h: number) { this.width = this.height = h }
}

// ✅ GOOD: Composition over inheritance
interface Shape {
  area(): number
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area() { return this.width * this.height }
}

class Square implements Shape {
  constructor(private side: number) {}
  area() { return this.side * this.side }
}
```

### I - Interface Segregation Principle (ISP)

**Clients shouldn't depend on interfaces they don't use.**

```typescript
// ❌ BAD: Fat interface
interface Document {
  save(): void
  print(): void
  scan(): void
  fax(): void
}

class SimplePrinter implements Document {
  save() { throw new Error('Not supported') }
  print() { /* OK */ }
  scan() { throw new Error('Not supported') }  // Forced to implement unnecessary methods
  fax() { throw new Error('Not supported') }
}

// ✅ GOOD: Segregated interfaces
interface Saveable { save(): void }
interface Printable { print(): void }
interface Scannable { scan(): void }
interface Faxable { fax(): void }

class SimplePrinter implements Printable {
  print() { /* OK */ }
}

class MultiFunctionDevice implements Printable, Scannable, Faxable {
  print() { /* ... */ }
  scan() { /* ... */ }
  fax() { /* ... */ }
}
```

### D - Dependency Inversion Principle (DIP)

**Depend on abstractions, not concretions.**

```typescript
// ❌ BAD: High-level module depends on low-level module
// src/features/notifications/services/notifier.ts
import { EmailService } from '@/lib/email' // Concrete dependency

class NotificationService {
  constructor(private emailService: EmailService) {}
  
  async notify(user: User, message: string) {
    await this.emailService.send(user.email, message)
  }
}

// ✅ GOOD: Depend on abstraction
// src/features/notifications/types.ts
export interface NotificationChannel {
  send(recipient: string, message: string): Promise<void>
}

// src/features/notifications/services/notifier.ts
class NotificationService {
  constructor(private channel: NotificationChannel) {} // Abstract dependency
  
  async notify(user: User, message: string) {
    await this.channel.send(user.email, message)
  }
}

// Implementations
class EmailChannel implements NotificationChannel {
  async send(recipient: string, message: string) { /* Email logic */ }
}

class SMSChannel implements NotificationChannel {
  async send(recipient: string, message: string) { /* SMS logic */ }
}

// Inject dependency
const notifier = new NotificationService(new EmailChannel())
```

### SOLID Checklist
- [ ] Functions/classes have single, clear purpose (SRP)
- [ ] New features extend via interfaces, not modifications (OCP)
- [ ] Derived types are substitutable (LSP)
- [ ] Interfaces are minimal and focused (ISP)
- [ ] Dependencies are injected, not hardcoded (DIP)

---

## Unified Workflow: FBA + SOLID + SSOT

### Example: Adding a New "Events" Feature

```typescript
// STEP 1: Define SSOT for constants
// src/features/events/constants.ts
import type { Option } from '@/lib/schemas/utils'
import type { Event } from '@/payload-types'

type EventType = Event['type']

export const EVENT_TYPE_OPTIONS = [
  { label: 'Conference', value: 'conference' },
  { label: 'Workshop', value: 'workshop' },
  { label: 'Meetup', value: 'meetup' },
] as const satisfies readonly Option<EventType>[]

export const EVENT_TYPE_VALUES = extractValues(EVENT_TYPE_OPTIONS)

// STEP 2: Use SSOT in Payload Collection (FBA: Collections import from features)
// src/collections/Events.ts
import { EVENT_TYPE_OPTIONS } from '@/features/events/constants'

export const Events: CollectionConfig = {
  slug: 'events',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [...EVENT_TYPE_OPTIONS], // SSOT
    },
  ],
}

// STEP 3: Create service layer (SOLID: DIP - depend on abstractions)
// src/features/events/types.ts
export interface EventRepository {
  findById(id: string): Promise<Event | null>
  findUpcoming(): Promise<Event[]>
}

// src/features/events/services/event-service.ts
export class EventService {
  constructor(private repo: EventRepository) {} // DIP: Inject dependency
  
  // SRP: Single responsibility - business logic only
  async getUpcomingEvents(): Promise<Event[]> {
    return this.repo.findUpcoming()
  }
  
  async canUserRegister(event: Event, user: User): boolean {
    // Business logic centralized (SSOT for business rules)
    if (event.isFull) return false
    if (event.requiresPremium && !user.isPremium) return false
    return true
  }
}

// STEP 4: Frontend uses SSOT and services
// src/features/events/components/event-form.tsx
import { EVENT_TYPE_OPTIONS } from '../constants' // SSOT
import { eventSchema } from '../schemas' // Co-located validation

export function EventForm() {
  const form = useForm({
    resolver: zodResolver(eventSchema),
  })
  
  return (
    <Select>
      {EVENT_TYPE_OPTIONS.map(opt => (
        <SelectItem key={opt.value} value={opt.value}>
          {opt.label}
        </SelectItem>
      ))}
    </Select>
  )
}

// STEP 5: Zod schema uses SSOT
// src/features/events/schemas.ts
import { z } from 'zod/v4'
import { EVENT_TYPE_VALUES } from './constants' // SSOT

export const eventSchema = z.object({
  type: z.enum(EVENT_TYPE_VALUES), // SSOT
  title: z.string().min(1),
})
```

---

## Migration Guide

### Refactoring Existing Code to FBA + SOLID + SSOT

#### Phase 1: Identify SSOT Violations
```bash
# Find duplicate option arrays
grep -r "options: \[" src/collections/
grep -r "options=" src/app/
grep -r "const.*OPTIONS" src/

# Find duplicate validation
grep -r "validate:" src/collections/
grep -r "z.object" src/
```

#### Phase 2: Extract Constants
```typescript
// Before:
// src/collections/Posts.ts
{ name: 'status', type: 'select', options: ['draft', 'published'] }
// src/app/components/PostFilter.tsx
const statuses = ['draft', 'published']

// After:
// src/features/posts/constants.ts
export const POST_STATUS_OPTIONS = [ ... ] as const

// src/collections/Posts.ts
import { POST_STATUS_OPTIONS } from '@/features/posts/constants'
{ name: 'status', type: 'select', options: [...POST_STATUS_OPTIONS] }

// src/features/posts/components/post-filter.tsx
import { POST_STATUS_OPTIONS } from '../constants'
```

#### Phase 3: Apply Feature-Based Structure
```bash
# Create feature directory
mkdir -p src/features/posts/{components,services,hooks}

# Move related files
mv src/components/PostCard.tsx src/features/posts/components/post-card.tsx
mv src/lib/postUtils.ts src/features/posts/utils/
```

#### Phase 4: Apply SOLID Principles
```typescript
//Before: God function with multiple responsibilities
async function handlePost(data) {
  // Validation
  if (!data.title) throw new Error('Title required')
  // Business logic
  data.slug = slugify(data.title)
  // DB operation
  const post = await db.create(data)
  // Notification
  await sendNotification(post)
  // Analytics
  trackEvent('post_created')
  return post
}

// After: Separated responsibilities (SRP)
async function createPost(data: PostInput): Promise<Post> {
  validatePost(data) // Validation
  const processedData = processPostData(data) // Business logic
  const post = await savePost(processedData) // DB operation
  await notifyPostCreated(post) // Side effects
  return post
}

function validatePost(data: PostInput): void { ... }
function processPostData(data: PostInput): PostData { ... }
async function savePost(data: PostData): Promise<Post> { ... }
async function notifyPostCreated(post: Post): Promise<void> {
  await sendNotification(post)
  trackEvent('post_created', { id: post.id })
}
```

---

## Quick Reference

### SSOT Pattern
```typescript
// 1. Define once in constants.ts
export const OPTIONS = [ ... ] as const satisfies readonly Option<Type>[]
export const VALUES = extractValues(OPTIONS)

// 2. Use everywhere
// Payload: options: [...OPTIONS]
// Frontend: <Select options={[...OPTIONS]} />
// Zod: z.enum(VALUES)
```

### FBA Pattern
```typescript
src/features/[feature-name]/
├── components/          // UI specific to this feature
├── services/            // Business logic & API calls
├── hooks/               // Custom hooks for this feature
├── constants.ts         // SSOT for this feature
├── schemas.ts           // Validation schemas
└── types.ts             // Local types
```

### SOLID Pattern
```typescript
// SRP: One responsibility per function
// OCP: Extend via interfaces, not modification
// LSP: Subtypes are substitutable
// ISP: Small, focused interfaces
// DIP: Inject dependencies, depend on abstractions
```

---

## Enforcement Checklist

Before committing code, verify:

- [ ] **SSOT**: No duplicate constants, options, or business logic
- [ ] **FBA**: Feature code is co-located in `src/features/[name]/`
- [ ] **SOLID-SRP**: Functions have single, clear purpose
- [ ] **SOLID-OCP**: New features extend, not modify
- [ ] **SOLID-DIP**: Dependencies are injected
- [ ] **Naming**: `kebab-case` files, `PascalCase` exports
- [ ] **Imports**: Use `@/features/` absolute paths
- [ ] **Co-location**: Form + schema, component + hook together

---

## Benefits

### SSOT Benefits
- ✅ No sync errors between frontend/backend
- ✅ Single place to update options
- ✅ Type safety across the stack
- ✅ Reduced duplication

### FBA Benefits
- ✅ Easy to locate feature code
- ✅ Clear feature boundaries
- ✅ Scalable to 100+ features
- ✅ New developers onboard faster

### SOLID Benefits
- ✅ Easy to test (dependency injection)
- ✅ Easy to extend (open/closed)
- ✅ Easy to maintain (single responsibility)
- ✅ Reduced coupling

---

## Resources

- [SSOT on Wikipedia](https://en.wikipedia.org/wiki/Single_source_of_truth)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Payload Option Sync Skill](../payload-option-sync/SKILL.md)
- [Feature-Based Architecture Skill](../feature-based-architecture/SKILL.md)
