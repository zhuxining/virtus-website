import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DonorInfoOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DonorInfoOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default DonorInfoOrderByRelationAggregateInputSchema
