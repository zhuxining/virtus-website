import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'

export const LoginLogCreateInputSchema: z.ZodType<Prisma.LoginLogCreateInput> =
	z
		.object({
			userId: z.string(),
			ip: z.string(),
			userAgent: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default LoginLogCreateInputSchema
