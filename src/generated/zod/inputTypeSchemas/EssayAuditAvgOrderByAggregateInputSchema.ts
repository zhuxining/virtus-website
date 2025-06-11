import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EssayAuditAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EssayAuditAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			essayId: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EssayAuditAvgOrderByAggregateInputSchema
