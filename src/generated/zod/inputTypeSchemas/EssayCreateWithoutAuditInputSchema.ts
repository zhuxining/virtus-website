import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayStatusSchema } from './EssayStatusSchema'
import { UserCreateNestedOneWithoutEssayInputSchema } from './UserCreateNestedOneWithoutEssayInputSchema'
import { EssayLikeCreateNestedManyWithoutEssayInputSchema } from './EssayLikeCreateNestedManyWithoutEssayInputSchema'

export const EssayCreateWithoutAuditInputSchema: z.ZodType<Prisma.EssayCreateWithoutAuditInput> =
	z
		.object({
			title: z.string(),
			banner: z.string().optional().nullable(),
			content: z.string(),
			status: z.lazy(() => EssayStatusSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			author: z.lazy(() => UserCreateNestedOneWithoutEssayInputSchema),
			EssayLike: z
				.lazy(() => EssayLikeCreateNestedManyWithoutEssayInputSchema)
				.optional(),
		})
		.strict()

export default EssayCreateWithoutAuditInputSchema
