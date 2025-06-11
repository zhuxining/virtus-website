import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { MilestoneDataWhereUniqueInputSchema } from '../inputTypeSchemas/MilestoneDataWhereUniqueInputSchema'
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

export const MilestoneDataDeleteArgsSchema: z.ZodType<Prisma.MilestoneDataDeleteArgs> =
	z
		.object({
			select: MilestoneDataSelectSchema.optional(),
			where: MilestoneDataWhereUniqueInputSchema,
		})
		.strict()

export default MilestoneDataDeleteArgsSchema
