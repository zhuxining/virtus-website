import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayIncludeSchema } from '../inputTypeSchemas/EssayIncludeSchema'
import { EssayWhereInputSchema } from '../inputTypeSchemas/EssayWhereInputSchema'
import { EssayOrderByWithRelationInputSchema } from '../inputTypeSchemas/EssayOrderByWithRelationInputSchema'
import { EssayWhereUniqueInputSchema } from '../inputTypeSchemas/EssayWhereUniqueInputSchema'
import { EssayScalarFieldEnumSchema } from '../inputTypeSchemas/EssayScalarFieldEnumSchema'
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

export const EssayFindManyArgsSchema: z.ZodType<Prisma.EssayFindManyArgs> = z
	.object({
		select: EssaySelectSchema.optional(),
		include: z.lazy(() => EssayIncludeSchema).optional(),
		where: EssayWhereInputSchema.optional(),
		orderBy: z
			.union([
				EssayOrderByWithRelationInputSchema.array(),
				EssayOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: EssayWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([EssayScalarFieldEnumSchema, EssayScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict()

export default EssayFindManyArgsSchema
