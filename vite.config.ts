import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		react(),
		tailwindcss(),
		tsconfigPaths({
			projects: ['./tsconfig.json'],
		}),
		tanstackStart(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
