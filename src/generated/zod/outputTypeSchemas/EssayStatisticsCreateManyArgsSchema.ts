import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayStatisticsCreateManyInputSchema } from '../inputTypeSchemas/EssayStatisticsCreateManyInputSchema'

export const EssayStatisticsCreateManyArgsSchema: z.ZodType<Prisma.EssayStatisticsCreateManyArgs> =
	z
		.object({
			data: z.union([
				EssayStatisticsCreateManyInputSchema,
				EssayStatisticsCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default EssayStatisticsCreateManyArgsSchema
