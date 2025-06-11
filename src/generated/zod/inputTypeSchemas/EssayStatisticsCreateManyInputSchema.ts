import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'

export const EssayStatisticsCreateManyInputSchema: z.ZodType<Prisma.EssayStatisticsCreateManyInput> =
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default EssayStatisticsCreateManyInputSchema
