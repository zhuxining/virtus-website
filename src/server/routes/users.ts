'server only'

import { os } from '@orpc/server'
import { z } from 'zod'
import prisma from '~/lib/prisma'

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
			const users = await prisma.user.findMany({
				take: input?.take,
				skip: input?.skip,
			})

			console.log(users)
			return { users }
		}),
}
