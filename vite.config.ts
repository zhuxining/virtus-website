import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import tsconfigPaths from 'vite-tsconfig-paths' // 修正了变量名

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		tsconfigPaths({
			projects: ['./tsconfig.json'],
		}),
		tanstackStart(),
	],
})
