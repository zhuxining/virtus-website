import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EventHistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EventHistoryOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EventHistoryOrderByRelationAggregateInputSchema
