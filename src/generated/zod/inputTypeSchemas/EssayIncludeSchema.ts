import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { EssayAuditFindManyArgsSchema } from '../outputTypeSchemas/EssayAuditFindManyArgsSchema'
import { EssayLikeFindManyArgsSchema } from '../outputTypeSchemas/EssayLikeFindManyArgsSchema'
import { EssayCountOutputTypeArgsSchema } from '../outputTypeSchemas/EssayCountOutputTypeArgsSchema'

export const EssayIncludeSchema: z.ZodType<Prisma.EssayInclude> = z
	.object({
		author: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
		audit: z
			.union([z.boolean(), z.lazy(() => EssayAuditFindManyArgsSchema)])
			.optional(),
		EssayLike: z
			.union([z.boolean(), z.lazy(() => EssayLikeFindManyArgsSchema)])
			.optional(),
		_count: z
			.union([z.boolean(), z.lazy(() => EssayCountOutputTypeArgsSchema)])
			.optional(),
	})
	.strict()

export default EssayIncludeSchema
