import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { AuditStatusSchema } from './AuditStatusSchema'
import { EssayCreateNestedOneWithoutAuditInputSchema } from './EssayCreateNestedOneWithoutAuditInputSchema'

export const EssayAuditCreateWithoutOperatorInputSchema: z.ZodType<Prisma.EssayAuditCreateWithoutOperatorInput> =
	z
		.object({
			auditStatus: z.lazy(() => AuditStatusSchema).optional(),
			auditMsg: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			essay: z.lazy(() => EssayCreateNestedOneWithoutAuditInputSchema),
		})
		.strict()

export default EssayAuditCreateWithoutOperatorInputSchema
