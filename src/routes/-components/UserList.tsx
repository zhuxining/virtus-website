import { useSuspenseQuery } from '@tanstack/react-query'

import { orpc } from '~/lib/orpc'

export function UserList() {
	const usersQuery = useSuspenseQuery(orpc.users.list.queryOptions())

	return (
		<div>
			{usersQuery.data.users.map((user) => (
				<div key={user.id}>
					<h2>{user.name}</h2>
				</div>
			))}
		</div>
	)
}
