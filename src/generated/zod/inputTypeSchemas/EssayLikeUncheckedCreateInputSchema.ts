import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'

export const EssayLikeUncheckedCreateInputSchema: z.ZodType<Prisma.EssayLikeUncheckedCreateInput> =
	z
		.object({
			id: z.number().int().optional(),
			essayId: z.number().int(),
			operatorId: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default EssayLikeUncheckedCreateInputSchema
