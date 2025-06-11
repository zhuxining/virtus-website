import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { IntFilterSchema } from './IntFilterSchema'
import { EnumAuditStatusFilterSchema } from './EnumAuditStatusFilterSchema'
import { AuditStatusSchema } from './AuditStatusSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const EssayAuditScalarWhereInputSchema: z.ZodType<Prisma.EssayAuditScalarWhereInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => EssayAuditScalarWhereInputSchema),
					z.lazy(() => EssayAuditScalarWhereInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => EssayAuditScalarWhereInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => EssayAuditScalarWhereInputSchema),
					z.lazy(() => EssayAuditScalarWhereInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
			essayId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
			auditStatus: z
				.union([
					z.lazy(() => EnumAuditStatusFilterSchema),
					z.lazy(() => AuditStatusSchema),
				])
				.optional(),
			auditMsg: z
				.union([z.lazy(() => StringNullableFilterSchema), z.string()])
				.optional()
				.nullable(),
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

export default EssayAuditScalarWhereInputSchema
