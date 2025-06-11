import { z } from 'zod'
import type { Prisma } from '*/generated/prisma'
import { AnnouncementWhereInputSchema } from '../inputTypeSchemas/AnnouncementWhereInputSchema'

export const AnnouncementDeleteManyArgsSchema: z.ZodType<Prisma.AnnouncementDeleteManyArgs> =
	z
		.object({
			where: AnnouncementWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default AnnouncementDeleteManyArgsSchema
