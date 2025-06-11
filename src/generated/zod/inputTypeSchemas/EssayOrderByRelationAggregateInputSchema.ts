import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EssayOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EssayOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EssayOrderByRelationAggregateInputSchema
