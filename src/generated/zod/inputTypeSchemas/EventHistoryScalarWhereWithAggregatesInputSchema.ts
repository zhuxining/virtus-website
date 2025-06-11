import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const EventHistoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventHistoryScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => EventHistoryScalarWhereWithAggregatesInputSchema),
					z
						.lazy(() => EventHistoryScalarWhereWithAggregatesInputSchema)
						.array(),
				])
				.optional(),
			OR: z
				.lazy(() => EventHistoryScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => EventHistoryScalarWhereWithAggregatesInputSchema),
					z
						.lazy(() => EventHistoryScalarWhereWithAggregatesInputSchema)
						.array(),
				])
				.optional(),
			id: z
				.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
				.optional(),
			title: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			description: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			content: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			banner: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			operatorId: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
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

export default EventHistoryScalarWhereWithAggregatesInputSchema
