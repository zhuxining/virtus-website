import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { DonorInfoWhereInputSchema } from './DonorInfoWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const DonorInfoWhereUniqueInputSchema: z.ZodType<Prisma.DonorInfoWhereUniqueInput> =
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
							z.lazy(() => DonorInfoWhereInputSchema),
							z.lazy(() => DonorInfoWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => DonorInfoWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => DonorInfoWhereInputSchema),
							z.lazy(() => DonorInfoWhereInputSchema).array(),
						])
						.optional(),
					name: z
						.union([z.lazy(() => StringFilterSchema), z.string()])
						.optional(),
					avatar: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					description: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					donationAmount: z
						.union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
						.optional()
						.nullable(),
					donationDate: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
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
					operator: z
						.union([
							z.lazy(() => UserScalarRelationFilterSchema),
							z.lazy(() => UserWhereInputSchema),
						])
						.optional(),
				})
				.strict(),
		)

export default DonorInfoWhereUniqueInputSchema
