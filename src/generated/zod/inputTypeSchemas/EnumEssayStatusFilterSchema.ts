import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayStatusSchema } from './EssayStatusSchema'
import { NestedEnumEssayStatusFilterSchema } from './NestedEnumEssayStatusFilterSchema'

export const EnumEssayStatusFilterSchema: z.ZodType<Prisma.EnumEssayStatusFilter> =
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
					z.lazy(() => NestedEnumEssayStatusFilterSchema),
				])
				.optional(),
		})
		.strict()

export default EnumEssayStatusFilterSchema
