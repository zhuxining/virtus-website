import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const AnnouncementWhereInputSchema: z.ZodType<Prisma.AnnouncementWhereInput> =
	z
		.object({
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
			id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
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
		.strict()

export default AnnouncementWhereInputSchema
