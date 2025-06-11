import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'

export const EventHistoryCreateWithoutOperatorInputSchema: z.ZodType<Prisma.EventHistoryCreateWithoutOperatorInput> =
	z
		.object({
			title: z.string(),
			description: z.string(),
			content: z.string(),
			banner: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default EventHistoryCreateWithoutOperatorInputSchema
