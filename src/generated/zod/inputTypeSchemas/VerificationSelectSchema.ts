import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'

export const VerificationSelectSchema: z.ZodType<Prisma.VerificationSelect> = z
	.object({
		id: z.boolean().optional(),
		identifier: z.boolean().optional(),
		value: z.boolean().optional(),
		expiresAt: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
	})
	.strict()

export default VerificationSelectSchema
