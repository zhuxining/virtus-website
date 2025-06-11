import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { UserCountOrderByAggregateInputSchema } from './UserCountOrderByAggregateInputSchema'
import { UserMaxOrderByAggregateInputSchema } from './UserMaxOrderByAggregateInputSchema'
import { UserMinOrderByAggregateInputSchema } from './UserMinOrderByAggregateInputSchema'

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			email: z.lazy(() => SortOrderSchema).optional(),
			emailVerified: z.lazy(() => SortOrderSchema).optional(),
			image: z
				.union([
					z.lazy(() => SortOrderSchema),
					z.lazy(() => SortOrderInputSchema),
				])
				.optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			role: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
		})
		.strict()

export default UserOrderByWithAggregationInputSchema
