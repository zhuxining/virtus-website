import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { MilestoneDataWhereInputSchema } from './MilestoneDataWhereInputSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const MilestoneDataWhereUniqueInputSchema: z.ZodType<Prisma.MilestoneDataWhereUniqueInput> =
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
					startYear: z
						.union([z.lazy(() => IntFilterSchema), z.number().int()])
						.optional(),
					studentCount: z
						.union([z.lazy(() => IntFilterSchema), z.number().int()])
						.optional(),
					cityCount: z
						.union([z.lazy(() => IntFilterSchema), z.number().int()])
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

export default MilestoneDataWhereUniqueInputSchema
