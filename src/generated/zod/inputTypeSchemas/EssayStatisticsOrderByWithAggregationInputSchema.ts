import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { EssayStatisticsCountOrderByAggregateInputSchema } from './EssayStatisticsCountOrderByAggregateInputSchema'
import { EssayStatisticsAvgOrderByAggregateInputSchema } from './EssayStatisticsAvgOrderByAggregateInputSchema'
import { EssayStatisticsMaxOrderByAggregateInputSchema } from './EssayStatisticsMaxOrderByAggregateInputSchema'
import { EssayStatisticsMinOrderByAggregateInputSchema } from './EssayStatisticsMinOrderByAggregateInputSchema'
import { EssayStatisticsSumOrderByAggregateInputSchema } from './EssayStatisticsSumOrderByAggregateInputSchema'

export const EssayStatisticsOrderByWithAggregationInputSchema: z.ZodType<Prisma.EssayStatisticsOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z
				.lazy(() => EssayStatisticsCountOrderByAggregateInputSchema)
				.optional(),
			_avg: z
				.lazy(() => EssayStatisticsAvgOrderByAggregateInputSchema)
				.optional(),
			_max: z
				.lazy(() => EssayStatisticsMaxOrderByAggregateInputSchema)
				.optional(),
			_min: z
				.lazy(() => EssayStatisticsMinOrderByAggregateInputSchema)
				.optional(),
			_sum: z
				.lazy(() => EssayStatisticsSumOrderByAggregateInputSchema)
				.optional(),
		})
		.strict()

export default EssayStatisticsOrderByWithAggregationInputSchema
