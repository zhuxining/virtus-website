import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { EnumAuditStatusWithAggregatesFilterSchema } from './EnumAuditStatusWithAggregatesFilterSchema'
import { AuditStatusSchema } from './AuditStatusSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const EssayAuditScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EssayAuditScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => EssayAuditScalarWhereWithAggregatesInputSchema),
					z.lazy(() => EssayAuditScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => EssayAuditScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => EssayAuditScalarWhereWithAggregatesInputSchema),
					z.lazy(() => EssayAuditScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z
				.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
				.optional(),
			essayId: z
				.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
				.optional(),
			auditStatus: z
				.union([
					z.lazy(() => EnumAuditStatusWithAggregatesFilterSchema),
					z.lazy(() => AuditStatusSchema),
				])
				.optional(),
			auditMsg: z
				.union([
					z.lazy(() => StringNullableWithAggregatesFilterSchema),
					z.string(),
				])
				.optional()
				.nullable(),
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

export default EssayAuditScalarWhereWithAggregatesInputSchema
