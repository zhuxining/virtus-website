import { createFileRoute } from '@tanstack/react-router'

import { Header } from '~/components/layout/header'
import { Main } from '~/components/layout/main'

export const Route = createFileRoute('/_admin-console/users/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Header fixed={true} />

			<Main>Users</Main>
		</>
	)
}
