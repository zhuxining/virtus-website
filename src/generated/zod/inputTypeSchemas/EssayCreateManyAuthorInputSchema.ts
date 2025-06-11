import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayStatusSchema } from './EssayStatusSchema'

export const EssayCreateManyAuthorInputSchema: z.ZodType<Prisma.EssayCreateManyAuthorInput> =
	z
		.object({
			id: z.number().int().optional(),
			title: z.string(),
			banner: z.string().optional().nullable(),
			content: z.string(),
			status: z.lazy(() => EssayStatusSchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default EssayCreateManyAuthorInputSchema
