import { createFileRoute } from '@tanstack/react-router'

import { orpc } from '~/lib/orpc'

import { UserList } from './-components/UserList'

export const Route = createFileRoute('/')({
	component: Home,
	loader: async ({ context: { queryClient } }) => {
		await queryClient.ensureQueryData(orpc.users.list.queryOptions())
	},
})

function Home() {
	return <UserList />
}
