import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const EssayStatisticsUpdateInputSchema: z.ZodType<Prisma.EssayStatisticsUpdateInput> =
	z
		.object({
			createdAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
				])
				.optional(),
			updatedAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
				])
				.optional(),
		})
		.strict()

export default EssayStatisticsUpdateInputSchema
