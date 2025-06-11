import { Header } from '@/components/layout/Header'
import { Main } from '@/components/layout/Main'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin-console/apps/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Header />

			<Main fixed={true}>Apps</Main>
		</>
	)
}
