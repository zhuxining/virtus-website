import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayLikeUpdateManyMutationInputSchema } from '../inputTypeSchemas/EssayLikeUpdateManyMutationInputSchema'
import { EssayLikeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EssayLikeUncheckedUpdateManyInputSchema'
import { EssayLikeWhereInputSchema } from '../inputTypeSchemas/EssayLikeWhereInputSchema'

export const EssayLikeUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.EssayLikeUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				EssayLikeUpdateManyMutationInputSchema,
				EssayLikeUncheckedUpdateManyInputSchema,
			]),
			where: EssayLikeWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default EssayLikeUpdateManyAndReturnArgsSchema
