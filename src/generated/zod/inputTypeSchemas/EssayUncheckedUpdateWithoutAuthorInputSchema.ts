import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { EssayStatusSchema } from './EssayStatusSchema'
import { EnumEssayStatusFieldUpdateOperationsInputSchema } from './EnumEssayStatusFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { EssayAuditUncheckedUpdateManyWithoutEssayNestedInputSchema } from './EssayAuditUncheckedUpdateManyWithoutEssayNestedInputSchema'
import { EssayLikeUncheckedUpdateManyWithoutEssayNestedInputSchema } from './EssayLikeUncheckedUpdateManyWithoutEssayNestedInputSchema'

export const EssayUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.EssayUncheckedUpdateWithoutAuthorInput> =
	z
		.object({
			id: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputSchema),
				])
				.optional(),
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
				.lazy(() => EssayAuditUncheckedUpdateManyWithoutEssayNestedInputSchema)
				.optional(),
			EssayLike: z
				.lazy(() => EssayLikeUncheckedUpdateManyWithoutEssayNestedInputSchema)
				.optional(),
		})
		.strict()

export default EssayUncheckedUpdateWithoutAuthorInputSchema
