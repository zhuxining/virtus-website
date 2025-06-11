import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { AnnouncementCreateManyInputSchema } from '../inputTypeSchemas/AnnouncementCreateManyInputSchema'

export const AnnouncementCreateManyArgsSchema: z.ZodType<Prisma.AnnouncementCreateManyArgs> =
	z
		.object({
			data: z.union([
				AnnouncementCreateManyInputSchema,
				AnnouncementCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default AnnouncementCreateManyArgsSchema
