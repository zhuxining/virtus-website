import type { Prisma } from '*/generated/prisma'

import { z } from 'zod'

export const AnnouncementCreateManyInputSchema: z.ZodType<Prisma.AnnouncementCreateManyInput> =
	z
		.object({
			id: z.number().int().optional(),
			content: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default AnnouncementCreateManyInputSchema
