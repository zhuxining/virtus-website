import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayCreateManyInputSchema } from '../inputTypeSchemas/EssayCreateManyInputSchema'

export const EssayCreateManyArgsSchema: z.ZodType<Prisma.EssayCreateManyArgs> =
	z
		.object({
			data: z.union([
				EssayCreateManyInputSchema,
				EssayCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default EssayCreateManyArgsSchema
