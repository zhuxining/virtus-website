import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { MilestoneDataWhereInputSchema } from '../inputTypeSchemas/MilestoneDataWhereInputSchema'
import { MilestoneDataOrderByWithRelationInputSchema } from '../inputTypeSchemas/MilestoneDataOrderByWithRelationInputSchema'
import { MilestoneDataWhereUniqueInputSchema } from '../inputTypeSchemas/MilestoneDataWhereUniqueInputSchema'

export const MilestoneDataAggregateArgsSchema: z.ZodType<Prisma.MilestoneDataAggregateArgs> =
	z
		.object({
			where: MilestoneDataWhereInputSchema.optional(),
			orderBy: z
				.union([
					MilestoneDataOrderByWithRelationInputSchema.array(),
					MilestoneDataOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: MilestoneDataWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default MilestoneDataAggregateArgsSchema
