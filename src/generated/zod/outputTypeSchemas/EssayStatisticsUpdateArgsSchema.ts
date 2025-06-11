import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayStatisticsUpdateInputSchema } from '../inputTypeSchemas/EssayStatisticsUpdateInputSchema'
import { EssayStatisticsUncheckedUpdateInputSchema } from '../inputTypeSchemas/EssayStatisticsUncheckedUpdateInputSchema'
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

export const EssayStatisticsUpdateArgsSchema: z.ZodType<Prisma.EssayStatisticsUpdateArgs> =
	z
		.object({
			select: EssayStatisticsSelectSchema.optional(),
			data: z.union([
				EssayStatisticsUpdateInputSchema,
				EssayStatisticsUncheckedUpdateInputSchema,
			]),
			where: EssayStatisticsWhereUniqueInputSchema,
		})
		.strict()

export default EssayStatisticsUpdateArgsSchema
