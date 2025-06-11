import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EssayStatisticsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EssayStatisticsMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EssayStatisticsMaxOrderByAggregateInputSchema
