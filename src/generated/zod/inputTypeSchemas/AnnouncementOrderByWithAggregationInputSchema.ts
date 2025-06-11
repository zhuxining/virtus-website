import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { AnnouncementCountOrderByAggregateInputSchema } from './AnnouncementCountOrderByAggregateInputSchema'
import { AnnouncementAvgOrderByAggregateInputSchema } from './AnnouncementAvgOrderByAggregateInputSchema'
import { AnnouncementMaxOrderByAggregateInputSchema } from './AnnouncementMaxOrderByAggregateInputSchema'
import { AnnouncementMinOrderByAggregateInputSchema } from './AnnouncementMinOrderByAggregateInputSchema'
import { AnnouncementSumOrderByAggregateInputSchema } from './AnnouncementSumOrderByAggregateInputSchema'

export const AnnouncementOrderByWithAggregationInputSchema: z.ZodType<Prisma.AnnouncementOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			content: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z
				.lazy(() => AnnouncementCountOrderByAggregateInputSchema)
				.optional(),
			_avg: z.lazy(() => AnnouncementAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => AnnouncementMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => AnnouncementMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => AnnouncementSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default AnnouncementOrderByWithAggregationInputSchema
