import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

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
		tanstackStart({ target: 'cloudflare-module' }),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
