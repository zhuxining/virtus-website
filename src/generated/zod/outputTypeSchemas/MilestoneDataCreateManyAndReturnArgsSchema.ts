import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { MilestoneDataCreateManyInputSchema } from '../inputTypeSchemas/MilestoneDataCreateManyInputSchema'

export const MilestoneDataCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MilestoneDataCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				MilestoneDataCreateManyInputSchema,
				MilestoneDataCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default MilestoneDataCreateManyAndReturnArgsSchema
