import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { UserCreateManyInputSchema } from '../inputTypeSchemas/UserCreateManyInputSchema'

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z
	.object({
		data: z.union([
			UserCreateManyInputSchema,
			UserCreateManyInputSchema.array(),
		]),
	})
	.strict()

export default UserCreateManyArgsSchema
