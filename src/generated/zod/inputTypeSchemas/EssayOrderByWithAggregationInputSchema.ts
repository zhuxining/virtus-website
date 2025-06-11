import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { EssayCountOrderByAggregateInputSchema } from './EssayCountOrderByAggregateInputSchema'
import { EssayAvgOrderByAggregateInputSchema } from './EssayAvgOrderByAggregateInputSchema'
import { EssayMaxOrderByAggregateInputSchema } from './EssayMaxOrderByAggregateInputSchema'
import { EssayMinOrderByAggregateInputSchema } from './EssayMinOrderByAggregateInputSchema'
import { EssaySumOrderByAggregateInputSchema } from './EssaySumOrderByAggregateInputSchema'

export const EssayOrderByWithAggregationInputSchema: z.ZodType<Prisma.EssayOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			banner: z
				.union([
					z.lazy(() => SortOrderSchema),
					z.lazy(() => SortOrderInputSchema),
				])
				.optional(),
			content: z.lazy(() => SortOrderSchema).optional(),
			authorId: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => EssayCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => EssayAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => EssayMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => EssayMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => EssaySumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default EssayOrderByWithAggregationInputSchema
