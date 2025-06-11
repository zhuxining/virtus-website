import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { LoginLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/LoginLogUpdateManyMutationInputSchema'
import { LoginLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LoginLogUncheckedUpdateManyInputSchema'
import { LoginLogWhereInputSchema } from '../inputTypeSchemas/LoginLogWhereInputSchema'

export const LoginLogUpdateManyArgsSchema: z.ZodType<Prisma.LoginLogUpdateManyArgs> =
	z
		.object({
			data: z.union([
				LoginLogUpdateManyMutationInputSchema,
				LoginLogUncheckedUpdateManyInputSchema,
			]),
			where: LoginLogWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default LoginLogUpdateManyArgsSchema
