import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { MilestoneDataWhereInputSchema } from '../inputTypeSchemas/MilestoneDataWhereInputSchema'
import { MilestoneDataOrderByWithRelationInputSchema } from '../inputTypeSchemas/MilestoneDataOrderByWithRelationInputSchema'
import { MilestoneDataWhereUniqueInputSchema } from '../inputTypeSchemas/MilestoneDataWhereUniqueInputSchema'
import { MilestoneDataScalarFieldEnumSchema } from '../inputTypeSchemas/MilestoneDataScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MilestoneDataSelectSchema: z.ZodType<Prisma.MilestoneDataSelect> =
	z
		.object({
			id: z.boolean().optional(),
			startYear: z.boolean().optional(),
			studentCount: z.boolean().optional(),
			cityCount: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
		})
		.strict()

export const MilestoneDataFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MilestoneDataFindFirstOrThrowArgs> =
	z
		.object({
			select: MilestoneDataSelectSchema.optional(),
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
			distinct: z
				.union([
					MilestoneDataScalarFieldEnumSchema,
					MilestoneDataScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict()

export default MilestoneDataFindFirstOrThrowArgsSchema
