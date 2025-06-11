import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayLikeWhereInputSchema } from '../inputTypeSchemas/EssayLikeWhereInputSchema'

export const EssayLikeDeleteManyArgsSchema: z.ZodType<Prisma.EssayLikeDeleteManyArgs> =
	z
		.object({
			where: EssayLikeWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default EssayLikeDeleteManyArgsSchema
