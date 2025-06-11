import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'

export const VerificationUpdateInputSchema: z.ZodType<Prisma.VerificationUpdateInput> =
	z
		.object({
			id: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			identifier: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			value: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputSchema),
				])
				.optional(),
			expiresAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
				])
				.optional(),
			createdAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
				])
				.optional()
				.nullable(),
			updatedAt: z
				.union([
					z.coerce.date(),
					z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
				])
				.optional()
				.nullable(),
		})
		.strict()

export default VerificationUpdateInputSchema
