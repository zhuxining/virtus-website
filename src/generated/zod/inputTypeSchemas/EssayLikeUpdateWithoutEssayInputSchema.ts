import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { UserUpdateOneRequiredWithoutEssayLikeNestedInputSchema } from './UserUpdateOneRequiredWithoutEssayLikeNestedInputSchema'

export const EssayLikeUpdateWithoutEssayInputSchema: z.ZodType<Prisma.EssayLikeUpdateWithoutEssayInput> =
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
			operator: z
				.lazy(() => UserUpdateOneRequiredWithoutEssayLikeNestedInputSchema)
				.optional(),
		})
		.strict()

export default EssayLikeUpdateWithoutEssayInputSchema
