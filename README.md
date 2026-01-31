# 🚀 Payload 3.0 Base Template

A premium, production-ready foundation for building modern web applications with **Payload CMS 3.0**, **Next.js 16**, **React 19**, and **Tailwind CSS 4.0**.

This template is designed for high-performance, accessibility, and developer experience, featuring a pre-configured stack that bridges the gap between a blank slate and a full-featured application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/) & [React 19](https://react.dev/)
- **CMS**: [Payload 3.0](https://payloadcms.com/) (Stable Release)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Database**: [Postgres](https://www.postgresql.org/) (via `@payloadcms/db-postgres`)
- **PWA**: Powered by `@ducanh2912/next-pwa`
- **Editor**: [Lexical](https://lexical.dev/) (Advanced Rich Text)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Playwright](https://playwright.dev/) (E2E) & [Vitest](https://vitest.dev/) (Unit/Integration)

## ✨ Key Features

- **PWA Ready**: Offline support and installability configured out-of-the-box.
- **Image Intelligence**: Integrated with **Sharp** for world-class image optimization (WebP/AVIF).
- **Dark Mode First**: Seamless theme switching with `next-themes`.
- **Type Safe**: End-to-end TypeScript support with automated type generation.
- **Modern UI**: Pre-built Shadcn UI components optimized for Payload integration.
- **Agent Enhanced**: Optimized for AI-assisted development with custom search scripts and design intelligence.

## 🚀 Quick Start

### 1. Requirements

- **Node.js**: `^18.20.2 || >=20.9.0`
- **pnpm**: `^9.0.0`
- **Database**: A running Postgres instance.

### 2. Local Setup (Private Access)

To clone this private repository, you will need an **Access Key** (GitHub Personal Access Token).

**Option A: Automatic Setup (Recommended)**

```bash
# Run the setup script to clone and configure automatically
npx github:kelasvibecoding/payload-base
```

_The script will prompt for your Access Key, clone the repo, and setup your `.env`._

**Option B: Manual Clone**

```bash
git clone https://YOUR_TOKEN@github.com/kelasvibecoding/payload-base.git
cd payload-base
cp .env.example .env
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.
Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the Payload dashboard.

### 3. Environment Variables

Ensure your `.env` file contains at least:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
PAYLOAD_SECRET=YOUR_SECRET_HERE
```

## 📂 Project Structure

- `src/app`: Next.js App Router (Frontend and Admin UI).
- `src/collections`: Payload Schema definitions.
- `src/components`: Reusable UI components (Shadcn + Custom).
- `.agent/skills`: Specialized AI training data for frontend/backend mastery.

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run E2E tests (Playwright)
pnpm run test:e2e

# Run Unit tests (Vitest)
pnpm run test:int
```

## 🧠 Agent Intelligence

This repository is "Agent-Ready". It includes custom CLI tools to help AI agents navigate the codebase efficiently:

```bash
# Search Payload documentation
python .agent/skills/payload-cms-docs/scripts/search.py "access control"

# Get UI/UX design recommendations
python .agent/skills/ui-ux-stack/scripts/search.py "saas dashboard fintech" --stack payload
```

## 📄 License

MIT © [Your Name/Org]
