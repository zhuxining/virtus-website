import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { RoleSchema } from './RoleSchema'

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> =
	z
		.object({
			id: z.string(),
			name: z.string(),
			email: z.string(),
			emailVerified: z.boolean(),
			image: z.string().optional().nullable(),
			createdAt: z.coerce.date(),
			updatedAt: z.coerce.date(),
			role: z.lazy(() => RoleSchema).optional(),
		})
		.strict()

export default UserCreateManyInputSchema
