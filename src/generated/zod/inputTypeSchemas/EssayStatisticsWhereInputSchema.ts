import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const EssayStatisticsWhereInputSchema: z.ZodType<Prisma.EssayStatisticsWhereInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => EssayStatisticsWhereInputSchema),
					z.lazy(() => EssayStatisticsWhereInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => EssayStatisticsWhereInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => EssayStatisticsWhereInputSchema),
					z.lazy(() => EssayStatisticsWhereInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default EssayStatisticsWhereInputSchema
