import type { QueryClient } from '@tanstack/react-query'
import type { PropsWithChildren, ReactElement } from 'react'

import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from '@tanstack/react-router'

import '~/lib/orpc.server' // Ensure the server-side orpc client is registered

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	component: RootComponent,
	head: () => ({
		links: [
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
