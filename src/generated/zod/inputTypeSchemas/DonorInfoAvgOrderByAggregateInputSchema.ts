import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DonorInfoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DonorInfoAvgOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			donationAmount: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default DonorInfoAvgOrderByAggregateInputSchema
