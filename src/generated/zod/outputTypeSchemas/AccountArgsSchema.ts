import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { AccountSelectSchema } from '../inputTypeSchemas/AccountSelectSchema'
import { AccountIncludeSchema } from '../inputTypeSchemas/AccountIncludeSchema'

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z
	.object({
		select: z.lazy(() => AccountSelectSchema).optional(),
		include: z.lazy(() => AccountIncludeSchema).optional(),
	})
	.strict()

export default AccountArgsSchema
