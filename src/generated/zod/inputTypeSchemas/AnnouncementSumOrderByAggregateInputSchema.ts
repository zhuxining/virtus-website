import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const AnnouncementSumOrderByAggregateInputSchema: z.ZodType<Prisma.AnnouncementSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default AnnouncementSumOrderByAggregateInputSchema
