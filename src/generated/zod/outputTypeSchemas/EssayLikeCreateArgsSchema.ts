import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayLikeIncludeSchema } from '../inputTypeSchemas/EssayLikeIncludeSchema'
import { EssayLikeCreateInputSchema } from '../inputTypeSchemas/EssayLikeCreateInputSchema'
import { EssayLikeUncheckedCreateInputSchema } from '../inputTypeSchemas/EssayLikeUncheckedCreateInputSchema'
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

export const EssayLikeCreateArgsSchema: z.ZodType<Prisma.EssayLikeCreateArgs> =
	z
		.object({
			select: EssayLikeSelectSchema.optional(),
			include: z.lazy(() => EssayLikeIncludeSchema).optional(),
			data: z.union([
				EssayLikeCreateInputSchema,
				EssayLikeUncheckedCreateInputSchema,
			]),
		})
		.strict()

export default EssayLikeCreateArgsSchema
