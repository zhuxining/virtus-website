import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LoginLogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LoginLogAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default LoginLogAvgOrderByAggregateInputSchema
