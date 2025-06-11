import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { LoginLogWhereInputSchema } from '../inputTypeSchemas/LoginLogWhereInputSchema'
import { LoginLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/LoginLogOrderByWithRelationInputSchema'
import { LoginLogWhereUniqueInputSchema } from '../inputTypeSchemas/LoginLogWhereUniqueInputSchema'

export const LoginLogAggregateArgsSchema: z.ZodType<Prisma.LoginLogAggregateArgs> =
	z
		.object({
			where: LoginLogWhereInputSchema.optional(),
			orderBy: z
				.union([
					LoginLogOrderByWithRelationInputSchema.array(),
					LoginLogOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: LoginLogWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default LoginLogAggregateArgsSchema
