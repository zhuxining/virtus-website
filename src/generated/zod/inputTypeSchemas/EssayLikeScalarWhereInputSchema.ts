import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const EssayLikeScalarWhereInputSchema: z.ZodType<Prisma.EssayLikeScalarWhereInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => EssayLikeScalarWhereInputSchema),
					z.lazy(() => EssayLikeScalarWhereInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => EssayLikeScalarWhereInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => EssayLikeScalarWhereInputSchema),
					z.lazy(() => EssayLikeScalarWhereInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
			essayId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
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

export default EssayLikeScalarWhereInputSchema
