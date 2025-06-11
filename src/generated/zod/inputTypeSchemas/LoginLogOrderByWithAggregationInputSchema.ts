import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { LoginLogCountOrderByAggregateInputSchema } from './LoginLogCountOrderByAggregateInputSchema'
import { LoginLogAvgOrderByAggregateInputSchema } from './LoginLogAvgOrderByAggregateInputSchema'
import { LoginLogMaxOrderByAggregateInputSchema } from './LoginLogMaxOrderByAggregateInputSchema'
import { LoginLogMinOrderByAggregateInputSchema } from './LoginLogMinOrderByAggregateInputSchema'
import { LoginLogSumOrderByAggregateInputSchema } from './LoginLogSumOrderByAggregateInputSchema'

export const LoginLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.LoginLogOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
			ip: z.lazy(() => SortOrderSchema).optional(),
			userAgent: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => LoginLogCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => LoginLogAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => LoginLogMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => LoginLogMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => LoginLogSumOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default LoginLogOrderByWithAggregationInputSchema
