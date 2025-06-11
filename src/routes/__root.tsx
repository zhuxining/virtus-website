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

import { NotFoundError } from '@/components/errors/NotFoundError'
import { ThemeProvider } from '@/features/theme/contexts/ThemeContext'
import appCss from '@/styles/app.css?url'

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				content: 'width=device-width, initial-scale=1',
				name: 'viewport',
			},
			{
				title: 'Virtus Foundation Limited',
			},
		],
		links: [
			{
				rel: 'stylesheet',
				href: appCss,
			},
			{
				href: '/favicon.webp',
				rel: 'icon',
			},
		],
	}),
	component: RootComponent,
	notFoundComponent: NotFoundError,
})

function RootComponent(): ReactElement {
	return (
		<RootDocument>
			<ThemeProvider attribute="class">
				<Outlet />
			</ThemeProvider>
		</RootDocument>
	)
}

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				{import.meta.env.MODE === 'development' && (
					<>
						<ReactQueryDevtools buttonPosition="bottom-left" />
						<TanStackRouterDevtools position="bottom-right" />
					</>
				)}
				<Scripts />
			</body>
		</html>
	)
}
