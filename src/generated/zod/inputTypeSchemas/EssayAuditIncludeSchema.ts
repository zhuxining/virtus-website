import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayArgsSchema } from '../outputTypeSchemas/EssayArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

export const EssayAuditIncludeSchema: z.ZodType<Prisma.EssayAuditInclude> = z
	.object({
		essay: z.union([z.boolean(), z.lazy(() => EssayArgsSchema)]).optional(),
		operator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict()

export default EssayAuditIncludeSchema
