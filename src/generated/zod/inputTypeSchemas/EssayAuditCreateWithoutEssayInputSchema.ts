import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { AuditStatusSchema } from './AuditStatusSchema'
import { UserCreateNestedOneWithoutEssayAuditInputSchema } from './UserCreateNestedOneWithoutEssayAuditInputSchema'

export const EssayAuditCreateWithoutEssayInputSchema: z.ZodType<Prisma.EssayAuditCreateWithoutEssayInput> =
	z
		.object({
			auditStatus: z.lazy(() => AuditStatusSchema).optional(),
			auditMsg: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			operator: z.lazy(() => UserCreateNestedOneWithoutEssayAuditInputSchema),
		})
		.strict()

export default EssayAuditCreateWithoutEssayInputSchema
