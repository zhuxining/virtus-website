import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayLikeIncludeSchema } from '../inputTypeSchemas/EssayLikeIncludeSchema'
import { EssayLikeWhereInputSchema } from '../inputTypeSchemas/EssayLikeWhereInputSchema'
import { EssayLikeOrderByWithRelationInputSchema } from '../inputTypeSchemas/EssayLikeOrderByWithRelationInputSchema'
import { EssayLikeWhereUniqueInputSchema } from '../inputTypeSchemas/EssayLikeWhereUniqueInputSchema'
import { EssayLikeScalarFieldEnumSchema } from '../inputTypeSchemas/EssayLikeScalarFieldEnumSchema'
import { EssayArgsSchema } from '../outputTypeSchemas/EssayArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EssayLikeSelectSchema: z.ZodType<Prisma.EssayLikeSelect> = z
	.object({
		id: z.boolean().optional(),
		essayId: z.boolean().optional(),
		operatorId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		essay: z.union([z.boolean(), z.lazy(() => EssayArgsSchema)]).optional(),
		operator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict()

export const EssayLikeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EssayLikeFindFirstOrThrowArgs> =
	z
		.object({
			select: EssayLikeSelectSchema.optional(),
			include: z.lazy(() => EssayLikeIncludeSchema).optional(),
			where: EssayLikeWhereInputSchema.optional(),
			orderBy: z
				.union([
					EssayLikeOrderByWithRelationInputSchema.array(),
					EssayLikeOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: EssayLikeWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					EssayLikeScalarFieldEnumSchema,
					EssayLikeScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict()

export default EssayLikeFindFirstOrThrowArgsSchema
