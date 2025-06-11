import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { EnumRoleWithAggregatesFilterSchema } from './EnumRoleWithAggregatesFilterSchema'
import { RoleSchema } from './RoleSchema'

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => UserScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			name: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			email: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			emailVerified: z
				.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
				.optional(),
			image: z
				.union([
					z.lazy(() => StringNullableWithAggregatesFilterSchema),
					z.string(),
				])
				.optional()
				.nullable(),
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
			role: z
				.union([
					z.lazy(() => EnumRoleWithAggregatesFilterSchema),
					z.lazy(() => RoleSchema),
				])
				.optional(),
		})
		.strict()

export default UserScalarWhereWithAggregatesInputSchema
