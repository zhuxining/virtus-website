import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayStatusSchema } from './EssayStatusSchema'
import { NestedEnumEssayStatusWithAggregatesFilterSchema } from './NestedEnumEssayStatusWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumEssayStatusFilterSchema } from './NestedEnumEssayStatusFilterSchema'

export const EnumEssayStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumEssayStatusWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => EssayStatusSchema).optional(),
			in: z
				.lazy(() => EssayStatusSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => EssayStatusSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => EssayStatusSchema),
					z.lazy(() => NestedEnumEssayStatusWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumEssayStatusFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumEssayStatusFilterSchema).optional(),
		})
		.strict()

export default EnumEssayStatusWithAggregatesFilterSchema
