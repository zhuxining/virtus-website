import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { UserCreateNestedOneWithoutSessionsInputSchema } from './UserCreateNestedOneWithoutSessionsInputSchema'

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z
	.object({
		id: z.string(),
		expiresAt: z.coerce.date(),
		token: z.string(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		ipAddress: z.string().optional().nullable(),
		userAgent: z.string().optional().nullable(),
		user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema),
	})
	.strict()

export default SessionCreateInputSchema
