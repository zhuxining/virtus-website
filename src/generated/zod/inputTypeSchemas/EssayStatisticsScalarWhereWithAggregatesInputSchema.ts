import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const EssayStatisticsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EssayStatisticsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => EssayStatisticsScalarWhereWithAggregatesInputSchema),
					z
						.lazy(() => EssayStatisticsScalarWhereWithAggregatesInputSchema)
						.array(),
				])
				.optional(),
			OR: z
				.lazy(() => EssayStatisticsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => EssayStatisticsScalarWhereWithAggregatesInputSchema),
					z
						.lazy(() => EssayStatisticsScalarWhereWithAggregatesInputSchema)
						.array(),
				])
				.optional(),
			id: z
				.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
				.optional(),
			createdAt: z
				.union([
					z.lazy(() => DateTimeWithAggregatesFilterSchema),
					z.coerce.date(),
				])
				.optional(),
			updatedAt: z
				.union([
					z.lazy(() => DateTimeWithAggregatesFilterSchema),
					z.coerce.date(),
				])
				.optional(),
		})
		.strict()

export default EssayStatisticsScalarWhereWithAggregatesInputSchema
