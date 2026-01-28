# Troubleshooting

Common issues and solutions for Payload CMS development.

## Dependency Mismatches

The most common cause of puzzling runtime errors (e.g., `TypeError: Cannot destructure property 'config' of...`) is having multiple versions or copies of `payload`, `@payloadcms/*`, `react`, or `react-dom` in your dependency graph. This breaks React Context.

### 1. Confirm Duplicates
Use your package manager's inspection tool to find duplicates:
```bash
pnpm why @payloadcms/ui
pnpm why react
```
If you see more than one distinct version, you have a mismatch.

### 2. Fixing Version Issues
- **Pin Versions**: Remove `^` or `~` and set exact versions for all Payload and React packages in `package.json`.
- **Clean Slate**: Delete `node_modules` and your lockfile (`pnpm-lock.yaml`, `package-lock.json`, etc.).
- **Prune Store**: If using pnpm, run `pnpm store prune`.
- **Reinstall**: Run `pnpm install`.
- **Deduplicate**: Run `pnpm dedupe`.

## "Unauthorized" Login Issues

If you see "Unauthorized, you must be logged in" immediately after a "successful" login, your auth cookie is being rejected.

### Check List:
1. **CORS**: Ensure your domain is explicitly listed in the `cors` array in the Payload config. Using `'*'` can sometimes cause issues with credentials.
2. **CSRF**: Add your domain to the `csrf` array in the Payload config.
3. **Cookie Settings**: Verify `cookie.domain` isn't misconfigured.
4. **Browser Inspection**: In the Network tab, find the `login` request. Look for the `Set-Cookie` header. Browsers will often show a warning (⚠️) if the cookie was rejected (e.g., due to `SameSite` or `Secure` mismatch).

## Monorepos

Monorepos often suffer from "hoisting" issues where different packages end up with different versions of Payload or React.
- Ensure every package in the monorepo uses the **exact same version** of `payload`, `@payloadcms/*`, `next`, `react`, and `react-dom`.
- It is often best to install these critical dependencies at the monorepo root.

## HTTPS & HMR Issues

If you use `--experimental-https` and WebSockets for Hot Module Reloading (HMR) fail:
- Set `USE_HTTPS=true` in your `.env`.
- Alternatively, override the HMR URL:
  `PAYLOAD_HMR_URL_OVERRIDE=wss://localhost:3000/_next/webpack-hmr`

## Absolute Last Resort
If you cannot resolve a version skew, you can force all imports to the same path using Webpack/Next.js aliases:
```javascript
// next.config.mjs example
webpack: (config) => {
  config.resolve.alias['react'] = path.resolve('./node_modules/react')
  return config
}
```
*Note: This is a temporary band-aid; fixing the underlying `package.json` is always preferred.*
