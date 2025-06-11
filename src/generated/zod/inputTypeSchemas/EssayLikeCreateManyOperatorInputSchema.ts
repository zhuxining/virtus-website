import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'

export const EssayLikeCreateManyOperatorInputSchema: z.ZodType<Prisma.EssayLikeCreateManyOperatorInput> =
	z
		.object({
			id: z.number().int().optional(),
			essayId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default EssayLikeCreateManyOperatorInputSchema
