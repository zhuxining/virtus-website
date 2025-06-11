import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EssayLikeCountOrderByAggregateInputSchema: z.ZodType<Prisma.EssayLikeCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			essayId: z.lazy(() => SortOrderSchema).optional(),
			operatorId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EssayLikeCountOrderByAggregateInputSchema
