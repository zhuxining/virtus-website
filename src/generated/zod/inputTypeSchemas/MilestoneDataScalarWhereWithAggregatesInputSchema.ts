import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const MilestoneDataScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MilestoneDataScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => MilestoneDataScalarWhereWithAggregatesInputSchema),
					z
						.lazy(() => MilestoneDataScalarWhereWithAggregatesInputSchema)
						.array(),
				])
				.optional(),
			OR: z
				.lazy(() => MilestoneDataScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => MilestoneDataScalarWhereWithAggregatesInputSchema),
					z
						.lazy(() => MilestoneDataScalarWhereWithAggregatesInputSchema)
						.array(),
				])
				.optional(),
			id: z
				.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
				.optional(),
			startYear: z
				.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
				.optional(),
			studentCount: z
				.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
				.optional(),
			cityCount: z
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

export default MilestoneDataScalarWhereWithAggregatesInputSchema
