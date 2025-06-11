import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { AuditStatusSchema } from './AuditStatusSchema'

export const EssayAuditUncheckedCreateWithoutEssayInputSchema: z.ZodType<Prisma.EssayAuditUncheckedCreateWithoutEssayInput> =
	z
		.object({
			id: z.number().int().optional(),
			auditStatus: z.lazy(() => AuditStatusSchema).optional(),
			auditMsg: z.string().optional().nullable(),
			operatorId: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default EssayAuditUncheckedCreateWithoutEssayInputSchema
