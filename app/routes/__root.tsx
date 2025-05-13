import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import type { PropsWithChildren, ReactElement } from 'react'

import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	component: RootComponent,
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
			{import.meta.env.MODE === 'development' && (
				<>
					<ReactQueryDevtools buttonPosition="bottom-left" />
					<TanStackRouterDevtools position="bottom-right" />
				</>
			)}
		</RootDocument>
	)
}

function RootDocument({ children }: Readonly<PropsWithChildren>): ReactElement {
	return (
		<html lang="en">
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
