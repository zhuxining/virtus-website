import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const EventHistoryScalarWhereInputSchema: z.ZodType<Prisma.EventHistoryScalarWhereInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => EventHistoryScalarWhereInputSchema),
					z.lazy(() => EventHistoryScalarWhereInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => EventHistoryScalarWhereInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => EventHistoryScalarWhereInputSchema),
					z.lazy(() => EventHistoryScalarWhereInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
			title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
			description: z
				.union([z.lazy(() => StringFilterSchema), z.string()])
				.optional(),
			content: z
				.union([z.lazy(() => StringFilterSchema), z.string()])
				.optional(),
			banner: z
				.union([z.lazy(() => StringFilterSchema), z.string()])
				.optional(),
			operatorId: z
				.union([z.lazy(() => StringFilterSchema), z.string()])
				.optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default EventHistoryScalarWhereInputSchema
