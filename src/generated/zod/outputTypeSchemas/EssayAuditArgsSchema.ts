import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayAuditSelectSchema } from '../inputTypeSchemas/EssayAuditSelectSchema'
import { EssayAuditIncludeSchema } from '../inputTypeSchemas/EssayAuditIncludeSchema'

export const EssayAuditArgsSchema: z.ZodType<Prisma.EssayAuditDefaultArgs> = z
	.object({
		select: z.lazy(() => EssayAuditSelectSchema).optional(),
		include: z.lazy(() => EssayAuditIncludeSchema).optional(),
	})
	.strict()

export default EssayAuditArgsSchema
