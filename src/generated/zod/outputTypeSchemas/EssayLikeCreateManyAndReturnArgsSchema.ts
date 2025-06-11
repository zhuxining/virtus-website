import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayLikeCreateManyInputSchema } from '../inputTypeSchemas/EssayLikeCreateManyInputSchema'

export const EssayLikeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EssayLikeCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				EssayLikeCreateManyInputSchema,
				EssayLikeCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default EssayLikeCreateManyAndReturnArgsSchema
