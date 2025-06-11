import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayCreateManyInputSchema } from '../inputTypeSchemas/EssayCreateManyInputSchema'

export const EssayCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EssayCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				EssayCreateManyInputSchema,
				EssayCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default EssayCreateManyAndReturnArgsSchema
