import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayLikeWhereInputSchema } from './EssayLikeWhereInputSchema'

export const EssayLikeListRelationFilterSchema: z.ZodType<Prisma.EssayLikeListRelationFilter> =
	z
		.object({
			every: z.lazy(() => EssayLikeWhereInputSchema).optional(),
			some: z.lazy(() => EssayLikeWhereInputSchema).optional(),
			none: z.lazy(() => EssayLikeWhereInputSchema).optional(),
		})
		.strict()

export default EssayLikeListRelationFilterSchema
