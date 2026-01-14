# ProjectChecker - Copilot Instructions

## Project Overview

**ProjectChecker** is a status monitoring application that uses a Node.js backend to check the status of various projects via fetch requests. The frontend is built with Vue 3 and displays project statuses in a clean UI.

- **Type:** Single-page web application
- **Size:** Small project (~25 source files)
- **Frontend:** Vue 3.5.12 with TypeScript
- **Build Tool:** Vite 6.4.1
- **Runtime:** Node.js v20.19.6, npm 10.8.2
- **Testing:** Vitest (unit tests), Playwright 1.56.1 (e2e tests)
- **Deployment:** GitHub Pages (base path: `/ProjectChecker/`)

## Environment Setup

### Prerequisites
- Node.js v20.19.6 or compatible
- npm 10.8.2 or compatible

### Initial Setup
**ALWAYS run these commands in order when setting up the project:**

```bash
npm install
```

**For e2e tests, install Playwright browsers (only needed once):**
```bash
npx playwright install --with-deps chromium
```

## Build & Development Commands

### Development Server
```bash
npm run dev
```
- Starts Vite dev server at `http://localhost:5173/ProjectChecker/`
- Hot module replacement enabled
- Takes ~1-2 seconds to start
- Press Ctrl+C to stop

### Building
**ALWAYS run these commands in this exact order:**

1. **Type Check First:**
```bash
npm run type-check
```
- Runs `vue-tsc --build --force`
- Takes ~5-10 seconds
- Must pass before building

2. **Build:**
```bash
npm run build
```
- Runs type-check and vite build in parallel
- Output: `dist/` directory
- Takes ~10-15 seconds
- Creates production-ready assets with hash-based filenames

3. **Preview Build:**
```bash
npm run preview
```
- Serves production build at `http://localhost:4173/ProjectChecker/`
- Used for testing production builds locally

### Code Quality

**Linting:**
```bash
npm run lint
```
- Runs ESLint with auto-fix enabled
- **KNOWN ISSUE:** Component name "Main" violates `vue/multi-word-component-names` rule
- This is an existing issue in the codebase - do NOT fix it unless specifically asked
- Takes ~5-10 seconds

**Formatting:**
```bash
npm run format
```
- Runs Prettier on `src/` directory
- Uses single quotes, no semicolons, 100 char line width
- Takes ~2-3 seconds
- **ALWAYS run this after making code changes**

### Testing

**Unit Tests:**
```bash
npm run test:unit
```
- Runs Vitest
- **Currently no test files exist** - exits with code 1
- If adding tests, create files matching: `**/*.{test,spec}.?(c|m)[jt]s?(x)`
- Exclude pattern includes `e2e/**`

**E2E Tests:**
```bash
npm run test:e2e
```
- Runs Playwright tests
- **Currently no e2e test files exist** in the `e2e/` directory
- Automatically starts dev/preview server before running tests
- On CI: uses preview server (`http://localhost:4173`)
- Locally: uses dev server (`http://localhost:5173`)
- Runs headless on CI, headed locally
- Tests all three browsers: Chromium, Firefox, WebKit

## Project Structure

### Root Directory Files
```
.editorconfig          - Editor configuration (2 spaces, UTF-8, trim trailing whitespace)
.gitignore            - Ignores node_modules, dist, coverage, playwright-report
.prettierrc.json      - Prettier config (single quotes, no semicolons, 100 char width)
eslint.config.js      - ESLint flat config with Vue, TypeScript, Vitest, Playwright plugins
index.html            - Entry HTML file
package.json          - Dependencies and scripts
playwright.config.ts  - Playwright e2e test configuration
tsconfig.json         - Root TypeScript config (project references)
tsconfig.app.json     - App TypeScript config
tsconfig.node.json    - Node/build TypeScript config
tsconfig.vitest.json  - Vitest TypeScript config
vite.config.ts        - Vite build config (base: '/ProjectChecker/')
vitest.config.ts      - Vitest test config (jsdom environment)
```

### Source Code Structure
```
src/
├── App.vue                 - Root component, imports Main.vue
├── main.ts                 - Application entry point, mounts Vue app
├── components/
│   └── Main.vue           - Main component: fetches and displays project statuses
├── models/
│   ├── website_status.ts            - Type: { name: string, status: number }
│   └── website_status_response.ts   - Type: { websites: Array<WebsiteStatus> }
└── assets/
    ├── base.css           - Base styles
    ├── main.css           - Main styles
    ├── logo.png           - Project logo (390KB)
    └── logo.svg           - Logo SVG

public/
├── img/icons/             - Favicon and other icons
├── screenshot.jpg         - Project screenshot
└── robots.txt             - Robots configuration

dist/                      - Build output (gitignored)
e2e/                       - E2E test directory (currently only tsconfig.json)
```

