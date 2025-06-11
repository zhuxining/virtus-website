import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayWhereInputSchema } from './EssayWhereInputSchema'

export const EssayListRelationFilterSchema: z.ZodType<Prisma.EssayListRelationFilter> =
	z
		.object({
			every: z.lazy(() => EssayWhereInputSchema).optional(),
			some: z.lazy(() => EssayWhereInputSchema).optional(),
			none: z.lazy(() => EssayWhereInputSchema).optional(),
		})
		.strict()

export default EssayListRelationFilterSchema
