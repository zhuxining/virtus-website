import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayStatisticsCreateInputSchema } from '../inputTypeSchemas/EssayStatisticsCreateInputSchema'
import { EssayStatisticsUncheckedCreateInputSchema } from '../inputTypeSchemas/EssayStatisticsUncheckedCreateInputSchema'
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

export const EssayStatisticsCreateArgsSchema: z.ZodType<Prisma.EssayStatisticsCreateArgs> =
	z
		.object({
			select: EssayStatisticsSelectSchema.optional(),
			data: z.union([
				EssayStatisticsCreateInputSchema,
				EssayStatisticsUncheckedCreateInputSchema,
			]),
		})
		.strict()

export default EssayStatisticsCreateArgsSchema
