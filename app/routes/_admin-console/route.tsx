import { Outlet, createFileRoute } from '@tanstack/react-router'

import { AppSidebar } from '~/components/layout/app-sidebar'
import { SkipToMain } from '~/components/skip-to-main'
import { SidebarProvider } from '~/components/ui/sidebar'
import { SearchProvider } from '~/contexts/search-context'
import { cn } from '~/lib/utils'

export const Route = createFileRoute('/_admin-console')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<SearchProvider>
			<SidebarProvider>
				<SkipToMain />
				<AppSidebar />
				<div
					id="content"
					className={cn(
						'ml-auto w-full max-w-full',
						'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
						'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
						'sm:transition-[width] sm:duration-200 sm:ease-linear',
						'flex h-svh flex-col',
						'group-data-[scroll-locked=1]/body:h-full',
						'has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh',
					)}
				>
					<Outlet />
				</div>
			</SidebarProvider>
		</SearchProvider>
	)
}
