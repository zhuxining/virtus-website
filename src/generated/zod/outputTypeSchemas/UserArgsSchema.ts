import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { UserSelectSchema } from '../inputTypeSchemas/UserSelectSchema'
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z
	.object({
		select: z.lazy(() => UserSelectSchema).optional(),
		include: z.lazy(() => UserIncludeSchema).optional(),
	})
	.strict()

export default UserArgsSchema
