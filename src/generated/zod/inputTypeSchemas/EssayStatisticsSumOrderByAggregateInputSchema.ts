import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const EssayStatisticsSumOrderByAggregateInputSchema: z.ZodType<Prisma.EssayStatisticsSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default EssayStatisticsSumOrderByAggregateInputSchema
