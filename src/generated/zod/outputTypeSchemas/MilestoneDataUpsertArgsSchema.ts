import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { MilestoneDataWhereUniqueInputSchema } from '../inputTypeSchemas/MilestoneDataWhereUniqueInputSchema'
import { MilestoneDataCreateInputSchema } from '../inputTypeSchemas/MilestoneDataCreateInputSchema'
import { MilestoneDataUncheckedCreateInputSchema } from '../inputTypeSchemas/MilestoneDataUncheckedCreateInputSchema'
import { MilestoneDataUpdateInputSchema } from '../inputTypeSchemas/MilestoneDataUpdateInputSchema'
import { MilestoneDataUncheckedUpdateInputSchema } from '../inputTypeSchemas/MilestoneDataUncheckedUpdateInputSchema'
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

export const MilestoneDataUpsertArgsSchema: z.ZodType<Prisma.MilestoneDataUpsertArgs> =
	z
		.object({
			select: MilestoneDataSelectSchema.optional(),
			where: MilestoneDataWhereUniqueInputSchema,
			create: z.union([
				MilestoneDataCreateInputSchema,
				MilestoneDataUncheckedCreateInputSchema,
			]),
			update: z.union([
				MilestoneDataUpdateInputSchema,
				MilestoneDataUncheckedUpdateInputSchema,
			]),
		})
		.strict()

export default MilestoneDataUpsertArgsSchema
