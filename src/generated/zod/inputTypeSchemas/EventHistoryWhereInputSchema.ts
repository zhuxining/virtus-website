import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const EventHistoryWhereInputSchema: z.ZodType<Prisma.EventHistoryWhereInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => EventHistoryWhereInputSchema),
					z.lazy(() => EventHistoryWhereInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => EventHistoryWhereInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => EventHistoryWhereInputSchema),
					z.lazy(() => EventHistoryWhereInputSchema).array(),
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
			operator: z
				.union([
					z.lazy(() => UserScalarRelationFilterSchema),
					z.lazy(() => UserWhereInputSchema),
				])
				.optional(),
		})
		.strict()

export default EventHistoryWhereInputSchema
