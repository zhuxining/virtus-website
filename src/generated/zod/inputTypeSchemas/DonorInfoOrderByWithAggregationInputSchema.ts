import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { DonorInfoCountOrderByAggregateInputSchema } from './DonorInfoCountOrderByAggregateInputSchema'
import { DonorInfoAvgOrderByAggregateInputSchema } from './DonorInfoAvgOrderByAggregateInputSchema'
import { DonorInfoMaxOrderByAggregateInputSchema } from './DonorInfoMaxOrderByAggregateInputSchema'
import { DonorInfoMinOrderByAggregateInputSchema } from './DonorInfoMinOrderByAggregateInputSchema'
import { DonorInfoSumOrderByAggregateInputSchema } from './DonorInfoSumOrderByAggregateInputSchema'

export const DonorInfoOrderByWithAggregationInputSchema: z.ZodType<Prisma.DonorInfoOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			avatar: z
				.union([
					z.lazy(() => SortOrderSchema),
					z.lazy(() => SortOrderInputSchema),
				])
				.optional(),
			description: z
				.union([
					z.lazy(() => SortOrderSchema),
					z.lazy(() => SortOrderInputSchema),
				])
				.optional(),
			donationAmount: z
				.union([
					z.lazy(() => SortOrderSchema),
					z.lazy(() => SortOrderInputSchema),
				])
				.optional(),
			donationDate: z.lazy(() => SortOrderSchema).optional(),
			operatorId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z
				.lazy(() => DonorInfoCountOrderByAggregateInputSchema)
				.optional(),
			_avg: z.lazy(() => DonorInfoAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => DonorInfoMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => DonorInfoMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => DonorInfoSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default DonorInfoOrderByWithAggregationInputSchema
