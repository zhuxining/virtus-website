import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EssaySumOrderByAggregateInputSchema: z.ZodType<Prisma.EssaySumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EssaySumOrderByAggregateInputSchema
