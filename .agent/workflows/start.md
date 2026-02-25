---
description: Environment initialization. Run this right after cloning to install dependencies, generate environment variables, and prepare the project.
---

# /start Workflow

Use this workflow when you or a new developer has just cloned the repository and needs to initialize the local development environment. 

## 1. Environment Setup

1. Check if a `.env` file exists in the root directory.
2. If it does not exist:
   - Copy `.env.example` to `.env`.
   - Update `PAYLOAD_SECRET` in the new `.env` file with a securely generated random string (e.g., a 32-character hex).
3. Ask the user which database they are using (SQLite, Postgres, or MongoDB) and ensure `DATABASE_URL` is set correctly in `.env`. (Default is SQLite `file:./local.db`).

## 2. Dependency Installation

// turbo
1. Run `bun install` to install all dependencies.

## 3. Type Generation

// turbo
1. Run `bun run generate:types` to ensure the local Payload schema types are synchronized and available for TypeScript.

## 4. Final Handoff

1. Display a success message.
2. Remind the user they can start the server with `bun dev`.
3. Provide a brief summary of the available Agent workflows (e.g., `/implement`, `/plan`, `/diagnose`) to orient them.
