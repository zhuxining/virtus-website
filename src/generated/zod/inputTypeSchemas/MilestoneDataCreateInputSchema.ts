import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'

export const MilestoneDataCreateInputSchema: z.ZodType<Prisma.MilestoneDataCreateInput> =
	z
		.object({
			startYear: z.number().int(),
			studentCount: z.number().int(),
			cityCount: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default MilestoneDataCreateInputSchema
