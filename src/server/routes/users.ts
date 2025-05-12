import { os } from '@orpc/server'
import { z } from 'zod'

import { db } from '~/server/prisma'

export const usersRouter = {
	list: os
		.input(
			z
				.object({
					take: z.number().default(10).optional(),
					skip: z.number().default(0).optional(),
				})
				.optional(),
		)
		.handler(async ({ input }) => {
			const users = await db.user.findMany({
				take: input?.take,
				skip: input?.skip,
			})
			return { users }
		}),
}
