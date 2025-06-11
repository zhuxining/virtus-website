import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> =
	z
		.object({
			id: z.string(),
			accountId: z.string(),
			providerId: z.string(),
			userId: z.string(),
			accessToken: z.string().optional().nullable(),
			refreshToken: z.string().optional().nullable(),
			idToken: z.string().optional().nullable(),
			accessTokenExpiresAt: z.coerce.date().optional().nullable(),
			refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
			scope: z.string().optional().nullable(),
			password: z.string().optional().nullable(),
			createdAt: z.coerce.date(),
			updatedAt: z.coerce.date(),
		})
		.strict()

export default AccountCreateManyInputSchema
