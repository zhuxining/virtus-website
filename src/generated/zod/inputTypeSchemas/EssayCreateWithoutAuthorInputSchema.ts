import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayStatusSchema } from './EssayStatusSchema'
import { EssayAuditCreateNestedManyWithoutEssayInputSchema } from './EssayAuditCreateNestedManyWithoutEssayInputSchema'
import { EssayLikeCreateNestedManyWithoutEssayInputSchema } from './EssayLikeCreateNestedManyWithoutEssayInputSchema'

export const EssayCreateWithoutAuthorInputSchema: z.ZodType<Prisma.EssayCreateWithoutAuthorInput> =
	z
		.object({
			title: z.string(),
			banner: z.string().optional().nullable(),
			content: z.string(),
			status: z.lazy(() => EssayStatusSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			audit: z
				.lazy(() => EssayAuditCreateNestedManyWithoutEssayInputSchema)
				.optional(),
			EssayLike: z
				.lazy(() => EssayLikeCreateNestedManyWithoutEssayInputSchema)
				.optional(),
		})
		.strict()

export default EssayCreateWithoutAuthorInputSchema
