import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayLikeWhereInputSchema } from '../inputTypeSchemas/EssayLikeWhereInputSchema'
import { EssayLikeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EssayLikeOrderByWithAggregationInputSchema'
import { EssayLikeScalarFieldEnumSchema } from '../inputTypeSchemas/EssayLikeScalarFieldEnumSchema'
import { EssayLikeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EssayLikeScalarWhereWithAggregatesInputSchema'

export const EssayLikeGroupByArgsSchema: z.ZodType<Prisma.EssayLikeGroupByArgs> =
	z
		.object({
			where: EssayLikeWhereInputSchema.optional(),
			orderBy: z
				.union([
					EssayLikeOrderByWithAggregationInputSchema.array(),
					EssayLikeOrderByWithAggregationInputSchema,
				])
				.optional(),
			by: EssayLikeScalarFieldEnumSchema.array(),
			having: EssayLikeScalarWhereWithAggregatesInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default EssayLikeGroupByArgsSchema
