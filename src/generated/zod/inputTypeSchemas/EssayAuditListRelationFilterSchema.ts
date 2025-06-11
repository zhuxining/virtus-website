import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayAuditWhereInputSchema } from './EssayAuditWhereInputSchema'

export const EssayAuditListRelationFilterSchema: z.ZodType<Prisma.EssayAuditListRelationFilter> =
	z
		.object({
			every: z.lazy(() => EssayAuditWhereInputSchema).optional(),
			some: z.lazy(() => EssayAuditWhereInputSchema).optional(),
			none: z.lazy(() => EssayAuditWhereInputSchema).optional(),
		})
		.strict()

export default EssayAuditListRelationFilterSchema
