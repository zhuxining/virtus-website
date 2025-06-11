import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SessionOrderByRelationAggregateInputSchema } from './SessionOrderByRelationAggregateInputSchema'
import { AccountOrderByRelationAggregateInputSchema } from './AccountOrderByRelationAggregateInputSchema'
import { EssayOrderByRelationAggregateInputSchema } from './EssayOrderByRelationAggregateInputSchema'
import { EssayAuditOrderByRelationAggregateInputSchema } from './EssayAuditOrderByRelationAggregateInputSchema'
import { EssayLikeOrderByRelationAggregateInputSchema } from './EssayLikeOrderByRelationAggregateInputSchema'
import { EventHistoryOrderByRelationAggregateInputSchema } from './EventHistoryOrderByRelationAggregateInputSchema'
import { DonorInfoOrderByRelationAggregateInputSchema } from './DonorInfoOrderByRelationAggregateInputSchema'

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
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
			sessions: z
				.lazy(() => SessionOrderByRelationAggregateInputSchema)
				.optional(),
			accounts: z
				.lazy(() => AccountOrderByRelationAggregateInputSchema)
				.optional(),
			essay: z.lazy(() => EssayOrderByRelationAggregateInputSchema).optional(),
			essayAudit: z
				.lazy(() => EssayAuditOrderByRelationAggregateInputSchema)
				.optional(),
			essayLike: z
				.lazy(() => EssayLikeOrderByRelationAggregateInputSchema)
				.optional(),
			eventHistory: z
				.lazy(() => EventHistoryOrderByRelationAggregateInputSchema)
				.optional(),
			donorInfo: z
				.lazy(() => DonorInfoOrderByRelationAggregateInputSchema)
				.optional(),
		})
		.strict()

export default UserOrderByWithRelationInputSchema
