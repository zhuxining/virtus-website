import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { LoginLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/LoginLogUpdateManyMutationInputSchema'
import { LoginLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LoginLogUncheckedUpdateManyInputSchema'
import { LoginLogWhereInputSchema } from '../inputTypeSchemas/LoginLogWhereInputSchema'

export const LoginLogUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LoginLogUpdateManyAndReturnArgs> =
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

export default LoginLogUpdateManyAndReturnArgsSchema
