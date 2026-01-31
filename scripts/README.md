## 👷 Maintainer Workflow (For Development)

If you are developing **Payload Base** itself (not using it as a user), use these commands to toggle between **Developer Mode** (full dependencies) and **Ship Mode** (installer-ready).

1.  **Start Developing**:
    Restores the full `package.json` so you can run `pnpm install` and test locally.
    ```bash
    npm run dev:mode
    pnpm install
    pnpm dev
    ```

2.  **Prepare for Release (Push)**:
    Converts `package.json` back to the minimal installer and updates the template with your changes.
    **Always run this before pushing!**
    ```bash
    node scripts/switch-mode.js ship
    # Then verify everything works
    git add .
    git commit -m "feat: my update"
    git push
    ```

> **Note**: These scripts (`scripts/switch-mode.js`) are purely for repo maintenance and are **removed automatically** when a user clones the project.