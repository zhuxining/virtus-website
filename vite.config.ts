import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { cloudflare } from '@cloudflare/vite-plugin'

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		cloudflare(),
		// tailwindcss(),
		tanstackStart(),
	],
})
