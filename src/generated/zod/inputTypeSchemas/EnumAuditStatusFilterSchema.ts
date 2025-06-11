import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { AuditStatusSchema } from './AuditStatusSchema'
import { NestedEnumAuditStatusFilterSchema } from './NestedEnumAuditStatusFilterSchema'

export const EnumAuditStatusFilterSchema: z.ZodType<Prisma.EnumAuditStatusFilter> =
	z
		.object({
			equals: z.lazy(() => AuditStatusSchema).optional(),
			in: z
				.lazy(() => AuditStatusSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => AuditStatusSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => AuditStatusSchema),
					z.lazy(() => NestedEnumAuditStatusFilterSchema),
				])
				.optional(),
		})
		.strict()

export default EnumAuditStatusFilterSchema
