import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Footer } from '~/components/layout/websit/Footer'
import { Header } from '~/components/layout/websit/Header'

export const Route = createFileRoute('/_website')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
