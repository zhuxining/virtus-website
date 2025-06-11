import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EventHistorySumOrderByAggregateInputSchema: z.ZodType<Prisma.EventHistorySumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EventHistorySumOrderByAggregateInputSchema
