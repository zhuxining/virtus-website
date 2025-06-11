import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { EssayStatusSchema } from './EssayStatusSchema'
import { EnumEssayStatusFieldUpdateOperationsInputSchema } from './EnumEssayStatusFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { EssayAuditUpdateManyWithoutEssayNestedInputSchema } from './EssayAuditUpdateManyWithoutEssayNestedInputSchema'
import { EssayLikeUpdateManyWithoutEssayNestedInputSchema } from './EssayLikeUpdateManyWithoutEssayNestedInputSchema'

export const EssayUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.EssayUpdateWithoutAuthorInput> =
	z
		.object({
			title: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			banner: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
				])
				.optional()
				.nullable(),
			content: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			status: z
				.union([
					z.lazy(() => EssayStatusSchema),
					z.lazy(() => EnumEssayStatusFieldUpdateOperationsInputSchema),
				])
				.optional(),
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
			audit: z
				.lazy(() => EssayAuditUpdateManyWithoutEssayNestedInputSchema)
				.optional(),
			EssayLike: z
				.lazy(() => EssayLikeUpdateManyWithoutEssayNestedInputSchema)
				.optional(),
		})
		.strict()

export default EssayUpdateWithoutAuthorInputSchema
