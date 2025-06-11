import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { EssayOrderByWithRelationInputSchema } from './EssayOrderByWithRelationInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'

export const EssayLikeOrderByWithRelationInputSchema: z.ZodType<Prisma.EssayLikeOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			essayId: z.lazy(() => SortOrderSchema).optional(),
			operatorId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			essay: z.lazy(() => EssayOrderByWithRelationInputSchema).optional(),
			operator: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
		})
		.strict()

export default EssayLikeOrderByWithRelationInputSchema
