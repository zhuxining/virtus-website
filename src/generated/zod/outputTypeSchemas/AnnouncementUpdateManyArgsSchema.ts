import { z } from 'zod'
import type { Prisma } from '@/generated/prisma'
import { AnnouncementUpdateManyMutationInputSchema } from '../inputTypeSchemas/AnnouncementUpdateManyMutationInputSchema'
import { AnnouncementUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AnnouncementUncheckedUpdateManyInputSchema'
import { AnnouncementWhereInputSchema } from '../inputTypeSchemas/AnnouncementWhereInputSchema'

export const AnnouncementUpdateManyArgsSchema: z.ZodType<Prisma.AnnouncementUpdateManyArgs> =
	z
		.object({
			data: z.union([
				AnnouncementUpdateManyMutationInputSchema,
				AnnouncementUncheckedUpdateManyInputSchema,
			]),
			where: AnnouncementWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default AnnouncementUpdateManyArgsSchema
