import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayStatisticsWhereInputSchema } from './EssayStatisticsWhereInputSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const EssayStatisticsWhereUniqueInputSchema: z.ZodType<Prisma.EssayStatisticsWhereUniqueInput> =
	z
		.object({
			id: z.number().int(),
		})
		.and(
			z
				.object({
					id: z.number().int().optional(),
					AND: z
						.union([
							z.lazy(() => EssayStatisticsWhereInputSchema),
							z.lazy(() => EssayStatisticsWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => EssayStatisticsWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => EssayStatisticsWhereInputSchema),
							z.lazy(() => EssayStatisticsWhereInputSchema).array(),
						])
						.optional(),
					createdAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
					updatedAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
				})
				.strict(),
		)

export default EssayStatisticsWhereUniqueInputSchema
