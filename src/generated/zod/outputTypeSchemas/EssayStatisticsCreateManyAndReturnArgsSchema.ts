import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { EssayStatisticsCreateManyInputSchema } from '../inputTypeSchemas/EssayStatisticsCreateManyInputSchema'

export const EssayStatisticsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EssayStatisticsCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				EssayStatisticsCreateManyInputSchema,
				EssayStatisticsCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default EssayStatisticsCreateManyAndReturnArgsSchema
