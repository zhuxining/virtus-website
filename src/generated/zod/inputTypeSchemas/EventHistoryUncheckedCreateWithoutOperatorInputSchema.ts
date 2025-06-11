import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'

export const EventHistoryUncheckedCreateWithoutOperatorInputSchema: z.ZodType<Prisma.EventHistoryUncheckedCreateWithoutOperatorInput> =
	z
		.object({
			id: z.number().int().optional(),
			title: z.string(),
			description: z.string(),
			content: z.string(),
			banner: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default EventHistoryUncheckedCreateWithoutOperatorInputSchema
