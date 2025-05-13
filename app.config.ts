import { defineConfig } from '@tanstack/react-start/config'
import { cloudflare } from 'unenv'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	server: {
		preset: 'cloudflare-module',
		unenv: cloudflare,
	},
	vite: {
		plugins: [
			tsConfigPaths({
				projects: ['./tsconfig.json'],
			}),
		],
	},
})
