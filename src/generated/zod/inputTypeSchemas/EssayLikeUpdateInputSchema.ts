import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { EssayUpdateOneRequiredWithoutEssayLikeNestedInputSchema } from './EssayUpdateOneRequiredWithoutEssayLikeNestedInputSchema'
import { UserUpdateOneRequiredWithoutEssayLikeNestedInputSchema } from './UserUpdateOneRequiredWithoutEssayLikeNestedInputSchema'

export const EssayLikeUpdateInputSchema: z.ZodType<Prisma.EssayLikeUpdateInput> =
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
			operator: z
				.lazy(() => UserUpdateOneRequiredWithoutEssayLikeNestedInputSchema)
				.optional(),
		})
		.strict()

export default EssayLikeUpdateInputSchema
