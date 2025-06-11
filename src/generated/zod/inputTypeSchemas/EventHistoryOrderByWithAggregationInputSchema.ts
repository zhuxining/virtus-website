import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { EventHistoryCountOrderByAggregateInputSchema } from './EventHistoryCountOrderByAggregateInputSchema'
import { EventHistoryAvgOrderByAggregateInputSchema } from './EventHistoryAvgOrderByAggregateInputSchema'
import { EventHistoryMaxOrderByAggregateInputSchema } from './EventHistoryMaxOrderByAggregateInputSchema'
import { EventHistoryMinOrderByAggregateInputSchema } from './EventHistoryMinOrderByAggregateInputSchema'
import { EventHistorySumOrderByAggregateInputSchema } from './EventHistorySumOrderByAggregateInputSchema'

export const EventHistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventHistoryOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			description: z.lazy(() => SortOrderSchema).optional(),
			content: z.lazy(() => SortOrderSchema).optional(),
			banner: z.lazy(() => SortOrderSchema).optional(),
			operatorId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z
				.lazy(() => EventHistoryCountOrderByAggregateInputSchema)
				.optional(),
			_avg: z.lazy(() => EventHistoryAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => EventHistoryMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => EventHistoryMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => EventHistorySumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default EventHistoryOrderByWithAggregationInputSchema
