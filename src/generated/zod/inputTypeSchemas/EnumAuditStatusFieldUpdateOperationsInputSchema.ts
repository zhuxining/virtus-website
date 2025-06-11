import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { AuditStatusSchema } from './AuditStatusSchema'

export const EnumAuditStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAuditStatusFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => AuditStatusSchema).optional(),
		})
		.strict()

export default EnumAuditStatusFieldUpdateOperationsInputSchema
