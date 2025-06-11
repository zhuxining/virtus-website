import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'

export const AnnouncementSelectSchema: z.ZodType<Prisma.AnnouncementSelect> = z
	.object({
		id: z.boolean().optional(),
		content: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
	})
	.strict()

export default AnnouncementSelectSchema
