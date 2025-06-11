import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayIncludeSchema } from '../inputTypeSchemas/EssayIncludeSchema'
import { EssayWhereUniqueInputSchema } from '../inputTypeSchemas/EssayWhereUniqueInputSchema'
import { EssayCreateInputSchema } from '../inputTypeSchemas/EssayCreateInputSchema'
import { EssayUncheckedCreateInputSchema } from '../inputTypeSchemas/EssayUncheckedCreateInputSchema'
import { EssayUpdateInputSchema } from '../inputTypeSchemas/EssayUpdateInputSchema'
import { EssayUncheckedUpdateInputSchema } from '../inputTypeSchemas/EssayUncheckedUpdateInputSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { EssayAuditFindManyArgsSchema } from '../outputTypeSchemas/EssayAuditFindManyArgsSchema'
import { EssayLikeFindManyArgsSchema } from '../outputTypeSchemas/EssayLikeFindManyArgsSchema'
import { EssayCountOutputTypeArgsSchema } from '../outputTypeSchemas/EssayCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const EssayUpsertArgsSchema: z.ZodType<Prisma.EssayUpsertArgs> = z
	.object({
		select: EssaySelectSchema.optional(),
		include: z.lazy(() => EssayIncludeSchema).optional(),
		where: EssayWhereUniqueInputSchema,
		create: z.union([EssayCreateInputSchema, EssayUncheckedCreateInputSchema]),
		update: z.union([EssayUpdateInputSchema, EssayUncheckedUpdateInputSchema]),
	})
	.strict()

export default EssayUpsertArgsSchema
