import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { MilestoneDataCreateManyInputSchema } from '../inputTypeSchemas/MilestoneDataCreateManyInputSchema'

export const MilestoneDataCreateManyArgsSchema: z.ZodType<Prisma.MilestoneDataCreateManyArgs> =
	z
		.object({
			data: z.union([
				MilestoneDataCreateManyInputSchema,
				MilestoneDataCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default MilestoneDataCreateManyArgsSchema
