import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'

export const LoginLogSelectSchema: z.ZodType<Prisma.LoginLogSelect> = z
	.object({
		id: z.boolean().optional(),
		userId: z.boolean().optional(),
		ip: z.boolean().optional(),
		userAgent: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
	})
	.strict()

export default LoginLogSelectSchema
