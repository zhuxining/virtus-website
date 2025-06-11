import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { EssayAuditFindManyArgsSchema } from '../outputTypeSchemas/EssayAuditFindManyArgsSchema'
import { EssayLikeFindManyArgsSchema } from '../outputTypeSchemas/EssayLikeFindManyArgsSchema'
import { EssayCountOutputTypeArgsSchema } from '../outputTypeSchemas/EssayCountOutputTypeArgsSchema'

export const EssaySelectSchema: z.ZodType<Prisma.EssaySelect> = z
	.object({
		id: z.boolean().optional(),
		title: z.boolean().optional(),
		banner: z.boolean().optional(),
		content: z.boolean().optional(),
		authorId: z.boolean().optional(),
		status: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
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

export default EssaySelectSchema
