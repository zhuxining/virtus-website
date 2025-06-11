import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'

export const EssayStatisticsCreateInputSchema: z.ZodType<Prisma.EssayStatisticsCreateInput> =
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default EssayStatisticsCreateInputSchema
