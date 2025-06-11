import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayStatisticsWhereUniqueInputSchema } from '../inputTypeSchemas/EssayStatisticsWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EssayStatisticsSelectSchema: z.ZodType<Prisma.EssayStatisticsSelect> =
	z
		.object({
			id: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
		})
		.strict()

export const EssayStatisticsDeleteArgsSchema: z.ZodType<Prisma.EssayStatisticsDeleteArgs> =
	z
		.object({
			select: EssayStatisticsSelectSchema.optional(),
			where: EssayStatisticsWhereUniqueInputSchema,
		})
		.strict()

export default EssayStatisticsDeleteArgsSchema
