import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EssayStatisticsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EssayStatisticsAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EssayStatisticsAvgOrderByAggregateInputSchema
