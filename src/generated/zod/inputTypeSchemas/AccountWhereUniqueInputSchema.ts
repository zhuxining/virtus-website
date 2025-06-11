import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { AccountWhereInputSchema } from './AccountWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> =
	z
		.object({
			id: z.string(),
		})
		.and(
			z
				.object({
					id: z.string().optional(),
					AND: z
						.union([
							z.lazy(() => AccountWhereInputSchema),
							z.lazy(() => AccountWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => AccountWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => AccountWhereInputSchema),
							z.lazy(() => AccountWhereInputSchema).array(),
						])
						.optional(),
					accountId: z
						.union([z.lazy(() => StringFilterSchema), z.string()])
						.optional(),
					providerId: z
						.union([z.lazy(() => StringFilterSchema), z.string()])
						.optional(),
					userId: z
						.union([z.lazy(() => StringFilterSchema), z.string()])
						.optional(),
					accessToken: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					refreshToken: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					idToken: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					accessTokenExpiresAt: z
						.union([
							z.lazy(() => DateTimeNullableFilterSchema),
							z.coerce.date(),
						])
						.optional()
						.nullable(),
					refreshTokenExpiresAt: z
						.union([
							z.lazy(() => DateTimeNullableFilterSchema),
							z.coerce.date(),
						])
						.optional()
						.nullable(),
					scope: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					password: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					createdAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
					updatedAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
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

export default AccountWhereUniqueInputSchema
