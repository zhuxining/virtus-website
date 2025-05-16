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

import { NotFoundError } from '~/components/errors/not-found-error'
import { ThemeProvider } from '~/contexts/theme-context'
import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	component: RootComponent,
	notFoundComponent: NotFoundError,
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
	return (
		<RootDocument>
			<Outlet />
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
				<ThemeProvider attribute="class">{children}</ThemeProvider>
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
