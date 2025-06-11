import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { MilestoneDataUpdateManyMutationInputSchema } from '../inputTypeSchemas/MilestoneDataUpdateManyMutationInputSchema'
import { MilestoneDataUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MilestoneDataUncheckedUpdateManyInputSchema'
import { MilestoneDataWhereInputSchema } from '../inputTypeSchemas/MilestoneDataWhereInputSchema'

export const MilestoneDataUpdateManyArgsSchema: z.ZodType<Prisma.MilestoneDataUpdateManyArgs> =
	z
		.object({
			data: z.union([
				MilestoneDataUpdateManyMutationInputSchema,
				MilestoneDataUncheckedUpdateManyInputSchema,
			]),
			where: MilestoneDataWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default MilestoneDataUpdateManyArgsSchema
