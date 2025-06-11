import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z
	.object({
		equals: z.boolean().optional(),
		not: z
			.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
			.optional(),
	})
	.strict()

export default NestedBoolFilterSchema
