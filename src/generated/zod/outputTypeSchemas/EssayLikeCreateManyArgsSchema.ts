import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayLikeCreateManyInputSchema } from '../inputTypeSchemas/EssayLikeCreateManyInputSchema'

export const EssayLikeCreateManyArgsSchema: z.ZodType<Prisma.EssayLikeCreateManyArgs> =
	z
		.object({
			data: z.union([
				EssayLikeCreateManyInputSchema,
				EssayLikeCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default EssayLikeCreateManyArgsSchema
