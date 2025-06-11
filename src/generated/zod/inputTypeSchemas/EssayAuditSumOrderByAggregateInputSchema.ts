import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EssayAuditSumOrderByAggregateInputSchema: z.ZodType<Prisma.EssayAuditSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			essayId: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EssayAuditSumOrderByAggregateInputSchema
