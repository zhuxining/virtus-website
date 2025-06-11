import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayStatusSchema } from './EssayStatusSchema'
import { EssayLikeUncheckedCreateNestedManyWithoutEssayInputSchema } from './EssayLikeUncheckedCreateNestedManyWithoutEssayInputSchema'

export const EssayUncheckedCreateWithoutAuditInputSchema: z.ZodType<Prisma.EssayUncheckedCreateWithoutAuditInput> =
	z
		.object({
			id: z.number().int().optional(),
			title: z.string(),
			banner: z.string().optional().nullable(),
			content: z.string(),
			authorId: z.string(),
			status: z.lazy(() => EssayStatusSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			EssayLike: z
				.lazy(() => EssayLikeUncheckedCreateNestedManyWithoutEssayInputSchema)
				.optional(),
		})
		.strict()

export default EssayUncheckedCreateWithoutAuditInputSchema
