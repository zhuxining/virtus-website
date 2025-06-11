import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const MilestoneDataOrderByWithRelationInputSchema: z.ZodType<Prisma.MilestoneDataOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			startYear: z.lazy(() => SortOrderSchema).optional(),
			studentCount: z.lazy(() => SortOrderSchema).optional(),
			cityCount: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default MilestoneDataOrderByWithRelationInputSchema
