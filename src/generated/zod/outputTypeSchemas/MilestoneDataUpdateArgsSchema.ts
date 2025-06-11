import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { MilestoneDataUpdateInputSchema } from '../inputTypeSchemas/MilestoneDataUpdateInputSchema'
import { MilestoneDataUncheckedUpdateInputSchema } from '../inputTypeSchemas/MilestoneDataUncheckedUpdateInputSchema'
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

export const MilestoneDataUpdateArgsSchema: z.ZodType<Prisma.MilestoneDataUpdateArgs> =
	z
		.object({
			select: MilestoneDataSelectSchema.optional(),
			data: z.union([
				MilestoneDataUpdateInputSchema,
				MilestoneDataUncheckedUpdateInputSchema,
			]),
			where: MilestoneDataWhereUniqueInputSchema,
		})
		.strict()

export default MilestoneDataUpdateArgsSchema
