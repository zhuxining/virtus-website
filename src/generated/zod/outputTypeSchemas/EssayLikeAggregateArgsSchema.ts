import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayLikeWhereInputSchema } from '../inputTypeSchemas/EssayLikeWhereInputSchema'
import { EssayLikeOrderByWithRelationInputSchema } from '../inputTypeSchemas/EssayLikeOrderByWithRelationInputSchema'
import { EssayLikeWhereUniqueInputSchema } from '../inputTypeSchemas/EssayLikeWhereUniqueInputSchema'

export const EssayLikeAggregateArgsSchema: z.ZodType<Prisma.EssayLikeAggregateArgs> =
	z
		.object({
			where: EssayLikeWhereInputSchema.optional(),
			orderBy: z
				.union([
					EssayLikeOrderByWithRelationInputSchema.array(),
					EssayLikeOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: EssayLikeWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
		})
		.strict()

export default EssayLikeAggregateArgsSchema
