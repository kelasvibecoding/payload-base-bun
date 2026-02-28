# PRD Generation Mastery - Google Gemini Custom Gem

## Overview
This folder contains the complete multi-file instruction set required to create your own elite "Custom Gem" on Google Gemini Advanced (or an OpenAI Custom GPT). 

To prevent AI hallucination and cognitive overload, we have split the logic into manageable, highly focused files:
1. **`gemini-instructions.md`**: The behavioral matrix. It acts as the "System Prompt." This tells the AI how to act, what questions to ask, and how to interview you before writing any code.
2. **`knowledge-01-core-templates.md`**: The exact markdown syntax and formatting rules for generating the requested Triad Output (PRD, Task List, Design Brief).
3. **`knowledge-02-architecture-constraints.md`**: The technical truth for your Payload CMS and Next.js ecosystem. Ensures the PRD actually maps to your backend constraints (Zero-JS logic, Row-Level Security, etc.)
4. **`knowledge-03-pm-frameworks.md`**: Explains Product Management theories to the AI like the MoSCoW method, Team Parallelization chunking, and concrete HILE (High Impact, Low Effort) examples.

## How to Install on Google Gemini Advanced

1. Open Google Gemini (gemini.google.com).
2. Go to the left sidebar and click **Gem Manager** -> **Create a new Gem**.
3. **Name your Gem:** `PRD Master - Payload & Next.js`
4. **Description:** (Optional) `A Senior Product Manager that extracts business logic, defines edge cases, prioritizes via MoSCoW, and generates flawless PRDs mapped to Next.js and Payload CMS.`
5. **Instructions (The Persona):** Open the `gemini-instructions.md` file in this folder, copy the entire text, and paste it into the "Instructions" box.
6. **Knowledge (The RAG Memory):** Look for the "Add files / Upload" button in the Gem creator interface under "Knowledge". Upload ALL THREE `knowledge-*.md` files directly. Gemini supports multiple files here to build a comprehensive context window.
7. Click **Save**.

Now, anytime you have an idea, just open this Gem and say:
_"I want to build a user verification portal."_

It will automatically follow the instructions to interview you, then query its complex Knowledge base to output the Triad PRD suite.
