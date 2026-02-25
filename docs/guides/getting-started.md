# Getting Started with Antigravity x PayloadCMS Boilerplate

> An agentic coding boilerplate for building production-ready Payload CMS + Next.js applications, optimized for Google Antigravity.

---

## ⚡ Quick Start

### 🌍 Two-Part Architecture
- **Public Base (`payload-base-bun`)**: 100% open-source core Payload CMS + Next.js repository.
- **Private Ability (`payload-base-ability`)**: Proprietary AI agent workflows, architectural rules, and context skills. Injected dynamically via a secure Access Key.

### Standard Setup (Public)

You do **not** need an Access Key or any authentication to perform a standard setup.

```bash
# Standard setup (SQLite — default, no DB required)
npx github:kelasvibecoding/payload-base-bun my-project
cd my-project && bun install && bun dev

# With Postgres pre-configured in .env
npx github:kelasvibecoding/payload-base-bun my-project --db=postgres

# With MongoDB pre-configured in .env
npx github:kelasvibecoding/payload-base-bun my-project --db=mongodb

# Show all options
npx github:kelasvibecoding/payload-base-bun --help
```

### Setup with Agent Ability (Ebook/Class Access)

If you have purchased the Ebook/Class, you will be provided an **Access Key** (a secure GitHub Personal Access Token). This token allows the setup script to instantly authenticate and securely merge the private cognitive architecture into your project.

To bypass the interactive prompt, you can pass your token directly via the `--token` flag:

```bash
# Includes .agent/ and .antigravity/ AI configurations
npx github:kelasvibecoding/payload-base-bun my-project --ability --token="YOUR_ACCESS_KEY"
```

You will be prompted for your **Access Key** during setup. Paste it in when requested.

### Inject Agent Ability into Existing Project

If you already have a project and want to add the AI configurations retroactively:

```bash
# Run from your project root
npx github:kelasvibecoding/payload-base-bun --abilityonly
```

You will be prompted to enter your Access Key to authenticate. This securely clones and copies `.agent/` (rules, workflows, and skills) into your current codebase without touching your normal code files.

### Mobile Layout Variant

```bash
# Applies mobile-first layout constraints (max-width: 480px)
npx github:kelasvibecoding/payload-base-bun my-project --mobile
```

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── (frontend)/    # Next.js frontend routes
│   │   └── (payload)/     # Payload admin routes
│   ├── collections/       # Payload collection configs
│   ├── features/          # Feature-based domain code
│   │   └── [feature]/
│   │       ├── components/
│   │       ├── services/
│   │       ├── hooks/
│   │       ├── constants.ts
│   │       └── schemas.ts
│   ├── components/        # Shared generic UI (Shadcn)
│   └── payload.config.ts  # Main Payload configuration
├── docs/
│   ├── adr/               # Architecture Decision Records
│   ├── design/            # Strategic design docs (from /plan)
│   ├── prd/               # Product requirement docs
│   └── guides/            # This file
├── CONTEXT.md             # Project cognitive & technical architecture
├── AGENTS.md              # OpenSpec instructions & workflows for agents
├── mission.md             # Active agent goal tracking
├── .antigravity/          # General Antigravity AI configurations
│   └── rules.md           # Core Antigravity rules & Persona
└── .agent/
    ├── rules/             # 35+ modular agent rule files
    ├── workflows/         # Slash command workflows
    └── skills/            # Payload CMS + Next.js skills
```

---

## 🤖 Agentic Workflow Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/start` | Environment initialization | Right after cloning |
| `/plan` | Generate a strategic design doc | Before coding a feature |
| `/implement` | Full lifecycle: scale detect → plan → code → verify | Any new feature |
| `/review` | FBA-SOLID-SSOT compliance check | Post-implementation |
| `/reverse-engineer` | Generate PRD + Design Doc from existing code | Documentation, pre-refactor |
| `/diagnose` | Root cause analysis (5-Whys) | Debugging |
| `/adr` | Document architecture decisions | Irreversible choices |
| `/lint-typecheck` | Run lint + type check | Before committing |
| `/test-e2e` | Run E2E tests | After major changes |

### How It Works With Antigravity

When you start your workspace, Antigravity instantly configures itself based on:
- **`CONTEXT.md`**: Reads the project's technology stack and core architectural principles (FBA-SOLID-SSOT).
- **`mission.md`**: An active task tracker. You (or the AI) can update this file sequentially so the agent stays on track during a long coding session.
- **`.antigravity/rules.md`**: Provides the persona (Senior Payload / Next.js Architect) and enforces the "Artifact-First" (Think-Act-Reflect) loop automatically.

Every workflow command naturally feeds into this setup. For example:

1. **Initialize the project** after cloning:
   > "Hey agent, please run the `/start` workflow to prepare this project."

2. **Plan a new feature**:
   > "I need to build a new Blog feature. Run `/plan` for a new blog system with posts, categories, and author relationships."

3. **Implement the feature**:
   > "The plan looks good. Let's `/implement` the blog feature according to `docs/design/feature-scope.md`."

4. **Verify quality**:
   > "We finished the blog implementation. Run `/review` to ensure it complies with FBA-SOLID-SSOT, then run `/lint-typecheck`."

---

## 🌐 Environment Setup

The setup script auto-generates a `.env` file from `.env.example` with a random `PAYLOAD_SECRET`. Review and adjust the following:

```env
DATABASE_URL=file:./local.db   # SQLite (default) or Postgres connection string
PAYLOAD_SECRET=<auto-generated> # Keep this secret!
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### `--db=<adapter>` — Database Pre-selection

Pre-configures `DATABASE_URL` in `.env` at project creation:

| Value | DATABASE_URL written | Notes |
|-------|---------------------|-------|
| `sqlite` (default) | *(none — uses `file:./local.db`)* | No DB server needed |
| `mongodb` | `mongodb://localhost:27017/my-payload-app` | Update with your Atlas URI |
| `postgres` | `postgresql://user:password@localhost:5432/my-payload-app` | Update with your connection string |

```bash
npx github:kelasvibecoding/payload-base-bun my-project --db=postgres
```

---

## 🔑 Access Keys

| Mode | Requires Key | What You Get |
|------|-------------|--------------|
| Standard (`npx github:kelasvibecoding/payload-base-bun`) | ❌ No | Public boilerplate |
| `--ability` | ✅ Yes (Ebook/Class) | + Antigravity agent rules, skills, workflows |
| `--abilityonly` | ✅ Yes | Antigravity agent configs only (inject into existing project) |
