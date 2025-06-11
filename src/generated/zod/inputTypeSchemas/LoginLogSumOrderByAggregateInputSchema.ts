import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LoginLogSumOrderByAggregateInputSchema: z.ZodType<Prisma.LoginLogSumOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default LoginLogSumOrderByAggregateInputSchema
