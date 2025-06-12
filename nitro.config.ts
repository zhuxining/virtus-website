export default defineNitroConfig({
	compatibilityDate: '2025-04-03',
	preset: 'cloudflare_module',
	cloudflare: {
		deployConfig: true,
		nodeCompat: true,
	},
})
