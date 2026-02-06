
# SOLID Principles

Apply the SOLID principles to ensure software scalability, maintainability, and robustness, specifically adapted for the Payload CMS and Next.js ecosystem.

## 0. Synergy with Feature-Based Architecture (FBA)
**FBA and SOLID are highly complementary.** FBA provides the *structural boundaries* that make implementing SOLID principles easier.
- **Micro-Domains**: FBA splits the app into features (`src/features/contact`), which naturally supports **SRP** by grouping related responsibilities.
- **Encapsulation**: Each feature folder acts like a "Service Module," supporting **OCP** and **DIP** by exposing a public API (actions, hooks) while keeping internals private.
- **Rule**: When implementing SOLID, always define the classes/functions within their respective Feature Folder first.

## 1. Single Responsibility Principle (SRP)
**"A class/module should have one, and only one, reason to change."**

- **Payload Hooks**: A hook should handle ONE specific task (e.g., `sendEmailNotification`), not a chain of unrelated side effects.
  - *Bad*: A `afterChange` hook that sends emails, updates analytics, and syncs to Stripe.
  - *Good*: Three separate hook functions: `sendEmail`, `updateAnalytics`, `syncToStripe`.
- **React Components**: Split large components. A `ProductCard` should display data; it should not handle complex filtering logic or data fetching internal state (lift that up to a parent or hook).
- **Service Layer**: Organize services by domain within their FBA folder (e.g., `src/features/auth/services/auth.service.ts`) rather than a monolithic `AppService`.

## 2. Open/Closed Principle (OCP)
**"Software entities should be open for extension, but closed for modification."**

- **Payload Config**: Use Plugins and reusable Features to extend functionality without modifying the core `payload.config.ts` repeatedly.
- **React Components**: proper use of `children` props and compositional patterns allows components to be extended without changing their source code.
  - *Example*: A `Modal` component that accepts `trigger` and `content` as props/children is "open for extension" (you can put anything inside) but "closed for modification" (you don't need to edit `Modal.tsx` to add a new button).

## 3. Liskov Substitution Principle (LSP)
**"Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application."**

- **Type Safety**: In TypeScript, ensure that subtypes (or implementations of an interface) strictly adhere to the contract.
- **Component variants**: If you have a `BaseButton` and a `SubmitButton`, the `SubmitButton` should effectively behave like a `BaseButton` anywhere a button is expected, without causing runtime errors or unexpected layout shifts.
- **Service Interfaces**: If you switch from `StripePaymentProvider` to `PaypalPaymentProvider`, both implementing `PaymentProvider`, the calling code shouldn't need to know the difference.

## 4. Interface Segregation Principle (ISP)
**"Clients should not be forced to depend upon interfaces that they do not use."**

- **React Props**: Avoid passing the entire `User` object to a component that only needs the `avatarUrl`. Define a specific interface (e.g., `AvatarProps { url: string }`) or pick only the needed fields.
  - *Bad*: Passing a huge "God Object" down the component tree.
  - *Good*: Passing only what is rigidly required.
- **Payload Access Control**: Create focused access control functions (e.g., `canReadPosts`) rather than one giant `checkPermissions(user, 'read', 'posts')` that knows too much.

## 5. Dependency Inversion Principle (DIP)
**"Depend upon abstractions, [not] concretions."**

- **Hooks & Services**: Payload Hooks should call a Service function (Abstraction), not implement business logic directly (Concretion).
- **Data Fetching**: UI components should generally rely on abstractions (like custom hooks `useProducts()`) rather than direct `fetch('/api/products')` calls, allowing the underlying fetching mechanism (SWR, React Query, Server Action) to change without breaking the UI.
