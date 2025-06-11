import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { EssayWhereInputSchema } from './EssayWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { EnumEssayStatusFilterSchema } from './EnumEssayStatusFilterSchema'
import { EssayStatusSchema } from './EssayStatusSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { EssayAuditListRelationFilterSchema } from './EssayAuditListRelationFilterSchema'
import { EssayLikeListRelationFilterSchema } from './EssayLikeListRelationFilterSchema'

export const EssayWhereUniqueInputSchema: z.ZodType<Prisma.EssayWhereUniqueInput> =
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
							z.lazy(() => EssayWhereInputSchema),
							z.lazy(() => EssayWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => EssayWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => EssayWhereInputSchema),
							z.lazy(() => EssayWhereInputSchema).array(),
						])
						.optional(),
					title: z
						.union([z.lazy(() => StringFilterSchema), z.string()])
						.optional(),
					banner: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					content: z
						.union([z.lazy(() => StringFilterSchema), z.string()])
						.optional(),
					authorId: z
						.union([z.lazy(() => StringFilterSchema), z.string()])
						.optional(),
					status: z
						.union([
							z.lazy(() => EnumEssayStatusFilterSchema),
							z.lazy(() => EssayStatusSchema),
						])
						.optional(),
					createdAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
					updatedAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
					author: z
						.union([
							z.lazy(() => UserScalarRelationFilterSchema),
							z.lazy(() => UserWhereInputSchema),
						])
						.optional(),
					audit: z.lazy(() => EssayAuditListRelationFilterSchema).optional(),
					EssayLike: z.lazy(() => EssayLikeListRelationFilterSchema).optional(),
				})
				.strict(),
		)

export default EssayWhereUniqueInputSchema
