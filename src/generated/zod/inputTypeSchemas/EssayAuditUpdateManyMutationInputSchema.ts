import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { AuditStatusSchema } from './AuditStatusSchema'
import { EnumAuditStatusFieldUpdateOperationsInputSchema } from './EnumAuditStatusFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const EssayAuditUpdateManyMutationInputSchema: z.ZodType<Prisma.EssayAuditUpdateManyMutationInput> =
	z
		.object({
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

export default EssayAuditUpdateManyMutationInputSchema
