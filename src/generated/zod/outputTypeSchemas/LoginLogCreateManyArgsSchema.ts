import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { LoginLogCreateManyInputSchema } from '../inputTypeSchemas/LoginLogCreateManyInputSchema'

export const LoginLogCreateManyArgsSchema: z.ZodType<Prisma.LoginLogCreateManyArgs> =
	z
		.object({
			data: z.union([
				LoginLogCreateManyInputSchema,
				LoginLogCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default LoginLogCreateManyArgsSchema
