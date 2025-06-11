import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayStatisticsWhereUniqueInputSchema } from '../inputTypeSchemas/EssayStatisticsWhereUniqueInputSchema'
import { EssayStatisticsCreateInputSchema } from '../inputTypeSchemas/EssayStatisticsCreateInputSchema'
import { EssayStatisticsUncheckedCreateInputSchema } from '../inputTypeSchemas/EssayStatisticsUncheckedCreateInputSchema'
import { EssayStatisticsUpdateInputSchema } from '../inputTypeSchemas/EssayStatisticsUpdateInputSchema'
import { EssayStatisticsUncheckedUpdateInputSchema } from '../inputTypeSchemas/EssayStatisticsUncheckedUpdateInputSchema'
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

export const EssayStatisticsUpsertArgsSchema: z.ZodType<Prisma.EssayStatisticsUpsertArgs> =
	z
		.object({
			select: EssayStatisticsSelectSchema.optional(),
			where: EssayStatisticsWhereUniqueInputSchema,
			create: z.union([
				EssayStatisticsCreateInputSchema,
				EssayStatisticsUncheckedCreateInputSchema,
			]),
			update: z.union([
				EssayStatisticsUpdateInputSchema,
				EssayStatisticsUncheckedUpdateInputSchema,
			]),
		})
		.strict()

export default EssayStatisticsUpsertArgsSchema
