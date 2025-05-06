import { createFileRoute } from '@tanstack/react-router'

import { orpcReactQuery } from '~/lib/react-query'

import { UserList } from './-components/UserList'

export const Route = createFileRoute('/')({
	component: Home,
	loader: async ({ context: { queryClient } }) => {
		await queryClient.ensureQueryData(orpcReactQuery.users.list.queryOptions())
	},
})

function Home() {
	return <UserList />
}
