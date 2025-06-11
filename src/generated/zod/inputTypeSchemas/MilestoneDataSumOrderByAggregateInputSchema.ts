import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const MilestoneDataSumOrderByAggregateInputSchema: z.ZodType<Prisma.MilestoneDataSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			startYear: z.lazy(() => SortOrderSchema).optional(),
			studentCount: z.lazy(() => SortOrderSchema).optional(),
			cityCount: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default MilestoneDataSumOrderByAggregateInputSchema
