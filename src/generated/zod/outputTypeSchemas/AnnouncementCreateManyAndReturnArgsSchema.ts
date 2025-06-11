import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { AnnouncementCreateManyInputSchema } from '../inputTypeSchemas/AnnouncementCreateManyInputSchema'

export const AnnouncementCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AnnouncementCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				AnnouncementCreateManyInputSchema,
				AnnouncementCreateManyInputSchema.array(),
			]),
		})
		.strict()

export default AnnouncementCreateManyAndReturnArgsSchema
