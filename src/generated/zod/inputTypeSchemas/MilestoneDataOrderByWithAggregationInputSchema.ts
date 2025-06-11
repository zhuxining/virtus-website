import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { MilestoneDataCountOrderByAggregateInputSchema } from './MilestoneDataCountOrderByAggregateInputSchema'
import { MilestoneDataAvgOrderByAggregateInputSchema } from './MilestoneDataAvgOrderByAggregateInputSchema'
import { MilestoneDataMaxOrderByAggregateInputSchema } from './MilestoneDataMaxOrderByAggregateInputSchema'
import { MilestoneDataMinOrderByAggregateInputSchema } from './MilestoneDataMinOrderByAggregateInputSchema'
import { MilestoneDataSumOrderByAggregateInputSchema } from './MilestoneDataSumOrderByAggregateInputSchema'

export const MilestoneDataOrderByWithAggregationInputSchema: z.ZodType<Prisma.MilestoneDataOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			startYear: z.lazy(() => SortOrderSchema).optional(),
			studentCount: z.lazy(() => SortOrderSchema).optional(),
			cityCount: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z
				.lazy(() => MilestoneDataCountOrderByAggregateInputSchema)
				.optional(),
			_avg: z
				.lazy(() => MilestoneDataAvgOrderByAggregateInputSchema)
				.optional(),
			_max: z
				.lazy(() => MilestoneDataMaxOrderByAggregateInputSchema)
				.optional(),
			_min: z
				.lazy(() => MilestoneDataMinOrderByAggregateInputSchema)
				.optional(),
			_sum: z
				.lazy(() => MilestoneDataSumOrderByAggregateInputSchema)
				.optional(),
		})
		.strict()

export default MilestoneDataOrderByWithAggregationInputSchema
