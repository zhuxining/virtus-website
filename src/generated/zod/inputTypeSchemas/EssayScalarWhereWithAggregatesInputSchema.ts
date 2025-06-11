import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { EnumEssayStatusWithAggregatesFilterSchema } from './EnumEssayStatusWithAggregatesFilterSchema'
import { EssayStatusSchema } from './EssayStatusSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const EssayScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EssayScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => EssayScalarWhereWithAggregatesInputSchema),
					z.lazy(() => EssayScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => EssayScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => EssayScalarWhereWithAggregatesInputSchema),
					z.lazy(() => EssayScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z
				.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
				.optional(),
			title: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			banner: z
				.union([
					z.lazy(() => StringNullableWithAggregatesFilterSchema),
					z.string(),
				])
				.optional()
				.nullable(),
			content: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			authorId: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			status: z
				.union([
					z.lazy(() => EnumEssayStatusWithAggregatesFilterSchema),
					z.lazy(() => EssayStatusSchema),
				])
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

export default EssayScalarWhereWithAggregatesInputSchema
