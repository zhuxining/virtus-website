import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayStatusSchema } from './EssayStatusSchema'
import { UserCreateNestedOneWithoutEssayInputSchema } from './UserCreateNestedOneWithoutEssayInputSchema'
import { EssayAuditCreateNestedManyWithoutEssayInputSchema } from './EssayAuditCreateNestedManyWithoutEssayInputSchema'

export const EssayCreateWithoutEssayLikeInputSchema: z.ZodType<Prisma.EssayCreateWithoutEssayLikeInput> =
	z
		.object({
			title: z.string(),
			banner: z.string().optional().nullable(),
			content: z.string(),
			status: z.lazy(() => EssayStatusSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			author: z.lazy(() => UserCreateNestedOneWithoutEssayInputSchema),
			audit: z
				.lazy(() => EssayAuditCreateNestedManyWithoutEssayInputSchema)
				.optional(),
		})
		.strict()

export default EssayCreateWithoutEssayLikeInputSchema
