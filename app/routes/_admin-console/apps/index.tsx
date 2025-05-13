import { createFileRoute } from '@tanstack/react-router'

import { Header } from '~/components/layout/header'
import { Main } from '~/components/layout/main'

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
