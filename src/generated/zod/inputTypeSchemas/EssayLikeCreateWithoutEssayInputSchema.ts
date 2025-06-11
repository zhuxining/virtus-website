import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { UserCreateNestedOneWithoutEssayLikeInputSchema } from './UserCreateNestedOneWithoutEssayLikeInputSchema'

export const EssayLikeCreateWithoutEssayInputSchema: z.ZodType<Prisma.EssayLikeCreateWithoutEssayInput> =
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			operator: z.lazy(() => UserCreateNestedOneWithoutEssayLikeInputSchema),
		})
		.strict()

export default EssayLikeCreateWithoutEssayInputSchema
