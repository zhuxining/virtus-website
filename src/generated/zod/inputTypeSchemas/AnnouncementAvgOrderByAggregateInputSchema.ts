import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const AnnouncementAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AnnouncementAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default AnnouncementAvgOrderByAggregateInputSchema
