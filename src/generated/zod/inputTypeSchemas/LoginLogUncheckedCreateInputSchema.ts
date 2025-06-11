import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'

export const LoginLogUncheckedCreateInputSchema: z.ZodType<Prisma.LoginLogUncheckedCreateInput> =
	z
		.object({
			id: z.number().int().optional(),
			userId: z.string(),
			ip: z.string(),
			userAgent: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default LoginLogUncheckedCreateInputSchema
