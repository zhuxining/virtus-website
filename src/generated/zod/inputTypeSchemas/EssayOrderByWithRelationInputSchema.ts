import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { EssayAuditOrderByRelationAggregateInputSchema } from './EssayAuditOrderByRelationAggregateInputSchema'
import { EssayLikeOrderByRelationAggregateInputSchema } from './EssayLikeOrderByRelationAggregateInputSchema'

export const EssayOrderByWithRelationInputSchema: z.ZodType<Prisma.EssayOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			title: z.lazy(() => SortOrderSchema).optional(),
			banner: z
				.union([
					z.lazy(() => SortOrderSchema),
					z.lazy(() => SortOrderInputSchema),
				])
				.optional(),
			content: z.lazy(() => SortOrderSchema).optional(),
			authorId: z.lazy(() => SortOrderSchema).optional(),
			status: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			author: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
			audit: z
				.lazy(() => EssayAuditOrderByRelationAggregateInputSchema)
				.optional(),
			EssayLike: z
				.lazy(() => EssayLikeOrderByRelationAggregateInputSchema)
				.optional(),
		})
		.strict()

export default EssayOrderByWithRelationInputSchema
