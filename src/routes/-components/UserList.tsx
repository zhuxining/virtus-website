import { useSuspenseQuery } from '@tanstack/react-query'

import { orpcReactQuery } from '~/lib/react-query'

export function UserList() {
	const usersQuery = useSuspenseQuery(orpcReactQuery.users.list.queryOptions())

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
