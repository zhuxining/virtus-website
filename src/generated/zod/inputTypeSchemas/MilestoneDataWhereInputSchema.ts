import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const MilestoneDataWhereInputSchema: z.ZodType<Prisma.MilestoneDataWhereInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => MilestoneDataWhereInputSchema),
					z.lazy(() => MilestoneDataWhereInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => MilestoneDataWhereInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => MilestoneDataWhereInputSchema),
					z.lazy(() => MilestoneDataWhereInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
			startYear: z
				.union([z.lazy(() => IntFilterSchema), z.number()])
				.optional(),
			studentCount: z
				.union([z.lazy(() => IntFilterSchema), z.number()])
				.optional(),
			cityCount: z
				.union([z.lazy(() => IntFilterSchema), z.number()])
				.optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default MilestoneDataWhereInputSchema
