import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'

export const MilestoneDataCreateManyInputSchema: z.ZodType<Prisma.MilestoneDataCreateManyInput> =
	z
		.object({
			id: z.number().int().optional(),
			startYear: z.number().int(),
			studentCount: z.number().int(),
			cityCount: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default MilestoneDataCreateManyInputSchema
