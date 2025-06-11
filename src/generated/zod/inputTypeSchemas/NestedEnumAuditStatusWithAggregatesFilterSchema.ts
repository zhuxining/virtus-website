import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { AuditStatusSchema } from './AuditStatusSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumAuditStatusFilterSchema } from './NestedEnumAuditStatusFilterSchema'

export const NestedEnumAuditStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAuditStatusWithAggregatesFilter> =
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
					z.lazy(() => NestedEnumAuditStatusWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumAuditStatusFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumAuditStatusFilterSchema).optional(),
		})
		.strict()

export default NestedEnumAuditStatusWithAggregatesFilterSchema
