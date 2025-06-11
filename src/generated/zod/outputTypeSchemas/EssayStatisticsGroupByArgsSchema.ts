import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayStatisticsWhereInputSchema } from '../inputTypeSchemas/EssayStatisticsWhereInputSchema'
import { EssayStatisticsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EssayStatisticsOrderByWithAggregationInputSchema'
import { EssayStatisticsScalarFieldEnumSchema } from '../inputTypeSchemas/EssayStatisticsScalarFieldEnumSchema'
import { EssayStatisticsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EssayStatisticsScalarWhereWithAggregatesInputSchema'

export const EssayStatisticsGroupByArgsSchema: z.ZodType<Prisma.EssayStatisticsGroupByArgs> =
	z
		.object({
			where: EssayStatisticsWhereInputSchema.optional(),
			orderBy: z
				.union([
					EssayStatisticsOrderByWithAggregationInputSchema.array(),
					EssayStatisticsOrderByWithAggregationInputSchema,
				])
				.optional(),
			by: EssayStatisticsScalarFieldEnumSchema.array(),
			having: EssayStatisticsScalarWhereWithAggregatesInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default EssayStatisticsGroupByArgsSchema
