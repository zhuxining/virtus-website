import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'

export const EventHistoryOrderByWithRelationInputSchema: z.ZodType<Prisma.EventHistoryOrderByWithRelationInput> =
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
			operator: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
		})
		.strict()

export default EventHistoryOrderByWithRelationInputSchema
