import type { Prisma } from '@/generated/prisma'

import { z } from 'zod'

export const AnnouncementCreateInputSchema: z.ZodType<Prisma.AnnouncementCreateInput> =
	z
		.object({
			content: z.string(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default AnnouncementCreateInputSchema
