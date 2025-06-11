import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { EssayUpdateOneRequiredWithoutEssayLikeNestedInputSchema } from './EssayUpdateOneRequiredWithoutEssayLikeNestedInputSchema'

export const EssayLikeUpdateWithoutOperatorInputSchema: z.ZodType<Prisma.EssayLikeUpdateWithoutOperatorInput> =
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
			essay: z
				.lazy(() => EssayUpdateOneRequiredWithoutEssayLikeNestedInputSchema)
				.optional(),
		})
		.strict()

export default EssayLikeUpdateWithoutOperatorInputSchema
