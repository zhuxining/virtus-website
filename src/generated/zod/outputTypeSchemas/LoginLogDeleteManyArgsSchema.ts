import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { LoginLogWhereInputSchema } from '../inputTypeSchemas/LoginLogWhereInputSchema'

export const LoginLogDeleteManyArgsSchema: z.ZodType<Prisma.LoginLogDeleteManyArgs> =
	z
		.object({
			where: LoginLogWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default LoginLogDeleteManyArgsSchema
