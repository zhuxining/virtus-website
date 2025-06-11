import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { SessionWhereInputSchema } from './SessionWhereInputSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> =
	z
		.union([
			z.object({
				id: z.string(),
				token: z.string(),
			}),
			z.object({
				id: z.string(),
			}),
			z.object({
				token: z.string(),
			}),
		])
		.and(
			z
				.object({
					id: z.string().optional(),
					token: z.string().optional(),
					AND: z
						.union([
							z.lazy(() => SessionWhereInputSchema),
							z.lazy(() => SessionWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => SessionWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => SessionWhereInputSchema),
							z.lazy(() => SessionWhereInputSchema).array(),
						])
						.optional(),
					expiresAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
					createdAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
					updatedAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
					ipAddress: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					userAgent: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					userId: z
						.union([z.lazy(() => StringFilterSchema), z.string()])
						.optional(),
					user: z
						.union([
							z.lazy(() => UserScalarRelationFilterSchema),
							z.lazy(() => UserWhereInputSchema),
						])
						.optional(),
				})
				.strict(),
		)

export default SessionWhereUniqueInputSchema
