import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { LoginLogWhereInputSchema } from '../inputTypeSchemas/LoginLogWhereInputSchema'
import { LoginLogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LoginLogOrderByWithAggregationInputSchema'
import { LoginLogScalarFieldEnumSchema } from '../inputTypeSchemas/LoginLogScalarFieldEnumSchema'
import { LoginLogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LoginLogScalarWhereWithAggregatesInputSchema'

export const LoginLogGroupByArgsSchema: z.ZodType<Prisma.LoginLogGroupByArgs> =
	z
		.object({
			where: LoginLogWhereInputSchema.optional(),
			orderBy: z
				.union([
					LoginLogOrderByWithAggregationInputSchema.array(),
					LoginLogOrderByWithAggregationInputSchema,
				])
				.optional(),
			by: LoginLogScalarFieldEnumSchema.array(),
			having: LoginLogScalarWhereWithAggregatesInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default LoginLogGroupByArgsSchema
