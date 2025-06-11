import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayWhereInputSchema } from './EssayWhereInputSchema'

export const EssayScalarRelationFilterSchema: z.ZodType<Prisma.EssayScalarRelationFilter> =
	z
		.object({
			is: z.lazy(() => EssayWhereInputSchema).optional(),
			isNot: z.lazy(() => EssayWhereInputSchema).optional(),
		})
		.strict()

export default EssayScalarRelationFilterSchema
