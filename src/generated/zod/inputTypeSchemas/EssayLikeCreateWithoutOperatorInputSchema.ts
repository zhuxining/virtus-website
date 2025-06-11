import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayCreateNestedOneWithoutEssayLikeInputSchema } from './EssayCreateNestedOneWithoutEssayLikeInputSchema'

export const EssayLikeCreateWithoutOperatorInputSchema: z.ZodType<Prisma.EssayLikeCreateWithoutOperatorInput> =
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			essay: z.lazy(() => EssayCreateNestedOneWithoutEssayLikeInputSchema),
		})
		.strict()

export default EssayLikeCreateWithoutOperatorInputSchema
