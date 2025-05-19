import { defineConfig } from '@tanstack/react-start/config'
import { cloudflare } from 'unenv'
import tsConfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
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
		resolve: {
			alias: {
				// https://github.com/tabler/tabler-icons/issues/1233
				'@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
			},
		},
	},
})

export default config
