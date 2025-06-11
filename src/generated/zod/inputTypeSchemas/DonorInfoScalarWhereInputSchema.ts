import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const DonorInfoScalarWhereInputSchema: z.ZodType<Prisma.DonorInfoScalarWhereInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => DonorInfoScalarWhereInputSchema),
					z.lazy(() => DonorInfoScalarWhereInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => DonorInfoScalarWhereInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => DonorInfoScalarWhereInputSchema),
					z.lazy(() => DonorInfoScalarWhereInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
			name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
			avatar: z
				.union([z.lazy(() => StringNullableFilterSchema), z.string()])
				.optional()
				.nullable(),
			description: z
				.union([z.lazy(() => StringNullableFilterSchema), z.string()])
				.optional()
				.nullable(),
			donationAmount: z
				.union([z.lazy(() => IntNullableFilterSchema), z.number()])
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
		})
		.strict()

export default DonorInfoScalarWhereInputSchema
