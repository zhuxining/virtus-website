import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { UserUpdateOneRequiredWithoutEventHistoryNestedInputSchema } from './UserUpdateOneRequiredWithoutEventHistoryNestedInputSchema'

export const EventHistoryUpdateInputSchema: z.ZodType<Prisma.EventHistoryUpdateInput> =
	z
		.object({
			title: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			description: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			content: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			banner: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
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
			operator: z
				.lazy(() => UserUpdateOneRequiredWithoutEventHistoryNestedInputSchema)
				.optional(),
		})
		.strict()

export default EventHistoryUpdateInputSchema
