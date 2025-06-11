import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'

export const EssayLikeCreateManyEssayInputSchema: z.ZodType<Prisma.EssayLikeCreateManyEssayInput> =
	z
		.object({
			id: z.number().int().optional(),
			operatorId: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default EssayLikeCreateManyEssayInputSchema
