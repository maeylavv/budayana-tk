import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: ['src/index.ts'],
    format: 'esm',
    outDir: 'api',
    clean: true,
    // No `bundle: true` needed — it's already the default
    // To force-bundle node_modules deps (like elysia), use:
    deps: {
        alwaysBundle: ['elysia'],
    },
})