import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { EssayAuditCountOrderByAggregateInputSchema } from './EssayAuditCountOrderByAggregateInputSchema'
import { EssayAuditAvgOrderByAggregateInputSchema } from './EssayAuditAvgOrderByAggregateInputSchema'
import { EssayAuditMaxOrderByAggregateInputSchema } from './EssayAuditMaxOrderByAggregateInputSchema'
import { EssayAuditMinOrderByAggregateInputSchema } from './EssayAuditMinOrderByAggregateInputSchema'
import { EssayAuditSumOrderByAggregateInputSchema } from './EssayAuditSumOrderByAggregateInputSchema'

export const EssayAuditOrderByWithAggregationInputSchema: z.ZodType<Prisma.EssayAuditOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			essayId: z.lazy(() => SortOrderSchema).optional(),
			auditStatus: z.lazy(() => SortOrderSchema).optional(),
			auditMsg: z
				.union([
					z.lazy(() => SortOrderSchema),
					z.lazy(() => SortOrderInputSchema),
				])
				.optional(),
			operatorId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z
				.lazy(() => EssayAuditCountOrderByAggregateInputSchema)
				.optional(),
			_avg: z.lazy(() => EssayAuditAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => EssayAuditMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => EssayAuditMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => EssayAuditSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default EssayAuditOrderByWithAggregationInputSchema
