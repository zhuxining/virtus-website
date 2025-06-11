import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntFilterSchema } from './IntFilterSchema'
import { EnumAuditStatusFilterSchema } from './EnumAuditStatusFilterSchema'
import { AuditStatusSchema } from './AuditStatusSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EssayScalarRelationFilterSchema } from './EssayScalarRelationFilterSchema'
import { EssayWhereInputSchema } from './EssayWhereInputSchema'
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const EssayAuditWhereInputSchema: z.ZodType<Prisma.EssayAuditWhereInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => EssayAuditWhereInputSchema),
					z.lazy(() => EssayAuditWhereInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => EssayAuditWhereInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => EssayAuditWhereInputSchema),
					z.lazy(() => EssayAuditWhereInputSchema).array(),
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
			essay: z
				.union([
					z.lazy(() => EssayScalarRelationFilterSchema),
					z.lazy(() => EssayWhereInputSchema),
				])
				.optional(),
			operator: z
				.union([
					z.lazy(() => UserScalarRelationFilterSchema),
					z.lazy(() => UserWhereInputSchema),
				])
				.optional(),
		})
		.strict()

export default EssayAuditWhereInputSchema
