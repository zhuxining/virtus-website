import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { EssayStatusSchema } from './EssayStatusSchema'
import { EnumEssayStatusFieldUpdateOperationsInputSchema } from './EnumEssayStatusFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { EssayAuditUncheckedUpdateManyWithoutEssayNestedInputSchema } from './EssayAuditUncheckedUpdateManyWithoutEssayNestedInputSchema'

export const EssayUncheckedUpdateWithoutEssayLikeInputSchema: z.ZodType<Prisma.EssayUncheckedUpdateWithoutEssayLikeInput> =
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
			authorId: z
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
		})
		.strict()

export default EssayUncheckedUpdateWithoutEssayLikeInputSchema
