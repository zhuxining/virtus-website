import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayCreateNestedOneWithoutEssayLikeInputSchema } from './EssayCreateNestedOneWithoutEssayLikeInputSchema'
import { UserCreateNestedOneWithoutEssayLikeInputSchema } from './UserCreateNestedOneWithoutEssayLikeInputSchema'

export const EssayLikeCreateInputSchema: z.ZodType<Prisma.EssayLikeCreateInput> =
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			essay: z.lazy(() => EssayCreateNestedOneWithoutEssayLikeInputSchema),
			operator: z.lazy(() => UserCreateNestedOneWithoutEssayLikeInputSchema),
		})
		.strict()

export default EssayLikeCreateInputSchema
