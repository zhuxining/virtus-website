import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			email: z.lazy(() => SortOrderSchema).optional(),
			emailVerified: z.lazy(() => SortOrderSchema).optional(),
			image: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			role: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default UserMaxOrderByAggregateInputSchema