### Key Source Files

**Main.vue** - Primary application logic:
- Fetches status from: `https://project-checker.onrender.com/checkStatus`
- Displays website names and status indicators (✅ for 200, ❌ for errors)
- Uses reactive Vue 3 Composition API
- Shows loading spinner while fetching

**App.vue** - Simple wrapper that renders Main.vue

**main.ts** - Minimal entry point that creates and mounts the Vue app

## Configuration Details

### ESLint Configuration
- Flat config format (`eslint.config.js`)
- Lints: `**/*.{ts,mts,tsx,vue}`
- Ignores: `**/dist/**`, `**/dist-ssr/**`, `**/coverage/**`
- Plugins: Vue, TypeScript, Vitest, Playwright, Prettier
- **Note:** `vue/multi-word-component-names` rule is enabled and Main.vue violates it

### Prettier Configuration
- Semi: false (no semicolons)
- Single quotes: true
- Print width: 100 characters

### Vite Configuration
- Base path: `/ProjectChecker/` (for GitHub Pages deployment)
- Alias: `@` maps to `./src`
- Plugins: Vue, Vue DevTools
- Dev server: port 5173
- Preview server: port 4173

### TypeScript Configuration
- Uses project references (tsconfig.json)
- Three separate configs: app, node, vitest
- Target: ES2020+
- Strict mode enabled

## Important Workflows & Validation

### No CI/CD Workflows
- **No GitHub Actions workflows exist** in this repository
- No automated CI builds or tests
- Manual validation required before merging

### Validation Steps Before Committing
**ALWAYS run these commands in order before committing code:**

1. **Format code:**
   ```bash
   npm run format
   ```

2. **Type check:**
   ```bash
   npm run type-check
   ```

3. **Lint (will show the known Main.vue issue):**
   ```bash
   npm run lint
   ```

4. **Build to verify production bundle:**
   ```bash
   npm run build
   ```

5. **If tests exist, run them:**
   ```bash
   npm run test:unit
   npm run test:e2e
   ```

### Common Issues & Solutions

**Issue: Lint fails with "Component name 'Main' should always be multi-word"**
- **Solution:** This is a known existing issue. Do NOT change Main.vue to MainPage.vue or similar unless explicitly asked.

**Issue: Unit tests exit with code 1 "No test files found"**
- **Solution:** This is expected - no test files exist. If adding tests, place them anywhere under `src/` matching Vitest's pattern `**/*.{test,spec}.?(c|m)[jt]s?(x)` (for example, `src/**/__tests__/*.spec.ts`).

**Issue: Build fails with type errors**
- **Solution:** Run `npm run type-check` first to see detailed TypeScript errors

**Issue: Dev server shows 404 for assets**
- **Solution:** Access `http://localhost:5173/ProjectChecker/` (note the `/ProjectChecker/` base path)

**Issue: Playwright installation fails**
- **Solution:** Run `npx playwright install --with-deps chromium` to install browsers and dependencies

## Code Style Conventions

- **Indentation:** 2 spaces (enforced by .editorconfig)
- **Quotes:** Single quotes (Prettier)
- **Semicolons:** None (Prettier)
- **Line width:** 100 characters (Prettier)
- **Vue style:** Composition API with `<script setup>`
- **TypeScript:** Use type imports (`import type`)
- **Components:** Use `.vue` files with TypeScript
- **Final newline:** Required (enforced by .editorconfig)
- **Trailing whitespace:** Trimmed (enforced by .editorconfig)

## Dependencies

### Runtime Dependencies
- `vue` 3.5.12 - Core framework

### Dev Dependencies
- Build: `vite`, `@vitejs/plugin-vue`, `vite-plugin-vue-devtools`, `typescript`, `vue-tsc`
- Testing: `vitest`, `@playwright/test`, `@vue/test-utils`, `jsdom`
- Linting: `eslint`, `eslint-plugin-vue`, `eslint-plugin-playwright`, `@vitest/eslint-plugin`
- Formatting: `prettier`, `@vue/eslint-config-prettier`
- TypeScript: `@vue/tsconfig`, `@tsconfig/node22`, `@vue/eslint-config-typescript`
- Utils: `npm-run-all2` (for parallel script execution)

## Additional Notes

- **Trust these instructions:** Only perform additional searches if information here is incomplete or found to be incorrect
- **Minimal changes:** Keep modifications surgical and focused
- **Format first:** Always run `npm run format` before committing
- **No CI:** Since there are no CI workflows, thorough local testing is critical
- **Base path:** Remember the `/ProjectChecker/` base path for all URLs in production builds
- **Browser support:** E2E tests run on Chromium, Firefox, and WebKit
