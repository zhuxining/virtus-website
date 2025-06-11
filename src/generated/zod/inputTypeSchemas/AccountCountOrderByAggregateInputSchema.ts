import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			accountId: z.lazy(() => SortOrderSchema).optional(),
			providerId: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
			accessToken: z.lazy(() => SortOrderSchema).optional(),
			refreshToken: z.lazy(() => SortOrderSchema).optional(),
			idToken: z.lazy(() => SortOrderSchema).optional(),
			accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
			refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
			scope: z.lazy(() => SortOrderSchema).optional(),
			password: z.lazy(() => SortOrderSchema).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict()

export default AccountCountOrderByAggregateInputSchema
