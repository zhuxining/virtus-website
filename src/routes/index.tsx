import { createFileRoute } from '@tanstack/react-router'

import { UserList } from './-components/UserList'

export const Route = createFileRoute('/')({
	component: Home,
})

function Home() {
	return <UserList />
}
