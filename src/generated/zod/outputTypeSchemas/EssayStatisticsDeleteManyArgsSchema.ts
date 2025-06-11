import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayStatisticsWhereInputSchema } from '../inputTypeSchemas/EssayStatisticsWhereInputSchema'

export const EssayStatisticsDeleteManyArgsSchema: z.ZodType<Prisma.EssayStatisticsDeleteManyArgs> =
	z
		.object({
			where: EssayStatisticsWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default EssayStatisticsDeleteManyArgsSchema
