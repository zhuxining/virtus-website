import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { LoginLogCreateManyInputSchema } from '../inputTypeSchemas/LoginLogCreateManyInputSchema'

export const LoginLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LoginLogCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				LoginLogCreateManyInputSchema,
				LoginLogCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default LoginLogCreateManyAndReturnArgsSchema
