import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LoginLogOrderByWithRelationInputSchema: z.ZodType<Prisma.LoginLogOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
			ip: z.lazy(() => SortOrderSchema).optional(),
			userAgent: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default LoginLogOrderByWithRelationInputSchema
