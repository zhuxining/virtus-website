import { useSuspenseQuery } from '@tanstack/react-query'

import { orpc } from '~/lib/orpc'

export function UserList() {
	const usersQuery = useSuspenseQuery(
		orpc.user.list.queryOptions({
			input: {},
		}),
	)

	return (
		<div>
			{usersQuery.data.map((user) => (
				<div key={user.id}>
					<h2>{user.name}</h2>
				</div>
			))}
		</div>
	)
}
