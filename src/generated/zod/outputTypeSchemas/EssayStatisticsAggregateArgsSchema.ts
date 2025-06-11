import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayStatisticsWhereInputSchema } from '../inputTypeSchemas/EssayStatisticsWhereInputSchema'
import { EssayStatisticsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EssayStatisticsOrderByWithRelationInputSchema'
import { EssayStatisticsWhereUniqueInputSchema } from '../inputTypeSchemas/EssayStatisticsWhereUniqueInputSchema'

export const EssayStatisticsAggregateArgsSchema: z.ZodType<Prisma.EssayStatisticsAggregateArgs> =
	z
		.object({
			where: EssayStatisticsWhereInputSchema.optional(),
			orderBy: z
				.union([
					EssayStatisticsOrderByWithRelationInputSchema.array(),
					EssayStatisticsOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: EssayStatisticsWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default EssayStatisticsAggregateArgsSchema
