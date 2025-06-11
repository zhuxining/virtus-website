import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayStatusSchema } from './EssayStatusSchema'
import { EssayAuditUncheckedCreateNestedManyWithoutEssayInputSchema } from './EssayAuditUncheckedCreateNestedManyWithoutEssayInputSchema'
import { EssayLikeUncheckedCreateNestedManyWithoutEssayInputSchema } from './EssayLikeUncheckedCreateNestedManyWithoutEssayInputSchema'

export const EssayUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.EssayUncheckedCreateWithoutAuthorInput> =
	z
		.object({
			id: z.number().int().optional(),
			title: z.string(),
			banner: z.string().optional().nullable(),
			content: z.string(),
			status: z.lazy(() => EssayStatusSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			audit: z
				.lazy(() => EssayAuditUncheckedCreateNestedManyWithoutEssayInputSchema)
				.optional(),
			EssayLike: z
				.lazy(() => EssayLikeUncheckedCreateNestedManyWithoutEssayInputSchema)
				.optional(),
		})
		.strict()

export default EssayUncheckedCreateWithoutAuthorInputSchema
