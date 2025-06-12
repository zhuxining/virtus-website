import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'

import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		tsconfigPaths({
			projects: ['./tsconfig.json'],
		}),
		tailwindcss({}),
		tanstackStart({}),
		cloudflare({}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
