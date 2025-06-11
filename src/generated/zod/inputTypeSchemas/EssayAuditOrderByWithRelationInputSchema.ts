import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { EssayOrderByWithRelationInputSchema } from './EssayOrderByWithRelationInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'

export const EssayAuditOrderByWithRelationInputSchema: z.ZodType<Prisma.EssayAuditOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			essayId: z.lazy(() => SortOrderSchema).optional(),
			auditStatus: z.lazy(() => SortOrderSchema).optional(),
			auditMsg: z
				.union([
					z.lazy(() => SortOrderSchema),
					z.lazy(() => SortOrderInputSchema),
				])
				.optional(),
			operatorId: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			essay: z.lazy(() => EssayOrderByWithRelationInputSchema).optional(),
			operator: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
		})
		.strict()

export default EssayAuditOrderByWithRelationInputSchema
