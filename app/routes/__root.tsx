import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import type { ReactElement, ReactNode } from 'react'

import { ThemeProvider, useTheme } from '~/contexts/theme-context'
import { getThemeServerFn } from '~/lib/theme'
import { cn } from '~/lib/utils'
import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	component: RootComponent,
	loader: () => getThemeServerFn(),
	head: () => ({
		links: [
			{
				rel: 'stylesheet',
				href: appCss,
			},
			{
				href: '/favicon.ico',
				rel: 'icon',
			},
		],
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				content: 'width=device-width, initial-scale=1',
				name: 'viewport',
			},
			{
				title: 'HanStack',
			},
		],
	}),
})

function RootComponent(): ReactElement {
	const theme = Route.useLoaderData()
	return (
		<ThemeProvider defaultTheme={theme}>
			<RootDocument>
				<Outlet />
				{import.meta.env.MODE === 'development' && (
					<>
						<ReactQueryDevtools buttonPosition="bottom-left" />
						<TanStackRouterDevtools position="bottom-right" />
					</>
				)}
			</RootDocument>
		</ThemeProvider>
	)
}

function RootDocument({ children }: { children: ReactNode }): ReactElement {
	const themeContext = useTheme()
	return (
		<html
			lang="en"
			className={cn(themeContext?.theme)}
			suppressHydrationWarning={true}
		>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	)
}
