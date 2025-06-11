import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { EssayLikeWhereInputSchema } from './EssayLikeWhereInputSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EssayScalarRelationFilterSchema } from './EssayScalarRelationFilterSchema'
import { EssayWhereInputSchema } from './EssayWhereInputSchema'
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const EssayLikeWhereUniqueInputSchema: z.ZodType<Prisma.EssayLikeWhereUniqueInput> =
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
							z.lazy(() => EssayLikeWhereInputSchema),
							z.lazy(() => EssayLikeWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => EssayLikeWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => EssayLikeWhereInputSchema),
							z.lazy(() => EssayLikeWhereInputSchema).array(),
						])
						.optional(),
					essayId: z
						.union([z.lazy(() => IntFilterSchema), z.number().int()])
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
				.strict(),
		)

export default EssayLikeWhereUniqueInputSchema
