import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { SessionFindManyArgsSchema } from '../outputTypeSchemas/SessionFindManyArgsSchema'
import { AccountFindManyArgsSchema } from '../outputTypeSchemas/AccountFindManyArgsSchema'
import { EssayFindManyArgsSchema } from '../outputTypeSchemas/EssayFindManyArgsSchema'
import { EssayAuditFindManyArgsSchema } from '../outputTypeSchemas/EssayAuditFindManyArgsSchema'
import { EssayLikeFindManyArgsSchema } from '../outputTypeSchemas/EssayLikeFindManyArgsSchema'
import { EventHistoryFindManyArgsSchema } from '../outputTypeSchemas/EventHistoryFindManyArgsSchema'
import { DonorInfoFindManyArgsSchema } from '../outputTypeSchemas/DonorInfoFindManyArgsSchema'
import { UserCountOutputTypeArgsSchema } from '../outputTypeSchemas/UserCountOutputTypeArgsSchema'

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z
	.object({
		sessions: z
			.union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)])
			.optional(),
		accounts: z
			.union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)])
			.optional(),
		essay: z
			.union([z.boolean(), z.lazy(() => EssayFindManyArgsSchema)])
			.optional(),
		essayAudit: z
			.union([z.boolean(), z.lazy(() => EssayAuditFindManyArgsSchema)])
			.optional(),
		essayLike: z
			.union([z.boolean(), z.lazy(() => EssayLikeFindManyArgsSchema)])
			.optional(),
		eventHistory: z
			.union([z.boolean(), z.lazy(() => EventHistoryFindManyArgsSchema)])
			.optional(),
		donorInfo: z
			.union([z.boolean(), z.lazy(() => DonorInfoFindManyArgsSchema)])
			.optional(),
		_count: z
			.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
			.optional(),
	})
	.strict()

export default UserIncludeSchema
