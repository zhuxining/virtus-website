import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EventHistoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EventHistoryAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EventHistoryAvgOrderByAggregateInputSchema
