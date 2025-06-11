import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { AuditStatusSchema } from './AuditStatusSchema'
import { EnumAuditStatusFieldUpdateOperationsInputSchema } from './EnumAuditStatusFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const EssayAuditUncheckedUpdateWithoutOperatorInputSchema: z.ZodType<Prisma.EssayAuditUncheckedUpdateWithoutOperatorInput> =
	z
		.object({
			id: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputSchema),
				])
				.optional(),
			essayId: z
				.union([
					z.number().int(),
					z.lazy(() => IntFieldUpdateOperationsInputSchema),
				])
				.optional(),
			auditStatus: z
				.union([
					z.lazy(() => AuditStatusSchema),
					z.lazy(() => EnumAuditStatusFieldUpdateOperationsInputSchema),
				])
				.optional(),
			auditMsg: z
				.union([
					z.string(),
					z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
				])
				.optional()
				.nullable(),
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

export default EssayAuditUncheckedUpdateWithoutOperatorInputSchema
