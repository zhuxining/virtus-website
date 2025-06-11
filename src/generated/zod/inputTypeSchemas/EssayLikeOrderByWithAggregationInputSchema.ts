import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { EssayLikeCountOrderByAggregateInputSchema } from './EssayLikeCountOrderByAggregateInputSchema'
import { EssayLikeAvgOrderByAggregateInputSchema } from './EssayLikeAvgOrderByAggregateInputSchema'
import { EssayLikeMaxOrderByAggregateInputSchema } from './EssayLikeMaxOrderByAggregateInputSchema'
import { EssayLikeMinOrderByAggregateInputSchema } from './EssayLikeMinOrderByAggregateInputSchema'
import { EssayLikeSumOrderByAggregateInputSchema } from './EssayLikeSumOrderByAggregateInputSchema'

export const EssayLikeOrderByWithAggregationInputSchema: z.ZodType<Prisma.EssayLikeOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			essayId: z.lazy(() => SortOrderSchema).optional(),
			operatorId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z
				.lazy(() => EssayLikeCountOrderByAggregateInputSchema)
				.optional(),
			_avg: z.lazy(() => EssayLikeAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => EssayLikeMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => EssayLikeMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => EssayLikeSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default EssayLikeOrderByWithAggregationInputSchema
