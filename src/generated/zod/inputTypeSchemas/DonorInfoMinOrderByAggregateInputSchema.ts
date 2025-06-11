import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DonorInfoMinOrderByAggregateInputSchema: z.ZodType<Prisma.DonorInfoMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			name: z.lazy(() => SortOrderSchema).optional(),
			avatar: z.lazy(() => SortOrderSchema).optional(),
			description: z.lazy(() => SortOrderSchema).optional(),
			donationAmount: z.lazy(() => SortOrderSchema).optional(),
			donationDate: z.lazy(() => SortOrderSchema).optional(),
			operatorId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default DonorInfoMinOrderByAggregateInputSchema
