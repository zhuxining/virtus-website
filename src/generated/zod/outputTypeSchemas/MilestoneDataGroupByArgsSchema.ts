import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { MilestoneDataWhereInputSchema } from '../inputTypeSchemas/MilestoneDataWhereInputSchema'
import { MilestoneDataOrderByWithAggregationInputSchema } from '../inputTypeSchemas/MilestoneDataOrderByWithAggregationInputSchema'
import { MilestoneDataScalarFieldEnumSchema } from '../inputTypeSchemas/MilestoneDataScalarFieldEnumSchema'
import { MilestoneDataScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/MilestoneDataScalarWhereWithAggregatesInputSchema'

export const MilestoneDataGroupByArgsSchema: z.ZodType<Prisma.MilestoneDataGroupByArgs> =
	z
		.object({
			where: MilestoneDataWhereInputSchema.optional(),
			orderBy: z
				.union([
					MilestoneDataOrderByWithAggregationInputSchema.array(),
					MilestoneDataOrderByWithAggregationInputSchema,
				])
				.optional(),
			by: MilestoneDataScalarFieldEnumSchema.array(),
			having: MilestoneDataScalarWhereWithAggregatesInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default MilestoneDataGroupByArgsSchema
