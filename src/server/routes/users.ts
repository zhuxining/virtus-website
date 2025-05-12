import { os } from '@orpc/server'
import { z } from 'zod'

import {
	UserCreateArgsSchema,
	UserDeleteArgsSchema,
	UserFindManyArgsSchema,
	UserFindUniqueArgsSchema,
	UserSchema,
	UserUpdateArgsSchema,
} from '~/generated/zod'
import { db } from '~/server/prisma'

export const usersRouter = {
	list: os
		.input(UserFindManyArgsSchema)
		.output(
			z.object({
				users: UserSchema.array(),
			}),
		)
		.handler(async ({ input }) => {
			const users = await db.user.findMany(input)
			return { users }
		}),
	find: os
		.input(UserFindUniqueArgsSchema)
		.output(
			z.object({
				user: UserSchema.nullable(),
			}),
		)
		.handler(async ({ input }) => {
			const user = await db.user.findUnique(input)
			return { user }
		}),
	create: os
		.input(UserCreateArgsSchema)
		.output(
			z.object({
				user: UserSchema,
			}),
		)
		.handler(async ({ input }) => {
			const user = await db.user.create(input)
			return { user }
		}),
	update: os
		.input(UserUpdateArgsSchema)
		.output(
			z.object({
				user: UserSchema,
			}),
		)
		.handler(async ({ input }) => {
			const user = await db.user.update(input)
			return { user }
		}),
	delete: os
		.input(UserDeleteArgsSchema)
		.output(
			z.object({
				user: UserSchema,
			}),
		)
		.handler(async ({ input }) => {
			const user = await db.user.delete(input)
			return { user }
		}),
}
