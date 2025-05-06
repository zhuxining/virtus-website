'server only'

import { os } from '@orpc/server'
import { RPCHandler } from '@orpc/server/fetch'
import { CORSPlugin } from '@orpc/server/plugins'
import { z } from 'zod'

export const orpcRouter = {
	users: {
		list: os
			.input(
				z
					.object({
						cursor: z.string().optional(),
						limit: z.number().default(10),
					})
					.optional(),
			)
			.handler(() => {
				return {
					nextCursor: null,
					users: [
						{ id: 1, name: 'John Doe' },
						{ id: 2, name: 'Jane Doe' },
					],
				}
			}),
	},
}

export const orpcHandler = new RPCHandler(orpcRouter, {
	plugins: [new CORSPlugin()],
})
