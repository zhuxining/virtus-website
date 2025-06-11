import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'
import { AnnouncementWhereInputSchema } from './AnnouncementWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const AnnouncementWhereUniqueInputSchema: z.ZodType<Prisma.AnnouncementWhereUniqueInput> =
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
							z.lazy(() => AnnouncementWhereInputSchema),
							z.lazy(() => AnnouncementWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => AnnouncementWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => AnnouncementWhereInputSchema),
							z.lazy(() => AnnouncementWhereInputSchema).array(),
						])
						.optional(),
					content: z
						.union([z.lazy(() => StringFilterSchema), z.string()])
						.optional(),
					createdAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
					updatedAt: z
						.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
						.optional(),
				})
				.strict(),
		)

export default AnnouncementWhereUniqueInputSchema
