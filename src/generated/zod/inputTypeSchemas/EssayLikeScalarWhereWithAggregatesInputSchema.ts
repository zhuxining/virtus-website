import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const EssayLikeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EssayLikeScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => EssayLikeScalarWhereWithAggregatesInputSchema),
					z.lazy(() => EssayLikeScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => EssayLikeScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => EssayLikeScalarWhereWithAggregatesInputSchema),
					z.lazy(() => EssayLikeScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z
				.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
				.optional(),
			essayId: z
				.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
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

export default EssayLikeScalarWhereWithAggregatesInputSchema
