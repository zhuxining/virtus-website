import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayLikeIncludeSchema } from '../inputTypeSchemas/EssayLikeIncludeSchema'
import { EssayLikeUpdateInputSchema } from '../inputTypeSchemas/EssayLikeUpdateInputSchema'
import { EssayLikeUncheckedUpdateInputSchema } from '../inputTypeSchemas/EssayLikeUncheckedUpdateInputSchema'
import { EssayLikeWhereUniqueInputSchema } from '../inputTypeSchemas/EssayLikeWhereUniqueInputSchema'
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

export const EssayLikeUpdateArgsSchema: z.ZodType<Prisma.EssayLikeUpdateArgs> =
	z
		.object({
			select: EssayLikeSelectSchema.optional(),
			include: z.lazy(() => EssayLikeIncludeSchema).optional(),
			data: z.union([
				EssayLikeUpdateInputSchema,
				EssayLikeUncheckedUpdateInputSchema,
			]),
			where: EssayLikeWhereUniqueInputSchema,
		})
		.strict()

export default EssayLikeUpdateArgsSchema
