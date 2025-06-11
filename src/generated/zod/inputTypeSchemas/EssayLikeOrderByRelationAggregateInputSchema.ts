import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EssayLikeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EssayLikeOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EssayLikeOrderByRelationAggregateInputSchema
