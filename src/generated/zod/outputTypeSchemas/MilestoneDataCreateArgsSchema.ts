import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { MilestoneDataCreateInputSchema } from '../inputTypeSchemas/MilestoneDataCreateInputSchema'
import { MilestoneDataUncheckedCreateInputSchema } from '../inputTypeSchemas/MilestoneDataUncheckedCreateInputSchema'
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

export const MilestoneDataCreateArgsSchema: z.ZodType<Prisma.MilestoneDataCreateArgs> =
	z
		.object({
			select: MilestoneDataSelectSchema.optional(),
			data: z.union([
				MilestoneDataCreateInputSchema,
				MilestoneDataUncheckedCreateInputSchema,
			]),
		})
		.strict()

export default MilestoneDataCreateArgsSchema
