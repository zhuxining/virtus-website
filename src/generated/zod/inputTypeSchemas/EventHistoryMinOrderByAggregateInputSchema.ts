import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EventHistoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventHistoryMinOrderByAggregateInput> =
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
		})
		.strict()

export default EventHistoryMinOrderByAggregateInputSchema
