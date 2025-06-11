import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { EssayStatisticsUpdateManyMutationInputSchema } from '../inputTypeSchemas/EssayStatisticsUpdateManyMutationInputSchema'
import { EssayStatisticsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EssayStatisticsUncheckedUpdateManyInputSchema'
import { EssayStatisticsWhereInputSchema } from '../inputTypeSchemas/EssayStatisticsWhereInputSchema'

export const EssayStatisticsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.EssayStatisticsUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				EssayStatisticsUpdateManyMutationInputSchema,
				EssayStatisticsUncheckedUpdateManyInputSchema,
			]),
			where: EssayStatisticsWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default EssayStatisticsUpdateManyAndReturnArgsSchema
