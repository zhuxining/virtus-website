import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { MilestoneDataWhereInputSchema } from '../inputTypeSchemas/MilestoneDataWhereInputSchema'

export const MilestoneDataDeleteManyArgsSchema: z.ZodType<Prisma.MilestoneDataDeleteManyArgs> =
	z
		.object({
			where: MilestoneDataWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default MilestoneDataDeleteManyArgsSchema
