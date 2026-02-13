# Database Migrations

This directory contains the database migrations for the project. Migrations ensure that the database schema stays in sync across different environments (Development, Staging, Production).

## Commands

All commands should be run using `bun`.

### Apply Migrations
Runs all pending migrations to update your local database schema.
```bash
bun run payload migrate
```

### Create Migration
Generates a new migration file based on changes to your Payload collections.
```bash
bun run payload migrate:create your_migration_name
```

### Check Status
Shows which migrations have been applied and which are pending.
```bash
bun run payload migrate:status
```

### Rollback Migration
Reverts the last applied migration.
```bash
bun run payload migrate:down
```

### Reset Database
Reverts all migrations (use with caution, this will delete data).
```bash
bun run payload migrate:reset
```

## Workflow

1.  **Change Collections**: Modify your files in `src/collections/`.
2.  **Generate Types**: Keep your TypeScript types in sync.
    ```bash
    bun run payload generate:types
    ```
3.  **Create Migration**: Generate the migration file.
    ```bash
    bun run payload migrate:create update_user_fields
    ```
4.  **Review**: Check the generated file in `src/migrations/`.
5.  **Apply**: Run the migration on your database.
    ```bash
    bun run payload migrate
    ```

## Storage

Migrations are stored as `.ts` files with associated `.json` snapshots to track the state of the database. Do not delete the `.json` files as they are required for schema comparison.
