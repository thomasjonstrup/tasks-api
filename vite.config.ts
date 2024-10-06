import * as path from 'node:path'
/* import { UserConfig } from 'vitest' */

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    include: ['./**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
}/*  satisfies UserConfig */
